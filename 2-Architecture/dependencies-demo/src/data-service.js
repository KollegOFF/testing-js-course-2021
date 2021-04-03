export default class DataService {
  constructor(url) {
    this.url = url;
  }

  async load() {
    let names = await fetch(`${this.url}/load`);
    return names;
  }

  save(names) {
    return fetch(`${this.url}/save`, {
      mathod: 'POST',
      body: names,
    });
  }
}