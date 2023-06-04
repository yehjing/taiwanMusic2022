<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>藝術（當代創作）音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《2022臺灣音樂年鑑》年度活動觀察與評介－藝術（當代創作）音樂篇，以本年度藝術原創性音樂為對象，分為如下表所顯示的國樂、西樂及混合編制兩個項目探討。內容針對當代音樂作品的創作、展演、研究等，進行了量化的統計分析，並附有國人新創樂曲與首演時間一覽表。</p>
    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td rowspan="2">
            藝術（當代創作）音樂
          </td>
          <td>
            國樂
          </td>
        </tr>
        <tr>
          <td>
            西樂及混合編制
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>
