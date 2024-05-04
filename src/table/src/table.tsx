
import { defineComponent, toRefs } from 'vue'
import { TableProps, tableProps } from './table-type'

export default defineComponent({
  name: 'Table',
  props: tableProps,
  setup(props: TableProps) {
    return () => {
      return (
        <div class="s-table"></div>
      )
    }
  }
})   
