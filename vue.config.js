const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract:false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
  // chainWebpack: config => {
  //   config.module
  //       .rule('svg')
  //       .exclude.add('./src/assets/icons')
  //       .end()

  //   config.module
  //       .rule('icons')
  //       .test(/\.svg$/)
  //       .include.add('.src/icons')
	// 	.end()
  //       .use('svg-sprite-loader')
  //       .loader('svg-sprite-loader')
  //       .options({
  //           symbolId: 'icon-[name]'
  //       })   
  // }
})


