FROM node:22.23.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts --no-audit --no-fund
COPY agent ./agent
COPY tsconfig.json ./
RUN npm run build:agent
ENV NODE_ENV=production
ENV SLUICE_POLL=1
ENV AGENT_HEALTH_PORT=8787
EXPOSE 8787
CMD ["node", "agent/dist/listener.js"]
