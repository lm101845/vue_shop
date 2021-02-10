// 这是项目发布阶段用到的babel插件
// const prodPlugins = []
// if(Process.env.NODE_ENV === 'production'){
//   // production就是产品发布模式
//   prodPlugins.push('transform-remove-console')
// }
module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    // 发布产品时候的插件数组
    'transform-remove-console'
  ]
}