<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem noLeaf" :class="activeName === '' ? 'active' :''" @click="clickLink('')">
        <span>團體及個人名錄</span>
        <img v-if="this.activeName === ''" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === ''">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs1" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template>
      <div class="middleItem noLeaf" :class="activeName === 'indexDir_01' ? 'active' :''" @click="clickLink('indexDir_01')">
        <span>重要音樂活動一覽表</span>
        <img v-if="activeName === 'indexDir_01'" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === 'indexDir_01'">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs2" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template>
      <div class="middleItem noLeaf" :class="activeName === 'indexDir_25' ? 'active' : ''"
        @click="clickLink('indexDir_25')">
        第三十三屆傳藝金曲獎入圍暨得獎名單
      </div>
      <!-- <div class="middleItem noLeaf" :class="activeName === 'indexDir_02' ? 'active' :''" @click="clickLink('indexDir_02')">
        <span>第三十三屆傳藝金曲獎入圍暨得獎名單</span>
        <img v-if="activeName === 'indexDir_02'" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === 'indexDir_02'">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs3" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template> -->
      <div class="middleItem noLeaf" :class="activeName === 'indexDir_26' ? 'active' : ''"
        @click="clickLink('indexDir_26')">
        南管音樂及北管音樂團體基礎概況調查表
      </div>
      <!-- <div class="middleItem noLeaf" :class="activeName === 'indexDir_03' ? 'active' :''" @click="clickLink('indexDir_03')">
        <span>南管音樂及北管音樂團體基礎概況調查表</span>
        <img v-if="activeName === 'indexDir_03'" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === 'indexDir_03'">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs4" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template> -->
    </aside>
    <div class="viewRight">
      <router-view></router-view>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from '../share.vue';
import { tabs1, tabs2 } from './indexDir_child/tab';

export default {
  components: {
    Share,
  },
  inject: ['initScroll'],
  data() {
    return {
      tabs1,
      tabs2,
      activeName: '',
      subActive: '',
    };
  },
  created() {
  },
  methods: {
    clickLink(data) {
      if (this.activeName === data) {
        this.activeName = 'a';
      } else {
        this.activeName = data;
        this.$router.push(`/indexDir/${data}`);
      }
    },
    changeView(tab) {
      this.$router.push(`/indexDir/${tab.path}`);
      this.subActive = tab;
      this.initScroll();
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
