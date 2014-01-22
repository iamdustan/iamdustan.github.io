require 'coffee-script'

module Jekyll
  class CoffeescriptConverter < Converter
    safe true

    def matches(ext)
      ext =~ /\.coffee/i
    end

    def output_ext(ext)
      ".js"
    end

    def convert(content)
      puts "Converting coffeescript"
      begin
        CoffeeScript.compile content
      rescue => e
        puts "CoffeeScript error: #{ e.message }"
      end
    end
  end
end
