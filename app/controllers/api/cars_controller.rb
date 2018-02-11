class Api::CarsController < ApplicationController
  def index
    @cars = Car.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  
end