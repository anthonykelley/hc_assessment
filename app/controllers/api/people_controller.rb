class Api::PeopleController < ApplicationController
  before_action :set_person, only: [:show, :update, :destroy]

  def index
    render json: Person.order(updated_at: :desc)
  end

  def show
    render json: @person
  end

  def create
    person = Person.new(person_params)
    if person.save
      render json: person
    else
      render json: { errors: user.errors.full_messages.join(',')  }, status: 422
    end
  end

  def update
    if @person.update(person_params)
      render json: @person
    else
      render json: { errors: @timecard.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @person.destroy
  end

  private

    def set_person
      @person = Person.find(params[:id])
    end

    def person_params
      params.require(:person).permit(:first_name, :last_name, :address, :age, :hobby, :picture)
    end

end
