export default class AjaxConfig {
  url: string;
  method: string;
  request: {};

  constructor(url: string, method: string, request: {}) {
    this.url = url;
    this.method = method;
    this.request = request;
  }
}
