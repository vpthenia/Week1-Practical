document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function calculate() {
    const numberOfStudents = 3
    for(let student = 1; student <= numberOfStudents; student++) {
        const numberOfScores = 3;
        let sum = 0;
        for (let score = 1; score <= numberOfScores; score++) {
            sum += parseInt(document.getElementById(`score-${student}-${score}`).innerHTML);
        }
        document.getElementById(`score-${student}-total`).innerHTML = sum;
        document.getElementById(`score-${student}-avg`).innerHTML = (sum/numberOfScores).toFixed(2);
    }
}
window.onload = function() {
    Vue.component('todo-item', {
        props: ['todo'],
        template: `
            <li>
                <input 
                    type="checkbox" 
                    :id="todo.key"  
                    v-model="todo.complete"
                >
                <label for="key" @click="todo.complete = !todo.complete">
                    {{ todo.text }}
                </label>
            </li>`
    })
    

    var app = new Vue({
        el: '#todo-app',
        data() {
            return {
                newToDoText : '',
                toDoList: [
                    {id: "task-0", text: 'Morning workout', complete: true},
                    {id: "task-1", text: 'Get ready', complete: true},
                    {id: "task-2", text: 'Eat breakfast', complete: false},
                ], 
            }
        },
        methods: {
            addTask() {
                this.toDoList.push({
                    id: `task-${this.toDoList.length}`,
                    text: this.newToDoText,
                    complete: false,
                })
                this.newToDoText = '';
            }
        }
    });
}