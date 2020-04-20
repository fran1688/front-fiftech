VERSION=0.0.$v
build:
	docker build -t fifchect-front:$(VERSION) . --no-cache
run:
	docker run --rm -it -p 3900:3800 fifchect-front:$(VERSION)
push:
    docker push fifchect-front:$(VERSION)

all:	build push run
