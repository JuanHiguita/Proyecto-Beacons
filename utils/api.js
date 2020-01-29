const BASE_API = './data.json';

class Api {
  async getSubjects(key) {
    const query = await fetch(`${BASE_API}?key=${key}`);
    const data = await query.json();
    console.log(data);
    return data;
  }
}

export default Api;
