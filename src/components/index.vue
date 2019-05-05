<template>
  <!-- 拷贝 \黑买买买买素材\项目中用到的静态页面资源\02-商品列表\01-商品列表.html 到这里-->
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>电脑办公</span>
                    <p>
                      <span>电脑整机&nbsp;</span>
                      <span>外设产品&nbsp;</span>
                      <span>办公打印&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">电脑办公</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">电脑整机</a>
                        <a href="/goods/43.html">外设产品</a>
                        <a href="/goods/43.html">办公打印</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>影音娱乐</span>
                    <p>
                      <span>平板电视&nbsp;</span>
                      <span>音响DVD&nbsp;</span>
                      <span>影音配件&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">影音娱乐</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">平板电视</a>
                        <a href="/goods/43.html">音响DVD</a>
                        <a href="/goods/43.html">影音配件</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>服装类</span>
                    <p>
                      <span>男装&nbsp;</span>
                      <span>女装&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">服装类</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">男装</a>
                        <a href="/goods/43.html">女装</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <!-- 饿了么ui的 走马灯替换  trigger="click" 点击切换-->
            <el-carousel height="341px" trigger="click">
              <el-carousel-item v-for="item in sliderlist" :key="item.id">
                <img class="slider-img" :src="item.img_url" alt>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--/幻灯片 -->
          <!-- 热卖 -->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item, index) in toplist" :key="index">
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{item.title}}</a>
                  <span>{{item.add_time | formatTime}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 下面的是区域数据 -->
    <div class="section" v-for="(item, index) in sectionList" :key="index">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <a
            v-for="(it, i) in item.level2catelist"
            :key="i"
            href="/goods/43.html"
          >{{it.subcatetitle}}</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(it, i) in item.datas" :key="i">
              <!-- <a href="#/site/goodsinfo/87" class> -->
              <!-- <router-link to="/detail"> -->
              <!-- 动态的拼接id -->
              <router-link :to="'/detail/'+it.artID">
                <div class="img-box">
                  <img :src="it.img_url">
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
                <!-- </a> -->
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";
// 导入mement
import moment from "moment";
export default {
  // vue-chrome插件中 可以看到name属性
  // 作用是利于调试
  name: "index",
  data() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
      // 底部区域数据
      sectionList: []
    };
  },
  // 数据获取
  created() {
    this.$axios
      .get("http://111.230.232.110:8899/site/goods/gettopdata/goods")
      .then(res => {
        // console.log(res);
        this.catelist = res.data.message.catelist;
        this.sliderlist = res.data.message.sliderlist;
        this.toplist = res.data.message.toplist;
      });

    // 底部数据
    this.$axios
      .get("http://111.230.232.110:8899/site/goods/getgoodsgroup")
      .then(res => {
        // console.log(res);
        this.sectionList = res.data.message;
      });
  },

  // 过滤器
  filters: {
    formatTime(value) {
      // return value.split('T')[0]
      // 使用moment处理时间
      return moment(value).format("YYYY年MM月DD日");
      // return moment(value).format('YYYY年MM月DD日HH时mm分ss秒')
    }
  }
};
</script>

<style>
.slider-img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
