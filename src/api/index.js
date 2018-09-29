export function fetchData() {
    return new Promise((resolve, reject) => {
        resolve({
            data: [
                {"name": "si"},
                {"name": "van"}
            ]
        })
    })
}