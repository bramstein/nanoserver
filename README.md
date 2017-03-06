# Nanoserver

Sometimes you just need a tiny web server.

## Usage

Install with npm:

```
$ npm install nanoserver
```

Then start a webserver where you need one:

```
$ cd MyProject/
$ nanoserver

> Server listening on port 3000 with directory /Users/foo/Projects/MyProject
```

If you really need it, you can customise the port nanoserver runs on with the `-p` option:

```
$ nanoserver -p 8080
> Server listening on port 8080 with directory /Users/foo/Projects/MyProject
```

Normally the nanoserver does not log anything. You can enable logging to the console with the `-l` option:

```
$ nanoserver -l
> Server listening on port 3000 with directory /Users/foo/Projects/MyProject
> GET: /index.html
```

If you're doing performance testing (good on you!), you can use fake slow responses by appending the `?delay=<milliseconds>` query parameter to URLs loaded from nanoserver.

For example, to delay loading an image by one second you would include it like this:

```
<img src="/images/my/funny.gif?delay=1000">
```

