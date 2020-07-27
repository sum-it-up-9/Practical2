

      function validation(){

        var name = document.getElementById('name').value;

        var email = document.getElementById('email').value;
        var mobile = document.getElementById('mobile').value;
        var prn = document.getElementById('prn').value;
        var roll = document.getElementById('roll').value;




        var namecheck = /^[a-zA-Z\s]+$/ ;
        var emailcheck = /^[A-za-z0-9_]{3,}@[A-za-z]{3,}[.][A-Za-z.]{2,}$/;
        var mobilecheck = /^[0-9]{10}$/;
        var prncheck  = /^[0-9]{10}$/;
        var rollcheck  = /^[0-9]{1,3}$/;



       if(namecheck.test(name)){

          document.getElementById('nameerror').innerHTML =" ";
       }

        else{
         document.getElementById('nameerror').innerHTML ="Enter Correct name";
         return false;
        }



        if(emailcheck.test(email)){
           document.getElementById('emailerror').innerHTML =" ";

        }

        else{
         document.getElementById('emailerror').innerHTML ="Enter valid email address";
         return false;
        }

         if(mobilecheck.test(mobile)){
           document.getElementById('mobileerror').innerHTML =" ";

        }

        else{
         document.getElementById('mobileerror').innerHTML ="Enter valid mobile number";
         return false;
        }


        if(prncheck.test(prn)){
          document.getElementById('prnerror').innerHTML =" ";

       }

       else{
        document.getElementById('prnerror').innerHTML ="Enter 10 digits prn only";
        return false;
       }


       if(rollcheck.test(roll)){
          document.getElementById('rollerror').innerHTML =" ";

       }

       else{
        document.getElementById('rollerror').innerHTML ="Roll no must be in between 1 or 3 digits only";
        return false;
       }

       
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = document.getElementById("email").value;
    cell3.innerHTML = document.getElementById("mobile").value;
    cell4.innerHTML = document.getElementById("prn").value;
    cell5.innerHTML = document.getElementById("roll").value;


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("prn").value = "";
    document.getElementById("roll").value = "";

    
       
      
       


      }
