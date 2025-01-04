export default {
    // Для изменения темы
    namespaced: true,
    state: {
        tasks: [],
        isInitialized: false,
    },
    //Изменение наших данных
    mutations: {
        //Добавление задач
        addTask(state, task) {
            state.tasks.push(task)
        },
        //изменение статуса задачи
        updateTask(state, updateTask) {
            const index = state.tasks.findIndex(
                (task) => task.id === updateTask.id
            ); 
            if (index !== -1) {
                state.tasks.splice(index, 1, {...updateTask});
            }
        },
        //удаление задачи
        delTask(state, taskId){
            state.tasks = state.tasks.filter((task) => task.id !== taskId)
        },
        //изменение списка задач
        setTask(state, tasks) {
            state.tasks = tasks
        },
        //Изменеие isInitialized
        setInit(state) {
            state.isInitialized = true
        },
    },
//для асинх операций, чтобы мы могли получать инфу при ее запросе
    actions: {
        async fetchTasks({ commit, state}) {
            //если тру, то arrTasks выгружается
            //без этого условия изменения данных некорректно. Изменим Данные вернемся на стр с задачами и изменения не происходят
            if (state.isInitialized) return;
            const arrTasks = [
                {
                    id: 1,
                    title: 'Задача №1',
                    description: 'Здесь находится описание 1 задачи',
                    priority: 'Высокий',
                    deadline: '2024-12-31',
                    status: 'Новая',
                },
                {
                    id: 2,
                    title: 'Задача №2',
                    description: 'Здесь находится описание 2 задачи',
                    priority: 'Средний',
                    deadline: '2024-12-31',
                    status: 'Готово',
                }
            ];
            commit('setTask', arrTasks);
            //после выгрузки setInit меняется на фалс, чтобы она больше не выполнялась
            commit('setInit')
        }
    },
    getters: {
        //из списка будет возвращена задача по id
        getTaskId: (state) => (id) =>
            state.tasks.find((task) => task.id === Number(id))
    }
}

