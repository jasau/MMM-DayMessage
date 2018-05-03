//MMM-DayMessage.js:

Module.register("MMM-DayMessage",{

    // Default module config.
    defaults: {
        events: [
            {
                day: "03/06/2018", // "DD/MM" for annual or "DD/MM/YYYY" for specific day
                text: "Happy Birthday!",
            },
            {
                day: "03/06", // "DD/MM" for annual or "DD/MM/YYYY" for specific day
                text: "yeeeeaah!",
            }
        ],
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
        var today = moment().format("DD/MM/YYYY");
        var eday;
        var etext;

        for (let i = 0; i < this.config.events.length; i += 1) {
            eday = this.config.events[i].day;
            etext = this.config.events[i].text;

            if (eday.length == 5 && eday.charAt(2) == "/") {
                today = today.substr(0,5);
            } else if (eday.length == 10 && eday.charAt(2) == "/" && eday.charAt(5) == "/") {
                today = eday;
            } else {
                Log.error(this.name + ' - Wrong day format - use DD/MM for annual or DD/MM/YYYY for specific day');
                display = "wrong day";
            }

            if (today == eday) {
                display += etext;
                // language=HTML
                display += "</br>";
            }
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
