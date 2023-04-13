<template>
    <router-link to="/productlistdata"><button class="btn-list">List Data</button></router-link>
<h1 class="product">Product Form</h1>
<form class="contact-form" enctype="multipart/form-data" method="post" ref="form">
    <div class="form-group">
        <label for="name">Product Name:</label>
        <input type="text" id="productname" name="productname" v-model="productname">
        <span class="text" v-if="v$.productname.$error" style="color:red">This filled is required</span>
    </div>
    <div class="form-group">
        <label for="email">Quantity</label>
        <input type="number" id="" name="quantity" class="product-select" min="0" max="100" v-model="quantity">
        <span v-if="v$.quantity.$error" style="color:red">This filled is required</span>
    </div>
    <div class="form-group">
        <label for="message">Purchase Price:</label>
        <input type="number" id="getvalue" name="purchaseprice" v-model="purchaseprice">
        <span v-if="v$.purchaseprice.$error" style="color:red">This filled is required</span>
    </div>
    <div class="form-group">
        <label for="message">Sale Price:</label>
        <input type="number" id="saleValue" name="saleprice" v-model="saleprice">
        <span v-if="v$.saleprice.$error" style="color:red">This filled is required</span>
    </div>
    <div class="form-group">
        <label for="message">Description:</label>
        <textarea id="message" name="description" v-model="description"></textarea>
        <span v-if="v$.description.$error" style="color:red">This filled is required</span>
    </div>
    <div class="form-group">
        <label for="message">Photos:</label>
        <input type="file" id="file-upload" name="productimages" @change="uploadImage" ref="file" v-bind:src="productimages">
    </div>
    <div class="form-group">
        <button type="button" v-on:click="adduser()" class="btn-submit" id="submit">Send</button>
    </div>
</form>

</template>

<script>
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required
} from '@vuelidate/validators'
import axios from 'axios';
export default {
    name: 'ProductCreateForm',
    data() {
        return {
            v$: useVuelidate(),
            errors: [],
            productname: '',
            quantity: '',
            purchaseprice: '',
            saleprice: '',
            description: '',
            productimages: '',
            list: [],
        };
    },
    validations() {
        return {
            productname: {
                required
            },
            quantity: {
                required
            },
            purchaseprice: {
                required
            },
            saleprice: {
                required
            },
            description: {
                required
            },
        }
    },
    methods: {

        uploadImage(e) {
            this.productimages = e.target.files[0];
        },
        async adduser() {
            this.v$.$validate()
            let currentObj = this;

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            let formData = new FormData();
            var file = document.getElementById("file-upload").files[0];
            formData.append('productimages', file);
            formData.append('productname', this.productname);
            formData.append('quantity', this.quantity);
            formData.append('purchaseprice', this.purchaseprice);
            formData.append('saleprice', this.saleprice);
            formData.append('description', this.description);

            console.log('hello',process.env.VUE_APP_SERVICE_URL+'/'+'product_saved_page');

            await axios.post(process.env.VUE_APP_SERVICE_URL+'/'+'product_saved_page', formData, config).then(function (response) {
               
                this.list=response

            }).catch(function (error) {
                currentObj.output = error;
            });
            this.$refs.form.reset();
        },
    },
    
}
</script>

<style>
.product {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    width: 100%;
    margin-bottom: 20px;
}

label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
}

input[type="number"],
input[type="file"],
input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    font-size: 1.1rem;
}

input[type="file"]:focus,
input[type="number"]:focus,
input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.btn-list{
    background-color: #398f9b;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.btn-submit {
    background-color: #ff6f61;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.btn-submit:hover {
    background-color: #ff524f;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.item li {
    display: table-cell;

    width: 150px;
    height: 100px;
    border: 1px solid black;
    text-align: center;
}
</style>
