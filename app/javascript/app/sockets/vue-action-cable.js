module.exports = {
  install: function(Vue, cable) {
    Vue.mixin({
      destroyed: function() {
        if (!this._subscriptions) return
        Object.keys(this._subscriptions).map((key) => {
          this._subscriptions[key].unsubscribe()
        })
      },
      mounted: function() {
        let $vm = this
        // Прочитали подписки опцию из Vue компонента
        let subscriptionsOptions = this.$options.subscriptions
        if (!subscriptionsOptions) return

        // Создали глобальныую переменную для хранения подписок
        this._subscriptions = {}

        // Если опция - функция, вызвали ее
        if (typeof subscriptionsOptions == 'function') subscriptionsOptions = subscriptionsOptions()

        // Цикл по массиву значений (каналов)
        Object.keys(subscriptionsOptions).map(function(channelName) {
          // Получаем содержимое канала ('received')
          let subOptions = subscriptionsOptions[channelName]
          if (!subOptions.params) subOptions.params = {}


          let paramsFn = subOptions.params
          if (typeof paramsFn !== 'function') {
            paramsFn = function() { return subOptions.params }
          }

          let noop = function() {}
          if (!subOptions.received) subOptions.received = noop
          if (!subOptions.connected) subOptions.connected = noop
          if (!subOptions.disconnected) subOptions.disconnected = noop

          $vm.$watch(paramsFn, function(params) {
            if ($vm._subscriptions[channelName]) $vm._subscriptions[channelName].unsubscribe()
            params.channel = channelName

            $vm[channelName] = $vm._subscriptions[channelName] = cable.subscriptions.create(params, {
              received: subOptions.received.bind($vm),
              connected: subOptions.connected.bind($vm),
              disconnected: subOptions.disconnected.bind($vm)
            })
          }, {
            immediate: true
          })
        })
      }
    })
  }
}
