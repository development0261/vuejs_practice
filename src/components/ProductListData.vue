<template>
    <router-link to="/"><button  class="btn-list">Product Form</button></router-link>

<h1>Product Data</h1>
<table border="1px solid black" cellpadding="10px" cellspacing="0px" width="100%" >
    <tr>
        <th @click="sortList('id')">Product Id </th>
        <th>Product Name</th>
        <th>Product Quantity</th>
        <th>Product Salesprice</th>
        <th>Product Purchaseprice</th>
        <th>Product Description</th>
        <th>Product Images</th>
    </tr>
    <tr class="item" v-for="item in list" :key="item" >
        <td>{{ item.id }}</td>
        <td>{{ item.productname }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.saleprice }}</td>
        <td>{{ item.purchaseprice }}</td>
        <td>{{ item.description }}</td>
        <td><img :src="item.productimages" style="width:200px"></td>

    </tr>
</table>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductListData',
    data() {
        return {
            list: [],
            sortedbyASC: true,
            sortingOrder:["asc"],
            
        };
    },
    methods: {
        sortList(sortBy){
            if (this.sortedbyASC){
                this.list.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
                this.sortedbyASC = false;
            }else{
                this.list.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
                this.sortedbyASC = true;
            }
        },
         getlistdata() {

              axios.get(process.env.VUE_APP_SERVICE_URL+'/'+'product_view_page')
                .then(resp => {
                    this.list = resp.data.data
                    this.list.sort((x, y) => (x['id'] > y['id'] ? -1 : 1))
                })
        }
    },
    mounted(){
        this.getlistdata()
    }
}
</script>
<style>
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
</style>