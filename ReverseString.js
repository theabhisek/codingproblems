//single word  string 1st method 
var string="theabhishek"
var size=string.length-1 
var newString=''

while(size>=0){
    newString+=string[size]
    size--
}

console.log(newString)//kehsihbaeht

//2nd method 
var string="theabhishek";
var arrayString=string.split("");

var startSize= 0;
var endSize=string.length-1 ;
while(startSize<endSize){
    var temp=arrayString[startSize]
    arrayString[startSize]=arrayString[endSize]
    arrayString[endSize]=temp
    startSize++;
    endSize--;
}
string=arrayString.join("")
console.log(string)//kehsihbaeht

//3rd method
var string='ahishek'

