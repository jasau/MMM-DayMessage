//MMM-DayMessage.js:

Module.register("MMM-DayMessage",{
    // Default module config.
    defaults: {
        text: "Hello World! From WebStorm!"
    },



    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
        return wrapper;
    }
});
