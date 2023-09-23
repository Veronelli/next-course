import Database from "@database"

async function getListAvocados(): Promise<any[]>{
    const avoDatabase = new Database();
    const listAvocados = await avoDatabase.getAll();
    return listAvocados;
}

// class ProductHandeler{
//     async getProducts(storageName: string){
//         return await localStorage.getItem(storageName) 
//     }

//     async setProduct(storageName: string, product: )
// }

export {getListAvocados}