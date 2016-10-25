class ResultItemView {
  constructor(model) {
        // setup data for our current table item
    this.model = model;

    this.el = document.createElement('tr');
    this.el.classList.add('result');

    this.el.innerHTML = `
    <td class="result__time"></td>
    <td class="result__user"></td>
    <td class="result__bpm"></td>`;
  }
  render() {
    this.el.querySelector('.result__time').innerText = this.model.time;
    this.el.querySelector('.result__user').innerText = this.model.user;
    this.el.querySelector('.result__bpm').innerText = this.model.bpm;
  }
}

export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
        // array loop our model
    this.model.forEach((result) => {
      const row = new ResultItemView(result);
      row.render();
      this.el.appendChild(row.el);
    });
  }
}
