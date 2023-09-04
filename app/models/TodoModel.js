import { generateId } from "../utils/GenerateId.js"

export class TodoModel {
    constructor(data) {
        this.id = data.id || generateId()
        this.creatorid = data.creatorid
        this.description = data.description || ''
        this.isComplete = data.completed
    }



    get TodoListTemplate() {
        return `
        <input type ="checkbox" ${this.isComplete ? 'checked' : ''} onchange="app.TodoController.toggleTodoList('${this.id}')">
        <span class="tex-white-50">${this.description}</span>
        <button class="selectable btn text-white" onclick="app.TodoListController.deleteTodo" title="Delete This Todo"><i class="mdi mdi-nuke"></i></button>
        `
    }
}

