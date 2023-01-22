<template>
  <div
    :class="[isSideOpen?'overflow-hidden':'overflow-auto','min-h-screen w-screen dark:text-black text-gray-200 dark:bg-slate-200 bg-slate-700']">
    <div
      class="h-32 w-full flex items-center justify-between px-8 dark:bg-white bg-gray-800">
      <div>
        <MoonIcon v-if="!isDark" class="h-10 w-10 cursor-pointer"
          @click="toggleDark()" />
        <SunIcon v-else class="h-10 w-10 cursor-pointer"
          @click="toggleDark()" />
      </div>
      <ul class="flex gap-4 font-medium text-3xl" dir="rtl">
        <li class="cursor-pointer">دليل مؤشر المعلوماتية
        </li>
        <span>|</span>
        <li class="cursor-pointer"><router-link to="/">العودة إلى الرئيسية</router-link></li>
      </ul>
    </div>
    <!-- mobile menu -->
    <header class="h-20 w-full px-8 shadow-md dark:bg-white bg-gray-800">
      <div class="flex h-full items-center justify-between ">
        <div class="flex gap-4">
          <ListBulletIcon class="h-10 w-10 cursor-pointer shadow"
            @click="isList = true" />
          <RectangleGroupIcon @click="isList = false"
            class="h-10 w-10 cursor-pointer shadow" />
        </div>
        <Bars3Icon v-if="!isSideOpen"
          class="h-10 w-10 cursor-pointer md:hidden block"
          @click="isSideOpen = !isSideOpen" />
        <p class="md:block hidden">التصفية</p>

      </div>
      <!-- mobile side nave -->
      <div
        :class="[isSideOpen ? 'md:hidden block' : 'hidden', 'absolute top-0 right-0 h-screen w-1/2 dark:bg-white bg-gray-800 rounded-md z-10']">
        <div class="flex h-16 w-full items-center justify-end px-4">
          <XMarkIcon class="h-10 w-10 cursor-pointer md:hidden block z-10"
            @click="isSideOpen = !isSideOpen" />
        </div>
        <div
          class="w-full h-full dark:bg-white bg-gray-800 rounded-md shadow-lg">
          <article class="px-8">
            <div
              class="flex items-center justify-end border-black-500 border-b py-4">
              <!-- dummy text -->
              <h1 class="font-medium text-4xl">الدول</h1>
            </div>
            <div class="flex flex-col items-end py-4 gap-2">
              <div v-for="item in countryFilter"  class="flex items-center mb-4 gap-6" :key="item.title">
                <label for="default-checkbox"
                  class="ml-2 font-medium text-3xl">
                  {{ item.title }}
                </label>
                <input id="default-checkbox" type="checkbox" value=""
                  class="w-6 h-6  bg-green-700 border-gray-300 rounded-md  focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <button
                class="w-full py-2 mt-2 bg-blue-200 text-blue-800 rounded-md">إعادة
                البحث</button>
            </div>
          </article>
        </div>


      </div>
      <!-- overlay -->
      <div
        :class="[isSideOpen ? 'md:hidden block' : 'hidden', 'absolute top-0 left-0 h-full w-full  bg-black opacity-50']">
      </div>
    </header>
    <!-- content & desktop side menu -->
    <div class="min-h-full md:max-w-screen-2xl flex m-auto w-full px-4">
      <aside class="w-1/3 h-fit order-1 md:block hidden p-4 py-6">
        <div
          class="w-full h-full dark:bg-white bg-gray-800 rounded-md shadow-lg">
          <article class="px-8">
            <div
              class="flex items-center justify-end border-black-500 border-b py-4">
              <!-- dummy text -->
              <h1 class="font-medium text-4xl">الدول</h1>
            </div>
            <div class="flex flex-col items-end py-4 gap-2">
              <div v-for="item in countryFilter"  class="flex items-center mb-4 gap-6" :key="item.title">
                <label for="default-checkbox"
                  class="ml-2 font-medium text-3xl">
                  {{ item.title }}
                </label>
                <input id="default-checkbox" type="checkbox" value=""
                  class="w-6 h-6  bg-green-700 border-gray-300 rounded-md  focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <button
                class="w-full py-2 mt-2 bg-blue-200 text-blue-800 rounded-md">إعادة
                البحث</button>
            </div>
          </article>
        </div>
      </aside>
      <div class="h-full w-full p-4 py-6">
        <div class="min-h-full md:max-w-80r m-auto w-full flex flex-col gap-8">
          <div
            class="w-full h-28 dark:bg-white bg-gray-800 rounded-md shadow-md flex items-center px-4 py-2">
            <MagnifyingGlassIcon class="h-10 w-10" />
            <input dir="rtl" type="text"
              class="bg-transparent w-full h-full border-none outline-none"
              placeholder="البحث عن الوزارات">
          </div>
          <section
            :class="[isList ? 'md:grid-cols-1 grid-cols-1' : 'md:grid-cols-3 grid-cols-2', 'rounded-md grid  gap-4 col-span-full']">
            <slot :isList="isList"></slot>
          </section>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {
  Bars3Icon, XMarkIcon, HomeIcon, Bars3BottomLeftIcon,
  Bars3BottomRightIcon, UserGroupIcon, MoonIcon, SunIcon, CheckIcon, ListBulletIcon, MagnifyingGlassIcon, ArchiveBoxIcon, RectangleStackIcon, RectangleGroupIcon
} from '@heroicons/vue/24/outline'
import { useDark, useToggle } from '@vueuse/core'
export default {
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    // console.log(isDark.value);
    return {
      isDark,
      toggleDark
    }
  },
  data: function () {
    return {
      isSideOpen: false,
      drawer: true,
      isTheme: false,
      isList: false,
      countryFilter: [
        { title: 'الكويت' },
        { title: 'السعودية' },
        { title: 'عمان' },
        { title: 'الأمارات' },
      ],
      rail: true,
    }
  },
  mounted: function () {

  },
  components: {
    Bars3Icon,
    XMarkIcon,
    MoonIcon,
    SunIcon,
    CheckIcon,
    ListBulletIcon,
    MagnifyingGlassIcon,
    ArchiveBoxIcon,
    RectangleStackIcon,
    RectangleGroupIcon

  },
  watch: {
    isSideOpen(val){
      if(val){
        document.body.classList.add('overlayOpen');
      }else{
        document.body.classList.remove('overlayOpen');
      }
    }
  }
}

</script>

<style>
::-webkit-scrollbar {
  width: 0px;
}

.overlayOpen{
  overflow: hidden;
}
</style>

