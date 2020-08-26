<template>
    <div>
        <app-tweet v-for="tweet in tweets"
                   :key="tweet.id"
                   :tweet="tweet"/>

        <div v-if="tweets.length"
             v-observe-visibility="{
            callback:handleScrolledToBottomOfTimeline
        }"
        >

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'AppTimeline',
    data() {
        return {
            page: 1,
            lastPage: 1
        }
    },
    computed: {
        ...mapGetters({
            tweets: 'tweets'
        }),
        urlWithPage() {
            return `/api/timeline?page=${this.page}`;
        }
    },
    methods: {
        ...mapActions({
            getTweets: 'getTweets'
        }),
        loadTweets() {
            this.getTweets(this.urlWithPage).then(response => {
                this.lastPage = response.data.meta.last_page;
            })
        },
        handleScrolledToBottomOfTimeline(isVisible) {
            if (!isVisible) {
                return;
            }

            if (this.lastPage === this.page) {
                return;
            }
            this.page++;
            this.loadTweets();
        }
    },
    mounted() {
        this.loadTweets();
    }
}
</script>

<style scoped>

</style>
