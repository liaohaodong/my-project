<template>
  <div class="share">
    <div class="head">分享</div>
    <div class="exp-share">
      <div class="exp-share-head">
        <img src="../assets/homepage/recom.png" alt />
        <span>旅游经验分享</span>
      </div>
      <div class="exp-shares" id="bBox">
        <div class="sbox">
          <div class="cont1">
            <div>
              <ul>
                <li>
                  <div>
                    <p>作者：YoYo</p>
                  </div>
                  <div>
                    <p>作者: 浪子</p>
                  </div>
                </li>
                <li>
                  <p>作者: 飘~</p>
                </li>
                <li>
                  <div>
                    <p>作者: Maya</p>
                  </div>
                  <div>
                    <p>作者: 随风</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="cont2">
            <div>
              <ul>
                <li>
                  <p>作者: 娜娜</p>
                </li>
                <li>
                  <div>
                    <p>作者: Linda</p>
                  </div>
                  <div>
                    <p>作者: 微风</p>
                  </div>
                </li>
                <li>
                  <p>作者: 登山者</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sbox">
          <div class="cont1">
            <div>
              <ul>
                <li>
                  <div>
                    <p>作者：YoYo</p>
                  </div>
                  <div>
                    <p>作者: 浪子</p>
                  </div>
                </li>
                <li>
                  <p>作者: 飘~</p>
                </li>
                <li>
                  <div>
                    <p>作者: Maya</p>
                  </div>
                  <div>
                    <p>作者: 随风</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="cont2">
            <div>
              <ul>
                <li>
                  <p>作者: 娜娜</p>
                </li>
                <li>
                  <div>
                    <p>作者: Linda</p>
                  </div>
                  <div>
                    <p>作者: 微风</p>
                  </div>
                </li>
                <li>
                  <p>作者: 登山者</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-share">
      <div class="my-share-head">
        <img src="../assets/homepage/my-share.png" alt />
        <span>我的旅游经验分享</span>
      </div>
      <ul class="my-shares">
        <li>
          <span>1、泸沽湖自由行攻略</span>
          <span>
            <img src="../assets/homepage/cheerup.png" alt />
            <span>250人</span>
            <img src="../assets/homepage/contentallready.png" alt />
            <span>25人</span>
          </span>
        </li>
        <li>
          <span>2、海南跟团5日游心得体会</span>
          <span>
            <img src="../assets/homepage/cheerup.png" alt />
            <span>250人</span>
            <img src="../assets/homepage/contentallready.png" alt />
            <span>25人</span>
          </span>
        </li>
        <li>
          <span>3、泰国出国游自由行攻略</span>
          <span>
            <img src="../assets/homepage/cheerup.png" alt />
            <span>250人</span>
            <img src="../assets/homepage/contentallready.png" alt />
            <span>25人</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      col: 3,
      shares: [
        {
          img: require("../assets/homepage/share1.png"),
          user: "yoyo"
        },
        {
          img: require("../assets/homepage/share2.png"),
          user: "maya"
        },
        {
          img: require("../assets/homepage/share3.png"),
          user: "浪子"
        },
        {
          img: require("../assets/homepage/share4.png"),
          user: "yoyo"
        },
        {
          img: require("../assets/homepage/share5.png"),
          user: "随风"
        },
        {
          img: require("../assets/homepage/share6.png"),
          user: "飘儿"
        },
        {
          img: require("../assets/homepage/share7.png"),
          user: "微风"
        },
        {
          img: require("../assets/homepage/share8.png"),
          user: "linda"
        },
        {
          img: require("../assets/homepage/share9.png"),
          user: "登山者"
        },
        {
          img: require("../assets/homepage/share1.png"),
          user: "yoyo"
        },
        {
          img: require("../assets/homepage/share2.png"),
          user: "maya"
        },
        {
          img: require("../assets/homepage/share3.png"),
          user: "浪子"
        },
        {
          img: require("../assets/homepage/share4.png"),
          user: "yoyo"
        },
        {
          img: require("../assets/homepage/share5.png"),
          user: "随风"
        },
        {
          img: require("../assets/homepage/share6.png"),
          user: "飘儿"
        },
        {
          img: require("../assets/homepage/share7.png"),
          user: "微风"
        },
        {
          img: require("../assets/homepage/share8.png"),
          user: "linda"
        },
        {
          img: require("../assets/homepage/share9.png"),
          user: "登山者"
        }
      ]
    };
  },

  methods: {},
  computed: {},
  mounted() {
    var bBox = document.getElementById("bBox");
    var sbox = document.getElementsByClassName("sbox")[0];
    bBox.onscroll = function() {
      var _sH = bBox.scrollHeight;
      var _cH = bBox.clientHeight;
      var _sT = bBox.scrollTop;
      if (_sT + _cH === _sH) {
        var copyBox = sbox.cloneNode(true);
        bBox.appendChild(copyBox);
      }
    };
  }
};
</script>
<style lang="less">
.dis() {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.marginV() {
  margin: auto;
}
.smallBox() {
  width: 93%;
  height: 100%;
  .marginV();
  position: relative;
}
.share {
  padding-bottom: 0.96rem;
  .head {
    width: 100%;
    height: 0.96rem;
    background-color: #17b9e0;
    font-size: 0.28rem;
    color: white;
    text-align: center;
    line-height: 0.96rem;
  }
  .exp-share {

    background-color: #f0f0f0;
    .exp-share-head {
      display: flex;
      justify-content: left;
      align-items: center;
      padding-top: 0.33rem;
      margin-bottom: 0.2rem;
      border-bottom: 0.01rem solid #e0e0e0;
      img {
        width: 0.37rem;
        padding-left: 0.25rem;
      }
      span {
        font-size: 0.28rem;
      }
    }
    .exp-shares {
      width: 100%;
      height: 6.7rem;
      overflow: scroll;
      font-size: 0.18rem;
      margin-bottom: 0.2rem;
      .cont1 {
        margin-bottom: 0.2rem;
        >div{
          .smallBox();
           >ul {
             .dis();
          >li {
            width: 31.5%;
            list-style: none;
            height: 3.15rem;
            position: relative;
            > div {
              position: relative;
            }
            p {
              background: rgba(0, 0, 0, 0.2);
              font-size: 0.18rem;
              color: white;
              position: absolute;
              bottom: 0;
              width: 100%;
              margin: 0;
            }
            &:nth-of-type(1) {
              div:nth-of-type(1) {
                background: url(../assets/homepage/53.png) center/cover
                  no-repeat;
                height: 1.5rem;
                margin-bottom: 0.05rem;
              }
              div:nth-of-type(2) {
                background: url(../assets/homepage/56.png) center/cover
                  no-repeat;
                height: 1.6rem;
              }
            }
            &:nth-of-type(2) {
              background: url(../assets/homepage/54.png) center/cover no-repeat;
              height: 3.15rem;
            }
            &:nth-of-type(3) {
              div:nth-of-type(1) {
                background: url(../assets/homepage/57.png) center/cover
                  no-repeat;
                height: 1.1rem;
                margin-bottom: 0.05rem;
              }
              div:nth-of-type(2) {
                background: url(../assets/homepage/55.png) center/cover
                  no-repeat;
                height: 2rem;
              }
            }
          }
        }
        }
       
      }
      .cont2 {
      margin-bottom:0.1rem;
      > div {
        .smallBox();
        > ul {
          .dis();
          flex-wrap: wrap;
          > li {
            width: 31.5%;
            list-style: none;
            height: 3.15rem;
            position: relative;
            > div {
              position: relative;
            }
            p {
              background: rgba(0, 0, 0, 0.2);
              font-size: 0.18rem;
              color: white;
              position: absolute;
              bottom: 0;
              width:100%;
              margin: 0;

            }
            &:nth-of-type(1) {
              background: url(../assets/homepage/58.png) center/cover no-repeat;
              height: 3.15rem;
            }
            &:nth-of-type(2) {
              div:nth-of-type(1) {
                background: url(../assets/homepage/59.png) center/cover no-repeat;
                height: 1.5rem;
                margin-bottom: 0.05rem;
              }
              div:nth-of-type(2) {
                background: url(../assets/homepage/61.png) center/cover no-repeat;
                height: 1.6rem;
              }
            }
            &:nth-of-type(3) {
              background: url(../assets/homepage/60.png) center/cover no-repeat;
              height: 3.15rem;
            }
          }
        }
      }
    }
    }
  }
  .my-share {
    .my-share-head {
      display: flex;
      justify-content: left;
      align-items: center;
      padding-top: 0.23rem;
      padding-bottom: 0.14rem;
      background-color: #e8e6e6;
      border-bottom: 0.01rem solid #d4d4d4;

      img {
        width: 0.44rem;
        padding-left: 0.25rem;
      }
      span {
        font-size: 0.28rem;
      }
    }
    .my-shares {
      font-size: 0.24rem;
      li {
        padding-top: 0.27rem;
        padding-bottom: 0.15rem;
        border-bottom: 0.01rem solid #d4d4d4;
        background-color: #e8e6e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:first-child {
          padding-left: 0.26rem;
        }
        span:nth-child(2) {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>