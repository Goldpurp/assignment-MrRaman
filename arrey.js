function GetArrey(array) 
{
 let theArrey = [];
 
 for(var value of array)
 {
     if(theArrey.indexOf(value) == -1)
     {
         theArrey.push(value)
     }
 }
 return theArrey;
}
var arreyItems = [2,5,4,8,"kola","yusuf"];
var theArrey = GetArrey(arreyItems);
console.log(theArrey);