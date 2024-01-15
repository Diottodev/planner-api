FROM oven/bun:1.0
WORKDIR /app
COPY package*.json bun.lockb ./
RUN bun install
RUN bun build:prod
COPY . .
CMD [ "bun", "start" ]