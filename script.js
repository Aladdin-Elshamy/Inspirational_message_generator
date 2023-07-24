// Global variables

let personalMessage = [];
let again = true;
let innerLoop = true; 
let name ='';
let message = {
    study : ['Find your “thing” – like Stephen Hawking', 'Stay consistent in your studying', 'Make each day a little better than before'],
    dream : ['Let your actions be louder than your words and your dreams bigger than your fears.' ,'Always nurture your inner childhood dreams, life will become beautiful' ,'The only thing that will stop you from fulfilling your dreams is you.'],
    success : ['However difficult life may seem, there is always something you can do and succeed at.', 'People begin to become successful the minute they decide to be.', 'It does not matter how slowly you go as long as you do not stop.']
};

// Get the name of the user
const getInfo = () => {
    console.log('Welcome to our inspirational message generator');
    const prompt = require('prompt-sync')();
    const name = prompt('What is your name? ');
    console.log(`Hey there ${name}`);
    return name;
}
name = getInfo();

// Run the program until the user decides to end it
while(again){

    // Generate 3 random messages and save it to personalMessage array
    const generateMessage = (message,name) => {
        for(let types in message){
            let randomIndex = Math.floor(Math.random() * message[types].length);
            switch(types){
                case 'study':
                    personalMessage.push(`${name} you should, ${message[types][randomIndex]}`);
                    break;
                case 'dream':
                    personalMessage.push(`When we talk about dreams ${name}, ${message[types][randomIndex]}`);
                    break;
                case 'success':
                    personalMessage.push(`Be successful ${name}, ${message[types][randomIndex]}`);
                    break;
                default: 
                    personalMessage.push('Something went wrong, Please try again ');      
            }
        } 
    }
    generateMessage(message,name);

    // print the messages to the user
    const printmessage = (personalMessage) => {
        const outputmessage = personalMessage.join('\n');
        console.log(outputmessage);
    };
    printmessage(personalMessage);

    // Check wether to try again or exit the program
    while(innerLoop){
        const prompt = require('prompt-sync')();
        const repeat = prompt('do you want to try again?(y/n) ');
        if(repeat === 'y') break;
        else if(repeat === 'n') {
            console.log('Hope you liked the message, Good luck!');
            var figlet = require("figlet");
            figlet('Good Luck!', function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(data);
            });
            again = false;
            innerLoop = false;
        }
        else{
            console.log('You enterd a wrong input, Please try again.')
        }
    }
}
