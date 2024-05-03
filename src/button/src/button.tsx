import  { defineComponent, toRefs } from "vue";
import { type ButtonProps,buttonProps } from "./button-types";
export default defineComponent({
  name: "SButton",
  props:buttonProps,
  setup(props:ButtonProps,{slots}) {
    const {type} = toRefs(props)

    return () => {
      const defaultSlot = slots.default ? slots.default() : 'button'
      return <button class={`s-btn s-btn--${type.value}`}>
        {defaultSlot}
      </button>
    }
  },
});