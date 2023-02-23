import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

    /** tells what files to treat like components. **/
    extensions: ['.svelte', '.md'],

    /** sveltePreprocess processes sass, TS, etc. **/
    /** mdsvex is a markdown processor. **/
    preprocess: [
        sveltePreprocess(),
        mdsvex({
            extensions: ['.md']
        })
    ]
};

export default config;
