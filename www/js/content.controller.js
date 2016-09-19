var controller = {
    content: null,
    write: function () {
        var contentDiv = document.getElementById("content");
        contentDiv.innerHTML = this.content;
    }
}

var contentControllerExport = {
    setContent: function (content) {
        controller.content = content;
        controller.write();
    }
}

module.exports = contentControllerExport;