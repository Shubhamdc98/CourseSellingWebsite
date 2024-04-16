import { FormControl } from "@angular/forms";


export class CustomValidation{
    static NoSpace(control : FormControl){
    if(control.dirty && control.value.indexOf(' ') != -1)
        return {NoSpace : true}
    return null;

}
}