class Products {
async gettingProducts(){
    try {
        let incomingData = await fetch("products.json");

        let readableData = await incomingData.json();

        let consumableData = readableData.items;

        // console.log(readableData);

        // console.log(consumableData);

        consumableData =consumableData.map((data)=>{
            let {id} = data.sys;
            let {title,price} = data.fields;
            let image = data.fields.image.fields.file.url;

            // console.log(id,title,price,image);
            // console.log( {id,title,price,image});
            return {id,title,price,image};
        })

        return consumableData;

        
        
    } catch (error) {

        console.log(error)
        
    }
}
}

let products = new Products();

products.gettingProducts();
