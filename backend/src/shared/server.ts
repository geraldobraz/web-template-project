import express from 'express';
import routes from './index.routes';
import authConfig from '@config/auth';
import constants from '../utils/globalConstants';
import handleErrors from './errors/handleErrors';

const app = express();
const port = authConfig.port;

app.use(express.json());
app.use(routes);
app.use(handleErrors);

app.listen(port, () => {
  console.log(constants.PROJECT_NAME);
  console.log(`🚀 Server started on port ${port}!`);
});
