var male = [{day:"Sunday",name:"Kwasi"},{day:"Monday",name:"Kwadwo"},{day:"Tuesday",name:"Kwabena"},{day:"Wednesday",name:"Kwaku"},{day:"Thursday",name:"Yaw"},{day:"Friday",name:"Koffi"},{day:"Saturday",name:"Kwame"}];
var female = [{day:"Sunday",name:"Akosua"},{day:"Monday",name:"Adwoa"},{day:"Tuesday",name:"Abenaa"},{day:"Wednesday",name:"Akua"},{day:"Thursday",name:"Yaa"},{day:"Friday",name:"Afua"},{day:"Saturday",name:"Ama"}];

function dayOfWeek(){
    var dateOfBirth = document.getElementById("dateOfBirthInput").value;
    var birthday = dateOfBirth.split('-');

    var mm = parseInt(birthday[1]); //month
    var dd = parseInt(birthday[2]); //day
    var year = birthday[0];

    var cc = parseInt(year.slice(0,2)); // century digit
    var yy = parseInt(year.slice(2,4)); // year digit
    if(dd <= 0 || dd > 31) alert("You have entered an invalid day");
    if(mm <= 0 || mm > 12) alert("You have entered an invalid month");

    var day =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

    return Math.round(day);
}

function displayDetails(){
    var isFemale = document.getElementById("gridRadios1").value;
    var isMale = document.getElementById("gridRadios2").value;

    var d = dayOfWeek();

    var n = female.length;

    for(var i=0;i<n;i++){
        var femaleName = female[i].name;
        var maleName = male[i].name;
        console.log(female[i].day +" "+ femaleName +" "+ maleName)
        if(i === d && isFemale === "Female"){
            document.querySelector("#akanName").innerHTML = femaleName + " !";
        }

        if(i === d && isMale === "Male"){
            document.querySelector("#akanName").innerHTML = maleName + " !";
        }
    }
}


 