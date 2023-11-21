function validate() {

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
            var genderTemp = document.querySelector('input[name="gender"]:checked');
            if (!genderTemp) {
                alert("Please select the kid's gender.");
                return false;
            }
            var gender = document.querySelector('input[name="gender"]:checked').value;

            // var gender =document.getElementsByName('gender')
            // gender.forEach(function(radio){
            //     radio.addEventListener('change',function(){
            //         if(radio.checked){
            //             localStorage('Gendeer',radio.checked)
            //         }
            //     });
            // });

            // gender.checked ? gender="Male" : gender="Female";

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

            localStorage.setItem('name',name.value);
            localStorage.setItem('DOB',dob.value);
            localStorage.setItem('Gender',gender);
            localStorage.setItem('Phone',phone.value);
            localStorage.setItem('Email',email.value)

         
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

  