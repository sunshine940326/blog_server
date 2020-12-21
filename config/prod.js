module.exports = {
  port: '3030',
  mongodb: {
    host: '',
    port: '',
    name: '',
    user: '',
    pwd:  ''
  },
  token: {
    secret: 'cherryblog',
    expires: '30d',
    unlesses: [/^\/login/,  /^\/userApi/]
  }
}