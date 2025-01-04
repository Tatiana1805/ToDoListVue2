<template>
    <div :class="['container', $store.state.themeLive.theme]">
        <h1>Список задач</h1>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                <h2>{{ task.title }}</h2>
                <p>Срок: {{ task.deadline }}</p>
                <p>Приоритет: {{ task.priority }}</p>
                <!-- router-link - используем для того чтобы отображать инфу в router-view (App) -->
                <router-link :to="`/ToDoListVue2/tasks/${task.id}`" class="button">Подробнее</router-link>
                <router-link :to="`/ToDoListVue2/edit-tasks/${task.id}`" class="button">Редактировать</router-link>
               <!-- на сбытие добавляем нашу мутацию из модуля -->
                <a @click="delTask(task.id)" class="button del">Удалить</a>
            </li>
        </ul>
    </div>
</template>

<script>
//mapState функции благодаря кот мы получаем данные
// mapMutations ффунк, благодаря кот мы можем получить мутации
import { mapState, mapMutations } from 'vuex';

export default {
    //переменные определяем
    computed: {
        //забираем переменные из хранилища и следим за их состоянием
        // 'tasks' - модуль из которого мы забираем данные (\modules\tasks.js)
        // ['tasks'] - что мы забираем из модуля
        // ... - раскрытие данных
        ...mapState('tasks', ['tasks'])
    },
    methods: {
        // 'tasks'- модуль из кот берем функ(мутацию)
        //  ['delTask'] - функ, кот мы забираем из этого модуля
        ...mapMutations('tasks', ['delTask'])
    },
    // функ жизненного цикла
    // срабатывает, когда элемент появляется на экране
    mounted() { 
        // запрос данных, вызываем асинх операцию и указываем хранилище/данные
        this.$store.dispatch('tasks/fetchTasks')
    },
}
</script>

<style>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

li {
    list-style-type: none;
    border: 1px solid;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

li:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

li .del {
    background-color: #dc3545;
}
</style>

