import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showSlide(0)
    console.log("initialize now")
  }

  next() {
    this.showSlide(this.index + 1)
  }

  previous() {
    this.showSlide(this.index - 1)
  }

  showSlide(index) {
    this.index = index
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", (Math.abs(index) % 4) == i)
    })
  }
}
