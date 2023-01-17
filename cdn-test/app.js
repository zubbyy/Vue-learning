const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            gender: 'male',
            pic: 'https://randomuser.me/api/portraits/men/30.jpg',
        }
    },
    methods: {

        async getUser() {
            const res = await fetch("https://randomuser.me/api")
            const a = await res.json()
            console.log(a)
                // posso scomporlo, prendendo solo "results dall'apim, così"
            console.log("results: ", a.results)
                // potevo anche fare const { results } invece di "a" e bo potevo poi loggare direttamente results però bo fa ride dai
                // no un cazzo in realtà poi non mi conviene perché è simpatico results[0] 
                // this.firstName = a.results[0].name.first alla fine invece mi piace comunque
            this.firstName = a.results[0].name.first
            this.lastName = a.results[0].name.last
            this.email = a.results[0].email
            this.gender = a.results[0].gender
            this.pic = a.results[0].picture.large
        }
    },

})
app.mount("#app")