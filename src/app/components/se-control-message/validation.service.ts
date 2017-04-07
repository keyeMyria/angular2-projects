interface ValidatorOptions {
    validatorName: string;
    validatorValue?: any;
    messages?: Object;
}

export class ValidationService {

    static getValidatorErrorMessage(options: ValidatorOptions) {
        let messages = {
            required: 'Required',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            minlength: `Minimum length ${options.validatorValue.requiredLength}`,
            maxlength: `Maximum length ${options.validatorValue.requiredLength}`
        };
        messages = Object.assign({}, messages, options.messages);

        return messages[options.validatorName];
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        /* tslint:disable */
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { invalidEmailAddress: true };
        }
        /* tslint:enable */
    }
}