<template>
  <div class="home">
    <img @click="incrementAA" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState("a", [
      // 映射 this.count 为 store.state.count
      "count",
    ]),
    ...mapGetters("a", ["doneTodos"]),
  },
  methods: {
    ...mapActions("a", [
      "increment", // -> this['some/nested/module/foo']()
    ]),
    incrementAA() {
      this.increment();
      console.log(this.doneTodos);
    },
  },
};
</script>
