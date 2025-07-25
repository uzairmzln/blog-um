<template>
    <div v-for="card in cardData" :key="card.id" class="">
        <div>
            <Card style="width: 25rem; overflow: hidden">
                <template #header>
                    <img :alt="card.imageAlt" :src="card.imageSrc" />
                </template>
                <template #title>{{ card.title }}</template>
                <template #subtitle>{{ card.subtitle }}</template>
                <template #content>
                    <p class="m-0">{{ card.content }}</p>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <Button 
                            v-if="card.seeButtonLabel"
                            :label="card.seeButtonLabel || 'Cancel'" 
                            severity="secondary" 
                            outlined 
                            class="w-full" 
                            @click="handleSee(card.id)"
                        />
                        <Button 
                            v-if="card.saveButtonLabel"
                            :label="card.saveButtonLabel || 'Save'" 
                            class="w-full" 
                            @click="handleSave(card.id)"
                        />
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

const cardData = ref([
    {
        id: 1,
        title: 'Profile WebSite',
        subtitle: 'Web Development',
        content: 'A personal website showcasing my portfolio, Education, Skills and About Myself. Built with only Html, Css And Javascript.',
        imageSrc: '/images/profile.png',
        imageAlt: 'Mobile App',
        seeButtonLabel: 'Live',
        seeButtonUrl: 'https://uzairmazlanprofile.vercel.app/',
    },
    {
        id: 2,
        title: 'Spotify API Integration',
        subtitle: 'Web Development',
        content: 'A modern web application built with Vue.js and laravel. Features include real-time Data, and user authentication',
        imageSrc: '/images/spot.png',
        imageAlt: 'Project Spotify',
        seeButtonLabel: 'Live',
        seeButtonUrl: 'https://dev-laravue.site/',
        saveButtonLabel: 'Source Code',
        saveButtonUrl: 'https://github.com/uzairmzln/spotify-app-api',
    },
])

// Event handlers
const handleSee = (cardId) => {
    const card = cardData.value.find(c => c.id === cardId)
    if (card && card.seeButtonUrl) {
        window.open(card.seeButtonUrl, '_blank') // Opens in new tab
        // Or use window.location.href = card.seeButtonUrl for same tab
    }
}

const handleSave = (cardId) => {
    const card = cardData.value.find(c => c.id === cardId)
    if (card && card.saveButtonUrl) {
        window.open(card.saveButtonUrl, '_blank')
    }
}
</script>