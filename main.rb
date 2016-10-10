require 'sinatra'

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