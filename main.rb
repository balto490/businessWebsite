require 'sinatra'

get '/' do 
	erb :home
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

post '/cart' do
  @data = params["data_value"]
  erb :cart
end

get '/cart' do 
	@data = params["data_value"]
	erb :cart

end

post '/contact' do
# @title = "Contact"
mail = SendGrid::Mail.new(
		SendGrid::Email.new(email:"balt490@gmail.com"),
		"Thanks for contacting the company",
		SendGrid::Email.new(email: params[:email]),
		SendGrid::Content.new(type: 'text/plain', value: "Thanks for letting us know how you feel.

			Our team will be contacting you shortly.

			#{params[:message]}"

		)
	)
	sg = SendGrid::API.new( api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
end

