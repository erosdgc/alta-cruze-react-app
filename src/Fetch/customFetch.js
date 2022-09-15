import cruises from "./Origin";

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cruises);
        } , 500);
    })
}

export const getToDoById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(cruises.find(prod => prod.id === id))
        }, 500)
    })
}