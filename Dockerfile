FROM node:20.12.2

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install

COPY . .

# RUN npm run build

EXPOSE 3000

# RUN npx prisma migrate dev --name init
CMD ["npm","run","dev:migrate"]
