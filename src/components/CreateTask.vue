<template>
    <div :class="['container', $store.state.themeLive.theme]">
        <h1>Создать задачу</h1>
        <form @submit.prevent="submitTask">
            <label>
                Заголовок:
                <input v-model="title" required />
            </label>
            <label>
                Описание:
                <textarea v-model="description" required></textarea>
            </label>
            <label>
                Важность:
                <select v-model="priority" required>
                    <option value="Высокий">Высокий</option>
                    <option value="Средний">Средний</option>
                    <option value="Низкий">Низкий</option>
                </select>
            </label>
            <label>
                Срок:
                <input type="date" v-model="deadline" required />
            </label>
            <button type="submit" class="button">Добавить</button>
        </form>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        //Возвращаем объект с данными
        data() {
            return {
                title: '',
                description: '',
                priority: 'Средний',
                deadline: '',
            }
        },
        methods: {
            ...mapMutations('tasks', ['addTask']),
            submitTask() {
                //обращаемся к функции. через this обращаемся и записываем данные
                this.addTask({
                    id: Date.now(),
                    title: this.title,
                    description: this.description,
                    priority: this.priority,
                    deadline: this.deadline,
                    status: 'Новая',
                })
                //переходим на страницу с задачами
                this.$router.push('/ToDoListVue2/tasks')
            }
        }
    }
</script>