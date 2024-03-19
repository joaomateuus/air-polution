/* eslint-disable no-undef */
<script lang="ts">
import Navbar from '../components/Navbar/index.vue';
import { Loader } from '@googlemaps/js-api-loader';
import { ref, onMounted } from 'vue';
import { initFlowbite } from 'flowbite'

export default {
    setup() {
        const googleMapsApiKey = 'AIzaSyCoiKjx1sCjAAWYWbbxzHZJPOQT_Janc_Q';
        const loader = new Loader({
            apiKey: googleMapsApiKey,
            version: 'weekly',
            libraries: ['places']
            
        });
        const map = ref(null);
        const bairrosManaus = [
            { bairro: "Adrianópolis", longitude: -60.0100488, latitude: -3.1016961 },
            { bairro: "Aleixo", longitude: -59.9941528, latitude: -3.0869431 },
            { bairro: "Alvorada", longitude: -60.0404007, latitude: -3.0752159 },
            { bairro: "Aparecida", longitude: -60.0300102, latitude: -3.1173418 },
            { bairro: "Armando Mendes", longitude: -59.9421428, latitude: -3.0897108 },
            { bairro: "Betânia", longitude: -59.9955978, latitude: -3.1341656 },
            { bairro: "Cachoeirinha", longitude: -60.0057133, latitude: -3.1268 },
            { bairro: "Centro", longitude: -60.0206598, latitude: -3.1298957 },
            { bairro: "Chapada", longitude: -60.0288373, latitude: -3.0967957 },
            { bairro: "Cidade Nova", longitude: -59.9854831, latitude: -3.0362681 },
            { bairro: "Colônia Antônio Aleixo", longitude: -59.8938122, latitude: -3.0876383 },
            { bairro: "Colônia Oliveira Machado", longitude: -60.001378, latitude: -3.1497201 },
            { bairro: "Colônia Santo Antônio", longitude: -60.0101259, latitude: -3.0373555 },
            { bairro: "Colônia Terra Nova", longitude: -60.0201653, latitude: -3.0110435 },
            { bairro: "Compensa", longitude: -60.0578516, latitude: -3.1037639 },
            { bairro: "Coroado", longitude: -59.9810602, latitude: -3.0905755 },
            { bairro: "Crespo", longitude: -59.9825933, latitude: -3.1436353 },
            { bairro: "Distrito Industrial", longitude: -59.9623665, latitude: -3.123242 },
            { bairro: "Dom Pedro", longitude: -60.0461828, latitude: -3.0885575 },
            { bairro: "Educandos", longitude: -60.0100488, latitude: -3.1412091 },
            { bairro: "Flores", longitude: -60.0086036, latitude: -3.054504 },
            { bairro: "Glória", longitude: -60.0353416, latitude: -3.1227903 },
            { bairro: "Japiim", longitude: -59.9768139, latitude: -3.1127248 },
            { bairro: "Jorge Teixeira", longitude: -59.9285217, latitude: -3.0283517 },
            { bairro: "Lírio do Vale", longitude: -60.0678679, latitude: -3.0727728 },
            { bairro: "Margem Esquerda do Rio Negro", longitude: -60.4022972, latitude: -2.0588487 },
            { bairro: "Margem Esquerda do Rio Solimões", longitude: -60.0217314, latitude: -3.1190275 },
            { bairro: "Mauazinho", longitude: -59.9392539, latitude: -3.1225147 },
            { bairro: "Monte das Oliveiras", longitude: -59.9944179, latitude: -3.0039494 },
            { bairro: "Morro da Liberdade", longitude: -60.001378, latitude: -3.1365435 },
            { bairro: "Nossa Senhora das Graças", longitude: -60.0187201, latitude: -3.1041608 },
            { bairro: "Nova Esperança", longitude: -60.0591935, latitude: -3.083475 },
            { bairro: "Novo Israel", longitude: -60.0129391, latitude: -3.027249 },
            { bairro: "Parque 10 de Novembro", longitude: -59.9970428, latitude: -3.0716838 },
            { bairro: "Paz", longitude: -60.0288373, latitude: -3.0573173 },
            { bairro: "Petrópolis", longitude: -59.9941528, latitude: -3.1088793 },
            { bairro: "Planalto", longitude: -60.0548564, latitude: -3.064695 },
            { bairro: "Ponta Negra", longitude: -60.0895564, latitude: -3.0482142 },
            { bairro: "Praça 14 de Janeiro", longitude: -60.0129391, latitude: -3.1215387 },
            { bairro: "Presidente Vargas", longitude: -60.0302827, latitude: -3.1198871 },
            { bairro: "Puraquequara", longitude: -59.8453182, latitude: -3.0586602 },
            { bairro: "Raiz", longitude: -59.9984879, latitude: -3.1254752 },
            { bairro: "Redenção", longitude: -60.0404007, latitude: -3.0532877 },
            { bairro: "Santa Etelvina", longitude: -60.0030611, latitude: -2.9857472 },
            { bairro: "Santa Luzia", longitude: -60.0049908, latitude: -3.1405003 },
            { bairro: "Santo Agostinho", longitude: -60.0649764, latitude: -3.0924321 },
            { bairro: "Santo Antônio", longitude: -60.0447373, latitude: -3.1159486 },
            { bairro: "São Francisco", longitude: -60.0057133, latitude: -3.1092408 },
            { bairro: "São Geraldo", longitude: -60.0267097, latitude: -3.1078082 },
            { bairro: "São Jorge", longitude: -60.0387102, latitude: -3.1076222 },
            { bairro: "São José Operário", longitude: -59.9479207, latitude: -3.0679738 },
            { bairro: "São Lázaro", longitude: -59.9955978, latitude: -3.1407527 },
            { bairro: "São Raimundo", longitude: -60.0418462, latitude: -3.1246412 },
            { bairro: "Tancredo Neves", longitude: -59.9424976, latitude: -3.0544395 },
            { bairro: "Tarumã", longitude: -60.0606392, latitude: -3.0078867 },
            { bairro: "Vila Buriti", longitude: -59.9651035, latitude: -3.1402698 },
            { bairro: "Vila da Prata", longitude: -60.0476284, latitude: -3.1072574 },
            { bairro: "Zumbi dos Palmares", longitude: -59.9479151, latitude: -3.0811377 }
        ];
       
        const mountGoogleMaps = async () => {
            const google = await loader.load();
            map.value = new google.maps.Map(document.getElementById('map') as HTMLElement, {
                center: { lat: -3.1019413, lng: -60.0259671 }, // Coordenadas aproximadas do centro de Manaus
                zoom: 13,
            });

            bairrosManaus.forEach(bairro => {
                const marker = new google.maps.Marker({
                    position: { lat: bairro.latitude, lng: bairro.longitude },
                    map: map.value,
                    title: bairro.bairro // Adiciona o nome do bairro como título do marcador
                });

                const infowindow = new google.maps.InfoWindow({
                    content: `<div class="h-96 w-96"><h1>${bairro.bairro}</h1><p>Informações adicionais aqui.</p></div>`
                });

                marker.addListener('click', () => {
                    infowindow.open(map.value, marker);
                });
            });
            

         
        }

        onMounted(async () => {
            initFlowbite();
            mountGoogleMaps();

            
        });
    },
    return:  {

    }
}
</script>
<template>
    <div class="flex items-start justify-start h-screen w-full">
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a class="flex ms-2 md:me-24">
            <img class="h-20 w-42" src="https://upload.wikimedia.org/wikipedia/commons/0/03/ECO_LOGO_Positivo.png" alt="">
        </a>
      </div>
      <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
                <li data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Teste</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="flex flex-col h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 p-4">
        <span class="mt-12 text-xl m-4">Controle de Poluição do Ar nos Bairros de Manaus</span>
        <ul class="mt-8 space-y-2 font-medium">
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ms-3">Mapa</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ms-3">Lista de Bairros</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ms-3">Gráficos</span>
                </a>
            </li>
            <button class="flex items-center w-full" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button">
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Adicionar novo Bairro</span>
                    </a>
            </button>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ms-3">LogOut</span>
                </a>
            </li>
        </ul>
   </div>
</aside>


<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Adicionar Bairro
                </h3>
                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bairro</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nível de Poluição</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Latitude</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitude</label>
                        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                    </div>
                  
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar</button>
                </form>
            </div>
        </div>
    </div>
</div> 


    <div id="map" class="h-full w-full"></div>
</div>
</template>