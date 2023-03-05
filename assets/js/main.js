


const { createApp } = Vue

createApp({
    data() {
        return {

            newTask: {
                text: "",
                done: false
            },

            tasks: [

                {
                    text: "Clean my room",
                    done: false
                },

                {
                    text: "Reinstall New World",
                    done: true
                },

                {
                    text: "Practice coding",
                    done: false
                },

                {
                    text: "Go for a walk",
                    done: true
                },

                {
                    text: "Call Jaskirpal",
                    done: false
                },
            ]
        }
    },

    methods: {

        taskRemove(i) {
            console.log("I clicked on the task with index:", i);
            this.tasks.splice(i, 1);
        },

        addTask() {
            console.log("I clicked on the button");
            console.log(this.newTask)
            //I am adding the input
            this.tasks.unshift(this.newTask);
            //Emptying the object
            this.newTask = { text: '', done: false };
        },

        taskDone(i, task) {
            console.log("I clicked on the text:", i);
            console.log(task.done);
            if (task.done === true) {
                task.done = false;
            } else {
                task.done = true;
            }

        }
    }
}).mount('#app')
