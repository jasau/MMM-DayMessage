//MMM-DayMessage.js:

Module.register("MMM-DayMessage",{
    // Default module config.
    defaults: {
        day: "27/04/2018",
        text: "Happy Birthday!",
        updateInterval: 30000
    },

    // Define required scripts.
    getScripts: function() {
        return ["moment.js"];
    },

    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);

        var self = this;
    },

    compare: function() {
        var today = moment().format("DD/MM/YYYY");
        var display = "";

        if (today == this.config.day) {
            display = this.config.text;
        }

        return display;
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.compare();
        return wrapper;
    }
});
