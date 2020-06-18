'use strict';
const moment = require('moment');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async labour() {
    const { ctx } = this;
    try {
      const { birth_day: birthDay } = ctx.request.body;
      const isValid = moment(birthDay).format('YYYYMMDD') === '20210321';
      const message = isValid ? 'Happy Birthday' : 'Hello';
      ctx.body = { status: 200, message };
    } catch (error) {
      ctx.body = { status: 404, message: error.stack };
    }
  }
}

module.exports = HomeController;
