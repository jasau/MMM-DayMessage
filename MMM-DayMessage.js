//MMM-DayMessage.js:

Module.register("MMM-DayMessage",{

    // Default module config.
    defaults: {
        day: '03/05/',
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
        var display = "";
        var today = "";
        var dlength = this.config.day.length;

        if  (dlength == 10) {
            today = moment().format("DD/MM/YYYY");
        } else if (dlength == 5) {
            today = moment().format("DD/MM");
        } else  {
            Log.error(this.name + 'Wrong day format - use DD/MM for annual or DD/MM/YYYY for specific day');
            display = "wrong day";
        }

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
