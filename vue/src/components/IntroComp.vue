<template>
  <div class="content">
      <canvas class="scene scene--full" id="scene" ref="sceneCanvas"></canvas>
      <div class="content__inner">
        <h2 class="content__title">مؤشر المعلوماتية</h2>
        <div class="content-button mt-2">
          <button @click="openMenu" class="btn btn-relief-primary btn-large menu-trigger display-5"><i
              data-feather='menu'></i> القائمة</button>
        </div>
      </div>
    </div>
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
import * as THREE from 'three'
import { noise } from 'perlin'
import { gsap } from "gsap"
import anime from "animejs"
export default {
  props: {
    childOpenfunc: Function
  },
  methods: {
    openMenu() {
      this.childOpenfunc()
    }
  },
  mounted: function () {
    var canvas = this.$refs.sceneCanvas;
    var height = canvas.offsetHeight;
    var width = canvas.offsetHeight;

    var renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x161d31);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
    camera.position.set(120, 0, 300);

    var light = new THREE.HemisphereLight(0xffffff, 0x0C056D, 0.6);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x590D82, 0.5);
    light.position.set(100, 300, 400);
    scene.add(light);
    var light2 = light.clone();
    light2.position.set(-100, 300, 400);
    scene.add(light2);

    // Material
    var material = new THREE.MeshPhongMaterial({
      emissive: 0x23f660,
      emissiveIntensity: 0.4,
      shininess: 0
    });

    // new

    //const geometry = new THREE.BufferGeometry();
    var geometry = new THREE.IcosahedronGeometry(75,1);

    // const vertex = new THREE.Vector3();
    // for (var i = 0; i < geometry.attributes.position.count; i++) {
    //   var vector = vertex.fromBufferAttribute(geometry.attributes.position, i);
    //   vector._o = vector.clone();
    // }

    // function updatVertices(a) {
    //   var count = geometry.attributes.position.count;
    //   for (var i = 0; i < count; i++) {
    //     var vector = vertex.fromBufferAttribute(geometry.attributes.position, i);
    //     vector.copy(vector._o);
    //     var perlin = noise.simplex3(
    //       (vector.x * 0.006) + (a * 0.0002),
    //       (vector.y * 0.006) + (a * 0.0003),
    //       (vector.z * 0.006)
    //     );
    //     var ratio = ((perlin * 0.4 * (mouse.y + 0.3)) + 0.9);
    //     vector.multiplyScalar(ratio);
    //   }
    //   geometry.attributes.position.needsUpdate = true;
    // }

    var mouse = new THREE.Vector2(0.8, 0.5);
    function onMouseMove(e) {
      gsap.duration(mouse, 0.8, {
        y: (e.clientY / height),
        x: (e.clientX / width),
        ease: "power1.easeOut"
      });
    }

    var Ico = new THREE.Mesh(geometry, material);
    // new

    // var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(120, 4), material);
    Ico.rotation.z = 0.5;
    scene.add(Ico);

    function update() {
      Ico.rotation.x += 2 / 100;
      Ico.rotation.y += 2 / 100;
    }

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      // updatVertices(render)
      update();
      // window.addEventListener("mousemove", onMouseMove);
      // var resizeTm;
      // window.addEventListener("resize", function () {
      //   resizeTm = clearTimeout(resizeTm);
      //   resizeTm = setTimeout(onResize, 200);
      // });
    }

    function onResize() {
      canvas.style.width = '';
      canvas.style.height = '';
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    render();
  },
}
</script>