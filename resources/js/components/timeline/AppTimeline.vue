<template>
    <div>
        <app-tweet v-for="tweet in tweets"
                   :key="tweet.id"
                   :tweet="tweet"/>
    </div>
</template>

<script>
export default {
    name: 'AppTimeline',
    data() {
        return {
            tweets: []
        }
    },
    mounted() {
        this.getTweets();
    },
    methods: {
        async getTweets() {
            let response = await axios.get('/api/timeline');
            this.tweets = response.data.data;
        }
    }
}
</script>

<style scoped>

</style>
