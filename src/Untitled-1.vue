 methods: {
        async adduser() {
            const formData = new FormData();
            formData.append('file', this.productimages);
            console.log('hello' ,this.productimages);
            // alert('hello');
            // const headers = {
            //     'Content-Type': 'multipart/form-data'
            // };
            
            const config = {
                    headers: {"Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept"
            }
              // headers: { 'content-type': 'multipart/form-data' }
                }
            await axios.post("http://127.0.0.1:8000/api/Product_Saved_page", {
                productname: this.productname,
                quantity: this.quantity,
                purchaseprice: this.purchaseprice,
                saleprice: this.saleprice,
                description: this.description,
                imagePath:this.productimages,
            }, config
            ).then(function (response) {
              console.log('config',response);
                    // currentObj.success = response.data.success;
                })
        },
        uploadImage() {
            this.productimages = this.$refs.file.files[0]
            // let fd = new FormData()
            // this.imagePath = img
            // fd.append('image', this.imagePath)

            console.log(this.productimages)
        }
    },