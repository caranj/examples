
module Application {

    declare var Vue: any;
    declare var window: any;
    declare var axios: any;

    let app = new Vue({
        el: '#vueApp',
        data: {
            selectedCountryCode: "", 
            country: null,
            countries: null 
        },
        mounted: function () {
            var that = this;
            axios.get('https://restcountries.eu/rest/v2/all?fields=alpha2Code;name')
                .then(function (response) {
                    that.countries = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            countDownChanged: function (dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert: function () {
                this.dismissCountDown = this.dismissSecs
            }
        }
    });
}  