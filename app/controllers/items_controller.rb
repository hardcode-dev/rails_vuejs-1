class ItemsController < ApplicationController
  def index
    @list = Item.all
    render :index, layout: false
  end

  def create
    Item.create(permitted_params)
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
  end

  private

  def permitted_params
    params.permit(:title)
  end
end
