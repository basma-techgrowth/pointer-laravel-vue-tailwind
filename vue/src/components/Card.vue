<template>
  <article class="min-h-80 w-full dark:bg-white bg-gray-800 shadow rounded-md flex flex-col">
    <div class="h-72 w-full bg-white"></div>
    <div class="py-8 px-4">
      <p>country 1</p>
    </div>
  </article>
</template>


<script>
import { useDark} from '@vueuse/core'
import { watchEffect } from 'vue';
export default{
  setup() {
    const isDark = useDark();
    // console.log("child",isDark.value);
    // watchEffect(() => {
    //   console.log(`message is now ${isDark.value}`);
    // });
    return {
      isDark,
    }
  },
}


</script>