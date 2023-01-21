<template>
  <article class="h-80 w-full dark:bg-white bg-gray-800 shadow rounded-md flex items-center justify-center">
    <p>hello</p>
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