<template>
    <form class="flex" @submit.prevent="onSubmit">
        <div class="mr-2"><img :src="$user.avatar" class="w12 rounded-full" alt=""></div>
        <div class="flex-grow">
            <textarea
                class="bg-gray-900 w-full outline-none text-gray-300 text-lg resize-none mb-2"
                placeholder="What's happening?"
                autofocus
                v-model="form.body"></textarea>
            <div class="flex justify-between">
                <div>
                    actions
                </div>
                <div>
                    <button
                        type="submit"
                        class="bg-blue-500 rounded-full text-gray-300 text-center px-4 py3 font-bold leading-none"
                    >
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AppTweetCompose',
    data() {
        return {
            form: {
                body: ''
            }
        }
    },
    methods: {
        async onSubmit() {
            await axios.post('/api/tweets', this.form);
        }
    }
}
</script>

<style scoped>

</style>
