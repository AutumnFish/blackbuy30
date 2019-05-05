<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <el-carousel height="330px">
                  <el-carousel-item v-for="item in imglist" :key="item.id">
                    <img :src="item.thumb_path" alt class="slider-img">
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number
                          v-model="num"
                          :min="1"
                          :max="goodsinfo.stock_quantity"
                          label="描述文字"
                        ></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;" @click="showDesc=true" :class="{selected:showDesc}">商品介绍</a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      @click="showDesc=false"
                      :class="{selected:!showDesc}"
                    >商品评论</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content entry" v-show="showDesc" v-html="goodsinfo.content"></div>
              <div class="tab-content" v-show="!showDesc">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(item, index) in comments" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.add_time}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <!-- 分页器 -->
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="pageIndex"
                      :page-sizes="[5, 10, 15, 18]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalcount"
                      background
                    ></el-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(item, index) in hotgoodslist" :key="index">
                    <div class="img-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+item.id">
                        <img :src="item.img_url">
                      </router-link>
                      <!-- </a> -->
                    </div>
                    <div class="txt-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+item.id">{{item.title}}</router-link>
                      <!-- </a> -->
                      <span>{{item.add_time | formatTime}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";
// 导入mement
// import moment from "moment";
export default {
  name: "detail",
  data() {
    return {
      // 商品详情
      goodsinfo: {},
      // 热卖商品
      hotgoodslist: [],
      // 图片
      imglist: [],
      // 购买数量
      num: 1,
      // 是否显示描述
      showDesc: true,
      // 页码
      pageIndex: 1,
      // 页容量
      pageSize: 10,
      // 评论数据
      comments: [],
      // 总数
      totalcount: 0
    };
  },
  // 方法
  methods: {
    // 获取评论的方法
    getComments() {
      this.$axios
        .get(
          `site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${
            this.pageIndex
          }&pageSize=${this.pageSize}`
        )
        .then(res => {
          // console.log(res);
          this.totalcount = res.data.totalcount;
          this.comments = res.data.message;
        });
    },
    // 页容量改变
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // 保存页码
      this.pageSize = val;
      // 重新获取数据
      this.getComments();
    },
    // 当前页改变
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      // 修改页码
      this.pageIndex = val;
      // 重新获取数据
      this.getComments();
    }
  },
  created() {
    // console.log(this.$route)
    // console.log(this.$route.params.id)
    // 获取详情数据
    this.$axios
      .get(`/site/goods/getgoodsinfo/${this.$route.params.id}`)
      .then(res => {
        // console.log(res);
        this.goodsinfo = res.data.message.goodsinfo;
        this.hotgoodslist = res.data.message.hotgoodslist;
        this.imglist = res.data.message.imglist;
      });

    // 获取评论数据
    this.getComments();
  },
  // 侦听器
  watch: {
    "$route.params.id"(nw) {
      // 重新获取商品详情
      this.$axios.get(`/site/goods/getgoodsinfo/${nw}`).then(res => {
        // console.log(res);
        this.goodsinfo = res.data.message.goodsinfo;
        this.hotgoodslist = res.data.message.hotgoodslist;
        this.imglist = res.data.message.imglist;
      });

      // 获取 评论
      this.getComments();
    }
  }
  // 过滤器
  // filters: {
  //   formatTime(value) {
  //     // return value.split('T')[0]
  //     // 使用moment处理时间
  //     return moment(value).format("YYYY年MM月DD日");
  //     // return moment(value).format('YYYY年MM月DD日HH时mm分ss秒')
  //   }
  // }
};
</script>

<style>
.tab-content img {
  display: block;
  width: 100%;
}
.pic-box {
  width: 395px;
}
.pic-box .slider-img {
  height: 100%;
}
</style>
