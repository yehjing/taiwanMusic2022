<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>流行音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png">
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《2022臺灣音樂年鑑》年度活動觀察與評介－流行音樂篇，將流行音樂的展演活動及出版獨立成項予以紀錄，由專家學者針對其活動成果撰寫年度評介。
    </p>
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
