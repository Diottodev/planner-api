FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .
COPY prisma .

RUN bun install
RUN bun generate


COPY . .

EXPOSE 8080

CMD ["bun", "src/server.ts"]