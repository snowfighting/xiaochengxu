Page({
  data:{
    slide:[],
    list:[]
  },
  onLoad:function(){
    var that=this;
    wx.request({
      url:'http://localhost/mock/weifare.json',
      header: {
          'Content-Type': 'application/json'
      },
      success:function(res){
        that.setData({
          slide:res.data.slide,
          list:res.data.list
        })
      }
    })
  }

})
