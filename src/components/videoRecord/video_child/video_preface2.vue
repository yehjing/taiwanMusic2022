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
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2022年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2022臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2022臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄53支臺灣音樂影音紀錄，其中藝術（當代創作）篇共收錄8支影片。
    </p>
    <table rules="all" border="1" style="border: 1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td width="94">
            <p>子領域</p>
          </td>
          <td width="47">
            <p>序號</p>
          </td>
          <td width="412">
            <p>標題名稱</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>國樂</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>臺南市民族管絃樂團2022年度回顧</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>臺中市國樂團「花開四十－臺中市國樂團40週年團慶音樂會」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>臺灣國樂團「絃舞鏗鏘」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>臺北市立國樂團創作首演集錦剪輯</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>西樂及混合編制</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>力晶2022藝文饗宴「許博允創作生涯六十週年」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>臺北市立交響樂團「交響臺北2022－錢南章第五號交響曲」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>
              福爾摩沙合唱團「陳泗治逝世三十周年紀念音樂會－上帝與家園的浪漫」
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>亞洲作曲家聯盟台灣總會「音樂臺灣2022作曲聯展 臺中場」</p>
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
