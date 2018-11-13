import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showCurrentSlide(0)
    console.log("initialize now")
    console.log(this.data.get("index")) //data-controllerに付いているdata-slideshow-〇〇の値を取得
    console.log(this.element.getAttribute("data-slideshow-index"))
    console.log(this.data.has("index")) //trueかfalseを返す
    console.log(this.data.has("index2"))
    this.data.set("index", 2) //data-slideshow-〇〇の値をセット
    console.log(this.data.get("index"))
  }

  connect() {
    console.log("connect now")
  }

  disconnect() {
    console.log("disconnect now")
  }

  next() {
    this.index++
  }

  previous() {
    this.index--
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", (Math.abs(this.index) % 4) == i)
    })
  }

  get index() {
    return parseInt(this.data.get("index"))
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide()
  }
}
