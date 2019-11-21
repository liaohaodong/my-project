<template >
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active" route >
      <van-tabbar-item to="/home">
        <!-- <img src="./assets/homepage/home.png"/> -->
        <img slot="icon" slot-scope="props" :src="props.active ? iconhome.active : iconhome.inactive" />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item name="hot" to="/hot">
        <!-- <img src="./assets/homepage/hot.png" alt style="width:0.25rem" /> -->
        <img slot="icon" slot-scope="props" :src="props.active ? iconhot.active : iconhot.inactive" />

        <span>热门</span>
      </van-tabbar-item>
      <van-tabbar-item name="server" to="/server">
        <!-- <img src="./assets/homepage/server.png" alt /> -->
        <img slot="icon" slot-scope="props" :src="props.active ? iconserver.active : iconserver.inactive" />

        <span>服务</span>
      </van-tabbar-item>
      <van-tabbar-item name="share" to="/share">
        <!-- <img src="./assets/homepage/share.png" alt /> -->
        <img slot="icon" slot-scope="props" :src="props.active ? iconshare.active : iconshare.inactive" />

        <span>分享</span>
      </van-tabbar-item>
      <van-tabbar-item name="my">
        <!-- <img src="./assets/homepage/my.png" alt /> -->
        <img slot="icon" slot-scope="props" :src="props.active ? iconmy.active : iconmy.inactive" />

        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      value: "",
      iconhome: {
        active: require('./assets/homepage/home-active.png'),
        inactive: require('./assets/homepage/home.png')
      },
      iconhot: {
        active: require('./assets/homepage/hot-active.png'),
        inactive: require('./assets/homepage/hot.png')
      },
      iconserver: {
        active: require('./assets/homepage/server-active.png'),
        inactive: require('./assets/homepage/server.png')
      },
      iconshare: {
        active: require('./assets/homepage/share-active.png'),
        inactive: require('./assets/homepage/share.png')
      },
      iconmy: {
        active: require('./assets/homepage/my.png'),
        inactive: require('./assets/homepage/my.png')
      },
    };
  }
};
</script>
<style lang="less">

html {
  font-size: 100px;
}
#app {
  width: 7.2rem;
}
.van-tabbar {
  height: 0.96rem;
  background-color: #d4d4d4;
  box-shadow: inset 0rem 0rem 0.01rem 0rem rgba(40, 40, 40, 0.75);
  opacity: 0.9;
  .van-tabbar-item {
    img {
      // display: block;
      margin: 0 auto;
    }
    span {
      display: block;
    }
  }
}
</style>