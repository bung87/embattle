<style lang="scss" scoped>
.layout-crown {
  overflow: auto;
  > div {
    position: relative;
    float: left;
  }
  &__main {
    width: 100%;
  }
  &__left {
    margin-left: -100%;
  }
}
</style>
<template>
  <div
    class="layout-crown"
    :style="{paddingLeft:layout.left.width,paddingRight:layout.right.width}"
  >
    <div class="layout-crown__main">
      <slot>main</slot>
    </div>
    <div
      class="layout-crown__left"
      :style="{width:layout.left.width,left:`-${layout.left.width}` }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="layout-crown__right"
      :style="{width:layout.right.width,right:`-${layout.right.width}`,marginLeft:`-${layout.right.width}`}"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const defaultOptions = Vue.extend({
  props: {
    layout: {
      type: Object,
      default:function () { return Object.assign({
        left: {
          width: "200px"
        },
        right: {
          width: "220px"
        }
      },this.$root.layout)
      }
    }
  }
});

@Component
export default class CrownLayout extends defaultOptions {}
</script>