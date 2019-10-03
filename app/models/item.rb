class Item < ApplicationRecord
  include PgSearch::Model

  pg_search_scope :search_by, against: %i[id title], using: {
    tsearch: { prefix: true }
  }

  def self.search(query)
    return [] unless query
    search_by("#{query}")
  end
end