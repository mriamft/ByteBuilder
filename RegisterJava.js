function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    if (name.value.match(/[0-9]*/)) {
      alert("Name must not contain numbers");
      return false;}
    

    let phone = document.forms["myForm"]["phone"].value;
    if(!phone==10){
        alert("Phone number should be 10 digits");
        return false;}
    
    let dob=document.forms["myForm"]["phone"].value;
    if(dob.getFullYear() > 2017){
        alert("Children under the age of 6 are not accepted- sorry!");
        return false;
    }
    
    }
  