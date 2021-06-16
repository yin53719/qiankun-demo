import { defineComponent, ref } from 'vue'
import store from '@/store'
import { mapGetters } from 'vuex'
const Demo = defineComponent({
  name: 'demo',
  setup (props) {
    const input = ref(null)
    const { doneTodos } = mapGetters('a',['doneTodos']);
    const click = (e) => {
      console.log(e)
      console.log(input.value)
    }
    const getDom = ()=> {
        return <span>eeeee</span>;
      }

      const  increment = () =>{
        // store.commit('increment')
        store.dispatch('a/increment')
        console.log(store.state.a.count)
        console.log(doneTodos());
      }
    return {
      click,
      getDom,
      input,
      increment
    }
  },
  render () {
    return (
      <>
        {this.getDom()}
      </>
    )
  }

})

export default Demo
