class RegistrationsController < ApplicationController
  def new
  end

  def create
    @user = User.new(create_params)
    if @user.save
      @result = 'OK'
    else
      @result = 'NG'
    end
  end

  def tel_new
  end

  def tel_create
  end

  private
    def create_params
      params.require(:user).permit(:mail_address, :password)
    end
end
