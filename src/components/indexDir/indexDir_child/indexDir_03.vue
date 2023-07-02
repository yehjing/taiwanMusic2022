<template>
  <div>
    <IndexDirPreface1/>
    <div v-for="tab in tabs" :key="tab.name" @click="changeView(tab)">
      <div class="title rwdTitle">
        <h2>{{ tab.name }}</h2>
        <!-- <span>{{tab.autor}}</span> -->
        <span class="isMobile" style="padding-left: 0;"><img style="width: 100%;height: 100%;object-fit: cover;" :src="tab.img" alt=""></span>
      </div>
      <hr>
      <!-- <component  v-if="currentTab.name === tab.name" :is="currentTab.component"/> -->
    </div>
  </div>
</template>

<script>
import IndexDirPreface1 from './indexDir_preface1.vue';
import IndexDir26 from './indexDir_26.vue';

import img1 from './../../../assets/videoTitle/1.jpg';


const tabs = [
  {
    name: '南管音樂及北管音樂團體基礎概況調查表',
    autor: '',
    component: IndexDir26,
    path: 'indexDir_26',
    img: img1
  },

];

export default {
  components: { IndexDirPreface1 },
  inject: ['initScroll'],
  data() {
    return {
      currentTab: tabs[0],
      tabs,
    };
  },
  created() {
    // this.$router.push(`observed/${this.tabs[0].name}`);
  },
  methods: {
    changeView(tab) {
      this.$router.push(`/indexDir/${tab.path}`);
      this.currentTab = tab;
      this.initScroll()
    },
  },
};
</script>
<style lang="scss" scoped>
.isMobile {
  @media (min-width: 992px) {
    display: none !important;
  }
  
}
</style>