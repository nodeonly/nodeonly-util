module.exports = process.env.CONNECT_COV
    ? require('./lib-cov/index')
    : require('./lib/index');