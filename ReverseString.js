//*********************single word  string 1st method **************
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

//3rd method in built
var string='ahishek'
var newarray=string.split("")
newarray.reverse()
string=newarray.join("")
console.log(string)

// ***************reverse string multiple words reverse  string words****************
//method ist
var string='my name is abhishek chouhan'
//output string=chouhan abhishek is name my
var arrayString=string.split(" ")
var endSize=arrayString.length-1 ;
while(startSize<endSize){
    var temp=arrayString[startSize]
    arrayString[startSize]=arrayString[endSize]
    arrayString[endSize]=temp
    startSize++;
    endSize--;
}
string=arrayString.join(" ")
console.log(string)

//method 2nd
var string='my name is abhishek chouhan'
//output string=chouhan abhishek is name my
var arrayString=string.split(" ")
var newString=''
var endSize=arrayString.length-1 ;
while(endSize>=0){
    newString+=arrayString[endSize]+" "
    endSize--;
}
console.log(newString)

//method 3rd
var string='my name is abhishek chouhan'
//output string=chouhan abhishek is name my
var arrayString=string.split(" ")
arrayString.reverse()
string=arrayString.join(" ")
console.log(string)

// ***************reverse  only words in string ****************
//input string='my name is abhishek chouhan'
//output string=ym eman si kehsihba nahuohc
//******************method 1st without inbuilt
var string='my name is abhishek chouhan'

//output string=ym eman si kehsihba nahuohc
var arrayString=string.split(" ")
for(let p=0; p<arrayString.length; p++){
    let narray=arrayString[p].split("")
    let i=0
    let j=narray.length-1
    while(i<j){
        let t=narray[i]
        narray[i]=narray[j]
        narray[j]=t
        i++
        j--
    }
    arrayString[p]=narray.join("")
     
}
string=arrayString.join(" ")
console.log(string)

//************method 2nd  with inbuilt
console.log("2")
var string='my name is abhishek chouhan'
//output string=ym eman si kehsihba nahuohc
var arrayString=string.split(" ")
for(let p=0; p<arrayString.length; p++){
    let narray=arrayString[p].split("")
    narray.reverse()
    arrayString[p]=narray.join("")  
}
string=arrayString.join(" ")
console.log(string)

// ***************reverse words in string then after reverse string  ****************
//*********************method 1st without inbuilt**********************
var string='my name is abhishek chouhan'
//output string=nahuohc kehsihba si eman ym
var arrayString=string.split(" ")
var startSize=0
var endSize=arrayString.length-1 ;
while(startSize<endSize){
    var temp=arrayString[startSize]
    arrayString[startSize]=arrayString[endSize]
    arrayString[endSize]=temp
    startSize++;
    endSize--;
}
for(let p=0; p<arrayString.length; p++){
    let narray=arrayString[p].split("")
    let i=0
    let j=narray.length-1
    while(i<j){
        let t=narray[i]
        narray[i]=narray[j]
        narray[j]=t
        i++
        j--
    }
    arrayString[p]=narray.join("")
     
}
string=arrayString.join(" ")
console.log(string)

//*********************************method 2nd with inbult*****************************
var string='my name is abhishek chouhan'
//output string=nahuohc kehsihba si eman ym
var arrayString=string.split(" ")
arrayString.reverse()
for(let p=0; p<arrayString.length; p++){
    let narray=arrayString[p].split("")
    narray.reverse()
    arrayString[p]=narray.join("")
     
}
string=arrayString.join(" ")
console.log(string)
