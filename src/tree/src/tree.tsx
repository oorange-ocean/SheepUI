
import { defineComponent, toRefs } from 'vue'
import { type TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'Tree',
  props: treeProps,
  setup(props: TreeProps) {
    const {data:innerData}  = toRefs(props)
    return () => {
      return (
        <div class="s-tree">{
          innerData.value.map((treeNode) => {
            return (
              <div class="s-tree-node">
                {treeNode.label}
              </div>
            )
          })
        }</div>
      )
    }
  }
})   
