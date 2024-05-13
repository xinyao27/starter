import { defineBuildConfig } from 'unbuild'
import pkg from './package.json'

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  rollup: { emitCJS: true },
  replace: {
    'process.env.VERSION': JSON.stringify(pkg.version),
  },
})
