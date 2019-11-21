<template>
  <div class="home">
      <div class="title">
      <select name="area" id="area">
        <option value="绵阳">绵阳</option>
      </select>
      <van-search placeholder="输入你想去的地名" shape="round"/>
      <img src="../assets/homepage/saoyisao.png" alt="" class="saoyisao">
      <img src="../assets/homepage/xinxi.png" alt="" class="xinxi">
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img class="banner" src="../assets/homepage/banner.png" />
      </van-swipe-item>
    </van-swipe>
    <div class="centerRouters">
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <img src="../assets/homepage/guoneiyou.png" />
          <p>国内游</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/homepage/jinwaiyou.png" />
          <p>境外游</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/homepage/shengneiyou.png" />
          <p>省内游</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/homepage/zhoubianyou.png" />
          <p>周边游</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/homepage/qinziyou.png" />
          <p>亲子游</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/homepage/banliqianzheng.png" />
          <p>办理签证</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/homepage/huzhaobanli.png" />
          <p>护照办理</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/homepage/lvyouzhishi.png" />
          <p>旅游知识</p>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="hot-moving">
      <div class="hot-moving-title">
        热门活动
        <img src="../assets/homepage/hot-ico.png" alt />
      </div>
      <hr class="leaveLine" />
      <div class="places">
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <img src="../assets/homepage/maerdaifu5day.png" />
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/homepage/taiguoshaungfei6day.png" />
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/homepage/balidao7day.png" />
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/homepage/sanyashuangfei3day.png" />
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/homepage/shamengulangyu.png" />
          </van-grid-item>
          <van-grid-item>
            <img src="../assets/homepage/lijiangluda4day.png" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "../assets/homepage/banner.png",
        "../assets/homepage/banner.png",
        "../assets/homepage/banner.png"
      ]
    };
  }
};
</script>
<style lang="less">
.home {
  width: 7.2rem;
  .title {
  // margin-top: 0.5rem;
  width: 100%;
  height: 0.96rem;
  background-color: #17b9e0;
  position: fixed;
  z-index: 1;
  #area {
    border: none;
    color: white;
    background-color: #17b9e0;
    position: absolute;
    left: 0.25rem;
    top: 0.36rem;
  }
  .van-search {
    width: 3.67rem;
    height: 0.52rem;
    background-color: #17b9e0 !important;
    position: absolute;
    left: 1.61rem;
    top: 0.22rem;
  }
  .saoyisao{
    width: 0.47rem;
    position: absolute;
    right: 1.02rem;
    top: 0.28rem;
  }
  .xinxi{
    width: 0.42rem;
    position: absolute;
    right: 0.26rem;
    top:0.27rem;
  }
}
  .van-swipe {
    width: 100%;
    transform: translateZ(0);
    padding-top:0.96rem;
    .van-swipe-item {
      width: 100%;
      .banner {
        width: 100%;
      }
    }
    .van-swipe__indicators {
      bottom: 22px;
      .van-swipe__indicator {
        width: 0.76rem;
        height: 0.04rem;
        background-color: #c4c4c4;
        opacity: 0.8;
        border-radius: 0;
      }
      .van-swipe__indicator--active {
        background-color: #0383a2;
      }
    }
  }
  .centerRouters {
    background-color: #e8e6e6;
    padding-bottom: 0.2rem;
    .van-grid-item__content {
      padding: 0.18rem 0.08rem 0 0.08rem;
      background-color: #e8e6e6;
    }
    img {
      width: 1.19rem;
      height: 1.19rem;
      display: block;
    }
    p {
      font-size: 0.26rem;
      margin: 0 0;
      padding-top: 0.1rem;
    }
  }
  .hot-moving {
    padding-top: 0.2rem;
    padding-bottom: 0.96rem;
    .hot-moving-title {
      font-size: 0.28rem;
      padding-left: 0.22rem;
      font-weight: 800;
      position: relative;
      img {
        width: 0.33rem;
        position: absolute;
        top: 0.05rem;
      }
    }
    .leaveLine {
      margin: 0.07rem 0 0 0;
      color: #8c8c8c;
    }
    .places {
      .van-grid {
        .van-grid-item {
          .van-grid-item__content {
            padding: 0.08rem 0.07rem;
          }
          img {
            width: 2.12rem;
          }
        }
      }
    }
  }
}
</style>