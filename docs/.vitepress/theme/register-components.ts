import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import SButton from '../../../src/button/src/button'

import type {App} from 'vue'
export function registerComponents(app:App<never>) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component('SButton',SButton)
}
