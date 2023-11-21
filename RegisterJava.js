function validateForm() {

    var empt="";

            //name
            var name = document.getElementById("name");
            if (name.value === empt) {
                alert("Please enter the kid's name.");
                return false;
            }

            //name Start With Letter
            if (/^[0-9]/.test(name.value)) {
                alert("Kid's name cannot start with a number.");
                return false;
            }

            //dob validate
            var dob = document.getElementById("dob");
            if (new Date(dob.value).getFullYear() > 2017) {
                alert("Children under the age of 6 are not accepted, sorry!");
                return false;
            }

            //gender validate
            var gender = document.querySelector('input[name="gender"]:checked');
            if (!gender) {
                alert("Please select the kid's gender.");
                return false;
            }

            //phone number validate
            var phone = document.getElementById("phone");
            if (phone.value === empt) {
                alert("Please enter the phone number.");
                return false;
            }
            if (phone.value.length !== 10) {
                alert("Phone number should be 10 digits.");
                return false;
            }

            //email validate
            var email = document.getElementById("email");
            if (email.value === empt) {
                alert("Please enter your email address.");
                return false;
            }

            return true;
        }
    
    // let name = document.forms["myForm"]["name"].value;
    // if (name.value.match(/[0-9]*/)) {
    //   alert("Name must not contain numbers");
    //   return false;}
    

    // let phone = document.forms["myForm"]["phone"].value;
    // if(!phone==10){
    //     alert("Phone number should be 10 digits");
    //     return false;}
    
    // let dob=document.forms["myForm"]["phone"].value;
    // if(dob.getFullYear() > 2017){
    //     alert("Children under the age of 6 are not accepted- sorry!");
    //     return false;
    // }
    
    // }

    // //let phone=document.getElementById("phone").value;
    // let phoneRe= /\d{10}/;
    // let valid=phoneRe.test(phone);

    // if (valid===false){
    //     alert("Phone number should be 10 digits");
    //     return false;
    // }
    // return true;//

  