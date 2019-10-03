class ItemPresenter < BasePresenter
  attr_reader :resource
  delegate :id, :title, to: :resource

  COLUMNS = [
    { name: :id, field: :id, label: 'ID', sortable: true },
    { name: :title, field: :title, label: 'Название', sortable: true },
    { name: :actions, field: :actions, label: 'Меню' }
  ]

  def columns
    COLUMNS
  end

  def columns_keys
    columns.map { |column| column[:name] }
  end

  def actions
    [
      { name: :edit, label: 'Редактировать' },
      { name: :destroy, label: 'Удалить' }
    ]
  end
end
