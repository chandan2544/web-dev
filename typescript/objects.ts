// objects in ts

const User = {
    name: "chandan",
    email: "chandan@lco.dev",
    isAvtive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

createUser(newUser)



function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

// type alias
 
type User = {
    name: string;
    email: string;
    isActive: boolean
}


function _createUser(user: User): User{
    return {name: "", email: "", isActive: true}
}

// createUser({name: "", email: "", isActive: true})

// readonly - Properties can also be marked as readonly for TypeScript. While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking.

type _User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}
 
// let myUser: User = {
//     _id: "1245",
//     name: "h",
//     email: "h@h.com",
//     isActive: false
// }

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


// myUser.email = "h@gmail.com"
// // myUser._id = "asa"



export {}
