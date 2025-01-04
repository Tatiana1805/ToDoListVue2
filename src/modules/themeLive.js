// изменение цвета темы
export default {
    // чтобы мы везде могли к этому обращаться и не происходили скрещивания
    namespaced: true,
    // объект с данными
    state: {
        theme: 'light'
    },
    // функция, которое будет менять наши данные в state
    mutations: {
        //изменяем тему со светлой на темную и будет сохранятся в state
        setTheme(state, theme) {
            state.theme = theme
        }
    }
}