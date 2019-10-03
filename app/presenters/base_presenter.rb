class BasePresenter
  def initialize; end

  def present(resource)
    @resource = resource
    self
  end
end
