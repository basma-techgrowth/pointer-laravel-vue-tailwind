
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

    <div class="content">

      <canvas class="scene scene--full" id="scene" ref="sceneCanvas"></canvas>
      <div class="content__inner">
        <h2 class="content__title">مؤشر المعلوماتية</h2>
        <div class="content-button mt-2">
          <button @click="getOutput()" class="btn btn-relief-primary btn-large menu-trigger display-5"><i
              data-feather='menu'></i> القائمة</button>
        </div>
      </div>
    </div>

    <nav class="grim">
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
            <img class="image-logo" src="../assets/logo.jpeg">
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
import {
  Scene, PerspectiveCamera, HemisphereLight, DirectionalLight,
  IcosahedronGeometry, MeshPhongMaterial, Mesh, Vector2, WebGLRenderer
} from 'three'
// import ref from 'vue';


export default{
  name:'InroMenu',
  data: function(){
   
  },
  methods:{
    getOutput(){
      console.log(this.$refs.sceneCanvas.offsetWidth, this.$refs.sceneCanvas.offsetHeight);
    }
  }
}

// var canvas = document.querySelector('#scene');

// // const screenCanvas =  ref("screen-canvas");

// var renderer = new WebGLRenderer({
//     canvas: canvas,
//     antialias: true
// });

// var width = canvas.width;
// var height = canvas.height;

// renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
// renderer.setSize(width, height);
// renderer.setClearColor(0x161d31);

// var scene = new Scene();
// var camera = new PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 10000);
// camera.position.set(120, 0, 300);
// var light = new HemisphereLight(0xffffff, 0x0C056D, 0.6);
// scene.add(light);
// var light = new DirectionalLight(0x590D82, 0.5);
// light.position.set(100, 300, 400);
// scene.add(light);
// var light2 = light.clone();
// light2.position.set(-100, 300, 400);
// scene.add(light2);

// var geometry = new IcosahedronGeometry(120, 4);
// for (var i = 0; i < geometry.vertices.length; i++) {
//   var vector = geometry.vertices[i];
//   vector._o = vector.clone();
// }

// var material = new MeshPhongMaterial({
//     emissive: 0x23f660,
//     emissiveIntensity: 0.4,
//     shininess: 0
// });
// var shape = new Mesh(geometry, material);
// scene.add(shape);



</script>