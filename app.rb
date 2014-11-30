require 'sinatra'
require "httparty"



get '/' do
  erb :index
end


post '/' do
  image_url = params[:image_url]
  # save the image_url data to a file tmp file using 

File.open("./public/images/my_file.jpg", "wb") do |f| 
  f.write HTTParty.get(image_url).parsed_response
  redirect '/'
end

 end