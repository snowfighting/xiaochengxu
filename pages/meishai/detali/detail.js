Page({
  data:{
    id:0,
    jId:0,
    list:[]
  },
  onLoad:function(params){
    var that = this;
    this.setDate({
      id:params.id
    });
    wx.request({
      url: 'http://localhost/mock/detailId.json',
      success:function(res){
        that.setDate({
          jId:res.data.id
        })
      }
    })
  },
  onReady: function(){
    console.log(jId);
    var that = this;
    wx.request({
      url: 'http://localhost/mock/'+jId,
      success:function(res){
        console.log(res.data);
        that.setDate({
          list:res.data.data
        })
      }
    })
  }
})
