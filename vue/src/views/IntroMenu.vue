
<template>
  <header class="offcanvas-menu">
    <input type="checkbox" id="toogle-menu" />

    <label for="toogle-menu" class="toogle-open"><span></span></label>

    <nav>
      <div>
        <label for="toogle-menu" class="toogle-close">
          <span></span>
        </label>
      </div>
      <ul>
        <li><a href="#section1">Section </a></li>
        <li><a href="#section2">Section </a></li>
        <li><a href="#section3">Section </a></li>
        <li><a href="#section4">Section </a></li>
        <li><a href="#section5">Section </a></li>
      </ul>
    </nav>
  </header>
  <main>
  

    <IntroComp :childOpenfunc="openMenu"/>

    <nav class="grim" ref="grim">
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--5"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--5"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--5"></div>
        <div class="grim__item-content">
          <div class="grim__item-inner">
          </div>
        </div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--5"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--5"></div>
        <div class="grim__item-content">
          <div class="grim__item-inner">
            <button class="menu-trigger menu-trigger--close"> اغلاق</button>
          </div>
        </div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--6"></div>
        <div class="grim__item-img grim__item-img--1"></div>
        <a href="#content-2" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <img class="image-logo" @load="imgLoaded" src="../assets/logo.jpeg">
          </div>
        </a>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--6"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--7"></div>
        <div class="grim__item-img grim__item-img--2"></div>
        <a href="#content-3" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">تواصل معنا</h3>
            <span class="grim__item-desc">يمكنك التواصل معنا مباشرة</span>
          </div>
        </a>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--7"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--8"></div>
        <div class="grim__item-img grim__item-img--3"></div>
        <a href="dashboard-region.html" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">معلومات</h3>
            <span class="grim__item-desc">نبذة تعريفية عن مؤشر المعلوماتية</span>
          </div>
        </a>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--8"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--9"></div>
        <div class="grim__item-img grim__item-img--4"></div>
        <a href="dashboard-region.html" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">الدليل</h3>
            <span class="grim__item-desc">دليل الوزارات والمؤسسات</span>
          </div>
        </a>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--9"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--10"></div>
        <div class="grim__item-img grim__item-img--5"></div>
        <a href="wizard.html" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">المؤشر</h3>
            <span class="grim__item-desc">مؤشر خاص لمواقع التواصل الإجتماعي</span>
          </div>
        </a>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--10"></div>
      </div>
    </nav>
  </main>
</template>


<script>
import '../css/css-rtl/bootstrap.css';
import '../css/css-rtl/bootstrap-extended.css';
import '../css/css-rtl/colors.css';
import '../css/css-rtl/themes/dark-layout.css';
import '../css/css-rtl/bootstrap.css';
import '../css/css-rtl/bootstrap.css';
import '../css/menu.css';
import '../css/css-rtl/custom-rtl.css';
import '../css/style-rtl.css';
import '../css/custom-fonts.css'
import '../css/base.css'
import anime from "animejs"
import IntroComp from "../components/IntroComp.vue"

// import { onMounted, ref } from 'vue'

export default {
  name: 'InroMenu',
  data: function (){
    return{
      imageLoadedStatus: false,
      myClass: null
    }
  },
  components:{
    IntroComp
  },
  mounted: function () {
   

    // anime js
    this.myClass = new MyClass(this.$refs);
    const el = this.$refs;
    console.log(el.grim.querySelectorAll('.grim__item'));
   
    if(this.imgLoaded()){
      document.body.classList.remove('loading');
      console.log("yes");
    }

  },
  methods: {
    openMenu(){
      //open menu
      console.log('open menu')
    },
    imgLoaded(){
      return this.imageLoadedStatus = true
    },
  }
}

class MyClass {
  constructor(refs) {
    console.log("hey ->",refs.grim)
  }
}



</script>