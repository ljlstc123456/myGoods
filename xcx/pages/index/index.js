Page({
  data: {
    imgUrls: [
'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  goMap(){
    wx.navigateTo({
      url: '../map/map'
    })
  },
  preview(event){
    wx.previewImage({
      current: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', // 当前显示图片的http链接
      urls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'] // 需要预览的图片http链接列表
    })
  }
})