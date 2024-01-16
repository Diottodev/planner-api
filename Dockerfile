FROM oven/bun:1.0

WORKDIR /app

COPY package.json .
COPY bun.lockb .
COPY prisma .

COPY . .

RUN bunx prisma generate
RUN bun install

EXPOSE 8080

CMD ["bun", "src/server.ts"]