<template>
    <div>
        <span class="text-gray-300 font-bold">{{ user.name }}</span><span
        class="text-gray-600">@{{ user.username }}</span>
    </div>
</template>

<script>
export default {
    name: 'AppTweetUsername',
    props: {
        user: {
            required: true,
            type: Object
        }
    }
}
</script>

<style scoped>

</style>
