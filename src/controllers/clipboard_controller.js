import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "source" ]

  connect() {
    if (document.queryCommandSupported("copy")) {
      this.element.classList.add("clipboard--supported")
    }
  }

  copy(event) {
    event.preventDefault()
    console.log(this.sourceTarget.value)
    this.sourceTarget.select()
    document.execCommand("copy")
  }
}
