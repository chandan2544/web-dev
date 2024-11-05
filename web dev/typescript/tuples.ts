//tuples 

// const user: (string | number)[] = [1, "hc"]

// tuple way1
let tUser: [string, number, boolean]
tUser = ["hc", 131, true]

// tuple way2
let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]
const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true) //error
 

export {}