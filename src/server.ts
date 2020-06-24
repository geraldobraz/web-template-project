import express from 'express';
import routes from './routes';
import { PORT } from './utils/config';
import { PROJECT_NAME } from './utils/constants';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(PROJECT_NAME);
  console.log(`🚀 Server started on port ${PORT}!`);
});
