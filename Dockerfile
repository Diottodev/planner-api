FROM oven/bun

WORKDIR /app

COPY ./prisma prisma
COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun", "src/server.ts"]