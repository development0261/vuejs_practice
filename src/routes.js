import{createWebHistory,createRouter} from 'vue-router'
import ProductCreateForm from './components/ProductCreateForm.vue'
import ProductListData from './components/ProductListData.vue'

const routes=[
    {
        name:'ProductCreateForm',
        path:'/',
        component:ProductCreateForm 
    },
    {
        name:'ProductListData',
        path:'/productlistdata',
        component:ProductListData 
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;