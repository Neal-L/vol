<script setup>
import { reactive } from 'vue';

const socialMedias = reactive([
    {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/'
    },
    {
        icon: 'mdi-twitter',
        link: 'https://twitter.com/'
    },
    {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/'
    },
    {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/'
    },
])
</script>


<template>
    <v-footer rounded class="transparent">
        <v-row justify="center" no-gutters>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/index">首頁</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/concept">觀念</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/skill">技術</v-btn>
            <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/fitness">體能</v-btn>



            <v-col class="text-center mt-4" cols="12">
                <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" :href="media.link"
                    variant="text"></v-btn>
            </v-col>


            <v-col class="text-center mt-4" cols="12">
                <strong>版權屬於識庭所有</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
