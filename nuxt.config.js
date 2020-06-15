export default {
    env: {
        apiBaseUrl: process.env.API_BASE_URL || 'https://api.laravuejobs.com/api/'
    },
    mode: 'universal',
    components: true,
    /*
     ** Headers of the page
     */
    head: {
        title: 'Fullstack Developer Jobs',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@shonaDesign' },
            { name: 'twitter:creator', content: '@shonaDesign' },
            { name: 'twitter:title', content: 'Make your career as a Fullstack Developer' },
            { name: 'twitter:description', content: 'Curated list of worldwide jobs for Laravel, VueJs, NuxtJs and TailwindCSS stack. Subscribe here to get regular updates on the job postings.' },
            { name: 'twitter:image', content: '/website.png' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/vue-placeholders.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',

        ['@nuxtjs/google-analytics', {
            id: 'UA-169367248-1'
        }]

    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxt/http',
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}