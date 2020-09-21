install:
	npm install

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

lint:
	npx eslint
