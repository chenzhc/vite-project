import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const todosStore = defineStore('todos', () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }

    function $reset() {
        count.value = 0;
    }

    return  { count, increment, $reset };
});

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount(state) {
            return state.count * 2
        },

        doublePlusOne() {
            return this.doubleCount + 1
        },
    }
});

export const useUserListStore = defineStore('userList',{
    getters: {
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId);
        },
    }
})

// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0);
//     const name = ref('Eduardo');
//     const doubleCount = computed(() => count.value * 2);

//     const doublePlusOne = computed(() => {
//         return this.doubleCount + 1;
//     });

//     function $reset() {
//         count.value = 0;
//     }

//     function increment() {
//         count.value++;
//     }

//     return { count, name, doubleCount, increment, doublePlusOne };
// });

// export const todosStore = defineStore('todos', {
//     state: () => {
//         return {
//             count: 4
//         }
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// });