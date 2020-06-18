class User{
    constructor(){
        this.name = null;
        this.age = null;
        this.illness = null;
        this.medicine = null;
        this.index = 0;
    }

    update(){
        var userIndex = "users/user" + this.index;
        database.ref(userIndex).set({
            name: this.name,
            age: this.age,
            illness: this.illness,
            medicine: this.medicine,
        })
    }
}