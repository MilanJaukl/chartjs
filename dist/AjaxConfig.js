export default class AjaxConfig {
    url;
    method;
    request;
    constructor(url, method, request) {
        this.url = url;
        this.method = method;
        this.request = request;
    }
}
