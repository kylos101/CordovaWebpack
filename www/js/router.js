var router = {
    content,
    write: function () {
        var contentDiv = document.getElementById("content");
        contentDiv.innerHTML = this.content;
    }
}

var routerExport = {
    setContent: function (content) {
        router.content = content;
        router.write();
    }
}

module.exports = routerExport;