
<template>
  <div>
    <slot>main</slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const defaultOptions = Vue.extend({
  props: {
    main: {
      type: Function
    }
  }
});

@Component
export default class StickyFooter extends defaultOptions {
  mounted() {
    setFooter(this.main(), this.$el);
  }
}

function getWindowHeight() {
  var windowHeight = 0;
  if (typeof window.innerHeight == "number") {
    windowHeight = window.innerHeight;
  } else {
    if (document.documentElement && document.documentElement.clientHeight) {
      windowHeight = document.documentElement.clientHeight;
    } else {
      if (document.body && document.body.clientHeight) {
        windowHeight = document.body.clientHeight;
      }
    }
  }
  return windowHeight;
}
function setFooter(mainEle, footerEle) {
  if (document.getElementById) {
    var windowHeight = getWindowHeight();
    if (windowHeight > 0) {
      var contentHeight = mainEle.offsetHeight;
      var footerElement = footerEle;
      var footerHeight = footerElement.offsetHeight;
      if (windowHeight - (contentHeight + footerHeight) >= 0) {
        footerElement.style.position = "relative";
        footerElement.style.top =
          windowHeight - (contentHeight + footerHeight) + "px";
      } else {
        footerElement.style.position = "static";
      }
    }
  }
}
</script>