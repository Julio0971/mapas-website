import { createVuetify } from 'vuetify'
import { en, es } from 'vuetify/locale'
import { aliases, fa } from 'vuetify/iconsets/fa'

import 'vuetify/styles'
import '../assets/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'

export const vuetify = createVuetify({
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
        },
    },
    theme: {
        defaultTheme: 'system',
        themes: {
            dark: {
                dark: true,
                colors: {
                    info: '#007bff',
                    primary: '#611232',
                    surface: '#FFFFFF',
                    secondary: '#6354FF'
                    // error: '#A22C29',
                    // success: '#7AC74F',
                    // surface: '#32292F',
                }
            },
            light: {
                dark: false,
                colors: {
                    info: '#007bff',
                    primary: '#611232',
                    surface: '#080713',
                    secondary: '#6354FF'
                    // info: '#3C4F76',
                    // error: '#A22C29',
                    // success: '#7AC74F',
                    // surface: '#F7F7FF',
                    // background: '#3C4F76',
                }
            },
        },
    },
    locale: {
        locale: 'es',
        fallback: 'en',
        messages: { es, en },
    },
})