<style scoped>
    .header {
        background-image: url('/images/plane.jpg');
        min-height: 80vh;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>
<template>
    <div class="header">
        <Navbar />
        <div class="header p-20 text-white">
            <h1 class="text-4xl font-extrabold text-start p-10">Building My <span class="text-black">Future</span>,<br>One Project at a Time</h1>
            <p class="text-start mt-4 p-10 text-black">Starting From Zero</p>
        </div>
    </div>
    <Carousel />
    <div id="projects">
        <Projects />
    </div>
</template>
<script setup>
import Navbar from '../Navbar.vue';
import Carousel from '../Carousel.vue';
import Projects from '../Projects.vue';
</script>