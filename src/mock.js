//引入mockjs
const Mock = require("mockjs");
//使用mockjs模拟数据
Mock.mock("/api/data", (req, res) => {
  let data = Mock.mock({
    code: 200,
    name: /\d{5,10}/
  });
  return data;
});
