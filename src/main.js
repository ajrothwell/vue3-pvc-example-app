import { createApp } from 'vue'
import { createStore } from 'vuex'

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
  .mount('#app')