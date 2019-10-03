json.table do
  json.columns ItemPresenter::COLUMNS
  presenter =  ItemPresenter.new

  json.data @manager.resources do |resource|
    json.extract! presenter.present(resource), *presenter.columns_keys
  end

  json.set! :pagination do
    json.extract! @manager.pagination, :page, :rowsPerPage, :rowsNumber
  end
end
