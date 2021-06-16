const state = {
  // 导航
  navigators: [{
      name: 'HOME',
      url: '/',
      flag: true
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
      url: '/blog',
      flag: true
    },
    {
      name: 'CONTACT',
      url: '/contact'
    },
  ],
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
  picChoices: ['ALL', 'BRANDING', 'DESIGN', 'PHOTO', 'COFFEE']
}

const mutations = {

}

const actions = {

}

module.exports = {
  state,
  mutations,
  actions
}
