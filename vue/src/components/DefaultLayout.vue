<template>
  <div class="min-h-screen w-screen  bg-blue-100">
    <div class="h-32 w-full flex items-center justify-between px-8 bg-red-100">
      <p>toggle</p>
      <ul class="flex gap-4">
        <li>home</li>
        <li>dash</li>
      </ul>
    </div>
    <!-- mobile menu -->
    <header class="h-20 w-full bg-green-100  px-8 relative">
      <div class="flex h-full items-center justify-between">
        <p>toggle</p>
        <Bars3Icon class="h-10 w-10 cursor-pointer md:block hidden" />
      </div>
      <div class="absolute md:block hidden top-0 right-0 h-screen w-1/4 bg-purple-400">
      </div>
    </header>


  </div>
</template>

<script>
import {
  Bars3Icon, XMarkIcon, HomeIcon, Bars3BottomLeftIcon,
  Bars3BottomRightIcon, UserGroupIcon
} from '@heroicons/vue/24/outline'
export default {
  data: function () {
    return {
      sidenavOpen: false,
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      rail: true,
    }
  },
  mounted: function () {
  },
  components: {
    Bars3Icon,
    XMarkIcon,
  },
  methods: {

  }
}

</script>

<style>
::-webkit-scrollbar {
  width: 0px;
}

.v-list-item-title {
  font-size: 2rem;
}
</style>

