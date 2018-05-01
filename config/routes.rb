Rails.application.routes.draw do
  namespace :api do
    resources :people
    get 'age_bucket', to: 'people#age_bucket'
    get 'zip_count', to: 'people#zip_count'
    get 'person_count', to: 'people#person_count'
  end
end
