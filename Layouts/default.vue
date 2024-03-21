<script>
export default {
    
}
</script>
<template>
    <div class="flex flex-col h-screen w-full">
        <div class="flex items-center justify-between h-36 w-full p-4">
            <div class="flex items-center h-fit w-fit">
                <img class="h-24 w-42" src="https://upload.wikimedia.org/wikipedia/commons/0/03/ECO_LOGO_Positivo.png" alt="">
            </div>
            <div class="flex items-center justify-evenly w-96 h-32">
                <button class="h-12 w-32 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white">
                    <a href="/Login">Login</a>
                </button>
                <button class="h-12 w-32 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white">
                    Sobre
                </button>
            </div>
        </div>
        <div class="flex flex-col items-center justify-start w-full h-full">
           <slot />
        </div>
    </div>
</template>