function validateForm() {

            var name = document.getElementById("name");
            var dob = document.getElementById("dob");
            var gender = document.querySelector('input[name="gender"]:checked');
            var phone = document.getElementById("phone");
            var email = document.getElementById("email");

            // Perform validation
            if (name.value === "") {
                alert("Please enter the kid's name.");
                return false;
            }

            if (/^\d/.test(name.value)) {
                alert("Kid's name cannot start with a number.");
                return false;
            }

            var currentYear = new Date().getFullYear();
            var kidYear = new Date(dob.value).getFullYear();
            if (kidYear > currentYear - 6) {
                alert("Children younger than 6 years old are not accepted.");
                return false;
            }

            if (!gender) {
                alert("Please select the kid's gender.");
                return false;
            }

            if (phone.value.length !== 10) {
                alert("Phone number should contain 10 digits.");
                return false;
            }

            if (email.value === "") {
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

  