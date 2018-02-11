Rails.application.routes.draw do
  get 'books/index'
  resources :cars, only: %i(new index)
  get 'cars/new_price'
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
