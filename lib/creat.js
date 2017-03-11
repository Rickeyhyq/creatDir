'use strict'
// 加载依赖
const fs = require('fs'),
  path = require('path')

fs.mkdir(path.join(__dirname, 'src'), (error) => {
  if (error) {
    if (error.code === 'EEXIST') {
      console.log('已存在src文件夹')
      return
    } else {
      console.log(error)
    }
  }
  fs.mkdir(path.join(__dirname, 'src', 'js'))
  fs.mkdir(path.join(__dirname, 'src', 'less'))
  fs.mkdir(path.join(__dirname, 'src', 'img'))
  fs.writeFile(path.join(__dirname, 'src', 'index.html'), 'html')
})