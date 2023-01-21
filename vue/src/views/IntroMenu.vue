
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
        <li v-for="item in navigation" :key="item.name">
        <router-link :to="item.to">
          {{ item.name }}
        </router-link>
      </li>
      </ul>
    </nav>
  </header>
  <main>


    <IntroComp :childOpenfunc="openMenu" />

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
            <button class="menu-trigger menu-trigger--close" @click="closeMenu()"> اغلاق</button>
          </div>
        </div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--6"></div>
        <div class="grim__item-img grim__item-img--1"></div>
        <router-link to="/about-org" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <img class="image-logo" @load="imgLoaded" src="../assets/logo.jpeg">
          </div>
        </router-link>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--6"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--7"></div>
        <div class="grim__item-img grim__item-img--2"></div>
        <router-link to="/contact-us" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">تواصل معنا</h3>
            <span class="grim__item-desc">يمكنك التواصل معنا مباشرة</span>
          </div>
        </router-link>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--7"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--8"></div>
        <div class="grim__item-img grim__item-img--3"></div>
        <router-link to="/about-pointer" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">معلومات</h3>
            <span class="grim__item-desc">نبذة تعريفية عن مؤشر المعلوماتية</span>
          </div>
        </router-link>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--8"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--9"></div>
        <div class="grim__item-img grim__item-img--4"></div>
        <router-link to="/directory" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">الدليل</h3>
            <span class="grim__item-desc">دليل الوزارات والمؤسسات</span>
          </div>
        </router-link>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--9"></div>
      </div>
      <div class="grim__item">
        <div class="grim__item-bg grim__item-bg--10"></div>
        <div class="grim__item-img grim__item-img--5"></div>
        <router-link to="/wizard" class="grim__link grim__item-content">
          <div class="grim__item-inner">
            <h3 class="grim__item-title">المؤشر</h3>
            <span class="grim__item-desc">مؤشر خاص لمواقع التواصل الإجتماعي</span>
          </div>
        </router-link>
        <div class="grim__item-bg grim__item-bg-cover grim__item-bg--10"></div>
      </div>
    </nav>
  </main>
</template>


<script>
import anime from "animejs"
import IntroComp from "../components/IntroComp.vue"

// import { onMounted, ref } from 'vue'

export default {
  name: 'InroMenu',
  data: function () {
    return {
      imageLoadedStatus: false,
      Menu: null,
      navigation: [
      { name: 'الدليل', to: { name: 'Directory' }},
      { name: 'المؤشر', to: { name: 'Wizard' }},
      { name: 'تواصل معنا', to: { name: 'ContactUs' }},
      { name: 'معلومات', to: { name: 'AboutApp' }},
      { name: 'سمو شيخ سالم الصباح', to: { name: 'AboutOrg' }},
    ]
    }
  },
  components: {
    IntroComp
  },
  mounted: function () {

   
    
    if (this.imgLoaded()) {
      let DOM = {};
      document.body.classList.remove('loading');
      
      DOM.grim = this.$refs.grim;
      if(DOM.grim == null || DOM.grim == null ){
        console.log("DOM.grim is not defined or available");
      }else{
        this.Menu = new Menu(DOM.grim);
        // when page refreshes or goes back
        this.Menu.close();
      }
      // DOM.grim.classList['add']('grim--open')
      // console.log(DOM.grim.classList['add']('grim--open'))
      
      // console.log("this count", this.Menu.getCount());
      // console.log("this list", this.Menu.getBoxList());
    }

  },
  methods: {
    openMenu() {
      //open menu
      // console.log('open menu')
      this.Menu.open();
    },
    closeMenu() {
      //console.log('close menu')
      this.Menu.close();
    },
    imgLoaded() {
      return this.imageLoadedStatus = true
    },
  }
}

class Box {
  constructor(el, pos) {
    this.DOM = { el: el };
    this.DOM.bg = this.DOM.el.querySelector('.grim__item-bg');
    this.DOM.inner = this.DOM.el.querySelector('.grim__item-content > .grim__item-inner');
    this.DOM.img = this.DOM.el.querySelector('.grim__item-img');
    this.DOM.cover = this.DOM.el.querySelector('.grim__item-bg-cover');
    this.DOM.link = this.DOM.el.querySelector('a.grim__link');
    this.pos = pos;
  }
  getBg() {
    return this.DOM.bg;
  }
  getLink() {
    return this.DOM.link;
  }
  // code
  open() {
    return new Promise((resolve, reject) => {
      this.DOM.bg.style.transformOrigin = this.pos % 2 === 0 ? '50% 100%' : '0% 50%';

      anime.remove(this.DOM.bg);
      anime({
        targets: this.DOM.bg,
        duration: this.DOM.bg.dataset.duration || 40 + this.pos * 20, // increment as more boxes get revealed..
        easing: this.DOM.bg.dataset.easing || 'easeInOutQuad',
        opacity: {
          value: 1,
          duration: 1
        },
        scaleY: this.pos % 2 === 0 ? [0, 1] : 1,
        scaleX: Math.abs(this.pos % 2) == 1 ? [0, 1] : 1,
        complete: () => {
          if (this.DOM.img && this.DOM.cover) {
            this.DOM.img.style.opacity = 1;
            this.DOM.cover.style.opacity = 1;
            this.DOM.cover.style.transformOrigin = '100% 50%';
            anime.remove(this.DOM.cover);
            anime({
              targets: this.DOM.cover,
              duration: 700,
              easing: 'easeOutQuint',
              scaleX: [1, 0]
            });
          }

          if (this.DOM.inner) {
            anime.remove(this.DOM.inner);
            anime({
              targets: this.DOM.inner,
              duration: 1200,
              delay: 150,
              easing: 'easeOutQuint',
              opacity: {
                value: 1,
                duration: 1
              },
              translateY: ['100%', '0%']
            });
          }

          resolve();
        }
      });
    });





  }

  close() {
    return new Promise((resolve, reject) => {
      const animateBoxFn = () => {
        this.DOM.bg.style.transformOrigin = this.pos % 2 === 0 ? '50% 0%' : '100% 50%';

        anime.remove(this.DOM.bg);
        anime({
          targets: this.DOM.bg,
          duration: this.DOM.bg.dataset.duration || 80 + this.pos * 10,
          easing: this.DOM.bg.dataset.easing || 'easeInOutQuad',
          opacity: {
            value: 0,
            delay: this.DOM.bg.dataset.duration || 40 + this.pos * 10,
            duration: 1
          },
          scaleY: this.pos % 2 === 0 ? [1, 0] : 1,
          scaleX: Math.abs(this.pos % 2) == 1 ? [1, 0] : 1,
          complete: resolve
        });
      };

      if (this.DOM.img && this.DOM.cover) {
        anime.remove(this.DOM.img);
        anime({
          targets: this.DOM.img,
          duration: 200,
          easing: 'linear',
          opacity: 0
        });
      }
      animateBoxFn();

      if (this.DOM.inner) {
        this.DOM.inner.style.opacity = 0;
      }
    });
  }

}

class Menu {
  constructor(refs) {
    this.DOM = { el: refs };
    this.DOM.items = this.DOM.el.querySelectorAll('.grim__item');
    this.DOM.itemsTotal = this.DOM.items.length;
    this.boxes = [];
    this.DOM.items.forEach((item, pos) => {
      this.boxes.push(new Box(item, pos));
    });

    this.initEvents();
  }

  initEvents() {
    for (let i = 0; i < this.itemsTotal; ++i) {
      const link = this.boxes[i].DOM.link;
      if (link) {
        link.addEventListener('click', (ev) => {
          if (this.isAnimating) return;
          document.querySelector('.content--switch-current').classList.remove('content--switch-current');
          document.querySelector(link.getAttribute('href')).classList.add('content--switch-current');
          this.close();
        });
      }
    }
  }

  open() {
    this.toggle('open');
  }
  close() {
    // return console.log("menu closing");
    this.toggle('close');
    this.isAnimating = false;
  }

  toggle(action) {
    if (this.isAnimating) return console.log("still animating");
    // this.isAnimating = true;
    if (action === 'open') {
      this.openBoxes();
    }else {
      console.log("menu inner closing");
      this.closeBoxes();
      
    }
  }
  openBoxes(pos = 0) {
    this.toggleBoxes('open', pos);
  }
  closeBoxes(pos = 0) {
    this.toggleBoxes('close', pos);
  }
  toggleBoxes(action, pos) {
    if (pos >= this.itemsTotal) {
      this.isAnimating = false;
      return;
    };
    this.DOM.el.classList[action === 'open' ? 'add' : 'remove']('grim--open');
    const box = this.boxes[pos];
    if(box == null || box == undefined){
      console.log("box object is not defined or available");
    }else{
      box[action === 'open' ? 'open' : 'close']().then(() => this[action === 'open' ? 'openBoxes' : 'closeBoxes'](pos+1));
    }
    
  }
  // testing
  getCount() {
    return this.DOM.itemsTotal;
  }
  getBoxList() {
    return this.boxes[0].getLink;
  }


}



</script>

<style scoped>
@import '../css/css-rtl/bootstrap.css';
@import '../css/css-rtl/bootstrap-extended.css';
@import '../css/css-rtl/colors.css';
@import '../css/css-rtl/themes/dark-layout.css';
@import '../css/css-rtl/bootstrap.css';
@import '../css/css-rtl/bootstrap.css';
@import '../css/menu.css';
@import '../css/css-rtl/custom-rtl.css';
@import '../css/style-rtl.css';
@import '../css/custom-fonts.css';
@import '../css/base.css';

:global(body){
  
}
</style>