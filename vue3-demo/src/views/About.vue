<template>
  <div class="about">
    <Demo ref="Demo2" />
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { createVNode as _createVNode } from "vue";

import Demo from "./Demo";

export default {
  name: "About",
  data() {
    return {
      title: "11111",
      dialogVisible: false,
    };
  },
  mounted() {
    console.log(this.$refs.Demo2.getDom());
  },
  components: {
    Demo,
  },
  methods: {
    getDom() {
      return <span>1111</span>;
    },
    JSXFactory(tag, props, ...children) {
      children = children[0];
      return _createVNode(tag, props, children);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
