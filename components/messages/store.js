let list = []

let createOne = (message) => {
    list.push(message)
}

let getAll = () => {
    return list
}

module.exports  = {
    getAll,
    createOne
}