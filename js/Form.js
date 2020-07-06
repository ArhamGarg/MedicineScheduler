class Form{
    constructor(){
        this.title = createElement('h2')
        this.name = createInput('Name');
        this.email = createInput('Email');
        this.age = createInput('Age');
        this.illness = createInput('Prevailing Illness');
        this.submit = createButton('Submit');
        this.greeting = createElement('h2');
        this.message = createElement('h3');

        this.b1 = createInput();
        this.b1message = createElement('h4', "Medicine(s)");

        this.b2 = createInput();
        this.b2message = createElement('h4', "Time");

        this.b3 = createInput();
        this.b3message = createElement('h4', "Medicine(s)");

        this.b4 = createInput();
        this.b4message = createElement('h4', "Time");

        this.b5 = createInput();
        this.b5message = createElement('h4', "Medicine(s)");

        this.b6 = createInput();
        this.b6message = createElement('h4', "Time");

        this.b7 = createInput();
        this.b7message = createElement('h4', "Medicine(s)");

        this.b8 = createInput();
        this.b8message = createElement('h4', "Time");

        this.button = createButton('Continue');
    }
    
    hide(){
        this.title.hide();
        this.name.hide();
        this.email.hide();
        this.age.hide();
        this.illness.hide();
        this.submit.hide();
        this.b1.hide();
        this.b2.hide();
        this.b3.hide();
        this.b4.hide();
        this.b5.hide();
        this.b6.hide();
        this.b7.hide();
        this.b8.hide();
        this.b1message.hide();
        this.b2message.hide();
        this.b3message.hide();
        this.b4message.hide();
        this.b5message.hide();
        this.b6message.hide();
        this.b7message.hide();
        this.b8message.hide();
        this.greeting.hide();
        this.message.hide();
        this.button.hide();
    }

    display(){
        this.title.html("Medicine Scheduler");
        this.title.position(displayWidth/2 - 88.75, 50);
        this.title.style('color: orange')
        this.name.position(displayWidth/2 - 75, 100);
        this.email.position(displayWidth/2 - 75, 150);
        this.age.position(displayWidth/2 - 75, 200); 
        this.illness.position(displayWidth/2 - 75, 250);
        this.submit.position(displayWidth/2 - 15, 300);
        
        this.submit.mousePressed(()=>{
            this.title.hide();
            this.name.hide();
            this.email.hide();
            this.age.hide();
            this.illness.hide();
            this.submit.hide();
            user.name = this.name.value();
            user.email = this.email.value();
            user.age = this.age.value();
            user.illness = this.illness.value();
            userCount += 1;
            user.index = userCount;
            //user.updateCount(userCount);
            //user.update();
            //User.getUserInfo();
            this.greeting.html("Welcome " + user.name);
            this.greeting.position(displayWidth/2 - 50, displayHeight/2 - 325);
            this.greeting.style('color: yellow');

            this.message.html("To continue, please make a schedule for your medicines.");
            this.message.position(displayWidth/2 - 200, displayHeight/2 - 300);
            this.message.style('color: violet')

            this.b1.position(displayWidth/2 - 225, displayHeight/2 - 150);
            this.b1message.position(displayWidth/2 - 325, displayHeight/2 - 167.5);

            this.b2.position(displayWidth/2 - 225, displayHeight/2 - 130);
            this.b2message.position(displayWidth/2 - 325, displayHeight/2 - 147.5);

            this.b3.position(displayWidth/2 + 225, displayHeight/2 - 150);
            this.b3message.position(displayWidth/2 + 125, displayHeight/2 - 167.5);

            this.b4.position(displayWidth/2 + 225, displayHeight/2 - 130);
            this.b4message.position(displayWidth/2 + 125, displayHeight/2 - 147.5);

            this.b5.position(displayWidth/2 - 225, displayHeight/2 - 50);
            this.b5message.position(displayWidth/2 - 325, displayHeight/2 - 67.5);

            this.b6.position(displayWidth/2 - 225, displayHeight/2 - 30);
            this.b6message.position(displayWidth/2 - 325, displayHeight/2 - 47.5);

            this.b7.position(displayWidth/2 + 225, displayHeight/2 - 50);
            this.b7message.position(displayWidth/2 + 125, displayHeight/2 - 67.5);

            this.b8.position(displayWidth/2 + 225, displayHeight/2 - 30);
            this.b8message.position(displayWidth/2 + 125, displayHeight/2 - 47.5);

            this.button.position(displayWidth/2, displayHeight/2 + 47.5)
        });

        this.button.mousePressed(()=>{
            this.b1.hide();
            this.b2.hide();
            this.b3.hide();
            this.b4.hide();
            this.b5.hide();
            this.b6.hide();
            this.b7.hide();
            this.b8.hide();
            this.b1message.hide();
            this.b2message.hide();
            this.b3message.hide();
            this.b4message.hide();
            this.b5message.hide();
            this.b6message.hide();
            this.b7message.hide();
            this.b8message.hide();
            this.greeting.hide();
            this.message.hide();
            this.button.hide();
            user.b1 = this.b1.value();
            user.b2 = this.b2.value();
            user.b3 = this.b3.value();
            user.b4 = this.b4.value();
            user.b5 = this.b5.value();
            user.b6 = this.b6.value();
            user.b7 = this.b7.value();
            user.b8 = this.b8.value();
            user.updateCount(userCount);
            user.update();
        })
    }
} 