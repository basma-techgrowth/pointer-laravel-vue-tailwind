<template>
  <DefaultLayout>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../components/DefaultLayout.vue"
import Card from "../components/Card.vue"
export default {
  name: "Directory",

  components: {
    DefaultLayout,
    Card
  },
  mounted: function (){
   
  }

}
</script>