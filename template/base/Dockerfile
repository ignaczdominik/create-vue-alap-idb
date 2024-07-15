FROM node:22-alpine3.20

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm cache add @vitejs/plugin-vue@5.0.5
RUN npm cache add pinia@2.1.7
RUN npm cache add pinia-plugin-persistedstate@3.2.1
RUN npm cache add @formkit/vue@1.6.5
RUN npm cache add @formkit/i18n@1.6.5
RUN npm cache add vue@3.4.31
RUN npm cache add vue-i18n@9.13.1
RUN npm cache add vue-router@4.4.0
RUN npm cache add unplugin-vue-router@0.10.0
RUN npm cache add axios@1.7.2
RUN npm cache add sass@1.77.8
RUN npm cache add vite@5.3.3
RUN npm cache add date-fns@3.6.0
RUN npm cache add @vueuse/core@10.11.0
RUN npm cache add @vueuse/head@2.0.0
RUN npm cache add @vueuse/components@10.11.0
RUN npm cache add vite-plugin-vue-devtools@7.3.6
RUN npm cache add tailwindcss@3.4.4
RUN npm cache add autoprefixer@10.4.19
RUN npm cache add postcss@8.4.3

RUN npm i

CMD npm run dev