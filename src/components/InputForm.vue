<template>
    <form @submit.prevent="handleSubmit">
      
        <input 
            class="form-input"
            placeholder="Add what you need to do ..."
            v-model="newTask"
            />

        <button>Add Task</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '@/store/TaskStore';
    export default{
        setup(){
            const TaskStore = useTaskStore();
            const newTask = ref('');

            const handleSubmit = () =>{
                TaskStore.addTask({
                    title: newTask.value,
                    isFav: false,
                    id: Math.floor(Math.random() * 10000)
                });
                // console.log("Add Task =>", addTask)
                newTask.value = "";
            }

            return{
                TaskStore,
                newTask,
                handleSubmit
            }
        }
    }
</script>