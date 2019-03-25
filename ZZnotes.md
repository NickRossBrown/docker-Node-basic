#Docker terminal commands
build
```
$ docker build -t yourDockerId/RepoORProject-Name .
```
run with container port mapping
```
$ docker run -p 8080:8080 yourDockerId/RepoORProject-Name
```
about 8080:8080
* first 8080: route incoming requests to this port on localhost to...
* second :8080 ...this port inside container (make sure it matches the app.listen() in the index.js file)

