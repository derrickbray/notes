import ResultListView from './view';
import FormView from './form-view';
export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

    // grab data from api
    // when data comes back -- set up some views to show data
    // render views
    // setup a view to handle form
  start() {
    fetch('http://tiny-tn.herokuapp.com/collections/dwb-bpm')
        .then((res) => res.json())
        .then((data) => {
          this.model = data;

          const resultView = new ResultListView(this.appElement.querySelector('.results-table__list'), this.model);
          resultView.render();
        });
    this.FormView = new FormView(this.appElement.querySelector('.home-form'), this);
  }

  logHeartrate(user, bpm) {
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
  }
}
