FROM oven/bun:1.0

WORKDIR /app

COPY package.json .
COPY bun.lockb .
COPY drizzle .

RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun", "build/server.js"]