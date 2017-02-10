
sync: run
	browser-sync start -p localhost:3334 --files 'views'

run: clean build
	npm start

build: npm-install

npm-install:
	npm install

client: copy
	stylus -u nib views/styles/style.styl -o public/css/style.css
	browserify --debug app/iancullinane.com.js -t babelify -t pugify -o public/js/include.js

watch:
	stylus -u nib -w views/styles/style.styl -o public/css/style.css &
	watchify --debug app/iancullinane.com.js -t babelify -t pugify -o public/js/include.js -v -v --poll=1000 &

clean:
	-rm -f public/js/include.js
	-rm -f public/stylesheets/syle.css

build-npm:
	browserify --debug -t jadeify views/ui.js -o public/js/include.js

copy:
	-cp node_modules/bootstrap/dist/css/bootstrap.css public/stylesheets/bootstrap.css
	-cp node_modules/bootstrap/fonts/* public/fonts/

.PHONY: run build





# run:
# 	npm start
#
# # browser-sync start --proxy "localhost:8888" --serveStatic 'public' --files 'public'
# sync: run
# 	browser-sync start -p localhost:8888 --files 'views'
#
# client: copy
# 	stylus -u nib views/styles/style.styl -o public/css/style.css
# 	browserify --debug app/sweetbasil.rocks.js -t babelify -t pugify -o public/js/include.js
#
# watch:
# 	stylus -u nib -w views/styles/style.styl -o public/css/style.css &
# 	watchify --debug app/sweetbasil.rocks.js -t babelify -t pugify -o public/js/include.js -v -v --poll=1000 &
#
# copy:
# 	-cp node_modules/bootstrap/dist/css/bootstrap.min.css public/css/bootstrap.min.css
