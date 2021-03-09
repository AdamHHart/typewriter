
const sentence = "hello there from lighthouse labs.";
let time = 50;

const typewriter = function(string) {
  for (const char of string) {
    setTimeout(() => {
      //print the char here
      process.stdout.write(char);
    
    }, (time += 150)); // <= 1s delay 
    
  }
  setTimeout(() => {
    console.log("\n");
  }, (time));
  

}

typewriter(sentence);









