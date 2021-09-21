const Counter = {
    data() {
        return {
            time: 0
        }
    },
    async mounted() {
        setInterval(() => {
            this.getProgess()
        }, 15000)
        this.getProgess()
    },
    methods: {
        async getProgess() {
            console.log(Date.now())
            this.time = dayjs().format("HH:mm")
        }
    }
}
Vue.createApp(Counter).mount('#app')