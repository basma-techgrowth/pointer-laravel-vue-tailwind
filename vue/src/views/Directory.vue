<template>
  <DefaultLayout >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../components/DefaultLayout.vue"
import Card from "../components/Card.vue"
import { watchEffect } from 'vue';
export default {
  name: "Directory",
  props:{
    isList:{
      type: Boolean
    }
  },
  setup(){
    //  watchEffect(() => {
    //   console.log(`message is now ${this.isList}`);
    // });
  },

  components: {
    DefaultLayout,
    Card
  },
  mounted: function (){
   
  }

}
</script>