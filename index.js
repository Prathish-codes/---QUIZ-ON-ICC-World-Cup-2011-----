var readlineSync =require("readline-sync")

console.log("------welcome to ICC WORLD CUP 2011 Quiz------");


function welcome() {  
  var userName = readlineSync.question("What's your name?");

 console.log( userName + " are u ready to check how well do you know adout ICC WORLD CUP 2011");
 
}
welcome();

var question = [{ques:"1-Who won 2011 worldcup? \n a:Australia \n b:Srilanka \n c:India", ans:'India', ans1:"c"},

{ques:"2-Which team didnot qualifield for knockout stage? \n a:Australia \n b:new zealand \n c:south africa \n d:pakistan", ans:'Australia', ans1:"a"},

{ques:"3-Even before a ball was bowled in the final between india and srilank there was a controversy .what was it? \n a:A fan on to ground before the toss \n b:Toss was delayed \n c:The toss had to be done twice", ans:'The toss had to be done twice', ans1:"c"},

{ques:"4-Gautam gambhir(97) fell short of a century three runs.this is the highest score by an indian batsman in a world cup final . true or flase? \n a:true  \n b:flase" , ans:'true',ans1:'a'}]

var score=0

for(i=0;i<question.length;i++){
  console.log(question[i].ques)
  var ans = readlineSync.question("Enter your answer:")
  if(ans === question[i].ans || ans===question[i].ans1){
      console.log("right answer")
      score=score+1
  }
  else{
    console.log("Wrong answer")
    
  }
  console.log("your score:",score);
  console.log("------------------");
}


function end(){
  if(score>=4){
    console.log("YAY! i think you have great cricket knowledge" )
  }
  else{
    console.log("hey dont worry . cheers for next worldcup!")
  }
  console.log("yay! Weldone! . your  total score:",score);


}


end();