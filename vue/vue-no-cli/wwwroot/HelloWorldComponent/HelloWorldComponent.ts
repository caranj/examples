/// <reference path="InputComponent.ts" />

module Application {

    declare var Vue: any;

    let app = new Vue({
        el: '#vueApp',
        data: {
            message: ""
        },
        components: {
            'input-component': Components.InputComponent
        },
        // Initialize component data
        mounted: function () {
            this.message = "Hello weary traveler from component";
        },
        methods: {
            onMessageUpdated: function (value:string) {
                console.log("Application messageUpdateEvent:" + value);
                this.message = value;
            }
        }
    }); 
}  