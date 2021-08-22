const url = require('url');
const config = require("../config");

module.exports = class Controller {
    query(request) {
        return url.parse(request.url, true).query;
    }

    params(request) {
        return request.params;
    }

    json(response, status, result) {
        response.writeHead(status, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
    }

    createValidPagination({ page, pageSize }) {
        page = parseInt(page);
        pageSize = parseInt(pageSize);

        pageSize = Number.isNaN(pageSize) ? config.paginationLimit : pageSize;
        page = Number.isNaN(page) ? config.paginationInitialPage : page;

        pageSize = pageSize >= config.paginationLimit ? config.paginationLimit : pageSize;
        console.log(page, pageSize);
        return { page, pageSize }
    }
}