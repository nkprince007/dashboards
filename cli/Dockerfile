FROM node:7.10 as builder

RUN mkdir -p /usr/app
ADD . /usr/app

WORKDIR /usr/app
ENV BASE_URL https://react-dashboard-srv-clqrcxphix.now.sh
RUN npm install
RUN npm run build
RUN mv dist/*.html dist/index.html

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
