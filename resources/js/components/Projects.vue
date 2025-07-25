<style scoped>
    .container {
        min-height: 100vh;
    }
    .bgimages {
        min-height: 100vh;
        background-image: url('/images/skys.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<template>
    <div class="container">
        <div class="grid grid-cols-3 gap-4">
            <div class="bgimages col-span-1">
                <h1 class="text-4xl font-extrabold text-white text-center text-shadow-lg">Dev Logs & <br>Project Builds</h1>
            </div>
            <div class="col-span-2 flex items-center justify-center p-4">
                <div class="grid grid-cols-2 gap-4">
                    <Card />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Card from './Card.vue';
</script>