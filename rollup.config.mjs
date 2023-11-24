import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url"
import typescript from '@rollup/plugin-typescript';
import postcssImport from 'postcss-import';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from "./package.json" assert { type: "json" };

export default {
    input: "src/index.ts",
    output: {
        dir: "lib",
        sourcemap: true,
        format: "cjs"
    },
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: ['.ts', '.tsx'],
        }),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            extract: true,
            plugins: [
                // Inlines @import statements
                postcssImport(),
                // Inlines assets using base64 encoding
                postcssUrl({
                    url: "inline",
                }),
            ]
        }),
        babel({
            babelHelpers: "bundled",
            extensions: [".ts", ".tsx"],  // Compile our TypeScript files
            include: ["src/**/*.ts", "src/**/*.tsx"]
        })
    ],
    external: [...Object.keys(pkg.dependencies)]
};
