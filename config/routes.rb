Rails.application.routes.draw do
  root 'application#index'
  resources :items, only: %i[index create destroy]
end
