<template>
    <form class="flex">
        <div class="mr-2"><img :src="$user.avatar" class="w12 rounded-full" alt=""></div>
        <div class="flex-grow">
            <textarea
                class="bg-gray-900 w-full outline-none text-gray-300 text-lg resize-none mb-2"
                placeholder="What's happening?"
                autofocus></textarea>
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
export default {
    name: 'AppTweetCompose'
}
</script>

<style scoped>

</style>
