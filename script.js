 let userName = prompt("Please Enter your name to visit our website? ") 
 window.onload = function(){
    let message ="Good Day"
    // let firstName = prompt("Please Enter Your First Name?")
    // let lastName = prompt("Please Enter Your Last Name?")
    // let userName = firstName +" "+ lastName
    let banger ="!"
    document.getElementById("userName").innerHTML = message + " " + userName + banger
 }
  //    Clear Statement Text  //
document.getElementById('clearstatementButton').onclick = function (){
  document.getElementById('originalTextBox').innerHTML = ""
}
                          //    Ch # 8 - Concatenation text String
document.getElementById('concatenationSomeStrings').onclick = function(){

    let message ="Good Day"
    let firstName ="Tom "
    let lastName = "Jerry"
    let banger ="!"
    let fullName = firstName + " " + lastName
       // console.log(fullName)
    alert(message + " " + fullName + banger)
    // document.write(message + " " + fullName + banger)
    let statement = "<div>let message = 'Good Day'</div>" + "<div>let firstName = 'Tom & Jerry'</div>" + "<div>let banger ='!'</div>" +"<div>alert(message + ' ' + fullName + banger)</div>";
    document.getElementById('originalTextBox').innerHTML = statement
    document.getElementById("output").innerHTML = "Good Day Tom  Jerry!"

}
                            //    Ch # 9-10 - Prompts and if Statement

document.getElementById('askNameFromUser').onclick = function(){

    let message ="Good Day"
    let firstName = prompt("Please Enter Your First Name?")
    let lastName = prompt("Please Enter Your Last Name?")
    let fullName = firstName +" "+ lastName
    let banger ="!"

    // improtant note // jb cancel karty ha tu value "null" ati ha or jb ok karty ha tu value string ati ha q ky oe blank chor daita ha to wo as a string declare ho gi

    // console.log(message + " " + fullName + banger)
    document.getElementById("originalTextBox").innerHTML = '<p class="text-center">let message ="Good Day;" <br>let firstName = prompt("Please Enter Your First Name?")<br>let lastName = prompt("Please Enter Your Last Name?")<br>let fullName = firstName +" "+ lastName<br>let banger ="!"</p> '
    document.getElementById("output").innerHTML = message + " " + fullName + banger
    //    let num1 = +prompt("Enter a number?")    // jb hum +prompt lgty ha to cancel karny pr wo 0 return karta ha value
    //    if (num1 == 0){
    //     alert ("Please enter the number");
    //     return;
    //    }
    //    let num2 = +prompt("please enter a second number?")     // numeric values lainy k laiy "+prompt" use karty ha//
    //    console.log(num1 + num2)
    //    if (num2 == 0){
    //     alert ("Please enter the  number");
    //     return;
    //    }
    
}
  //  Clear Output //
  document.getElementById('clearOutputButton').onclick = function(){
    document.getElementById('output').innerHTML = ""
  }
                             //     Ch # 11 - Comparison Operators     //

      document.getElementById('comparisonOperators').onclick = function (){

    //   var one = "2"
    //   var two = 2

    //   if (one == two){
    //     alert("yes its true")
    //     return
    //   } 
    //   else {
    //     alert("no its not equal")
    //   }
    var num1 = +prompt("Enter first number?")
    var num2 = +prompt("Enter second number?")

    document.getElementById("originalTextBox").innerHTML = "<div>var num1 = prompt('Enter first number?')</div>" + 
    "<div>var num2 = prompt('Enter second number?')</div>" + "<div>if(num1 > num2){</div>" +
        "<div> alert('num2 is greater than num1')}</div>"+"<div>return}</div>" +"<div>else (num2<num1){alert('num2 is greater than num1')</div>"+"<div>return}</div>"
        +"<div>else if(num1==num2){alert('both number are equal')</div>"+"<div>return}</div>" +"<div>else {alert('nothing')}</div>"
    
   if(num1 > num2){
      document.getElementById('output').innerHTML = "num1 is greater than num2"
      return
    }else if(num2 > num1){
      document.getElementById('output').innerHTML = "num2 is greater than num1"
      return
}
  else {
    document.getElementById('output').innerHTML = "both number are equal"
     }
  }

                           //   Ch # 12 - if...else and else if Statement   //
    document.getElementById('ifElseIf').onclick = function(){
        var num1 = +prompt('Please Enter a Number to check the Condition')
        var num2 = +prompt('Please Enter a second Number to check the Condition')
       if (num1 > num2 ){
            alert("Yes its True num1>num2")
        }
        else if (num1 === num2){
          document.getElementById('output').innerHTML = "yes its equal bcz its have same datatype"
          }else if (num1 <= num2){
            document.getElementById('output').innerHTML = "num1 less than num2"
          }
          else {
            document.getElementById('output').innerHTML = "no its not equal"
          }
          document.getElementById("originalTextBox").innerHTML = "<div>var num1 = +prompt('Please Enter a Number to check the Condition')</div>" + 
          "<div>var num2 = +prompt('Please Enter a second Number to check the Condition')</div>" + "<div>if (num1 > num2 ){alert('Yes its True num1>num2')}</div>" +
      "<div> else if (num1 === num2){alert('yes its equal bcz its have same datatype')}</div>" +"<div>else if (num1 <= num2){alert('num1 less than num2')}</div>"
      +"<div>else {alert('no its not equal')}</div>"
    }
                             //   Ch # 12 - 13 - Testing Sets of Conditions   //
    document.getElementById('testingSetsOfConditions').onclick = function(){
        var age = +prompt('what is your age?')
        var weight = +prompt('what is your Weight?')
       if ( age >= 18 && weight <= 70){
          document.getElementById('output').innerHTML = "you're a smart man";
        }
         else if ( age >= 18 && weight > 70){
          document.getElementById('output').innerHTML = "you're a fat man";
        }
        else {
          document.getElementById('output').innerHTML = "you're a baby";
        }
        document.getElementById("originalTextBox").innerHTML = "<div>var age = +prompt('what is your age?')</div>" + "<div>var weight = +prompt('what is your Weight?')</div>" + 
        "<div>if ( age >= 18 && weight <= 70){alert('youre a smart man');}</div>" +"<div> else if ( age >= 18 && weight > 70){alert('youre a fat man');}</div>" +"<div>else {alert('youre a baby');}</div>" 
    }
                             //   Ch # 12 - 13 - If Statement Nested   //
     document.getElementById('ifStatementNested').onclick = function(){
      var age = +prompt('what is your age?')
      if ( age >= 18 ){
        var weight = +prompt('what is your Weight?')
        if ( weight <= 70){
          document.getElementById('output').innerHTML = "you're a smart man";
        }
         else{
          document.getElementById('output').innerHTML = "you're a fat man";
        }
      } else {
        document.getElementById('output').innerHTML = "you're a baby";
      }
      document.getElementById("originalTextBox").innerHTML = "<div>var age = +prompt('what is your age?')</div>" + "<div>if ( age >= 18 ){var weight = +prompt('what is your Weight?')</div>" + 
        "<div>if ( weight <= 70){alert('you're a smart man');}</div>" +"<div>  else{ alert'you're a fat man');}}</div>" +"<div>else {alert('youre a baby');}</div>"
      
     }
                              //          Ch # 14 - Log in         //
     document.getElementById('logIn').onclick = function(){
      let userName = prompt('Enter user name?')
      let passWord = prompt('Enter password?')

      if(userName === "nothing" &&  passWord === "123"){
        document.getElementById('output').innerHTML = 'User logged in'
      } else {
        document.getElementById('output').innerHTML = 'Username or Password is  incorrect.'
      }
      document.getElementById("originalTextBox").innerHTML = "<div>let userName = prompt('Enter user name?')</div>" + "<div>let passWord = prompt('Enter password?')</div>" + 
        "<div>if(userName === 'nothing' &&  passWord === '123'){</div>" +"<div>  alert('User logged in')</div>" +"<div>} else {</div>"+"<div>  alert('Username or Password is  incorrect.')</div>" +"<div>} </div>"
    
          
     }
   
