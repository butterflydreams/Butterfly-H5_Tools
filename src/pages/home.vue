<style lang="less" scoped>
.home {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #a9bdff;
  font-size: 0;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  h1 {
    font-size: 32px;
    font-weight: 900;
  }
  h2 {
    font-size: 24px;
    font-weight: 800;
  }
  h3 {
    font-size: 18.72px;
    font-weight: 700;
  }
  h4 {
    font-size: 16px;
    font-weight: 600;
  }
  h5 {
    font-size: 13.28px;
    font-weight: 500;
  }
  h6 {
    font-size: 12px;
    font-weight: 400;
  }
  .btn-button {
    position: relative;
    margin: 100px auto;
    width: 100%;
    .button {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 150px;
      height: 80px;
      background-image: linear-gradient(90deg, #2cd3d7 0%, #2acf6f 100%);
      line-height: 80px;
      letter-spacing: 0;
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      color: #ffffff;
    }
  }
}
</style>

<template>
  <section class="home">
    <h1>h1: Hi, guys! This’s a tools page!</h1>
    <h2>h2: This is h2 data.</h2>
    <h3>h3: This is h3 data.</h3>
    <h4>h4: This is h4 data.</h4>
    <h5>h5: This is h5 data.</h5>
    <h6>h6: This is h6 data.</h6>
    <div class="btn-button">
      <a class="button" href="javascript:;" @click="OnButtonClick">Click Me!</a>
    </div>
  </section>
</template>

<script setup lang="ts">
const OnButtonClick = function () {
  console.log("You have clicked a button!");
  alert("You have clicked a button!");
};
</script>
