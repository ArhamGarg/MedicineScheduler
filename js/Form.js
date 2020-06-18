class Form{
    constructor(){
        this.title = createElement('h2')
        this.name = createInput('Name');
        this.age = createInput('Age');
        this.illness = createInput('Prevailing Illness');
        this.medicine = createInput('Prescribed Medicines');
        this.submit = createButton('Submit');
        this.greeting = createElement('h2');
        this.message = createElement('h3');
        this.tp1 = createButton('8:00 AM');
        this.tp2 = createButton('9:00 AM');
        this.tp3 = createButton('10:00 AM');
        this.tp4 = createButton('11:00 AM');
        this.tp5 = createButton('12:00 AM');
        this.tp6 = createButton('8:00 - 9:00 AM');
        this.tp7 = createButton('8:00 - 9:00 AM');
        this.tp8 = createButton('8:00 - 9:00 AM');
        this.tp9 = createButton('8:00 - 9:00 AM');
    }
    hide(){
        this.title.hide();
        this.name.hide();
        this.age.hide();
        this.illness.hide()
        this.medicine.hide();
        this.submit.hide();
    }
    display(){
        this.title.html("Medicine Scheduler")
        this.title.position(displayWidth/2 - 85, 20)
        this.name.position(displayWidth/2 - 75, 100);
        this.age.position(displayWidth/2 - 75, 150);
        this.illness.position(displayWidth/2 - 75, 200);
        this.medicine.position(displayWidth/2 - 75, 250);
        this.submit.position(displayWidth/2 - 20, 300);
        
        this.submit.mousePressed(()=>{
            this.title.hide();
            this.name.hide();
            this.age.hide();
            this.illness.hide();
            this.medicine.hide();
            this.submit.hide();
            user.name = this.name.value();
            user.age = this.age.value();
            user.illness = this.illness.value();
            user.medicine = this.medicine.value();
            userCount += 1;
            user.index = userCount;
            user.update();
            this.greeting.html("Welcome " + user.name);
            this.greeting.position(displayWidth/2 - 80, displayHeight/2 - 350);
            this.message.html("To continue, please choose a schedule for your medicines.");
            this.message.position(displayWidth/2 - 230, displayHeight/2 - 325);
        });
    }
}