<template>
    <div class="container">
      <div class="header">
        <h2 class="text-center">Task Manager</h2>
      </div>
      <div>
        <InputForm />
      </div>
      <nav class="Navbar mt-4">
        <button class="btn btn-info me-3" @click="filterNav = 'all'">All Tasks</button>
        <button class="btn btn-success" @click="filterNav = 'fav'">Fav Tasks</button>
      </nav>
      <div class="taskListContainer" v-if="filterNav === 'all'">
        <p>{{ TaskStore.allCount }} Tasks</p>
        <div class="taskList " v-for="task in TaskStore.tasks">
          <TaskList :task="task" />
        </div>
      </div>

      <div class="taskListContainer" v-if="filterNav === 'fav'">
        <p>{{ TaskStore.favCount }} Fav Tasks left</p>
        <div class="taskList " v-for="task in TaskStore.fav">
          <TaskList :task="task" />
        </div>
      </div>
    </div>
</template>

<script>
import {useTaskStore} from '../store/TaskStore'
import TaskList from '@/components/TaskList.vue';
import InputForm from '@/components/InputForm.vue';
import { ref } from 'vue';
export default{
        components: {TaskList, InputForm},
        setup(){
            const TaskStore = useTaskStore();
            const filterNav = ref('all');

            return{
                TaskStore,filterNav
            }
        }
    }
</script>

<style>

.header{
  font-family: 'Notosan';
  font-weight: 500;
  background-color: aquamarine;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 1rem;
}

.taskListContainer{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.4rem;
  background-color: aliceblue;
  margin-top: 0.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 6rem;
  border-radius: 1rem;
}


</style>