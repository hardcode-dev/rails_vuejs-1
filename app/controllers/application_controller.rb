class ApplicationController < ActionController::Base
  def index; end

  def list
    @list = [
      {
        id: 1,
        title: 'My first task'
      },
      {
        id: 2,
        title: 'My second task'
      }
    ]
  end
end
