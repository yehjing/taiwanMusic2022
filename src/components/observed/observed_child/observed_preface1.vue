<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>傳統音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《2022臺灣音樂年鑑》年度活動觀察與評介－傳統音樂篇，包含南管音樂、北管音樂、福佬歌謠、客家音樂、原住民音樂、佛教與釋教音樂、道教與法教音樂、釋奠樂領域之10篇專文，由專家學者針對其觀察活動之成果，輔以月曆記載所獲得之統計數據，進行專文撰寫。另本年度年鑑，對於南管音樂及北管音樂，進行了團體基礎概況的調查與分析，從下表子領域劃分，可見2022臺灣傳統音樂活動之多樣面貌。
    </p>
    <table rules="all" border="1" style="border: 1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td rowspan="11" width="94">
            <p>傳統音樂</p>
          </td>
          <td width="94">
            <p>類別</p>
          </td>
          <td width="364">
            <p>子領域</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4" width="94">
            <p>漢族音樂</p>
          </td>
          <td width="364">
            <p>南管音樂&nbsp;</p>
          </td>
        </tr>
        <tr>
          <td width="364">
            <p>北管音樂</p>
          </td>
        </tr>
        <tr>
          <td width="364">
            <p>福佬歌謠</p>
          </td>
        </tr>
        <tr>
          <td colspan="2" width="365">
            <p>客家音樂</p>
          </td>
        </tr>
        <tr>
          <td rowspan="3" width="94">
            <p>原住民音樂</p>
          </td>
          <td width="364">
            <p>賽夏族、阿美族、卑南族、雅美（達悟）族、太魯閣族、撒奇萊雅族</p>
          </td>
        </tr>
        <tr>
          <td width="364">
            <p>泰雅族、鄒族、邵族、布農族、噶瑪蘭族、賽德克族</p>
          </td>
        </tr>
        <tr>
          <td width="364">
            <p>排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族</p>
          </td>
        </tr>
        <tr>
          <td rowspan="3" width="94">
            <p>宗教與祀典音樂</p>
          </td>
          <td width="364">
            <p>佛教、釋教</p>
          </td>
        </tr>
        <tr>
          <td width="364">
            <p>道教、法教</p>
          </td>
        </tr>
        <tr>
          <td width="364">
            <p>釋奠樂</p>
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
