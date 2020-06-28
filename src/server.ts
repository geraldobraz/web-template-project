import express from 'express';
import routes from './routes';
import config from './utils/config';
import constants from './utils/constants';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(config.PORT, () => {
  console.log(constants.PROJECT_NAME);
  console.log(`🚀 Server started on port ${config.PORT}!`);
});
