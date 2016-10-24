export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    // grab data from api
    // when data comes back -- set up some views to show data
    // render views
    // setup a view to handle form
    fetch('http://tiny-tn.herokuapp.com/collections/dwb-bpm')
    .then((res) => res.json())
    .then((data) => {
      this.model = data;
      // debugger;
    });
  }
}
