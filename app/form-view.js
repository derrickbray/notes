export default class FormView {
  constructor(el) {
    this.el = el;


        // // traditional function binding
        //     function onsubmit(ev) {
        //       ev.preventDefault();
        // //
        //       debugger;
        // //     }
        // //     // setup some events
        //     this.el.addEventListener('submit', onsubmit.bind(this));
        //
        //
    const onsubmit = (ev) => {
      ev.preventDefault();

      const user = this.el.querySelector('#home-form-user').value;
      const bpm = this.el.querySelector('#home-form-bpm').value;

      fetch('http://tiny-tn.herokuapp.com/collections/dwb-bpm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, bpm }),
      }).then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
    this.el.addEventListener('submit', onsubmit);
  }
}
