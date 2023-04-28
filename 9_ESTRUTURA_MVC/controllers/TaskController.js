const { raw } = require('express');
const Task = require('../models/Task');

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await Task.create(task);

    res.redirect('/tasks');
  }

  static async editTask(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({ raw: true, where: { id: id } });

    res.render('tasks/edit', { task });
  }

  static async editTaskSave(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;

    const taskDto = {
      id,
      title,
      description,
    };

    await Task.update(taskDto, { where: { id: id } });

    res.redirect('/tasks');
  }

  static async completeTask(req, res) {
    const id = req.params.id;

    const user = await Task.findOne({ raw: true, where: { id: id } });

    const done = user.done === 0 ? true : false;

    const taskDto = {
      id,
      done,
    };

    await Task.update(taskDto, { where: { id: id } });

    res.redirect('/tasks');
  }

  static async removeTask(req, res) {
    const id = req.params.id;

    await Task.destroy({ where: { id: id } });

    res.redirect('/tasks');
  }

  static async showTaskById(req, res) {
    const id = req.params.id;
    const task = await Task.findOne({ raw: true, where: { id: id } });

    res.render('tasks/byId', { task });
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render('tasks/all', { tasks });
  }
};
