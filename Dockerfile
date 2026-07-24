FROM node:24-alpine
WORKDIR /app
COPY ./ /app
RUN npm install && npm run build
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
ENTRYPOINT ["node", "/app/dist/server/entry.mjs"]