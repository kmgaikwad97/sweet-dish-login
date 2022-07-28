<template>
<div class="wrapper">
    <MainHeader />
    <div class="signin">
        <div class="container mt-5">
            <!-- <form ref="anyName" @submit.prevent="postData(posts.email)" method="post"> -->
            <form ref="anyName" @submit.prevent="postData(posts)" method="post">

                <div class="mb-3">

                    <label for="exampleInputEmail1" required class="form-label">Email address</label>

                    <input @blur="$v.posts.email.$touch()" type="email" placeholder="Enter Your Email" name="email" v-model.trim="$v.posts.email.$model" :class="{'is-invalid':$v.posts.email.$error , 'is-valid':!$v.posts.email.$invalid}" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    <div class="valid-feedback">Your Email is valid</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.posts.email.required">Email is required. </span>

                        <span v-if="!$v.posts.email.email">Incorrect email address. </span>

                    </div>

                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" required class="form-label">Password</label>
                    <input @blur="$v.posts.password.$touch()" type="password" placeholder="Enter Your Password" name="password" v-model.trim="$v.posts.password.$model" :class="{'is-invalid':$v.posts.password.$error , 'is-valid':!$v.posts.password.$invalid}" class="form-control input" id="exampleInputPassword1 password" />

                    <div class="valid-feedback">Your Password is valid</div>

                    <div class="invalid-feedback">
                        <span v-if="!$v.posts.password.required">Password is required</span>

                        <span v-if="!$v.posts.password.minLength">Password should be more than 6.
                        </span>

                        <span v-if="!$v.posts.password.maxLength">Password should be less than
                            15. </span>

                        <span v-if="!$v.posts.password.checkpassword">Password should Atleast Consist one Capital, 1 Lower, 1 number and 1 Special character. </span>
                    </div>

                </div>

                <!-- <button type="submit" class="btn btn-dark"> -->
                    <button type="submit" :disabled="$v.$invalid" class="btn btn-dark">
                    Submit
                </button>

                <p class="mt-4">
                    Already have registered ?<router-link style="text-decoration:none;" to="/login"> Go to Login</router-link>
                </p>
            </form>
        </div>
    </div>

    <Footer />
</div>
</template>

<script>
import MainHeader from "./common/MainHeader.vue"
import Footer from "./common/Footer.vue"
import {
    required,
    email,
    minLength,
    maxLength,
    helpers,
} from "vuelidate/lib/validators";
import axios from "axios";
import swal from 'sweetalert';

// for validating the password
const checkpassword = helpers.regex("checkpassword", /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[!?@#$%^&*-]).*$/)

export default {
    name: "Signup",
    components: {
        MainHeader,
        Footer
    },
    data() {
        return {
            posts: {
                email: "",
                password: "",
            }
        }
    },
    validations() {
        return {
            posts: {
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(15),
                    checkpassword
                },
            }
        }
    },

    methods: {
        async postData(value) {
            console.log("val", value);
             let result = await axios.post("http://localhost:3200/mens", this.posts);
                console.log("result", result);
                console.log("result", result.data);



            // if (value === "") return true;
            // // const response = await axios.get("http://localhost:3300/");
            // console.log("backend data ", response);
            // const registrations = response.data[0];
            // console.log("regi", registrations);

            // const alreadyDoneRegistration = registrations.find(registrations => registrations.email === value)
            // console.log("alred", alreadyDoneRegistration);
            // if (alreadyDoneRegistration) {
            //     // return false;
            //     // alert("Email already exist")
            //     swal({
            //         title: "Error Message!",
            //         text: "This Email is Already Exist.",
            //         icon: "error",
            //         button: "Ok",
            //     });
            // }
            // // return true;
            // else {
            //     console.log("Submitted")
            //     let result = await axios.post("http://localhost:3200/mens", this.posts);
            //     console.log("result", result);
            //     console.log("result", result.data.email);

            //     this.$refs.anyName.reset();
            //     // this.$router.push({
            //     //   name: "UserData",
            //     // });
            //     if (result.status == 201) {
            //         alert("SignUp Done");
            //         localStorage.setItem("user-info", JSON.stringify(result.data));
            //         this.$router.push({
            //             name: "Login",
            //         });
            //     }
            // }
        },
    }

}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.signin {
    background: #efe9e2;
    flex: 1;
    overflow-y: auto;
}
</style>
