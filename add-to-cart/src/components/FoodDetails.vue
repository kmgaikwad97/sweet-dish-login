<template>
<div class="d-flex food-details-outer">
    <MainHeader />

    <div class="food-details">
        <div class="container mb-5">
            <h4 class="my-4 fw-600">Add Items to Cart</h4>
            <div class="row">
                <div class="col-md-4" style="cursor:pointer;">
                    <img :src="details.url" width="300px" height="300px" style="border-radius: 15px" alt="food-image">
                </div>
                <div class="col-md-4" style="cursor:pointer;">
                    <h4 class="my-4 fw-600">Name:{{details.name}}</h4>
                    <h4 class="my-4 fw-600">Price:{{details.price}}</h4>
                    <h4 class="my-4 fw-600">Description:{{details.desc}}</h4>
                    <h4 class="my-4 fw-600">Rating:{{details.rate}}</h4>
                    <div>
                        <button @click="goToCart" class="btn btn-primary" style="margin-right:7px">Go to Cart</button>
                        <button @click="addToCart" style="margin-right:7px" class="btn btn-success">Add Items</button>
                        <button @click="removeItem" class="btn btn-danger">Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import MainHeader from './common/MainHeader.vue'
import Footer from './common/Footer.vue'
export default {
    name: "FoodDetails",
    components: {
        MainHeader,
        Footer
    },
    data() {
        return { 
            details: this.$route.params
        }
    },
    methods: {
        goToCart() {
            this.$router.push('/cart');
        },
        addToCart(){
            // this.$store.commit('addToCart')
            this.$store.dispatch("addToCart",this.details);
        },
        removeItem(){
            this.$store.dispatch("removeItem",this.details);
        }
    },
    created(){
        console.log(this.$route);
        if(this.$route.params.id !== undefined)
        localStorage.setItem("details",JSON.stringify(this.$route.params));
    },
    mounted(){
        this.details = JSON.parse(localStorage.getItem("details"));
    }
}
</script>

<style scoped>
    .food-details-outer{
        flex-direction: column;
        height: 100vh;
    }
    .food-details{
        background: #efe9e2;
        flex:1;
        overflow-y: auto;
    }
    .fw-600{
        font-weight: 600;
    }
</style>
