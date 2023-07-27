
// Regular Expression is a sequence of metacharacters which matches a predefined patteren in a text.
// Used to validate data, before saving it at database.


//eg. of Regular Expression to check if number matches an 8 digit Zip Code:
// 1. Using literal notation: 
const zipCodePattern = /^\d{8}$/i;
// specifies the beggining of the line ^
// specifies the end of the line $
// matches any digit \d
// looks for the preceeding element, exactly 8 times {8}
// modifies the search to be case-insensitive i 
//
// 2. Using constructor notation: 
const zipCodeRegEx = new RegExp(/^\d{8}$/,"i");
//3. building a function to check the number
function zipCodeValidator(num){
    const zipCodeRegEx = new RegExp(/^\d{8}$/,"i");
    return zipCodeRegEx.test(num);
    //test is a build in method for RegEx object.
}
zipCodeValidator(123456544);
//
//
//
function zipCodePatternCheck(number){
    var isZipCodePattern = /^\d{8}$/i;
    return isZipCodePattern.test(number)
    //test is a build in method for RegEx object.
}
zipCodePatternCheck(71915500);


//\d 
//this will match any digit character (same as [0-9])
//
//\w
//this will mach any word character (a-z,A-Z,0-9 and _ )
// letters, numbers and underscores
//
// \s 
//will match a whitespace character (spaces, tabs)


// Eg. Email Validator
const emailRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
// [a-z0-9] there will be character from a to z, there will be numbers from 0 to 9
// @[a-z] there will be an @ and  after that there will be  character from a to z
// .[a-z]{2,3}  there will be a dot and after that there will be a character from a to z. The number of characters from a till z that will be are 2 or 3 characters
var emailchecker = ["testing%.zeta", "programadoraweb3.0@gmail.com"]; 
emailchecker.foreach((address)=>{
    console.log(emailRegEx.test(address))
})

/* /[^p]000/g */
// ^ = we don't want to match
// if we don't want p000 we write /[^p]000/g

/* /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g */
//if we want to match a telephone number with 11 digits
// we can write 11 times or do the below:
/* /[0-9]{11}/g */
//it means that we want to match 11 times next to each other
// the digits from 0-9

/* /[a-z]{5,8}/g */
// that means, match the range a -z 
//between 5 to 8 times

/* /[a-z]{5}/g */
//we are saying that we want to match
// range a-z 5 times

/* /[a-z]{5,}/g */
//we are saying that we want to match
// range a-z from 5 to infinitive time
// when after the , we leave a blank space */