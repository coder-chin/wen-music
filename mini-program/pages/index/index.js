

Page({
  data: {
    
  },
  onLoad: async function() {
    const res = await request.get('/top/mv', {limit: 10})
    console.log(res)
  }
})
