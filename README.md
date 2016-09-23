
**Run Browserify**

Either enter the following command

```shell
browserify src/app.js -o bundle.js -s app
```

or use the `browserify` script from our `package.json` with

```shell
npm run browserify

```

**Start http-server**

Either enter the following command

```shell
node node_modules/http-server/bin/http-server -o
```

or use the `listen` script from our `package.json` with

```
npm run listen
```

By default http-server listens on port `8080`.
If this port is taken, use '-p ####' to specify a free port, where `####` is the available port.

**Shortcut for running all steps in a batch**

```
npm run all
```

//use thiese cmd to enable those
npm install jquery --save
npm install bootstrap --save
//SET UP TYPESCRIPT ON WINDOW
npm install -g typescript
//Use browser sync code cmd for testing
browser-sync start --server --files "**/*"
