import Database from "@database"
import { TProduct } from "types/Product";

async function getListAvocados(): Promise<any[]>{
    const avoDatabase = new Database();
    const listAvocados = await avoDatabase.getAll();
    return listAvocados;
}

class ProductHandeler{
    async getProducts(storageName: string): Promise<Array<TProduct>> {
        const dataString = await localStorage.getItem(storageName);
        return JSON.parse(dataString); 
    }

    async setProduct(storageName: string, product: Array<TProduct>): Promise<void>{
        const dataString = JSON.stringify(product)
        localStorage.setItem(storageName, dataString);
    }
}

export {getListAvocados, ProductHandeler}