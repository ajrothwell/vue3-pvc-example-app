import { createApp } from 'vue';
import { createStore } from 'vuex';

import i18n from './i18n';

import axios from 'axios';
import myCreateStore from './myStore';
import configMixin from './util/config-mixin';
import mergeDeep from './util/merge-deep';
import config from './config.js';
console.log('config:', config);

import './styles.css'
import '../node_modules/phila-standards/dist/css/phila-app.min.css';
import App from './App.vue'

let myStore = myCreateStore(config)
const store = createStore(myStore);

createApp(App)
  .use(store)
  .use(configMixin, config)
  .use(i18n())
  .mount('#application')