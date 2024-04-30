import Theme from 'vitepress/theme'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test'

export default {
  extends:Theme,
  // 扩展应用程序实例
  enhanceApp({app}) {
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
  }
}
