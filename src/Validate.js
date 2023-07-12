
export const emailValidator = (email)=>{
    if(!email){
        return 'Email is required';
    }else if(!new RegExp(/\S+@\S+\.\S+/).test(email)){
        return "Incorrect email format";
    }
    return null;
}

export const phoneValidator = (phone)=>{
    if(!phone){
        return 'Phone is required';
    }else if(phone.length !==10){
        return "Phone must have 10 characters";
    }
    return null;
}

export const birthDayValidator = (date)=>{
    let today = new Date();
    let inputDate = new Date(date);
    if(!date){
        return 'BirthDay is required';
    }else if(inputDate > today){
        return "BirthDay is false";
    }
    return null;
}

export const genderValidator = (gender)=>{
    if(!gender){
        return 'Gender is required';
    }
    return null;
}

export const textAlphabetValidator = (text)=>{
    if(!text){
        return 'This Fied is required';
    }else if(!new RegExp("^[a-zA-Z ]+$").test(text)){
        return "Incorrect text format: only a-z, A-Z, and white space";
    }
    return null;
}