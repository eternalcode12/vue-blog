const router = require('../../router/index')

const state = {
  // 导航
  navigators: [{
      name: 'HOME',
      url: '/',
    },
    {
      name: 'ABOUT',
      url: '/about'
    },
    {
      name: 'SERVICES',
      url: '/service'
    },
    {
      name: 'BLOG',
      url: '',
      flag: true
    },
    {
      name: 'CONTACT',
      url: '/contact'
    },
  ],
  // blog 自路由
  blogChild: [{
    url: '/blog-classic',
    name: 'CLASSIC'
  }, {
    url: '/blog-single',
    name: 'SINGLE'
  }, {
    url: '/blog-grid',
    name: 'GRID'
  }],
  // 联系方式
  fontIcons: [{
      icon: 'fa-facebook',
      url: 'https://facebook.com'
    }, {
      icon: 'fa-twitter',
      url: 'https://twitter.com'
    },
    {
      icon: 'fa-dribbble',
      url: 'https://dribbble.com'
    },
    {
      icon: 'fa-instagram',
      url: 'https://instagram.com'
    },
    {
      icon: 'fa-google-plus',
      url: 'https://google.com'
    }
  ],
  // 图片墙
  picChoices: ['ALL', 'BRANDING', 'DESIGN', 'PHOTO', 'COFFEE'],
  // 图片导航链接判断
  bottomLine: 0,
  // 图片
  pics: [
    [{
        url: require('@/assets/images/img-1.png'),
        alt: 'img-1.png',
        title: 'Branding',
        content: 'NONSENSICAL CONTENT'
      }, {
        url: require('@/assets/images/img-2.png'),
        alt: 'img-2.png',
        title: 'Card',
        content: 'THEREFORE ALWAYS'
      },
      {
        url: require('@/assets/images/img-4.png'),
        alt: 'img-4.png',
        title: 'Card',
        content: 'SOMETIME ACTIVE'
      }
    ],
    [{
      url: require('@/assets/images/img-8.png'),
      alt: 'img-8.png',
      title: 'Coffee',
      content: 'PAGEMAKER INCLUDING'
    }, {
      url: require('@/assets/images/img-7.png'),
      alt: 'img-7.png',
      title: 'Bottle',
      content: 'THEREFORE ALWAYS'
    }],
    [{
        url: require('@/assets/images/img-5.png'),
        alt: 'img-5.png',
        title: 'Lebles',
        content: 'SOMETIME ACTIVE'
      }, {
        url: require('@/assets/images/img-6.png'),
        alt: 'img-6.png',
        title: 'Pepers',
        content: 'THEREFORE ALWAYS'
      },
      {
        url: require('@/assets/images/img-3.png'),
        alt: 'img-3.png',
        title: 'Milk',
        content: 'SOMETIME ACTIVE'
      }
    ],
  ],
  // 判断是否滚动并设置对应样式
  flag: false,
  // footer 的联系图标
  footerIcons: [{
    icon: 'fa-paper-plane-o',
    text: 'eternalcoder@163.com'
  }, {
    icon: 'fa-mobile',
    text: '13170032175'
  }, {
    icon: 'fa-globe',
    text: 'eternalcoder.top'
  }],
}

const mutations = {
  updateBottomLine(state, index) {
    state.bottomLine = index
  },
  updateAddBottomShadowFlag(state, val) {
    state.flag = val
  },
  toGoBackHome(state, router) {
    router.push('/')
  }
}

const actions = {

}

module.exports = {
  state,
  mutations,
  actions
}
