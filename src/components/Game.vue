<script setup>
import { ref, watch } from 'vue'
import Rules from './Rules.vue'
import Card from './Card.vue'

const rulesModal = ref(false)

const cards = ref([
    {
        name: 'rock',
        class: 'col-start-6 row-start-6',
        color: 'bg-[#DC2E4E]',
    },
    {
        name: 'paper',
        class: 'col-start-7 row-start-3',
        color: 'bg-[#4B67F1]',
    },
    {
        name: 'scissors',
        class: 'col-start-4',
        color: 'bg-[#F2AB26]',
    },
    {
        name: 'lizard',
        class: 'col-start-2 row-start-6',
        color: 'bg-[#834FE3]',
    },
    {
        name: 'spock',
        class: 'row-start-3',
        color: 'bg-[#40B9CE]',
    },
])

const userPick = ref(null)
const housePick = ref(null)
const result = ref(null)
const score = ref(0)

const takeHousePick = () => {
    let housePickVal
    do {
        housePickVal = Math.floor(Math.random() * cards.value.length)
    }
    while(housePickVal == userPick.value )

    return housePickVal
}

const pickTheWinner = (userPick, housePick) => {
    
    if(userPick === 0){
        if(housePick === 2 || housePick === 3 ){
            return true
        } else {
            return false
        }
    } else if(userPick === 1){
        if(housePick === 0 || housePick === 4 ){
            return true
        } else {
            return false
        }
    } else if(userPick === 2){
        if(housePick === 1 || housePick === 3 ){
            return true
        } else {
            return false
        }
    } else if(userPick === 3){
        if(housePick === 4 || housePick === 1 ){
            return true
        } else {
            return false
        }
    } else {
        if(housePick === 2 || housePick === 0 ){
            return true
        } else {
            return false
        }
    }
}

const playGame = val => {

    userPick.value = val

    setTimeout(() => {
        housePick.value = takeHousePick()
        result.value = pickTheWinner(userPick.value, housePick.value)
        score.value = Math.max(0, result.value ? score.value + 1 : score.value - 1)
    }, 1000)

}

const playAgain = () => {
    userPick.value = null
    housePick.value = null
    result.value = null
}

const toggleRulesModal = () => {
    rulesModal.value = !rulesModal.value
    document.querySelector('body').classList.toggle('overflow-hidden')
}

</script>

<template>
    <div class="min-h-screen relative p-8">
        <header class="max-w-lg mx-auto">
            <div class="flex justify-between items-center p-3 border-2 border-[#506B95] rounded-lg">
                <img src="../assets/images/logo-bonus.svg" alt="" class="w-16 h-16">
                <div class="flex flex-col items-center justify-center bg-[#fafafa] w-20 h-20 rounded-md">
                    <h1 class="p-0 text-sm text-[#2A46C0] uppercase">Score</h1>
                    <span class="font-bold text-[#3B4363] text-4xl p-0">{{ score }}</span>
                </div>
            </div>
        </header>

        <main class="mt-8 lg:mt-10">

            <!-- Step 1 -->
            <div v-if="userPick == null" class="max-w-sm mx-auto grid grid-cols-10 grid-rows-7 place-items-center bg-[url('./assets/images/bg-pentagon.svg')] bg-[length:230px_auto] bg-no-repeat bg-center">
                <Card @click="playGame(index)" v-for="(card, index) in cards" :key="index" :card="card" class="col-span-4 row-span-2 w-24 h-24 cursor-pointer" :class="`${card.class} ${card.color}`" ></Card>
            </div>

            
            <!-- Step 2 -->
            <div v-else class="max-w-sm mx-auto">
                <div class="flex justify-between">
                    <div class="flex flex-col items-center gap-4">
                        <Card :card="cards[userPick]" class="w-28 h-28" :class="`${cards[userPick].color}`"></Card>
                        <p class="text-white text-sm">YOU PICKED</p>
                    </div>

                    <div class="flex flex-col items-center gap-4">
                        <div v-if="housePick == null" class="flex items-center justify-center bg-[#1A2946] w-28 h-28 rounded-full p-4"></div>

                        <Card v-else :card="cards[housePick]" class="w-28 h-28" :class="`${cards[housePick].color}`"></Card>
                        
                        <p class="text-white text-sm">THE HOUSE PICKED</p>
                    </div>
                </div>

                <div v-if="result != null" class="mt-16 text-center space-y-4">
                    <p class="text-white font-bold text-5xl">YOU {{ result ? 'WIN' : 'LOSE' }}</p>
                    <button @click="playAgain" class="px-10 py-2 rounded-lg bg-[#fafafa] text-[#3B4363]">PLAY AGAIN</button>
                </div>

            </div>

            <div class="fixed inset-x-0 bottom-2 lg:bottom-10 lg:inset-x-auto lg:right-10 text-center">
                <button @click="toggleRulesModal" class="border mx-auto py-2 px-10 rounded-lg text-white">RULES</button>
            </div>
            
        </main>
    </div>
    <Rules v-if="rulesModal" @close-modal="toggleRulesModal"></Rules>
</template>

<style>

body {
    background: #141539;
}

</style>