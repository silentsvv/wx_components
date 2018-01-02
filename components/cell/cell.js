Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title: {
      type: String,
      value: 'default value',
    },

    placeholder: {
      type: String,
      value: 'default value'
    },

    type: {
      type: String,
      value: 'link'
    },

    link: {
      type: String,
      value: ''
    },

    showArrow: {
      type: Boolean,
      value: true
    },

    value: {
      type: String,
      value: ''
    },

    maxlength: {
      type: Number,
      value: ''
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    blurEvent(event) {
      let value = event.detail.value
      this.triggerEvent('blur', {value})
    },

    inputEvent(event) {
      let value = event.detail.value
      this.triggerEvent('input', {value})
    },

    focusEvent(event) {
      let value = event.detail.value
      this.triggerEvent('focus', {value})
    }
  }
})