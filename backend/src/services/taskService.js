const Task = require('../models/Task');

exports.createTask = async (data) => {
  return await Task.create(data);
};

exports.getTasks = async () => {
  return await Task.find();
};
