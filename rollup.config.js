import sveltePreprocess from 'svelte-preprocess';
import svelte from 'rollup-plugin-svelte'
export default {
    plugins: [
        svelte({
            preprocess: sveltePreprocess(),
            onwarn: (warning, handler) => {
                const { code } = warning;
                if (code === "css-unused-selector") return
                handler(warning)
            },
            css: css => {
                css.write('public/bundle.css')
            }
        })
    ]
}