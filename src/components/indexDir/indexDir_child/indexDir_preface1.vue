<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>附錄</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png">
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;為落實年鑑的實用性與方便性，《2022臺灣音樂年鑑》以「團體及個人名錄」及「重要音樂活動一覽表」彙整各領域的重要人物、團體及音樂活動共1,053筆，以及2022年舉辦之「第三十三屆傳藝金曲獎」入圍暨得獎名單及「南管音樂及北管音樂團體基礎概況調查表」，期能提供後續研究及未來各種用途的查考。</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
