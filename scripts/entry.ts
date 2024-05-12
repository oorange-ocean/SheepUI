import type {App} from 'vue'
import ButtonPlugin,{Button} from '../src/button'
import TreePlugin,{Tree} from '../src/tree'
import PaginationPlugin,{Pagination} from '../src/pagination'
import FormPlugin,{Form} from '../src/form'

export {
  Button,Tree,Pagination,Form
}

const installs = [ButtonPlugin,TreePlugin,PaginationPlugin,FormPlugin]
export default {
  version:'0.0.1',
  install(app:App){
    installs.forEach(p=> app.use(p))
  }
}