COLOUR_YELLOW = "\033[1;33m"
COLOUR_RED = "\033[1;31m"
COLOUR_GREEN = "\033[0;32m"
COLOUR_END = "\033[0m"

TASK_STARTED = @echo ${COLOUR_YELLOW} - Task started: $@ ${COLOUR_END}
TASK_DONE = @echo ${COLOUR_GREEN} âœ“ Task succeeded: $@ ${COLOUR_END}
TASK_FAILED = @echo ${COLOUR_RED} âœ˜ Task failed: $@ ${COLOUR_END}

.PHONY:

release:
	${TASK_STARTED}
	cd ./packages/website && \
	NODE_ENV=production npx --yes serverless --verbose
	${TASK_FAILED}
remove:
	${TASK_STARTED}
	cd ./packages/website && \
	NODE_ENV=production npx --yes serverless remove --verbose
	${TASK_FAILED}
