<template>
  <DualWingLayout>
    <template>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
    <template v-slot:left>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:right>
      <p>Here's some contact info</p>
    </template>
  </DualWingLayout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import DualWingLayout from "../layouts/DualWingLayout";

const defaultOptions = Vue.extend({
  // props:{
  //     layout:null
  // }
  //   props: {
  //     layout: {
  //       type: Object,
  //       default: () => ({
  //         left: {
  //           width: "200px"
  //         },
  //         right: {
  //           width: "200px"
  //         }
  //       })
  //     }
  //   }
});

@Component({
  components: {
    DualWingLayout
  }
})
export default class DualWingPage extends defaultOptions {}
</script>

<style>
</style>