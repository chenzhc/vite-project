<script setup>
import { ref } from 'vue';
import { todosStore,useCounterStore } from '@/stores/counter';

const todos = todosStore();
todos.$patch({ count: todos.count + 1 });
todos.increment();

const counter = {
    count: 3,
};


const resetCount = () => {
    todos.$reset();
};

const counter2 = useCounterStore();

</script>
<template>
    <h1>Page1 page </h1>
    <div>Current count: {{ counter.count }}</div>
    <div>Tods count: {{ todos.count }}</div>
    <div><p>Double count is {{  counter2.doubleCount }}</p></div>
    <div><p>Double count is {{  counter2.doublePlusOne }}</p></div>
    <el-button type="primary" plain @click="resetCount">Reset</el-button>
</template>