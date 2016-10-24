export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    // array loop our model
    this.model.forEach((result) => {
      const row = document.createElement('tr');
      row.classList.add('result');

      row.innerHTML = `
      <td class="result__time"></td>
      <td class="result__user"></td>
      <td class="result__bpm"></td>`;

      row.querySelector('.result__time').innerText = result.time;
      row.querySelector('.result__user').innerText = result.user;
      row.querySelector('.result__bpm').innerText = result.bpm;

      this.el.appendChild(row);
    });
    // create new result row
    // append result row to the list
  }
}
