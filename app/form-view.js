export default class FormView {
  constructor(el, controller) {
    this.el = el;
    this.controller = controller;

        // // traditional function binding
        //     function onsubmit(ev) {
        //       ev.preventDefault();
        // //     }
        // //     // setup some events
        //     this.el.addEventListener('submit', onsubmit.bind(this));

    const onsubmit = (ev) => {
      // stops the form actually submiting
      ev.preventDefault();

      const user = this.el.querySelector('#home-form-user').value;
      const bpm = this.el.querySelector('#home-form-bpm').value;

      this.controller.logHeartrate(user, bpm);

      this.el.querySelector('#home-form-user').value = '';
      this.el.querySelector('#home-form-bpm').value = '';
    };

    this.el.addEventListener('submit', onsubmit);
  }
}
