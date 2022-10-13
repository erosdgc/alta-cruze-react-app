import cruises from "./Origin";

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cruises);
        } , 500);
    })
}

export const getData = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(cruises.find(item => item.id === id))
        }, 500)
    })
}