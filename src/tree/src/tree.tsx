
import { defineComponent, ref, toRefs } from 'vue'
import { type TreeProps, treeProps } from './tree-type'
import useTree  from './useTree'
    // 节点宽度
    const NODE_INDENT = 24

    // 节点高度
    const NODE_HEIGHT = 28
export default defineComponent({
  name: 'STree',
  props: treeProps,
  setup(props: TreeProps) {
    const {data}  = toRefs(props)
    const { toggleNode,getExpendedTree,getChildren,getChildrenExpanded} = useTree(data)
    return () => {
      return (
        <div class="s-tree">{
          getExpendedTree.value.map((treeNode) => {
            const { level, isLeaf, expanded } = treeNode
            return (
              <div class="s-tree-node hover:bg-slate-100 relative leading-8" 
              style={{
                paddingLeft: `${NODE_INDENT  * (level - 1)}px`
              }}>
                {/*参照线*/}
                {!isLeaf && expanded && (
                  <span
                    class="s-tree-node__vine absolute w-px bg-gray-200"
                    style={{
                      height: `${
                        NODE_HEIGHT * getChildrenExpanded(treeNode).length
                      }px`,
                      left: `${NODE_INDENT * (level - 1) + 11}px`,
                      top: `${NODE_HEIGHT}px`
                    }}
                  ></span>
                )}
                {/** 折叠图标 */}
                {/* 判断当前节点是否是叶子结点*/}
                {
                  isLeaf ? 
                  <span style={{display:'inline-block',width:'25px'}}></span>
                  : (
                    <svg
                    onClick={() => toggleNode(treeNode)}
                    style={{
                      width: '18px',
                      height: '18px',
                      display: 'inline-block',
                      transform: expanded ? 'rotate(90deg)' : ''
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
