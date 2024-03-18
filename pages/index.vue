<script setup lang="ts">
import Navbar from '../../components/Navbar/index.vue'
</script>
<template>
    <div class="flex flex-col h-screen w-full">
        <Navbar />
        <div class="flex flex-col items-center justify-start w-full h-full">
            <div class="flex items-start justify-between w-full h-5/6 p-12">
                <div class="flex flex-col items-start justify-evenly h-3/5 w-1/3 m-16">
                    <span class="text-4xl align-center font-bold">Transformando a qualidade do ar para um Manaus mais limpo e saudável</span>
                    <span class="text-2xl align-center">Juntos pelo futuro sustentável da nossa cidade</span>
                    <button class="h-16 w-56 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white mt-6">
                        <NuxtLink to="">
                            Registre-se
                        </NuxtLink>
                    </button>
                </div>
                <div class="flex items-center justify-center h-fit w-fit">
                    <img class="h-3/5 w-3/5" src="https://aqualissolucoes.com.br/wp-content/uploads/2022/03/kisspng-environmental-protection-natural-environment-ecolo-green-building-5a827ff051bc19.6962069315185018723348.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
