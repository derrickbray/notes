export default class UserView {
  // el element existing
  // model ob or arr
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    console.log(this.model);
    this.el.querySelector('.user__first-name').innerText = this.model.name.first;
    this.el.querySelector('.user__first-last').innerText = this.model.name.last;
    this.el.querySelector('.user__first-email').innerText = this.model.name.email;
    this.el.querySelector('.user__first-address').innerText =
    `${this.model.name.address;
    this.el.querySelector('.user__first-picture').innerText = this.model.name.last;
  }
}
