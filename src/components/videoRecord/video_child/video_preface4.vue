<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>跨界音樂與其他</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2022年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2022臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2022臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄53支臺灣音樂影音紀錄，其中跨界音樂其他篇收錄4支影片。
    </p>

    <table rules="all" style="border:1px solid" cellpadding="5">
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
            <p>跨界音樂與其他</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>
              普琈門PERFORMER樂團「2022世界音樂節@臺灣&mdash;媒合展演」〈思〉
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>三個人「2022新點子劇場－《催化效應－融・共感》」</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>西尤島融合樂團《日光海岸－西塔琴音吟遊現場Ex》</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>4</p>
          </td>
          <td width="412">
            <p>新古典室內樂團《文學音樂劇場－笠山之歌》</p>
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
