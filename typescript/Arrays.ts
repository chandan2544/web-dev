// arrays syntax on ts

//way 1
const superHeros: string[] = []
const heroPower: number[] = []

superHeros.push("ironman");
heroPower.push(2)

//way 2
const heroPower1: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({name: "", isActive: true})

// Array inside Array
const MLModels: number[][] = [
    [255, 255, 255],
    []
]


export{}