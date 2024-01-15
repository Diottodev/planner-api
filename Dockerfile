FROM oven/bun:1.0
WORKDIR /app
COPY package*.json bun.lockb ./
RUN bun install
RUN bun build src/server.ts --target=bun --outfile=build/server.js
COPY . .
CMD [ "bun", "start" ]