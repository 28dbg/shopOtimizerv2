import './assets/main.css'

import { createApp } from 'vue';
import App from './AppView.vue';
import router from './router';

import { createI18n } from 'vue-i18n';
import ro from './translations/ro.json';
import en from './translations/en.json';
import hu from './translations/hu.json';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//import { createApp, h } from 'vue'
// import { createInertiaApp } from '@inertiajs/vue3'

// createInertiaApp({
//   resolve: name => {
//     const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
//     return pages[`./Pages/${name}.vue`]
//   },
//   setup({ el, App, props, plugin }) {
//     createApp({ render: () => h(App, props) })
//       .use(plugin)
//       .mount(el)
//   },
// })



const messages = {
    en: en,
    ro: ro,
    hu: hu,
};
const i18n= createI18n ({
    locale: 'ro',
    messages,
})

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(vuetify)
app.mount('#app')

