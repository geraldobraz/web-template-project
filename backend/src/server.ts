import express from 'express';
import routes from './routes';
import { PORT } from './utils/globalConfigs';
import constants from './utils/globalConstants';
import handleErrors from './errors/handleErrors';

const app = express();

app.use(express.json());
app.use(routes);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(constants.PROJECT_NAME);
  console.log(`🚀 Server started on port ${PORT}!`);
});
