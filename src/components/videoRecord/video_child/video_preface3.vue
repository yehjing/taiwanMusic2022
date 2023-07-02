<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>流行音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2022年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2022臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2022臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄53支臺灣音樂影音紀錄，其中流行音樂篇收錄3支影片。
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
          <td rowspan="3" width="94">
            <p>流行音樂</p>
          </td>
          <td width="47">
            <p>1</p>
          </td>
          <td width="412">
            <p>
              依拜維吉Ipay Buyci〈1234 qutux, saying, tyugan, payat〉官方版MV
            </p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>2</p>
          </td>
          <td width="412">
            <p>2022搖滾臺中、雷霆電司音樂祭</p>
          </td>
        </tr>
        <tr>
          <td width="47">
            <p>3</p>
          </td>
          <td width="412">
            <p>臺南市政府「再見阿文哥－文夏紀念音樂會」</p>
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
