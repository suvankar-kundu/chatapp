import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
        const passwordField = passwordGroup.get('newpassword');
        const confirmpasswordField = passwordGroup.get('confirmpassword');
        if (passwordField && confirmpasswordField && passwordField.value !== confirmpasswordField.value) {
            return { 'notEqual': true };
        }

        return null;
    }
}