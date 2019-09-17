json.array! @list do |item|
  json.extract! item, :id, :title, :status
end
