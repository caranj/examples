// Country selector component
module Components {
    
    export let InputComponent = {

        // Prop passed from parent 
        props: ['message'],

        // Input template which will calls a method ibn the component when the input text box is updated
        template: '<input v-model="inputMessage" placeholder="edit me" size="35" v-on:input="onMessageUpdated()">',

        data: function () {
            return {
                // Component local data 
                inputMessage: String
            }
        },

        mounted: function () {
            // Initialize component message from prop passed rom parent 
            this.inputMessage = this.message;
        },

        methods: {
            // Call when the inmput box is updated
            onMessageUpdated: function () {
                console.log("Input component onMessageUpdated: " + this.inputMessage)
                // Fire an event for the parent to indicaye an update ( event naming convention is a-b-c)
                this.$emit('message-updated-event', this.inputMessage);
            }
        }
    };
}       