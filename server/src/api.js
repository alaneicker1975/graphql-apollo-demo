const { RESTDataSource } = require('apollo-datasource-rest');

class BlogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com';
  }

  async getPosts() {
    return this.get('/posts');
  }

  async getPost(id) {
    return this.get(`/posts/${id}`);
  }
}

module.exports = BlogAPI;