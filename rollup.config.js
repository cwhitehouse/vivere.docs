import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

export default [
  {
    input: "src/scripts/main.ts",
    output: [
      {
        file: "tmp/main.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      typescript(),
    ],
    watch: {
      include: [
        "src/scripts/**/*.js",
        "src/scripts/**/*.ts",
      ]
    }
  },
]
