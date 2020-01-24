FROM node:12.2.0-alpine as builder
WORKDIR /client
ENV PATH /client/node_modules/.bin:$PATH
COPY package.json /client/package.json
RUN npm install
RUN npm install react-scripts@3.3.0 -g
COPY . /client
RUN npm run build

FROM nginx:1.16.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]