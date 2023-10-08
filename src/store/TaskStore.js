import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks:[
            {id:1, title: "Hangout with friends", isFav: false},
            {id:2, title: "Work overtime", isFav:true}
        ],
        name: "Thant sin"
    })
});