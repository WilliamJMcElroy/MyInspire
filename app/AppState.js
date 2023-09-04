import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { generateId } from './utils/GenerateId.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {
  /** @type {import('./models/Image.js').Image  | ''} */
  myImage = ''
  /** @type {import('./models/Image.js').Image  | null } */
  activeImage = null
  page = ''
  /** @type {import('./models/TodoModel.js').TodoModel[] } */
  todoList = [
    {
      id: generateId(),
      description: "words words words",
      isComplete: true,
      TodoListTemplate: null
    }
  ]
  /** @type {import('./models/Quote.js').Quote  | null } */
  quote = null
  /** @type {import('./models/Weather.js').Weather  | null } */
  weather = null
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})