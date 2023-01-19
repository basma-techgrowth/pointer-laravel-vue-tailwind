<template>
  <div class=" min-h-screen w-screen  bg-gray-100">
    <!-- container -->
    <div class="flex flex-col w-full md:pl-44 md:pr-8 px-8 duration-500">
      <header class="flex w-full justify-items-end" ref="body">
      <!-- BEGIN: Header-->
      <nav
        class="w-full bg-white shadow my-4 rounded-md">
        <div class="flex justify-between items-center md:px-10 px-8 h-32 text-black">
          <div>
            <Bars3Icon class="md:hidden block h-10 w-10 cursor-pointer" @click="sidenavOpen = !sidenavOpen" />
          </div>
          <span>logo</span>
        </div>
      </nav>
      <!-- END: Header-->
      <!-- BEGIN: side Menu-->
      <div :class="[sidenavOpen?'w-1/2 py-8 px-4':'w-0','fixed left-0 top-0 md:w-40 h-full bg-white shadow z-50 md:hover:w-1/4 duration-500']">
        <div class="flex w-full justify-end my-9 pr-8">
          <XMarkIcon class="md:hidden block h-10 w-10 cursor-pointer z-20 text-black" @click="sidenavOpen = !sidenavOpen"/>
        </div>
      </div>
      <!-- END: Main Menu-->
    </header>
    <!-- BEGIN: Content-->
    <div class="w-full h-screen p-8 bg-blue-200 rounded-md">
      <slot></slot>
    </div>
    <!-- END: Content-->
    </div>
   
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

  </div>
</template>

<script>
// import '../vuexy-css/vendors/js/vendors.min.js'
// import '../vuexy-css/core/js/core/app-menu'
import { Bars3Icon, XMarkIcon, HomeIcon, Bars3BottomLeftIcon,
Bars3BottomRightIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
export default{
  data: function (){
    return{
      sidenavOpen: false
    }
  },
  mounted: function () {
  },
  components: {
    Bars3Icon,
    XMarkIcon,
  },
  methods:{
    
  }
}

</script>

<style scoped>
/* @import '../vuexy-css/custom-fonts.css';
@import '../vuexy-css/vendors/vendors.min.css';
@import '../vuexy-css/bootstrap.css';
@import '../vuexy-css/bootstrap-extended.css';
@import '../vuexy-css/colors.css';
@import '../vuexy-css/components.css';
@import '../vuexy-css/themes/dark-layout.css';
@import '../vuexy-css/themes/bordered-layout.css';
@import '../vuexy-css/themes/semi-dark-layout.css';
@import '../vuexy-css/core/menu/menu-types/vertical-menu.css'; */
</style>