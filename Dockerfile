FROM oven/bun:1.0

WORKDIR /app

COPY package.json .
COPY bun.lockb .
COPY drizzle .

RUN bun install
RUN bun build:prod

COPY . .

EXPOSE 8080

CMD ["bun", "build/server.js"]