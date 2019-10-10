<template lang="pug">
  .row
    .col-lg-5.q-pa-md
      .text-h6.q-pb-md Список задач
      div.flex.justify-center(v-if="backendLoading")
        q-spinner-bars(
          size="md"
          color="brown-6")
      div(v-else-if="backendError")
        p Error
      div(v-else)
        todo-search

        q-table(
          ref="table"
          :loading="backendLoading"
          :columns="todoList.table.columns"
          :data="todoList.table.data"
          row-key="id"
          :pagination.sync="todoList.table.pagination"
          :rows-per-page-options="[10, 25, 100]"
          :filter="todoList.filter"
          binary-state-sort
          @request="onRequest"
          separator="cell")
          template(v-slot:body-cell-actions="props")
            q-td(key="actions")
              actions-cell(:actions="props.row.actions", :id="props.row.id" @changed="refresh")

    q-separator(vertical)

    .col-lg-5.q-pa-md
      TodoItemForm(@created="refresh")

    router-view(name="edit")
</template>

<script>
  import ActionsCell from 'app/components/todo/ActionsCell'
  import TodoItem from 'app/components/todo/TodoItem'
  import TodoItemForm from 'app/components/todo/TodoItemForm'
  import TodoSearch from 'app/components/todo/TodoSearch'
  import loadingMixin from '../../mixins'


  export default {
    data () {
      return {
        todoList: {
          table: {
            columns: [],
            data: [],
            pagination: {}
          }
        }
      }
    },
    computed: {
      filter () {
        return this.$store.state.filter
      }
    },
    watch: {
      filter () {
        this.refresh()
      }
    },
    created () {
      this.onRequest({
        pagination: this.todoList.table.pagination,
        filter: this.filter
      })
    },
    methods: {
      onRequest (props) {
        let { page, rowsPerPage, sortBy, descending } = props.pagination
        this.fetchItems(page, rowsPerPage, sortBy, descending, this.filter)
      },
      refresh () {
        this.$refs.table.requestServerInteraction()
      },
      fetchItems (page, rowsPerPage, sort, desc, filter, scopes) {
        this.$backend.items.index({ page, rowsPerPage, sort, desc, filter, scopes })
          .then(({ data }) => this.todoList = data)
          .catch(() => this.backendError = true)
          .finally(() => this.backendLoading = false)
      }
    },
    components: {
      ActionsCell,
      TodoItem,
      TodoItemForm,
      TodoSearch
    },
    mixins: [loadingMixin],
    subscriptions: {
      ItemsChannel: {
        received: function(data) {
          let newTodo = data.todo
          this.todoList.table.data.push(newTodo)
        }
      }
    }
  }
</script>

<style>
  .list-item {
    display: block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
