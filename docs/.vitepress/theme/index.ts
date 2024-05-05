import Theme from 'vitepress/theme'
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import SButton from '../../../src/button/src/button'
import STree from '../../../src/tree/src/tree'
export default {
  extends:Theme,
  // 扩展应用程序实例
  enhanceApp({app}) {
    app.component('DemoBlock', DemoBlock) 
    app.component('Demo', Demo)
    app.component('SButton',SButton)
    app.component('STree',STree)

  }
}
