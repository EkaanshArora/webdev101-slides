import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    html(code, ctx) {
      return {
        html: (code)
      }
    },
    // or other languages, key is the language id
  }
})