class QueryBuilder
  attr_reader :params, :initial_scope, :filter, :sort, :performed_scope, :resources, :pagination

  def initialize(params, initial_scope)
    @params, @initial_scope = params, initial_scope
    @performed_scope = @initial_scope
    perform
  end

  private

  def perform
    perform_scope
    perform_filter
    # perform_sort
    perform_pagination
  end

  def perform_scope
    @scopes = @params[:scopes]
    return unless @scope.present?

    @scopes = @scopes.split(',')
    @scopes.each.with_index(1) do |scope, index|
      if @initial_scope.respond_to?(scope)
        @performed_scope = @initial_scope.klass.none if index == 1
        @performed_scope = @performed_scope.or(@initial_scope.public_send(scope))
      end
    end
  end

  def perform_filter
    @search = @params[:filter]
    return if @search.blank?

    if @performed_scope.klass.respond_to?(:search)
      @performed_scope = @performed_scope.merge(@performed_scope.klass.search(@search))
    end
  end

  def perform_sort
    @sort = @params[:sort]
    return if @sort.blank?

    sort_params = {}
    split_params = @params[:sort].split(',')
    split_params.each do |sort|
      sort = sort.split('|')
      next unless @scope.klass.column_names.include?(sort.first) && %w[asc desc].include?(sort.last)

      sort_params[sort.first] = sort.last
    end

    sort_params = {}
    sort_params[@sort] = @params[:desc] == 'true' ? 'desc' : 'asc'

    @scope = @scope.reorder(sort_params)
  end

  def perform_pagination
    total = @performed_scope.count

    page = (@params[:page] || 1).to_i
    per_page = (@params[:per_page] || 10).to_i
    @resources = @performed_scope.page(page).per(per_page)

    total_pages = @resources.total_pages
    from = @resources.offset_value + 1
    to = @resources.offset_value + @resources.count

    @pagination = OpenStruct.new(rowsNumber: total, page: page, rowsPerPage: per_page,
                                 total_pages: total_pages, from: from, to: to)
  end
end
