"use strict";

const lodash = require("lodash");

module.exports = {
  // 预处理参数
  filterParams(rules, params) {
    const newParams = {};
    for (const key in params) {
      if (!rules.hasOwnProperty(key)) continue;
      // 类型转换
      let value = params[key];
      switch (rules[key].type) {
        case "string": {
          // 筛选器，不填内容会传 null，过滤
          if (!lodash.isString(value)) {
            continue;
          }
          break;
        }
        case "number": {
          // get 请求，会传 string，强制转换类型
          if (lodash.isString(value)) {
            value = Number(value);
          }
          break;
        }
        case "boolean": {
          // get 请求，会传 string，强制转换类型
          if (lodash.isString(value)) {
            value = value === "false" ? false : true;
          }
          break;
        }
        case "dateTime": {
          // value = moment(value).format('YYYY-MM-DD HH:mm:ss')
          break;
        }
        case "array": {
          // 筛选器，不填内容会传 null，过滤
          if (!lodash.isArray(value)) {
            continue;
          }
          break;
        }
      }
      newParams[key] = value;
    }
    return newParams;
  },

  // 获取分页参数
  getPageParams(page, pageSize) {
    return {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    };
  },
};