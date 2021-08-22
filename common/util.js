function paginate(page, pageSize) {
    return { page: (page - 1) * pageSize, pageSize: pageSize };
}

module.exports = {
    paginate
}