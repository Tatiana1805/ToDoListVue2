import themeLive from "./modules/themeLive";
import {createStore} from 'vuex'
import tasks from './modules/tasks'


// создание хранилища
const store = createStore({
    // modules - указываю, что у меня будет несколько модулей и перечисляю их
    modules: {
        tasks,
        themeLive,
    }
})

export default store;