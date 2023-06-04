<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>跨界音樂與其他</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png">
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《2022臺灣音樂年鑑》年度活動觀察與評介－跨界音樂與其他篇，為能深入觀察臺灣音樂的跨界現象，特將跨界音樂獨立成項。
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
