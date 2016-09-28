var controller = {
    content: null,
    write: function () {
        var contentDiv = document.getElementById("content");
        contentDiv.innerHTML = this.content;
    }
}

var contentControllerExport = {
    setContent: function (component) {
        controller.content = "<div></div>";
        controller.write();
        
        if (!component.content && typeof(component.content)==="function")
        {
            throw "Component lacks a content function."
        }
        if (!component.initialize && typeof(component.initialize)==="function")
        {
            throw "Component lacks an initialize function."
        }
        controller.content = component.content();
        controller.write();
        component.initialize();
    }
}

module.exports = contentControllerExport;