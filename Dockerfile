FROM oven/bun

WORKDIR /app

COPY ./prisma prisma
COPY package.json .
COPY bun.lockb .

RUN bun install
RUN bun build:prod
RUN bun generate

COPY . .

EXPOSE 8080

CMD ["bun", "build/server.js"]