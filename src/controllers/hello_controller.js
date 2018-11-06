import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  greet() {
    console.log(`hello, ${this.name}`)
  }

  get name() {
    return this.nameTarget.value
  }
}
