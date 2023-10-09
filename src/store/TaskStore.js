// import { filter } from "core-js/core/array";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks:[
            {id:1, title: "Hangout with friends", isFav: false},
            {id:2, title: "Work overtime", isFav:true}
        ]
        
    }),
    getters: {
       
        fav(){
            return this.tasks.filter( t => t.isFav );
        },
        favCount(){
            return this.tasks.reduce((p,c)=>{
                return c.isFav ? p + 1 : p
            }, 0);
        },
        allCount: (state)=>{
            return state.tasks.length
        }

    },
    actions: {
        addTask(task){
            this.tasks.push(task);
        }
    }
});