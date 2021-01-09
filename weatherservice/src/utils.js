const isProduction = process.env.ENV === 'production';
const PORT = process.env.PORT || 9090;

module.exports = { isProduction, PORT };
