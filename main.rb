require 'sinatra'

get '/' do 
	
	erb :shop

end


post '/cart' do
  @data = params["data_value"]
  erb :cart
end

get '/cart' do 
	@data = params["data_value"]
	erb :cart

end