// <reference path="../components/CountrySelector2.ts" />

module Application {

    declare var Vue: any;

    let app = new Vue({
        el: '#vueApp',
        data: {
            message: String
        },
        // Call when Vue app is mounted
        mounted: function () {
            this.message = "Hello weary traveler";
        },
        // Some good stuff 
        methods: {
            // Note: For IE11 you need to use the onXxxxx: function () syntax
            onNameUpdated: function (name: String) {
                app.data.message = name;
            }
        }
    });
}   