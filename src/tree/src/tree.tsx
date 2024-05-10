
import { SetupContext, defineComponent, toRefs } from 'vue'
import { type TreeProps, treeProps, IInnerTreeNode } from './tree-type'
import useTree  from './composables/use-tree'
    // 节点宽度
    const NODE_INDENT = 24
    // 节点高度
    const NODE_HEIGHT = 28
export default defineComponent({
  name: 'STree',
  props: treeProps,
  emits:['lazy-load'],
  setup(props: TreeProps,context:SetupContext) {
    const {data,lineable,checkable,operable}  = toRefs(props)
    const {slots} = context
    const  treeData = useTree(data.value,context) 
    //toggleNode,expandedTree,getChildrenExpanded,toggleCheckNode,append,remove
    return () => {
      return (
        <div class="s-tree">{
          treeData.expendedTree.value.map((treeNode) => {
            const { level, isLeaf, expanded } = treeNode
            const toggleOperate = () => {
              if (treeNode.showed) {
                treeNode.showed = false
              } else {
                treeNode.showed = true
              }
            }
            return (
              <div class="s-tree-node hover:bg-slate-100 relative leading-8" 
              style={{
                paddingLeft: `${NODE_INDENT  * (level - 1)}px`
              }}
              // 控制操作按钮显示
              onMouseenter={toggleOperate}
              onMouseleave={toggleOperate}
              >
                {/*参照线*/}
                {!isLeaf && expanded && lineable.value && (
                  <span
                    class="s-tree-node__vine absolute w-px bg-gray-200"
                    style={{
                      height: `${
                        NODE_HEIGHT * treeData.getChildrenExpanded(treeNode).length
                      }px`,
                      left: `${NODE_INDENT * (level - 1) + 11}px`,
                      top: `${NODE_HEIGHT}px`
                    }}
                  ></span>
                )}
                <div class="s-tree_node--content" draggable={
                  !!props.dragdrop
                }>
                {/** 折叠图标 */}
                {/* 判断当前节点是否是叶子结点*/}
                {isLeaf ? (
                  <span
                    style={{ display: 'inline-block', width: '18px' }}
                  ></span>
                ) : slots.icon ? (
                  slots.icon({ nodeData: treeNode, toggleNode: treeData.toggleNode })
                ) : (
                  <svg
                    onClick={() => treeData.toggleNode(treeNode)}
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
                )}
                {/** 复选框 */}
                {checkable.value && (
                  <span
                    class={`relative ${
                      treeNode.inChecked ? 's-tree__inChecked' : ''
                    }`}
                  >
                    {/* {treeNode.inChecked && (
                      <span
                        class="s-tree-checkbox__inner cursor-pointer"
                        onClick={() => toggleCheckNode(treeNode)}
                      >
                        -
                      </span>
                    )} */}
                    <input
                      type="checkbox"
                      style={{ marginRight: '8px' }}
                      v-model={treeNode.checked}
                      onClick={() => treeData.toggleCheckNode(treeNode)}
                    ></input>
                  </span>
                )}
                {/** 标签 */}
                {slots.content ? slots.content(treeNode) : treeNode.label}
                {/* 节点增删操作 */}
                {operable.value && treeNode.showed && (
                  <span class="inline-flex ml-1">
                    <svg
                      onClick={
                        () => {
                        treeData.append(treeNode, {
                          label: '新节点'
                        } as IInnerTreeNode)
                      }
                    }
                      viewBox="0 0 1024 1024"
                      width="14"
                      height="14"
                      class="cursor-pointer"
                    >
                      <path d="M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"></path>
                    </svg>
                    <svg
                      onClick={() => {
                        treeData.remove(treeNode)
                      }}
                      viewBox="0 0 1024 1024"
                      width="14"
                      height="14"
                      class="cursor-pointer ml-1"
                    >
                      <path d="M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"></path>
                    </svg>
                  </span>
                )}
                {/*loading*/}
                {treeNode.loading && (
                  <svg
                    viewBox="0 0 1024 1024"
                    width="14"
                    height="14"
                    class="ml-1"
                  >
                    <path
                      d="M512 64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z m0 832c-194.464 0-352-157.536-352-352s157.536-352 352-352 352 157.536 352 352-157.536 352-352 352z m-64-192v-256h128v256h-128z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
                {/*子节点*/}
                </div>
              </div>
            )
          })
        }</div>
      )
    }
  }
})   
