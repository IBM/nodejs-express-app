// import dependencies and initialize the express router
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { readFile } from 'fs/promises';

const swaggerDoc = JSON.parse(
  await readFile(
    new URL('../config/swagger.json', import.meta.url),
  ),
);

const router = express.Router();

// define routes
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDoc));

export default router;
