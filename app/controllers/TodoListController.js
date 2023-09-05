import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
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
    }

    async getTodoList(id) {
        try {
            await todoListService.getTodoList()
        } catch (error) {
            Pop.error(error)
            console.error('getTodoList', error)
        }

    }

    

    async addTodo() {
        try {
            window.event.preventDefault()
            let textAreaElem = document.querySelector('textarea')
            let description = textAreaElem
            await todoListService.addTodo(description)
        } catch (error) {
            console.error('addTodo in todolistcontroller', error)
            Pop.error(error)
        }
    }
    async deleteTodo(id) {
        try {
            const yes = await Pop.confirm('Delete this Todo?')
            if (!yes) { return }
            await todoListService.deleteTodo(id)
        } catch (error) {
            console.error('on delete from controller', error)
            Pop.error(error)
        }
    }

}
