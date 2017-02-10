
run: clean stylus
	npm start

build: copy stylus npm-install

npm-install:
	npm install

stylus:
	stylus -u nib public/stylesheets/style.styl -o public/stylesheets/style.css

clean:
	-rm -f public/js/include.js
	-rm -f public/stylesheets/syle.css

build-npm:
	browserify --debug -t jadeify views/ui.js -o public/js/include.js

copy:
	-cp node_modules/bootstrap/dist/css/bootstrap.css public/stylesheets/bootstrap.css
	-cp node_modules/bootstrap/fonts/* public/fonts/
