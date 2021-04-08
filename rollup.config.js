import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import babel from 'rollup-plugin-babel';

export default {
  input: "./src/index.ts",
    output: {
        file: 'build/index.js',
        format: 'esm'
    },

  plugins: [
    typescript({ inlineSourceMap: true }),
      babel({
          exclude: 'node_modules/**'
      }),
      resolve(),
  ],
}