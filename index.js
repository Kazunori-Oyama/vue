var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

var app2 = new Vue({
  el: '#app-2',
  data:{
    mydata:'I love Gin and Tonic'
  }
})

var app3 = new Vue({
  el:'#app-3',
  data:{
    iCanControlIt:false
  }
})

var app4 = new Vue({
  el:'#app-4',
  data:{
    todos:[
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})