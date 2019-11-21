<template>
  <div class="menus">
    <van-tabs swipeable type="line">
      <van-tab v-for="(item,index) in places" :key="index" :title="item">
        <waterfall
          :col="col"
          :width="itemWidth"
          :gutterWidth="gutterWidth"
          :data="waterfall"
          @loadmore="loadmore"
          class="list-container"
        >
          <template>
            <div class="units" v-for="(item,index) in waterfall" :key="index">
              <img :src="item.picture" alt class="widepic" />
              <span>{{item.title}}</span>
              <div class="uesrs">
                <img :src="item.userhead" alt />
                <div>
                  <span>{{item.user}}</span>
                  <span>{{item.content}}</span>
                </div>
              </div>
            </div>
          </template>
        </waterfall>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "menus",
  data() {
    return {
      data: [],
      col: 3,
      places: ["亚洲", "非洲", "北美洲", "南美洲", "南极洲", "欧洲", "大洋洲"],
      waterfall: [
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: "济州岛的汉拿山位于岛屿中央，是韩国最高的山峰...",
          picture: require("../assets/homepage/pic1.png"),
          userhead: require("../assets/homepage/user1.png")
        },
        {
          user: "Ada",
          content: "拜拜佛去去晦气！",
          title: "泰国清迈，千佛像特色建筑的矗立，不得不令人感叹...",
          picture: require("../assets/homepage/pic1 (2).png"),
          userhead: require("../assets/homepage/user2.png")
        },
        {
          user: "Ada",
          content: "下个冬天还要去！",
          title: "三亚让整个冬天都变得温暖了，私人别墅，尽享奢华......",
          picture: require("../assets/homepage/pic1 (3).png"),
          userhead: require("../assets/homepage/user3.png")
        },
        {
          user: "Ada",
          content: "可惜你不在！",
          title: "去日本看樱花，那是多麽浪漫的事呀！...",
          picture: require("../assets/homepage/pic1 (4).png"),
          userhead: require("../assets/homepage/user4.png")
        },
        {
          user: "Ada",
          content: "活火山，好刺激！",
          title: "富士山是日本国内最高峰，日本重要国家象征之一......",
          picture: require("../assets/homepage/pic1 (5).png"),
          userhead: require("../assets/homepage/user5.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: "买一张OPENBUS的车票，来一次纵贯越南南北的旅行，乘坐......",
          picture: require("../assets/homepage/pic1 (6).png"),
          userhead: require("../assets/homepage/user6.png")
        },
        {
          user: "Ada",
          content: "人民币的风景我喜欢。",
          title: "要呼吸更多氧气，找中国钱币上的风景，就得去桂林......",
          picture: require("../assets/homepage/pic1 (7).png"),
          userhead: require("../assets/homepage/user7.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: " 泸沽湖不只因为它是传说中的女儿国,更因为它是高原海子.....",
          picture: require("../assets/homepage/pic1 (8).png"),
          userhead: require("../assets/homepage/user7.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: " 泸沽湖不只因为它是传说中的女儿国,更因为它是高原海子....",
          picture: require("../assets/homepage/pic1 (9).png"),
          userhead: require("../assets/homepage/user6.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: "济州岛的汉拿山位于岛屿中央，是韩国最高的山峰...",
          picture: require("../assets/homepage/pic1 (3).png"),
          userhead: require("../assets/homepage/user5.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: "济州岛的汉拿山位于岛屿中央，是韩国最高的山峰...",
          picture: require("../assets/homepage/pic1.png"),
          userhead: require("../assets/homepage/user1.png")
        },
        {
          user: "Ada",
          content: "拜拜佛去去晦气！",
          title: "泰国清迈，千佛像特色建筑的矗立，不得不令人感叹...",
          picture: require("../assets/homepage/pic1 (2).png"),
          userhead: require("../assets/homepage/user2.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: "济州岛的汉拿山位于岛屿中央，是韩国最高的山峰...",
          picture: require("../assets/homepage/pic1.png"),
          userhead: require("../assets/homepage/user1.png")
        },
        {
          user: "Ada",
          content: "拜拜佛去去晦气！",
          title: "泰国清迈，千佛像特色建筑的矗立，不得不令人感叹...",
          picture: require("../assets/homepage/pic1 (2).png"),
          userhead: require("../assets/homepage/user2.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: "济州岛的汉拿山位于岛屿中央，是韩国最高的山峰...",
          picture: require("../assets/homepage/pic1.png"),
          userhead: require("../assets/homepage/user1.png")
        },
        {
          user: "Ada",
          content: "拜拜佛去去晦气！",
          title: "泰国清迈，千佛像特色建筑的矗立，不得不令人感叹...",
          picture: require("../assets/homepage/pic1 (2).png"),
          userhead: require("../assets/homepage/user2.png")
        },
        {
          user: "Ada",
          content: "明天年冬天还想去",
          title: "济州岛的汉拿山位于岛屿中央，是韩国最高的山峰...",
          picture: require("../assets/homepage/pic1.png"),
          userhead: require("../assets/homepage/user1.png")
        },
        {
          user: "Ada",
          content: "拜拜佛去去晦气！",
          title: "泰国清迈，千佛像特色建筑的矗立，不得不令人感叹...",
          picture: require("../assets/homepage/pic1 (2).png"),
          userhead: require("../assets/homepage/user2.png")
        }
      ],
      imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [] //存放每次滚动时下一批要加载的图片的数组
    };
  },
  methods: {
    scroll(scrollData) {},
    switchCol(col) {
      this.col = col;
    },
    loadmore(index) {
      const copy = [...this.waterfall];
      this.waterfall = this.waterfall.concat(copy);
    }
  },
  computed: {
    itemWidth() {
      return 118 * (document.documentElement.clientWidth / 375);
    },
    gutterWidth() {
      return 7 * (document.documentElement.clientWidth / 375);
    }
  }
  // components: { vueWaterfallEasy }
};
</script>
<style lang="less">

.menus {
  > .van-tabs {
    > .van-tabs__wrap {
      border-top: 0.01rem solid #dddddd;
      border-bottom: 0.01rem solid #dddddd;
      height: 0.5rem;
      margin-bottom: 0.2rem;
      > .van-tabs__nav {
        // background-color: #e8e6e6;
        background-color: #f0f0f0;
        > .van-tab {
          // width: 0.2rem;
          line-height: 0.5rem;
          flex-basis: 14% !important;
          > .van-ellipsis {
            font-size: 0.22rem;
          }
        }
      }
    }
  }
  .van-tabs__wrap--scrollable .van-tab {
    flex: 0 0 10%;
  }
  .van-tabs__content {
    .van-tab__pane {
      #vueWaterfall {
        padding-left: 0.08rem;
        .vue-waterfall-column {
          .units {
            // margin-top: 0.2rem;
            background-color: #ffffff;
            padding-bottom: 0.05rem;
            .widepic {
              width: 93%;
              padding-left: 0.08rem;
              padding-top: 0.08rem;
              display: block;

            }
            > span {
              font-size: 0.2rem;
              padding-left: 0.1rem;
              padding-top: 0.1rem;
              padding-bottom: 0.1rem;
              display: block;
            }
            .uesrs {
              display: flex;
              align-items: center;
              background-color: #e8e6e6;
              width: 97%;
              margin:0 auto;
              img {
                width: 0.39rem;
              }
              > div {
                padding-left: 0.1rem;
                span {
                  display: block;
                  font-size: 0.16rem;
                  &:last-child{
                    color: #999999;
                  }
                }

              }
            }
          }
        }
      }
    }
  }
}
</style>