const state = {
  // 这里是内容
  contents: ['Aenean sollicitudin quis bibendum auctor nisi elit consequat nec sagittis sem nibh id elit', 'Proin gravida nibh vel velit auctor Aenean sollicitudin adipisicing elit sed lorem quis', 'bibendum auctor.'],
  reg: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
  showContents: [{
    imgUrl: require('../../assets/images/contact-1.png'),
    alt: 'content-1',
    title: 'Office Address',
    content: '4514 West Street Helena',
  }, {
    imgUrl: require('../../assets/images/contact-2.png'),
    alt: 'content-2',
    title: 'Phone Number',
    content: '+86 13170032175',
  }, {
    imgUrl: require('../../assets/images/contact-3.png'),
    alt: 'content-3',
    title: 'Office Website',
    content: 'eternalcoder.top',
  }, ],
  form: {
    name: "",
    email: "",
    subject: "",
    password: "",
    content: "",
  },
}

const mutations = {
  executeSendMsg(state, obj) {
    if (obj.form.email && obj.form.password && state.reg.test(obj.form.email)) {
      obj.message({
        type: "success",
        message: "消息发送成功!",
      });
    } else {
      obj.message({
        type: "error",
        message: "邮箱或密码错误(未填写)",
      })
    }
  }
}

const actions = {

}

module.exports = {
  state,
  mutations,
  actions
}
