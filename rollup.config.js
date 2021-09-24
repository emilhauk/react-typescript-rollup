import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    input: "src/index.tsx",
    output: {
        file: "dist/bundle.js",
        format: "es",
        sourcemap: true,
    },
    plugins: [
        nodeResolve({
            extensions: [".js"],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'development' ),
            preventAssignment: false,
        }),
        typescript(),
        commonjs(),
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({ watch: "dist" }),
    ]
};
