// Global variables

let personalMassage = [];
let again = true;
let innerLoop = true; 
let name ='';
let massage = {
    study : ['Find your “thing” – like Stephen Hawking', 'Stay consistent in your studying', 'Make each day a little better than before'],
    dream : ['Let your actions be louder than your words and your dreams bigger than your fears.' ,'Always nurture your inner childhood dreams, life will become beautiful' ,'The only thing that will stop you from fulfilling your dreams is you.'],
    success : ['However difficult life may seem, there is always something you can do and succeed at.', 'People begin to become successful the minute they decide to be.', 'It does not matter how slowly you go as long as you do not stop.']
};

// Get the name of the user
const getInfo = () => {
    console.log('Welcome to our inspirational massage generator');
    const prompt = require('prompt-sync')();
    const name = prompt('What is your name? ');
    console.log(`Hey there ${name}`);
    return name;
}
name = getInfo();

// Run the program until the user decides to end it
while(again){

    // Generate 3 random massages and save it to personalMassage array
    const generateMassege = (massage,name) => {
        for(let types in massage){
            let randomIndex = Math.floor(Math.random() * massage[types].length);
            switch(types){
                case 'study':
                    personalMassage.push(`${name} you should, ${massage[types][randomIndex]}`);
                    break;
                case 'dream':
                    personalMassage.push(`When we talk about dreams ${name}, ${massage[types][randomIndex]}`);
                    break;
                case 'success':
                    personalMassage.push(`Be successful ${name}, ${massage[types][randomIndex]}`);
                    break;
                default: 
                    personalMassage.push('Something went wrong, Please try again ');      
            }
        } 
    }
    generateMassege(massage,name);

    // print the massages to the user
    const printMassage = (personalMassage) => {
        const outputMassage = personalMassage.join('\n');
        console.log(outputMassage);
    };
    printMassage(personalMassage);

    // Check wether to try again or exit the program
    while(innerLoop){
        const prompt = require('prompt-sync')();
        const repeat = prompt('do you want to try again?(y/n) ');
        if(repeat === 'y') break;
        else if(repeat === 'n') {
            console.log('Hope you liked the massage, Good luck!');
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