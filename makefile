REGISTRY_URL = docker.in.ryanep.com
IMAGE_NAME = recipe-cards
IMAGE_VERSION = 2.0.0-alpha.5
IMAGE_TAG = ${IMAGE_NAME}:${IMAGE_VERSION}

app-build:
	npm run build

container-build:
	docker build -t ${REGISTRY_URL}/${IMAGE_TAG} -f dockerfile .

container-save:
	docker save --output invoice-${IMAGE_VERSION}.tar ${REGISTRY_URL}/${IMAGE_TAG}

container-push:
	docker push ${REGISTRY_URL}/${IMAGE_TAG}

container-start:
	docker run -d \
	-p 3000:3000 \
	-e DATABASE_URL="file:./recipes.sqlite" \
	${REGISTRY_URL}/${IMAGE_TAG} | xargs docker logs -f

container-stop:
	docker ps -q --filter ancestor=invoice | xargs docker stop

database-migrate:
	npx prisma migrate dev

database-migrate-clean:
	rm -rf ./prisma/migrations && \
	npx prisma migrate dev --name initial-schema

database-seed:
	npx prisma db seed

version:
	sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' package.json

release: container-build container-save container-push
