<template>
    <div class="container">
      <div class=" ">
        <h2 class="text-center">Task Manager</h2>
      </div>
      <div class="taskListTitle">
        <h5>{{ TaskStore.name }}</h5>
      </div>
      <div class="taskList" v-for="task in TaskStore.tasks">
        <!-- <p>{{ task.title }}</p> -->
        <TaskList :task="task" />
      </div>
    </div>
</template>

<script>
import {useTaskStore} from '../store/TaskStore'
import TaskList from '@/components/TaskList.vue';
export default{
        components: {TaskList},
        setup(){
            const TaskStore = useTaskStore();

            return{
                TaskStore
            }
        }
    }
</script>