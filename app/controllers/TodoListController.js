import { AppState } from "../AppState.js"
import { TodoListService, todoListService } from "../services/TodoListService.js"
import { Pop } from "../utils/Pop.js"

function _drawTodoList() {
    let content = ''
    AppState.todoList.forEach(t => content += t.TodoListTemplate)
    document.getElementById('todoList').innerHTML = content
    let iscomplete = 0
    let totalTodos = AppState.todoList.length
    document.getElementById('iscomplete').innerText = iscomplete + '  /  ' + totalTodos
}


export class TodoListController {

    constructor() {
        AppState.on('todoList', _drawTodoList)
        AppState.on('account', this.getTodoList)
    }

    async toggleTodoList(todoListId) {
        try {
            await todoListService.toggleTodo(todoListId)
        } catch (error) {
            Pop.error(error)
            console.error('toggleTodoList', error)
        }
        // TODO flush out
    }

    async getTodoList() {
        try {
            await todoListService.getTodoList()
        } catch (error) {
            Pop.error(error)
            console.error('getTodoList', error)
        }
        // TODO flush out
    }
    async addTodo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let todoData = {
                description: form // fill out
            }
        } catch (error) {
            console.error('addTodo in todolistcontroller', error)
            Pop.error(error)
        }
    }
    // flush out delete
    async deleteTodo(id) {
        try {

            await todoListService
        } catch (error) {

        }
    }

}