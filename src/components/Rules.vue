<script setup>

const emit = defineEmits(['closeModal'])

</script>

<template>
    <div class="fixed inset-0 bg-[#141539] bg-opacity-80 transition-opacity"></div>
    <div class="fixed inset-0 lg:max-w-xs lg:max-h-fit lg:p-6 m-auto bg-white rounded-lg">
        <div class="flex h-full gap-2 flex-col justify-around items-center lg:items-start">
            <h3 class="text-3xl font-bold text-[#3B445F]">RULES</h3>
            <img src="../assets/images/image-rules-bonus.svg" class="w-60 h-auto lg:mx-auto" alt="">
            <button @click="$emit('closeModal')" class="lg:absolute lg:right-6 lg:top-9">
                <img src="../assets/images/icon-close.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>