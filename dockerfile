FROM oven/bun:1.0
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
RUN bun build:ssr
COPY . .
EXPOSE 3000
ENTRYPOINT ["bun", "build/server.js"]