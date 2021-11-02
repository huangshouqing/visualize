<!-- 渲染最终页面的组件 -->
<template>
  <div class="canvas-container">
    <div class="canvas"
      :style="{
                    width: canvasStyleData.width + 'px',
                    height: canvasStyleData.height + 'px',
                    backgroundImage:`url(${canvasStyleData.backgroundImage})`,
                    backgroundColor:canvasStyleData.backgroundColor,
                    backgroundSize: '100%'
                }">
      <ComponentWrapper v-for="(item, index) in componentData"
        :scale='canvasStyleData.scale'
        :key="index"
        :config="item" />
    </div>
  </div>
</template>

<script>
import ComponentWrapper from "./ComponentWrapper";

export default {
  name: "visualizeRender",
  components: { ComponentWrapper },
  props: {
    componentData: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    canvasStyleData: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  // methods: {
  //   changeStyleWithScale(value) {
  //     return (value * parseInt(this.canvasStyleData.scale)) / 100;
  //   },
  // },
};
</script>
<style lang='scss' scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    /**/
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ddd;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  .canvas {
    position: relative;
    margin: auto;
    height: 100%;
  }
}
</style>