let mark = parseInt(prompt("Enter the marks for the student (less than 100):"));
let grade = "";

if (mark<100){
  if(mark<60){
    grade="F";
  } 
  else if(mark<70){
    grade="D";
  } 
  else if(mark<80){
    grade="C";
  } 
  else if(mark<90){
    grade="B";
  } 
  else{
    grade="A";
  }
  console.log("The corresponding grade for "+mark+" is "+grade);
} 
else{
  console.log("Invalid input. The marks should be less than 100.");
}
