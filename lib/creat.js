'use strict'
// 加载依赖
const fs = require('fs'),
      path = require('path')

// 创建dist文件夹
fs.mkdir(path.join('../', 'dist'), (error) => {
  if (error) {
    if(error.code === 'EEXIST') {
      console.log('已存在dist文件夹')
      return
    }
  } else {
    console.log(error)
  }
})

// 创建src文件夹及其子文件夹
fs.mkdir(path.join('../', 'src'), (error) => {
  if (error) {
    if (error.code === 'EEXIST') {
      console.log('已存在src文件夹')
      return
    } else {
      console.log(error)
    }
  }
  fs.mkdir(path.join('../', 'src', 'js'))
  fs.mkdir(path.join('../', 'src', 'less'))
  fs.mkdir(path.join('../', 'src', 'img'))
  fs.writeFile(path.join('../', 'src', 'index.html'), 'html')
  fs.writeFile(path.join('../', '.gitignore'), 'node_modules')
  fs.writeFile(path.join('../', 'gulpfile.js'), "var gulp = require('gulp')")
})