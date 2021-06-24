const {
  sendMsg
} = require('@/api/contact')

const state = {
  // 这里是内容
  contents: ['Aenean sollicitudin quis bibendum auctor nisi elit consequat nec sagittis sem nibh id elit', 'Proin gravida nibh vel velit auctor Aenean sollicitudin adipisicing elit sed lorem quis', 'bibendum auctor.'],
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
    phone: "",
    content: "",
  },
}

const mutations = {

}

const actions = {
  async executeSendMsg(context, args) {
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
    if (args.form.email && args.form.phone && args.form.subject && args.form.name && reg.test(args.form.email)) {
      await sendMsg(args.form).then(res => {
        if (res.code === 200) {
          args.message({
            type: "success",
            message: "消息发送成功!",
          })
        } else if (res.code === 544) {
          args.message({
            type: 'error',
            message: '请检查发送的邮件内容包含了未被许可的信息，或被系统识别为垃圾邮件。请检查是否有用户发送病毒或者垃圾邮件'
          })
        }
      }).catch(err => {
        args.message({
          type: "error",
          message: "消息发送失败",
        })
      })
    } else {
      args.message({
        type: "error",
        message: "请完整填写表单.",
      });
    }
  }
}

module.exports = {
  state,
  mutations,
  actions
}
