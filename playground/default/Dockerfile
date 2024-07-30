FROM node:22-alpine3.20

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm cache add autoprefixer@10.4.19
RUN npm cache add axios@1.7.2
RUN npm cache add date-fns@3.6.0
RUN npm cache add eslint@9.8.0
RUN npm cache add eslint-plugin-vue@9.27.0
RUN npm cache add pinia@2.2.0
RUN npm cache add pinia-plugin-persistedstate@3.2.1
RUN npm cache add postcss@8.4.40
RUN npm cache add primevue@4.0.3
RUN npm cache add primeicons@7.0.0
RUN npm cache add sass@1.77.8
RUN npm cache add tailwindcss@3.4.7
RUN npm cache add unplugin-vue-router@0.10.1
RUN npm cache add vite@5.3.5
RUN npm cache add vite-plugin-vue-devtools@7.3.7
RUN npm cache add vitest@2.0.4
RUN npm cache add vue@3.4.34
RUN npm cache add vue-i18n@9.13.1
RUN npm cache add vue-router@4.4.0
RUN npm cache add zod@3.23.8
RUN npm cache add @formkit/vue@1.6.5
RUN npm cache add @formkit/i18n@1.6.5
RUN npm cache add @formkit/zod@1.6.5
RUN npm cache add @formkit/themes@1.6.5
RUN npm cache add @primevue/themes@4.0.3
RUN npm cache add @tailwindcss/aspect-ratio@0.4.2
RUN npm cache add @tailwindcss/container-queries@0.1.1
RUN npm cache add @tailwindcss/forms@0.5.7
RUN npm cache add @tailwindcss/typography@0.5.13
RUN npm cache add @vitejs/plugin-vue@5.0.5
RUN npm cache add @vueuse/core@10.11.0
RUN npm cache add @vueuse/head@2.0.0
RUN npm cache add @vueuse/components@10.11.0

RUN npm i

CMD ["npm", "run", "dev"]