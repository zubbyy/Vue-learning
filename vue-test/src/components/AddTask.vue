<template>
    <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <!-- https://vuejs.org/guide/components/v-model.html -->
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <!-- <p>name of the task: {{ text }}</p> -->
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input v-model="reminder" type="checkbox" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default{
    name: "AddTask",
    data() {
        return{
            text: 'Test Task',
            day: '',
            reminder: false,
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            if(!this.text){
                alert("se non ho nulla da mandare, esattamente cosa cazzo dovrei mandare o")
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 100000),
                // rischi di avere id ripetuti, quindi non si farebbe così ma sti cazzi
                text: this.text,
                day: this.day,
                reminder: this.reminder,   
            }
            this.$emit("add-task", newTask)
            
            console.log(newTask)

            this.text = ""
            this.day = ""
            this.reminder = false
            console.log(newTask)
        }
    }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>