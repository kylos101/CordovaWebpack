var controller = {
    content: null,
    write: function () {
        var contentDiv = document.getElementById("content");
        contentDiv.innerHTML = this.content;
    },
    current: null,
    disposeCurrent: function () {
        this.current.dispose();
    }
}

var contentControllerExport = {
    setContent: function (component) {
        if (!component.content || typeof(component.content)!=="function")
        {
            throw "Component lacks a content function."
        }
        if (!component.initialize || typeof(component.initialize)!=="function")
        {
            throw "Component lacks an initialize function."
        }
        if (!component.dispose || typeof(component.dispose)!=="function")
        {
            throw "Component lacks a dispose function."
        }

        // components must have a dispose method, and it had better ditch events!
        if (controller.current)
        {
            controller.disposeCurrent();
        }

        controller.current = component;

        // reset the mark-up
        controller.content = "<div></div>";
        controller.write();

        // write the mark-up for the component
        controller.content = component.content();
        controller.write();
        component.initialize();
    }
}

module.exports = contentControllerExport;