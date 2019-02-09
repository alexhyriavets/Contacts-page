import { prop } from 'ramda'

const errorMessagesMixin = {
  methods: {
    fieldErrors (name) {
      const errors = []
      const field = prop(name, this.$v)
      const messages = prop(name, this.$options.validationMessages)

      if (!field.$dirty) return errors
      if (messages) {
        Object.keys(messages).forEach(rule => {
          if (field[rule] === false && messages[rule]) {
            errors.push(messages[rule])
          }
        })
      }
      return errors
    }
  }
}

export default errorMessagesMixin
