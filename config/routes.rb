Rails.application.routes.draw do
  root 'application#index'
  resources :items, only: %i[index create show destroy]

  get '/*slug', to: 'application#index'
end
