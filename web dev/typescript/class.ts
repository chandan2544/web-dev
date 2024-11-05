class User {
    email:string
    name:string
    city:string=""
    constructor(email:string,name:string) {
        this.email=email;
        this.name=name;
    }
}

const ck = new User("ck@.com","chandan")
ck.city="delhi";

// classes with acess modifiers
class User1{
    // private _courseCount = 1
    protected _courseCount = 1
    readonly city:string="jaipur"
    constructor (
        public email:string,
        public name:string,
        //private userId: string
    ){}

    private deleteToken(){
        console.log("Token deleted");
    }
    //getter
    public get getEmail() : string {
        return `Email: ${this.email}`
    }
    
    // getter and setter
    public get courseCount() : number {
        return this._courseCount
    }
    
    
    public set courseCount(courseNum) {
        if (courseNum<=1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount=courseNum
    }    
}

//inheritance
class subUser extends User1 {
   isFamily:boolean=true
   changeCourseCount(){
    this._courseCount=4
   }
}
 
// interfaces
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("Story was created");
        
    }
}



export{}