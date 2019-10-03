class ItemsController < ApplicationController
  layout false

  def index
    scope = Item.all
    @manager = ::QueryBuilder.new(params, scope)
  end

  def create
    Item.create(permitted_params)
  end

  def show
    @item = Item.find(params[:id])
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
