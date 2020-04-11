
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

function afterHook(to, from,$main) {
      this.$nextTick(() {
        setFooter($main, this.$el);
      });
}

@Component
export default class StickyFooter extends defaultOptions {
  mounted() {
    const $main = this.main();
    setFooter($main, this.$el);
    const hook = afterHook.bind(this,null,null,$main)
    this.$router.afterEach(hook);
    // may not need this
    this.$on("hook:destroyed",()=>{
      this.$router.afterHooks.splice( this.$router.afterHooks.indexOf(hook),1 );
    })
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
  const windowHeight = getWindowHeight();
  if (windowHeight > 0) {
    var contentHeight = mainEle.offsetHeight;
    var footerElement = footerEle;
    var footerHeight = footerElement.offsetHeight;
    if (windowHeight - (contentHeight + footerHeight) >= 0) {
      const top = windowHeight - (contentHeight + footerHeight) + "px";
      footerElement.style.cssText = `position:relative;top:${top}`;
    } else {
      footerElement.style.position = "static";
    }
  }
}
</script>