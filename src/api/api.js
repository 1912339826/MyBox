if (process.env.NODE_ENV == "development") {
  // 开发
  var BASE_URLA = "http://XXX.XXX.XXX.XXX:XXXX";
} else if (process.env.NODE_ENV == "debug") {
  // debug
  var BASE_URLA = "http://XXX.XXX.XXX.XXX:XXXX";
} else if (process.env.NODE_ENV == "production") {
  // 生产
  var BASE_URLA = "http://XXX.XXX.XXX.XXX:XXXX";
}
window.BASE_URLA = BASE_URLA;
export default {
  // baseUrl: BASE_URLA,
  BASE_URLA,
  // post方式
  // example: `POST ${BASE_URLA}/example/example`
  // get方式
  example:`${BASE_URLA}/example/example`,
};
