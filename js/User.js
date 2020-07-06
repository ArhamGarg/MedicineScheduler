class User{
    constructor(){
        this.name = null;
        this.email = null;
        this.age = null;
        this.illness = null;
        this.index = 0;
        this.b1 = null;
        this.b2 = null;
        this.b3 = null;
        this.b4 = null;
        this.b5 = null;
        this.b6 = null;
        this.b7 = null;
        this.b8 = null;
    }

    getUserCount(){
        var userCountRef = database.ref('userCount')
        userCountRef.on("value",function(data){
            userCount = data.val();  
        })
    }

    updateCount(count){
        database.ref('/').update({
            userCount: count
        })
    }

    update(){
        var userIndex = "users/user" + this.index;
        database.ref(userIndex).set({
            name: this.name,
            email: this.email,
            age: this.age,
            illness: this.illness,
            medicine1: this.b1,
            time1: this.b2,
            medicine2: this.b3,
            time2: this.b4,
            medicine3: this.b5,
            time3: this.b6,
            medicine4: this.b7,
            time4: this.b8,
        })
    }

    static getUserInfo(){
        var userInfoRef = database.ref('users');
        userInfoRef.on("value",(data)=>{
          allUsers = data.val();
        })
    }
}