// interface that describes objects that have a firstName and lastName field.
// In TypeScript, two types are compatible if their internal structure is compatible.
// This allows us to implement an interface just by having the shape the interface requires,
// without an explicit implements clause.

// Type aliases and interfaces are very similar, and in many cases you can choose between them freely
// Almost all features of an interface are available in type, the key distinction is that a type 
//cannot be re-opened to add new properties vs an interface which is always extendable.

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}


const hitesh: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
    }
    hitesh.email = "h@hc.com"
    // hitesh.dbId = 33

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


