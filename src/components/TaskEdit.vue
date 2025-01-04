<template>
    <!-- тоже самое, что при создании задачи -->
    <div v-if="task" :class="['container', $store.state.themeLive.theme]">
        <h1>Редактирование задачи</h1>
        <form @submit.prevent="submitEdit">
            <label>
                Заголовок:
                <!-- updateTask - сздаем переменную, в которой будуд храниться наши новые данные -->
                <input v-model="updatedTask.title" />
            </label>
            <label>
                Описание:
                <textarea v-model="updatedTask.description" required></textarea>
            </label>
            <label>
                Приоритет:
                <select v-model="updatedTask.priority">
                    <option value="Высокий">Высокий</option>
                    <option value="Средний">Средний</option>
                    <option value="Низкий">Низкий</option>
                </select>
            </label>
            <label>
                Срок:
                <input type="date" v-model="updatedTask.deadline" required />
            </label>
            <button type="submit" class="button">Сохранить</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            // создается обект, для данных
            updatedTask: null,
        };
    },
    //вычисляемая переменная
    computed: {
        //запрашивает гет
        ...mapGetters('tasks', ['getTaskId']),
        //функ возвращается задачу по id
        task() {
            return this.getTaskId(this.$route.params.id)
        },
    },
    watch: {
        task: {
            // immediate: true, - срабатывает 1 раз, когда стр отрисовывается
            immediate: true,
            // newTask это то что возвращается из task
            handler(newTask) {
                // раскрываем список задач и перезаписываем
                this.updatedTask = {...newTask}
            },
        },
    },
    methods: {
        ...mapMutations('tasks', ['updateTask']),
        // при нажатии сохранить, наши данные меняются и переходим на стр с задачами
        submitEdit() {
            this.updateTask(this.updatedTask)
            this.$router.push('/ToDoListVue/tasks')
        }
    }

}
</script>

<style>
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}
form {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 15px;
}

label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
textarea, option, input {
    font-size: 1em;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid black;
}

.button {
    width: 120px;
    height: 34px;
    margin: 10px auto;
    border-radius: 5px;
    background-color: var(--nav-bg, #138cd3);
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button:hover {
    background-color: var(--button-hover, #0056b3);
}
</style>