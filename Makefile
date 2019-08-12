# Makefile

install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
start_even:
	npx babel-node src/bin/brain-even.js
start_calc:
	npx babel-node src/bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint
