export const EmailValidation = (newvalue: any) => {
    if (newvalue) {
        const isEmail = /^[A-Z0-9. _%+-]+@[A-Z. -]+\.[A-Z]{2,4}$/i.test(newvalue);
        return isEmail;
    }
    else return newvalue;

}