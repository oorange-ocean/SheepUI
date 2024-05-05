
import { defineComponent, ref, toRefs } from 'vue'
import { type TreeProps, treeProps } from './tree-type'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const {data}  = toRefs(props)
    const innerData =ref(generateInnerTree(data.value))
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
