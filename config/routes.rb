Rails.application.routes.draw do
  ## アカウント登録
  get 'sign_up', to: 'registrations#new'
  post 'sign_up', to: 'registrations#create'
  get 'sign_up/tel', to: 'registrations#tel'
  post 'sign_up/tel', to: 'registrations#tel_create'

  get 'books/index'
  resources :cars, only: %i(new index)
  # get 'cars/new_price'
  get 'cars/confrim'
  get 'cars/complete'

  namespace :api do
    resources :books, only: %i(show)
    resources :cars, only: %i(index create)
    resources :makers, only: %i(index)
    resources :car_models, only: %i(show)
  end

  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
