<template>
  <div class="hot">
    <div class="head">热门</div>
    <van-tabs type="card" title-inactive-color="black" class="main">
      <van-tab title="国际">
        <menus class="menus" />
      </van-tab>
      <van-tab title="国内">内容 2</van-tab>
      <van-tab title="随心游">内容 3</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import menus from "../components/menus";
export default {
  data() {
    return {
      avtive: 0
    };
  },
  components: {
    menus
  }
};
</script>
<style lang="less">
.rem(@name, @px) {
  @{name}: unit(round(@px / 200, 2), rem);
}
.hot {
  background-color: #f0f0f0;
  padding-bottom: 0.96rem;
  .head {
    width: 100%;
    height: 0.96rem;
    background-color: #17b9e0;
    text-align: center;
    line-height: 0.96rem;
    font-size: 0.28rem;
    color: white;
  }
  .van-tabs__line {
    background-color: #17b9e0;
  }
  .main {
    margin-top: 0.2rem;
    > .van-tabs__wrap {
      > .van-tabs__nav {
        border: none;
        height: 0.39rem;
        background-color: #e8e6e6;
        > .van-tab {
          width: 2rem;
          background-color: #66ccff;
          border-radius: 0.06rem;
          border: none;
          > .van-ellipsis {
            line-height: 0.39rem;
          }
        }
        > .van-tab:nth-child(2) {
          margin: 0 0.36rem;
        }
      }
    }
    .menus{
      overflow: hidden;
    }
  }

}
</style>