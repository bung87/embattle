<template>
<div>
  <CrownLayout>
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
  </CrownLayout>
  
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CrownLayout from "../layouts/CrownLayout";


const defaultOptions = Vue.extend({
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
    CrownLayout
  }
})
export default class CrownPage extends defaultOptions {
}
</script>

<style>

</style>