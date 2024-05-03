import  { defineComponent, toRefs } from "vue";
import { type ButtonProps,buttonProps } from "./button-types";
export default defineComponent({
  name: "SButton",
  props:buttonProps,
  setup(props:ButtonProps,{slots}) {
    const {type,size,disabled,block} = toRefs(props)

    return () => {
      const defaultSlot = slots.default ? slots.default() : 'button'
      //block
      const blockClass = block.value ? 's-btn--block' : ''
      return <button 
      disabled={disabled.value} 
      class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass}`}>
        {defaultSlot}
      </button>
    }
  },
});