COLOUR_YELLOW = "\033[1;33m"
COLOUR_RED = "\033[1;31m"
COLOUR_GREEN = "\033[0;32m"
COLOUR_END = "\033[0m"

TASK_STARTED = @echo ${COLOUR_YELLOW} - Task started: $@ ${COLOUR_END}
TASK_DONE = @echo ${COLOUR_GREEN} âœ“ Task succeeded: $@ ${COLOUR_END}
TASK_FAILED = @echo ${COLOUR_RED} âœ˜ Task failed: $@ ${COLOUR_END}

APP_NAME = recipes
WEBSITE_NAME = website

build-website:
	cd ./packages/${WEBSITE_NAME} && \
	rm -rf ./.next && \
	NODE_ENV=production yarn build && \
	docker build -t dokku/${APP_NAME}:latest . && \
	docker save dokku/${APP_NAME}:latest -o ./${APP_NAME}.tar && \
	gzip -f ./${APP_NAME}.tar
deploy-website:
	${TASK_STARTED}
	cd ./packages/${WEBSITE_NAME} && \
	scp -o StrictHostKeyChecking=no ./${APP_NAME}.tar.gz ${DO_USER}@${DO_IP}:~/ && \
	ssh -o StrictHostKeyChecking=no ${DO_USER}@${DO_IP} " \
		gunzip -f ~/${APP_NAME}.tar.gz && \
		docker load -i ~/${APP_NAME}.tar && \
		rm -f ${APP_NAME}.tar \
	"
	ssh -o StrictHostKeyChecking=no ${DO_USER}@${DO_IP} " \
		dokku tags:deploy ${APP_NAME} latest && \
		dokku cleanup ${APP_NAME} && rm -f ~/${APP_NAME}.tar && \
		docker image prune -a -f --filter "label=${APP_NAME}" && \
		docker system prune -f --volumes \
	" && \
	rm -rf ${APP_NAME}.tar.gz
	${TASK_DONE}
clean-website:
	${TASK_STARTED}
	cd ./packages/${WEBSITE_NAME} && \
	rm -rf ./${APP_NAME}.tar.gz
	${TASK_DONE}
release-website: build-website deploy-website
release: release-website
