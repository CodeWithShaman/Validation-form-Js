var namevaluearr = [];
var passvaluearr = [];
var emailvaluearr = [];
var adressvaluearr = [];
var statevaluearr = [];


//  Stored each input value in variable inside the function

function submit_form (){
    let namevalue = document.getElementById("full-name").value;
    namevaluearr.push(namevalue);

    let  passvalue = document.getElementById("Password").value;
    passvaluearr.push(passvalue)

    let  emailvalue = document.getElementById("email").value;
    emailvaluearr.push(emailvalue)

    let Adressvalue = document.getElementById ("Address").value;
    adressvaluearr.push(Adressvalue)

    let statevalue = document.getElementById("State").value;
    statevaluearr.push(statevalue)

    //   ShoW The user Data 
    
    let userdata =  document.getElementById("userdata");
    
    userdata.innerHTML = `
    <h3 class ="da"> Your Data:</h3>
    <hr>
    <p> Fullname : ${namevaluearr}</p>
    <p> Password : ${passvaluearr}</p>
    <p> Email : ${emailvaluearr}</p>
    <p> Adress : ${adressvaluearr}</p>
    <p> State : ${statevaluearr}</p>`  
  }

  // REMOVE FIRST VALUE FUNCTION

function remove_first(){
 namevaluearr.shift()
 passvaluearr.shift()
 emailvaluearr.shift()
 adressvaluearr.shift()
 statevaluearr.shift()

 let userdata =  document.getElementById("userdata");
    
    userdata.innerHTML = `
    <h3 class ="da"> Your Data:</h3>
    <hr>
    <p> Fullname : ${namevaluearr}</p>
    <p> Password : ${passvaluearr}</p>
    <p> Email : ${emailvaluearr}</p>
    <p> Adress : ${adressvaluearr}</p>
    <p> State : ${statevaluearr}</p>`  
}

 // REMOVE END VALUE FUNCTION

function remove_end(){
 namevaluearr.pop()
 passvaluearr.pop()
 emailvaluearr.pop()
 adressvaluearr.pop()
 statevaluearr.pop()

 let userdata =  document.getElementById("userdata");
    
    userdata.innerHTML = `
    <h3 class ="da"> Your Data:</h3>
    <hr>
    <p> Fullname : ${namevaluearr}</p>
    <p> Password : ${passvaluearr}</p>
    <p> Email : ${emailvaluearr}</p>
    <p> Adress : ${adressvaluearr}</p>
    <p> State : ${statevaluearr}</p>`  
}


function remove_any(){

  var numb = document.getElementById("num").value;
 if (numb == 1){
  namevaluearr.splice(1)
  passvaluearr.splice(1)
  emailvaluearr.splice(1)
  adressvaluearr.splice(1)
  statevaluearr.splice(1)
 }
 else if(numb== 2){
  namevaluearr.splice(2)
  passvaluearr.splice(2)
  emailvaluearr.splice(2)
  adressvaluearr.splice(2)
  statevaluearr.splice(2)
 }
 else if(numb==3){
  namevaluearr.splice(3)
  passvaluearr.splice(3)
  emailvaluearr.splice(3)
  adressvaluearr.splice(3)
  statevaluearr.splice(3)
 }

 else if(numb== 4){
  namevaluearr.splice(4)
  passvaluearr.splice(4)
  emailvaluearr.splice(4)
  adressvaluearr.splice(4)
  statevaluearr.splice(4)
 }
 
  let userdata =  document.getElementById("userdata");
     
     userdata.innerHTML = `
     <h3 class ="da"> Your Data:</h3>
     <hr>
     <p> Fullname : ${namevaluearr}</p>
     <p> Password : ${passvaluearr}</p>
     <p> Email : ${emailvaluearr}</p>
     <p> Adress : ${adressvaluearr}</p>
     <p> State : ${statevaluearr}</p>`  
 }


 