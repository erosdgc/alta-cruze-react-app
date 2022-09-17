import cruises from "./Origin";

export function customFetch () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cruises);
        } , 500);
    })
}

export function getItemById (id) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(cruises.find(prod => prod.id === id))
        }, 500)
    })
}