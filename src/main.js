import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faUserSecret,
  faPaperPlane,
  faLocationDot,
  faEnvelope,
  faPhone,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { 
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faPaperPlane,
  faTwitter,
  faFacebookF,
  faLinkedin,
  faInstagram,
  faLocationDot,
  faEnvelope,
  faPhone,
  faXmark,
  faBars
)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.mount('#app')

