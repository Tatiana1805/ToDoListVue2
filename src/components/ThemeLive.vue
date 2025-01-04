<template>
    <div :class="['container', $store.state.themeLive.theme]">
        <h1>Изменить тему</h1>
        <label>
            <select
            v-model="$store.state.themeLive.theme"
            @change="updateTheme"
            >
            <option value="light">Светлая</option>
            <option value="dark">Темная</option>
        </select>
        </label>
    </div>
</template>

<script>
    export default {
        methods: {
            // функция при @change. Изменяем цвет темы, добавляя класс
            updateTheme() {
                document.body.className = this.$store.state.themeLive.theme;
            }
        },
        mounted() {
            document.body.className = this.$store.state.themeLive.theme;
        }
    }
</script>

<style>
.container {
    margin: 0 auto;
    width: 85%;
    align-items: center;
    display: flex;
    flex-direction: column;
}
select {
    width: 55vw;
    padding: 10px;
    margin-top: 8px;
    font-size: 1em;
    border-radius: 5px;
}
</style>