/** Global Configurations
 * This file is where global configurations must be saved.
 * It has the duty to use the .ENV variables and expose to the rest of the project.
 */
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;
const JWT = {
  KEY: process.env.JWT_SECRET_KEY || '',
  EXPIRES_IN: '1d',
};

export { PORT, JWT };
