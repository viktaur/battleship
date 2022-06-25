import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlay, faVolumeHigh, faPen, faInfo, faBolt, faMoon, faRightToBracket, faCircle, faDiamond} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlay, faVolumeHigh, faPen, faInfo, faBolt, faMoon, faRightToBracket, faCircle, faDiamond)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false

app.mount('#app')