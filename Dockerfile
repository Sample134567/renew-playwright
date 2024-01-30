FROM mcr.microsoft.com/playwright:v1.37.0-jammy
WORKDIR /e2e
COPY package*.json .
RUN npm install
RUN npx playwright install
COPY . .
EXPOSE 9323
CMD [ "npx", "playwright", "test" ]