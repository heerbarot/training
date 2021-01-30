function funx(url,fun){
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            fun(this);
        }
    };
    xhttp.open("POST",url,true);
    xhttp.send();
}
function myfnc(xhttp){
   // document.getElementById("myID").innerHTML=xhttp.responseText;
   
    var data=xhttp.responseText;
    var jsonResponse=JSON.parse(data);

    var n = jsonResponse.length;
    
    var jsontext=xhttp.responseText;
    
    // console.log(jsontext);
    // console.log(jsonResponse[0]["id"]);
   
    var table="<table border=1><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Gender</th><th>DOB</th>";
    for (let i = 0; i < n; i++) { 
        table += "<tr><td>" +
        jsonResponse[i]["id"]+
        "</td><td>" +
        jsonResponse[i]["first_name"]+
        "</td><td>" +
        jsonResponse[i]["last_name"]+
        "</td><td>" +
        jsonResponse[i]["email"]+
        "</td><td>" +
        jsonResponse[i]["gender"]+
        "</td><td>" +
        jsonResponse[i]["dob"]+
        "</td></tr>" ;
      }
      table+="</table>";
      document.getElementById("myDivTable").innerHTML=table;

     
}