<template>
  <div>
    <div id="app-wrapper" ref="main">
      <h1>Hello App!</h1>
      <p>
        <router-link to="/crown_page">Crown layout</router-link>
        <router-link to="/dual_wing_page">Dual Wing layout</router-link>
      </p>

      <router-view></router-view>
    </div>
    <StickyFooter :main="() => $refs.main">here's sticky footer</StickyFooter>
  </div>
</template>

<script lang="ts">
import StickyFooter from "./components/StickyFooter";
import Vue from "vue";
import Component from "vue-class-component";

const defaultOptions = Vue.extend({});
@Component({
  components: {
    StickyFooter
  }
})
export default class App extends defaultOptions {}
</script>

<style>
html * {
  margin: 0;
  padding: 0;
}
</style>