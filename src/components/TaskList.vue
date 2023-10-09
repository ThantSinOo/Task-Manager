<template>
   <div class="singleTask mb-3">
    <p class="">{{ task.title }}</p>
    <div class="buttonsContainer">
        <button class="btn btn-danger m-2 ">Delete</button>
        <button class="btn btn-primary ">Add Fav</button>
    </div>
   </div>
</template>

<script>
    export default{
        props:['task'],
        setup(props){
            // console.log('Props =>',props.task);
        }
    }
</script>

<style>
.singleTask{
    display: flex;
    background-color: #fff;
    padding: 1rem;
    border-radius: 1rem;
    margin-right: 3rem;
    /* margin-bottom: 2px; */
    cursor: pointer;

    box-shadow: 2px 2px 2px 0.4px rgba(0, 0, 0, 0.2);
}

.singleTask:hover{
    border: 1px solid tomato;
}

.singleTask:focus{
    border: 1px solid tomato;
}

.buttonsContainer{
   margin-left: auto;
}
</style>