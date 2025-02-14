const log = (message, type = "info") => {
  console.log(`[${type.toUpperCase()}] ${message}`);
};

module.exports = log;
