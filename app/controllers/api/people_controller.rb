class Api::PeopleController < ApplicationController

  def index
    render json: Person.all
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

    def person_params
      params.require(:person).permit(:first_name, :last_name, :address, :age, :hobby, :picture)
    end

end
