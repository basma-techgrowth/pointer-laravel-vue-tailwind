<template>
  <div class="min-h-screen w-screen text-purple-200 bg-gray-700">
    <div class="h-32 w-full flex items-center justify-between px-8 bg-gray-800">
      <div>
        <MoonIcon v-if="!isTheme" class="h-10 w-10 cursor-pointer"
          @click="isTheme = !isTheme" />
        <SunIcon v-else class="h-10 w-10 cursor-pointer"
          @click="isTheme = !isTheme" />
      </div>
      <ul class="flex gap-4 font-medium text-3xl" dir="rtl">
        <li class="cursor-pointer">دليل مؤشر المعلوماتية
        </li>
        <span>|</span>
        <li class="cursor-pointer">العودة إلى الرئيسية</li>
      </ul>
    </div>
    <!-- mobile menu -->
    <header class="h-20 w-full px-8 shadow-md bg-gray-800">
      <div class="flex h-full items-center justify-between ">
        <div class="flex gap-4">
          <ListBulletIcon class="h-10 w-10 cursor-pointer shadow" @click="isList = true"/>
          <RectangleGroupIcon @click="isList = false" class="h-10 w-10 cursor-pointer shadow"/>
        </div>
        <Bars3Icon v-if="!isSideOpen"
          class="h-10 w-10 cursor-pointer md:hidden block"
          @click="isSideOpen = !isSideOpen" />
        <p class="md:block hidden">التصفية</p>

      </div>
      <!-- mobile side nave -->
      <div
        :class="[isSideOpen ? 'block' : 'hidden', 'absolute top-0 right-0 h-screen w-1/2 bg-gray-800 rounded-md z-10']">
        <div class="flex h-16 w-full items-center justify-end px-4">
          <XMarkIcon class="h-10 w-10 cursor-pointer md:hidden block z-10"
            @click="isSideOpen = !isSideOpen" />
        </div>


      </div>
      <!-- overlay -->
      <div
        :class="[isSideOpen ? 'block' : 'hidden', 'absolute top-0 left-0 h-full w-full bg-black opacity-50']">
      </div>
    </header>
    <!-- content & desktop side menu -->
    <div class="min-h-full flex w-full px-4">
      <aside class="w-1/3 h-fit order-1 md:block hidden p-4 py-6">
        <div class="w-full h-full bg-gray-800 rounded-md shadow-lg">
          <article class="px-8">
            <div
              class="flex items-center justify-end border-black-500 border-b py-4">
              <!-- dummy text -->
              <h1 class="font-medium text-4xl">الدول</h1>
            </div>
            <div class="flex flex-col items-end py-4 gap-2">
              <label v-for="item in countryFilter" class="py-2 flex gap-4 relative" :key="item.title">
                <span class="font-medium text-4xl">{{ item.title }}</span> <input
                  type="checkbox" class="appearance-none h-8 w-8 border rounded-md cursor-pointer" name="check1">
                  <CheckIcon class="w-8 h-8 absolute top-3 right-0 text-opacity-0 check-1 transition"/>
              </label>
              <button
                class="w-full py-2 mt-2 bg-blue-200 text-blue-800 rounded-md">إعادة
                البحث</button>
            </div>
          </article>
        </div>
      </aside>
      <div class="h-full w-full p-4 py-6">
        <div class="min-h-full md:max-w-80r m-auto w-full flex flex-col gap-8">
          <div class="w-full h-28 bg-gray-800 rounded-md shadow-md flex items-center px-4 py-2">
            <MagnifyingGlassIcon class="h-10 w-10"/>
            <input dir="rtl" type="text" class="bg-transparent w-full h-full border-none outline-none" placeholder="البحث عن الوزارات">
          </div>
          <section :class="[isList?'md:grid-cols-1 grid-cols-1':'md:grid-cols-3 grid-cols-2','rounded-md grid  gap-4 col-span-full']">
            <slot></slot>
          </section>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {
  Bars3Icon, XMarkIcon, HomeIcon, Bars3BottomLeftIcon,
  Bars3BottomRightIcon, UserGroupIcon, MoonIcon, SunIcon,CheckIcon,ListBulletIcon,MagnifyingGlassIcon,ArchiveBoxIcon,RectangleStackIcon,RectangleGroupIcon
} from '@heroicons/vue/24/outline'
import { useDark, useToggle } from '@vueuse/core'
export default {
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
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
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      countryFilter: [
        { title: 'الكويت' },
      { title: 'السعودية' },
      { title: 'عمان' },
      { title: 'الأمارات' },
      ],
      rail: true,
    }
  },
  mounted: function () { },
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

