require 'sinatra'

get '/' do 
	erb :home
end

get '/cart' do
	erb :cart
end

get '/shop' do
	erb :shop
end

get '/contact' do
	erb :contact
end

get '/checkout' do
	erb :checkout
end

get '/blog' do
	erb :blog
end

post '/' do
@title = "Home"
end

post '/checkout' do
@title = "Checkout"	
end

post '/shop' do
@title = "Shop"
end


post '/contact' do
@title = "Contact"
end
