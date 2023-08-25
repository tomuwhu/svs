/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        name: params.slug
    };
}
import './../../style.scss'
import './hljs/a11y-dark.css'