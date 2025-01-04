<template>
    <div v-if="task" :class="['container', $store.state.themeLive.theme]">
        <h1>{{ task.title }}</h1>
        <p>{{ task.description }}</p>
        <p>Приоритет: {{ task.priority }}</p>
        <p>Срок: {{ task.deadline }}</p>
        <p>Статус: {{ task.status }}</p>
        <router-link to="/ToDoListVue2/tasks" class="button">Наказд к списку</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        // с помощью mapGetters обращаемся к геттеру из tasks
        ...mapGetters('tasks', ['getTaskId']),
        //возвращает элемент по id и отрисовывается 1 элемент (карточка его отрисовается из template)
        task() {
            return this.getTaskId(this.$route.params.id)
        }
    }
}
</script>
