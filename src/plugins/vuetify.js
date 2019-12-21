import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
export default new Vuetify(
    {theme: {
    themes: {
      light: {
        primary: '#e91e63',
        secondary: '#9c27b0',
        accent: '#673ab7',
        error: '#3f51b5',
        warning: '#2196f3',
        info: '#03a9f4',
        success: '#00bcd4'

      },
    },
  },
});

