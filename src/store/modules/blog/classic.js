const {
  getSubscribe
} = require('@/api/classic')

const state = {
  articles: [{
    imgUrl: require('../../../assets/images/classic-1.jpeg'),
    alt: 'classic-1',
    title: 'Vestibulum posuere Nulla lobortis magna.',
    info: 'September 24,2019 -By John Handley- 12 Comments',
    contents: 'Placerat metus laoreet at Maecenas gravida erat eu ultrices luctus mi leo efficitur metusac condimentum elit tortor ut orci Nulla pharetra arcu non tristique hendrerit maecenas tincidunt convallis metus sit amet porta Integer venenatis elit.'
  }, {
    imgUrl: require('../../../assets/images/classic-2.jpeg'),
    alt: 'classic-2',
    title: 'Egestas massa elit commodo sapien erat.',
    info: 'September 25,2019 -By John Handley- 2 Comments',
    contents: 'Placerat metus laoreet at Maecenas gravida erat eu ultrices luctus mi leo efficitur metusac condimentum elit tortor ut orci Nulla pharetra arcu non tristique hendrerit maecenas tincidunt convallis metus sit amet porta Integer venenatis elit.'
  }, {
    imgUrl: require('../../../assets/images/classic-3.jpeg'),
    alt: 'classic-3',
    title: 'Consequat nisl dapibus volutpat purus sagitis.',
    info: 'September 26,2019 -By John Handley- 8 Comments',
    contents: 'Placerat metus laoreet at Maecenas gravida erat eu ultrices luctus mi leo efficitur metusac condimentum elit tortor ut orci Nulla pharetra arcu non tristique hendrerit maecenas tincidunt convallis metus sit amet porta Integer venenatis elit.'
  }, {
    imgUrl: require('../../../assets/images/classic-4.jpeg'),
    alt: 'classic-4',
    title: 'Faucibus lectus commodo est ultrices ultrices.',
    info: 'September 27,2019 -By John Handley- 10 Comments',
    contents: 'Placerat metus laoreet at Maecenas gravida erat eu ultrices luctus mi leo efficitur metusac condimentum elit tortor ut orci Nulla pharetra arcu non tristique hendrerit maecenas tincidunt convallis metus sit amet porta Integer venenatis elit.'
  }, ],
  // 图标
  icons: [{
      class: 'fa fa-facebook',
      url: 'https://facebook.com'
    }, {
      class: 'fa fa-twitter',
      url: 'https://twitter.com'
    },
    {
      class: 'fa fa-linkedin',
      url: 'https://linkedin.com'
    },
    {
      class: 'fa fa-google-plus',
      url: 'https://google.com'
    },
  ],
  // 分类
  categories: [{
    title: 'Journey',
    url: '/journey',
    count: 40
  }, {
    title: 'Photography',
    url: '/photography',
    count: 11
  }, {
    title: 'Lifestyle',
    url: '/lifestyle',
    count: 09
  }, {
    title: 'Food &Drinks',
    url: '/fooddrinks',
    count: 28
  }],
  // 欢迎程度
  populars: [{
    imgUrl: require('../../../assets/images/popular-1.jpeg'),
    alt: 'popular-1',
    title: 'Beautiful With Friends.',
    time: 'April 15 2019',
    url: '/popular-posts'
  }, {
    imgUrl: require('../../../assets/images/popular-2.jpeg'),
    alt: 'popular-2',
    title: 'Nature vaey cooling.',
    time: 'April 10 2019',
    url: '/nature-vaey-cooling'
  }, {
    imgUrl: require('../../../assets/images/popular-3.jpeg'),
    alt: 'popular-3',
    title: '15 Best Healthy Salad.',
    time: 'April 8 2019',
    url: '/healthy-salad'
  }, ],
  // 标签
  tags: [
    'Advertisement', 'Blog', 'Fashion', 'Inspiration', 'Smart Quotes', 'Conceptual', 'Artistry', 'Unique'
  ]
}

const mutations = {

}

const actions = {
  getSubscribe(context, val) {
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
    if (reg.test(val.email)) {
      getSubscribe({
        email: val.email
      }).then(res => {
        if (res.code === 200) {
          val.message({
            type: 'success',
            message: '订阅成功'
          })
        } else {
          val.message({
            type: 'error',
            message: '已成功订阅'
          })
        }
      }).catch(err => {
        val.message({
          type: 'error',
          message: '服务器错误'
        })
      })
    } else {
      val.message({
        type: 'error',
        message: '请检查你的邮箱是否正确!'
      })
    }
  }
}

module.exports = {
  state,
  mutations,
  actions
}
