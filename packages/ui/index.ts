import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
  setup(_, nuxt) {
    // here we need to setup our components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'lib/components'),
        prefix: 'nx3',
      })
    })

    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('lib/plugins/helper.ts'))

    nuxt.options.css.push('animate.css')
  },
})
