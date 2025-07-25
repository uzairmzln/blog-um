<style scoped>
.card {
    min-height: 20vh;
}

.company-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    padding: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.company-logo-container:hover {
    transform: translateY(-2px);
}

.company-logo {
    max-height: 60px;
    max-width: 180px;
    width: auto;
    height: auto;
    object-fit: contain;
    transition: filter 0.3s ease;
}

/* Remove default carousel styling */
:deep(.p-carousel-content) {
    background: transparent;
}

:deep(.p-carousel-container) {
    background: transparent;
}
</style>
<template>
    <div class="card">
        <Carousel 
            :value="duplicatedCompanies" 
            :numVisible="5" 
            :numScroll="1" 
            :responsiveOptions="responsiveOptions" 
            circular 
            :autoplayInterval="3000"
            :showNavigators="false"
            :showIndicators="false"
        >
            <template #item="slotProps">
                <div class="flex justify-center items-center p-4 mx-2">
                    <div class="company-logo-container">
                        <img 
                            :src="slotProps.data.logo" 
                            :alt="slotProps.data.name" 
                            class="company-logo"
                        />
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import Carousel from 'primevue/carousel';

const companies = ref([
    {
        name: 'VueJs',
        logo: '/images/vue-tp.png'
    },
    {
        name: 'Laravel',
        logo: '/images/laravel-tp.png'
    },
    {
        name: 'codeigniter',
        logo: '/images/ci3-tp.png'
    },
    {
        name: 'mysql',
        logo: '/images/mysql.png'
    },
    {
        name: 'boostrap',
        logo: '/images/bootstrap.png'
    },
    {
        name: 'tailwind',
        logo: '/images/tailwind.png'
    },
    {
        name: 'tailwind',
        logo: '/images/git-logo.png'
    },
    {
        name: 'tailwind',
        logo: '/images/postman.png'
    },
]);

const duplicatedCompanies = computed(() => {
    // Duplicate the array 2-3 times to ensure smooth infinite scrolling
    return [...companies.value, ...companies.value, ...companies.value];
});

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>