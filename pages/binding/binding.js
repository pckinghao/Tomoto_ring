// pages/binding/binding.js
Page({
  data: {
    isBinding: true,
    account: '',
    passowrd: ''
  },
  goToSignUp() {
    this.setData({ isBinding: false })
  },
  goToBinding() {
    this.setData({ isBinding: true })
  },
  watchAccount(event) {
    let account = event.detail.value

  },
  watchPassword(event) {
    let password = event.detail.value
  }
})