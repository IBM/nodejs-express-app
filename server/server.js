// import dependencies and initialize express
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import { fileURLToPath } from 'url';

import healthRoutes from './routes/health-route.js';
import swaggerRoutes from './routes/swagger-route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// if production, enable helmet
/* c8 ignore next 3  */
if (process.env.VCAP_APPLICATION) {
  app.use(helmet());
}

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes and api calls
app.use('/health', healthRoutes);
app.use('/swagger', swaggerRoutes);

// default path to serve up index.html (single page application)
app.all('', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

// error handler for unmatched routes or api calls
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

export default app;
