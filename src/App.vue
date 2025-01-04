<script>
export default{
    name: 'App'
}
</script>

<template>
    <!-- :class - класс будет меняться, обращаясь к store -->
    <!-- state - получить данные. themeLive - модуль, к которрому мы обращаемся. theme - данные, кот мы получаем -->
    <div id="app" :class="$store.state.themeLive.theme">
        <nav class="nav">
            <!-- router-link - как "a", но нет перехода стр и она не перезагружается -->
            <router-link to="/ToDoListVue/tasks" class="link">Мои задачи</router-link>
            <router-link to="/ToDoListVue/create-task" class="link">Создать задачу</router-link>
            <router-link to="/ToDoListVue/themeLive" class="link">Выбор темы</router-link>
        </nav>
        <!-- router-view - не происходит переход на др стр. Данные помещаются сюда и происходит отрисовка (отрисовка нашего router) -->
        <router-view></router-view>
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
}
body.light {
    --nav-bg: #007bff;
    --button-bg: #007bff;
    --button-hover: #0056b3;
    --card-bg: #ffffff;
    --border-color: #bbb;
    --text-color: #333;
}
body.dark {
    --nav-bg: #1f1f1f;
    --button-bg: #555;
    --button-hover: #777;
    --card-bg: #2a2a2a;
    --border-color: #444;
    --text-color: #ddd;
}

.nav {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    background-color: var(--nav-bg, #138cd3);
    min-height: 40px;
}

.link {
    color: #ffffff;
    font-size: larger;
}

a {
    text-decoration: none;
}

</style>
