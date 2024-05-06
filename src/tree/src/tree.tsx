
import { defineComponent, ref, toRefs } from 'vue'
import { type TreeProps, treeProps } from './tree-type'
import { generateInnerTree } from './utils'
import useTree  from './useTree'

export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const {data}  = toRefs(props)
    const { toggleNode,getExpendedTree} = useTree(data)
    return () => {
      return (
        <div class="s-tree">{
          getExpendedTree.value.map((treeNode) => {
            return (
              <div class="s-tree-node" style={{
                paddingLeft: `${24 * (treeNode.level - 1)}px`
              }}>
                {/** 折叠图标 */}
                {/* 判断当前节点是否是叶子结点*/}
                {
                  treeNode.isLeaf ? 
                  <span style={{display:'inline-block',width:'25px'}}></span>
                  : (
                    <svg
                    onClick={() => toggleNode(treeNode)}
                    style={{
                      width: '18px',
                      height: '18px',
                      display: 'inline-block',
                      transform: treeNode.expanded ? 'rotate(90deg)' : ''
                    }}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M384 192v640l384-320.064z"
                    ></path>
                  </svg>
                  )
                }
                {treeNode.label} 
              </div>
            )
          })
        }</div>
      )
    }
  }
})   
