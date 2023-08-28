import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };

export default {
    input: "src/index.ts",
    output: {
        dir: "lib",
        sourcemap: true,
        format: "cjs"
    },
    plugins: [
        resolve({
            extensions: ['.ts', '.tsx'],
        }),
        postcss({
            modules: true,
        }),
        babel({
            babelHelpers: "bundled",
            extensions: [".ts", ".tsx"],  // Compile our TypeScript files
            include: ["src/**/*.ts", "src/**/*.tsx"]
        })
    ],
    external: [...Object.keys(pkg.dependencies)]
};
