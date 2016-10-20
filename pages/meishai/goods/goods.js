
Page({
  data:{
    current:0,
    slide:[],
    list:[],
    meiList:[],
    daList:[],
    meidaList:[],
    meihuList:[],

    loadingHidden:false,
    refreshHidden:true,
    loadmoreHidden:true,
    swiper:{
      current:0,
      duration:300
    }
  },
  onLoad:function(){
    var that=this;
    wx.request({
      url:'http://localhost/mock/goods-jing.json',
      header: {
        'Content-Type': 'application/json'
      },
      success:function(res){
        that.setData({
          slide:res.data.slide,
          list:res.data.list
        })
      }
    });
    wx.request({
      url:'http://localhost/mock/goods-mei.json',
      header: {
        'Content-Type': 'application/json'
      },
      success:function(res){
        that.setData({
          meiList:res.data.list
        })
      }
    });
    wx.request({
      url:'http://localhost/mock/goods-da.json',
      header: {
        'Content-Type': 'application/json'
      },
      success:function(res){
        // console.log(res.data);
        // console.log(res.data.list);
        that.setData({
          daList:res.data.list
        })
      }
    });
    wx.request({
      url:'http://localhost/mock/goods-meihu.json',
      header: {
        'Content-Type': 'application/json'
      },
      success:function(res){
        that.setData({
          meihuList:res.data.list
        })
      }
    })
  },
  switchSlider:function(e){
    this.setData({
      current:e.target.dataset.index,
      "swiper.current":e.target.dataset.index
    })
  },
  chanGoodsSlider:function(e){
    this.setData({
      current:e.detail.current
    })
  },
  actionToupper:function(){
    var that=this;
    this.setData({
      refreshHidden:false
    });
    wx.request({
      url:'http://localhost/mock/addGoods.json',

      header: {
        'Content-Type': 'application/json'
      },
      success:function(res){

        // var data = eval('('+res.data+')')
        console.log(res.data);
        setTimeout(function () {
            that.setData({
              meiList: res.data.list.concat(that.data.meiList),
              refreshHidden: true
            });
          }, 1500);
      }
    })
  },
  actionTolower:function(){
    var that=this;
    this.setData({
      loadmoreHidden:false
    });
    wx.request({
      url:'http://localhost/mock/loadmoreGoods.json',
      success:function(res){
        setTimeout(function(){
          that.setData({
            meiList:that.data.meiList.concat(res.data.list),
            loadmoreHidden:true
          })
        },1500);
      }
    });
  }


})
