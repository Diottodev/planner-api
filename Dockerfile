FROM oven/bun:1.0

WORKDIR /app

COPY package.json .
COPY bun.lockb .
COPY prisma .

RUN bun install && bunx prisma generate

COPY . .

EXPOSE 8080

CMD ["bun", "src/server.ts"]