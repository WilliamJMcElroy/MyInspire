import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { TodoModel } from "../models/TodoModel.js"
export class TodoListService {

    async getTodoList(clientId) {
        const res = await api.get(`/api/todos/:${clientId}`)
        console.log(res.data)
        AppState.todoList = res.data.map(t => new TodoModel(t))
    }
    async addTodo(todoData) {
        let res = await api.post('/api/todos')
        let newTodo = new TodoModel(res.data)
        AppState.todoList = [...AppState.todoList, newTodo]
    }

    async deleteTodo(id) {
        await api.delete(`/api/todos/:id`)
        AppState.todoList = AppState.todoList.filter(t => t.id != id)
    }
    async toggleTodo(todoId) {
        console.log('toggleTodo', todoId)
        let todo = AppState.todoList.find(t => t.id == todoId)
        todo.isComplete = !todo.isComplete
        let index = AppState.todoList.indexOf(todo)
        let res = await api.put(`/api/todos/:${todoId}`, todo)
        let updated = new TodoModel(res.data)
        AppState.todoList.splice(index, 1, updated)
        AppState.todoList = AppState.todoList
    }
}
export const todoListService = new TodoListService();
