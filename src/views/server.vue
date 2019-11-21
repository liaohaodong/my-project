<template>
  <div class="server">
    <div class="head">服务</div>
    <div class="grids">
      <div class="units" v-for="(item,index) in units" :key="index">
        <img :src="item.img" alt />
        <span class="text">{{item.text}}</span>
        <img src="../assets/homepage/arrow.png" alt style="padding-right:0.24rem" />
      </div>
    </div>
    <div class="forFun">
      <div class="forFun-head">
        <img src="../assets/homepage/forfun.png" alt />
        <span>吃喝玩乐</span>
      </div>
      <div class="items">
        <van-grid :column-num="4">
          <van-grid-item v-for="(item,index) in grids" :key="index">
            <img :src="item.back" alt />
            <span>{{item.text}}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="suggest">
        <img src="../assets/homepage/wait-content.png" alt="">
        <span>建议/意见</span>
        <img src="../assets/homepage/arrow.png" alt="" style="padding-right:0.24rem">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      units: [
        {
          img: require("../assets/homepage/train.png"),
          text: "订火车票"
        },
        {
          img: require("../assets/homepage/plane.png"),
          text: "订飞机票"
        },
        {
          img: require("../assets/homepage/hotial.png"),
          text: "订酒店"
        },
        {
          img: require("../assets/homepage/ticket.png"),
          text: "景区门票预订"
        }
      ],
      grids: [
        {
          back: require("../assets/homepage/back1.png"),
          text: "美食"
        },
        {
          back: require("../assets/homepage/back2.png"),
          text: "KTV"
        },
        {
          back: require("../assets/homepage/back3.png"),
          text: "娱乐"
        },
        {
          back: require("../assets/homepage/back4.png"),
          text: "休闲"
        },
        {
          back: require("../assets/homepage/back5.png"),
          text: "电影"
        },
        {
          back: require("../assets/homepage/back6.png"),
          text: "外卖"
        },
        {
          back: require("../assets/homepage/back7.png"),
          text: "酒店"
        },
        {
          back: require("../assets/homepage/back8.png"),
          text: "美容"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.server {
  .head {
      width: 100%;

    height: 0.96rem;
    background-color: #17b9e0;
    font-size: 0.28rem;
    color: white;
    text-align: center;
    line-height: 0.96rem;
   
  }
  .grids {
   
    .units {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 7.2rem;
      height: 0.6rem;
      background-color: #e8e6e6;
      margin-top: 0.1rem;
      position: relative;
      img:first-child {
        width: 0.35rem;
        padding-left: 0.34rem;
      }
      .text {
        font-size: 0.28rem;
        position: absolute;
        left: 0.81rem;
      }
    }
  }
  .forFun {
    padding-top: 0.43rem;
    .forFun-head {
      display: flex;
      justify-content: left;
      align-items: center;
      padding-bottom: 0.11rem;
      img {
        width: 0.35rem;
        padding-left: 0.34rem;
      }
      span {
        font-size: 0.28rem;
        padding-left: 0.12rem;
      }
    }
    .items {
      background-color: #e8e6e6;
      padding-bottom: 0.33rem;

      .van-grid {
        .van-grid-item {
          .van-grid-item__content {
            background-color: #e8e6e6;
            position: relative;
            padding-bottom: 0;
            img {
              width: 1.19rem;
            }
            span {
              font-size: 0.28rem;
              color: white;
              position: absolute;
            }
          }
        }
      }
    }
  }
  .suggest{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #e8e6e6;
      margin-top:0.19rem;
      height: 0.6rem;
      img:first-child{
        width: 0.35rem;
        padding-left: 0.34rem;
      }
      span{
          font-size: 0.28rem;
          position: absolute;
        left: 0.81rem;
      }
  }
}
</style>