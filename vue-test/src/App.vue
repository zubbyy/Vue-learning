<!-- https://youtu.be/qZXt1Aom3Cs?t=3796 -->
<template>
  <div class="container">
    <Header title="Luca"/>
    <AddTask @add-task="addTask"/>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
  </div>
   
</template>

<script>

import Header from "./components/Header.vue"
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    addTask(task){
      this.tasks.push(task);
      

      // opppure
      // this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      if(confirm("are you sure?")){
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder(id){
      // alert(id)



      // aggiorna l'array
      // per ogni task, controlla se l'id è uguale a quello passato
      // se lo è, ritorna un array di oggetti dove abbiamo la prima proprietà e poi invertiamo il valore del reminder
      this.tasks = this.tasks.map(
        (task) => task.id === id ? 
        {...task, reminder: !task.reminder} 
        :task
        )
    },
    
  },
  created(){
    this.tasks = [
      {
        id: 1,
        text: "compleanno",
        day: "1/02/2023",
        reminder: true,
      },
      {
        id: 2,
        text: "appuntamento",
        day: "1/02/2023",
        reminder: false,
      },
    ]
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
