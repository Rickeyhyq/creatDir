'use strict'
// 加载依赖
const fs = require('fs'),
      path = require('path')

fs.mkdir(path.join(__dirname, 'src'), (error) => {
  if (error) console.log(error)
  
})