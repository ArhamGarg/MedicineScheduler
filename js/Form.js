class Form{
    constructor(){
        this.title = createElement('h2')
        this.name = createInput('Name');
        this.age = createInput('Age');
        this.illness = createInput('Prevailing Illness');
        this.medicine = createInput('Prescribed Medicines');
        this.submit = createButton('Submit');
    }
    display(){
        this.title.html("Medicine Scheduler")
        this.title.position(displayWidth/2 - 85, 10)
        this.name.position(displayWidth/2 - 75, 100);
        this.age.position(displayWidth/2 - 75, 150);
        this.illness.position(displayWidth/2 - 75, 200);
        this.medicine.position(displayWidth/2 - 75, 250);
        this.submit.position(displayWidth/2 - 20, 300);
    }
}