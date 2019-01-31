const env = process.env.NODE_ENV;

export default require(`./${env}.config.js`); // eslint-disable-line
