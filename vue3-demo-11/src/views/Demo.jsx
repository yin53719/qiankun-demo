import { defineComponent, ref,toRefs,reactive,useContext } from 'vue'
import store from '@/store'
import { mapGetters } from 'vuex'

import Demo2 from './Demo2'

const Demo = defineComponent({
  name: 'demo',
  setup (props) {
    const state = reactive({
      box:null,
      input:null
    })
 
    const { doneTodos } = mapGetters('a',['doneTodos']);
    const click = (e) => {
      console.log(state.box.getDom());
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
      increment,
      ...toRefs(state)
    }
  },
  render () {
    return (
      <>
        {this.getDom()}
        <div>test</div>
        <Demo2 ref='box' />
        <button onClick={this.click}>点击</button>
        <input v-model={this.input} placeholder="啊这"/>
      </>
    )
  }

})

export default Demo
