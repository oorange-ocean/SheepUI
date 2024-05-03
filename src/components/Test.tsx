import { ref, withModifiers,  defineComponent } from "vue";

export default defineComponent({
  //v-directives
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  emits:['click'],
  setup(props,{slots,emit}) {
    const count = ref(0);
    const increment = () => {
      count.value++
      emit('click')
    }
    const condition = true;
    //v-for
    const list = ref<string[]>(['a','b','c']);
    return ()=>{
      //v-if
      const span = condition ? <span>A</span> : <span>B</span>;
      return (
        <div onClick={withModifiers(increment,['self'])}>
          Count is: {count.value}
          <br />
          <input type="text" v-model={count.value} v-focus/>
          <div>{span}</div> 
          <ul>
            {list.value.map((str)=> <li key={str}>{str}</li>)}
          </ul>
          <div>
            {slots.default?.()}
            {slots.title?.()}
          </div>
         
        </div>
      );
      
    }
  },
});