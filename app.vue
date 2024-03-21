
<script lang="ts">
import { useAuthStore } from './store/auth';
export default {
  setup() {
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const layout = ref('default'); 
    onMounted(() => {
      layout.value = authenticated.value ? 'auth' : 'default'; 
       console.log(layout.value ,authenticated.value);   
    })
    return {
      layout,
    };
  },
};
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
