import Database from "@database"

async function getListAvocados(): Promise<any[]>{
    const avoDatabase = new Database();
    const listAvocados = await avoDatabase.getAll();
    return listAvocados;
}

export {getListAvocados}