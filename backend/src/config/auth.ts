export default {
  port: process.env.PORT || 3333,
  jwt: {
    secret: process.env.JWT_SECRET_KEY || 'default',
    expiresIn: '1d',
  },
};
