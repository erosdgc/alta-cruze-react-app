import cruises from "./Origin";

export function customFetch () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cruises);
        } , 500);
    })
}

export function getData (id) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(cruises.find(prod => prod.id === id))
        }, 500)
    })
}