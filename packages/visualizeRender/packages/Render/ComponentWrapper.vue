<template>
  <div :style="getShapeStyle(config.style)"
    @click="handleClick"
    class='shape'>
    <component class="component"
      :is="config.component"
      :style="getComponentStyle(config.style,this.shapeStyle)"
      :groupValue="config.groupValue"
      v-bind='config.props?config.props.model:{}'
      :element="config" />
  </div>
</template>

<script>
import runAnimation from "@/utils/runAnimation";
import { mixins } from "@/utils/events";

export default {
  props: {
    config: {
      type: Object,
      require: true,
    },
    scale: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      exclude: ["scale"],
      // style中属于sahpe的样式
      shapeStyle: ["width", "height", "top", "left", "rotate", "scale"],
      // 需要被还原的样式如下
      needToChange: [
        "top",
        "left",
        "width",
        "height",
        "fontSize",
        "borderWidth",
      ],
    };
  },
  mounted() {
    runAnimation(this.$el, this.config.animations);
  },
  mixins: [mixins],
  methods: {
    // 还原样式
    reductionStyle(key, value) {
      if (this.needToChange.includes(key)) {
        return (value / parseInt(this.scale)) * 100;
      } else {
        return value;
      }
    },
    getComponentStyle(style, filter = []) {
      // 需要加单位的style属性
      const needUnit = [
        "fontSize",
        "width",
        "height",
        "top",
        "left",
        "borderWidth",
        "letterSpacing",
        "borderRadius",
      ];
      const result = {};
      Object.keys(style).forEach((key) => {
        if (!filter.includes(key)) {
          if (key != "rotate") {
            result[key] = this.reductionStyle(key, style[key]);
            if (needUnit.includes(key)) {
              result[key] += "px";
            }
          } else {
            result.transform = `${key}(${style[key]}deg)`;
          }
        }
      });
      return result;
    },
    getShapeStyle(style) {
      const result = {};
      this.shapeStyle.forEach((key) => {
        if (key != "rotate") {
          result[key] = this.reductionStyle(key, style[key]) + "px";
        } else {
          result.transform = `rotate(${style[key]}deg)`;
        }
      });

      return result;
    },
    handleClick() {
      const events = this.config.events;
      Object.keys(events).forEach((event) => {
        this[event](events[event]);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.shape {
  position: absolute;
  .component {
    outline: none;
    width: 100%;
    height: 100%;
  }
}
</style>