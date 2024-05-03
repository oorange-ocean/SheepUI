import  { defineComponent, toRefs } from "vue";
import { type ButtonProps,buttonProps } from "./button-types";
export default defineComponent({
  name: "SButton",
  props:buttonProps,
  setup(props:ButtonProps,{slots}) {
    const {type,size,disabled} = toRefs(props)

    return () => {
      const defaultSlot = slots.default ? slots.default() : 'button'
      return <button disabled={disabled.value} class={`s-btn s-btn--${type.value} s-btn--${size.value}`}>
        {defaultSlot}
      </button>
    }
  },
});