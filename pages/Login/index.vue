<script lang="ts">
import { useField, useForm } from 'vee-validate';
import * as yup from "yup";
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created

interface LoginPayload {
    email: string;
    password: string;
}

export default {
    name: "Login",
    setup() {
        // definePageMeta({
        //     middleware: 'auth'
        // })
        const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
        const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
        const router = useRouter();

        onMounted(() => {
            if (authenticated.value) {
                router.push('/Home');
            }
        })

        const formSchema = yup.object({
            email: yup.string().email().required(),
            password: yup.string().required()
        });
        useForm<LoginPayload>({
            validationSchema: formSchema,
            initialValues: {
                email: "",
                password: "",
            },
        });
        const { value: email, errorMessage: emailError } = useField("email");
        const { value: password, errorMessage: passwordError } = useField("password");

        const login = async () => {
            await authenticateUser({email, password} as unknown as LoginPayload); // call authenticateUser and pass the user object
            // redirect to homepage if user is authenticated
            if (authenticated) {
                console.log("entrei")
                router.push('/Home');
            }
        };

        const handleFormSubmit = () => {
            console.log(email.value, password.value)
        }

        return {
            email,
            emailError,
            password,
            passwordError,
            handleFormSubmit,
            login
        };
    },
};
</script>
<template>
    <div class="flex flex-col items-center justify-center h-screen w-full">
        <form @submit.prevent="login" class="flex flex-col items-center justify-start h-3/5 w-1/3 m-8 p-4">
            <span class="text-4xl align-center font-bold">Login</span>
            <div class="flex flex-col items-center justify-evenly h-1/2 w-1/3 m-6">
                <div>
                    <input v-model="email" name="email" class="h-12 w-96 border-b-2 border-green-500 p-4 outline-none"
                        type="text" placeholder="Email" />
                    <span v-if="!!emailError" class="text-red-500">{{ emailError }}</span>
                </div>
                <div>
                    <input v-model="password" name="password"
                        class="h-12 w-96 border-b-2 border-green-500 p-4 outline-none" type="password"
                        placeholder="Senha" />
                    <span v-if="!!passwordError" class="text-red-500">{{ passwordError }}</span>
                </div>

                <button type="submit"
                    class="h-12 w-96 border-2 border-green-500 rounded-full hover:bg-green-500 hover:text-white mt-8">
                    Entrar
                </button>
            </div>
        </form>
        <div class="flex items-start w-full">
            <!-- <img class="h-72 w-96" src="https://www.pngall.com/wp-content/uploads/4/Earth-Day-World-Environment-Day-PNG-File.png" alt=""> -->
        </div>
    </div>
</template>