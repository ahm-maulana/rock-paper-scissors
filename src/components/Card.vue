<script setup>
const props = defineProps(['card'])
const imageUrl = new URL(`/src/assets/images/icon-${props.card.name}.svg`, import.meta.url)

</script>

<template>
    <div class="flex justify-center items-center rounded-full">
        <div class="flex items-center justify-center bg-[#E8E8E8] w-3/4 h-3/4 rounded-full p-4">
            <img :src="imageUrl" alt="">
        </div>
    </div>
</template>