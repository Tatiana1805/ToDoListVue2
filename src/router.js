// createRouter - создание сущности для путей
// createWebHistory - для отображения истории в браузере
import { createRouter, createWebHistory } from "vue-router";
import MyTasks from "./components/MyTasks.vue";
import ThemeLive from "./components/ThemeLive.vue";
import CreateTask from "./components/CreateTask.vue";
import Task from "./components/Task.vue";
import TaskEdit from "./components/TaskEdit.vue";

const routes = [
    // redirect - 'эта страница будет открываться по умолчанию'
    {path: '/ToDoListVue2/', redirect: '/home'},
    {path: '/ToDoListVue2/tasks', name: 'MyTasks', component: MyTasks},
    {path: '/ToDoListVue2/themeLive', name: 'ThemeLive', component: ThemeLive},
    {path: '/ToDoListVue2/create-task', name: 'CreateTask', component: CreateTask},
    {path: '/ToDoListVue2/tasks/:id', name: 'Task', component: Task},
    {path: '/ToDoListVue2/edit-tasks/:id', name: 'TaskEdit', component: TaskEdit},
]

// создание путей
const router = createRouter({
    // import.meta.env.BASE_URL - для vue
    // env.BASE_URL - для react
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
