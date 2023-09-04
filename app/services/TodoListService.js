import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { TodoModel } from "../models/TodoModel.js"
import { Account } from "../models/Account.js"
export class TodoListService {

    async getTodoList() {
        const res = await api.get(`/api/todos`) //needs work
        console.log(res.data)
        AppState.todoList = res.data.map(t => new TodoModel(t))
    }
    async addTodo(todo) {
        let res = await api.post('/api/williemac2/todos', todo) // needs work
        let newTodo = new TodoModel(res.data)
        AppState.todoList = [...AppState.todoList, newTodo]
    }

    async deleteTodo(id) {

        await api.delete(`/api/williemac2/todos/${id}`) // needs work
        AppState.todoList = AppState.todoList.filter(t => t.id != id)
    }
    async toggleTodo(todoId) {
        console.log('toggleTodo', todoId)
        let todo = AppState.todoList.find(t => t.id == todoId)
        todo.isComplete = !todo.isComplete
        let index = AppState.todoList.indexOf(todo)
        let res = await api.put(`/api/williemac2/todos/:${todoId}`, todo) //needs work
        let updated = new TodoModel(res.data)
        AppState.todoList.splice(index, 1, updated)
        AppState.todoList = AppState.todoList
    }
}
export const todoListService = new TodoListService();
