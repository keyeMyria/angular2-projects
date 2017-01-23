interface IValidationOptions {
    name?: string;
    minlength?: { requiredLength: number, actualLength: number };
}

export function validationMassages(option: IValidationOptions) {
    const { name, minlength } = option;

    return {
        required: `${name} is required.`,
        incorrectEmailFormat: 'Incorrect email format.',
        minlength: `${name} must be at least ${option.minlength ? option.minlength.requiredLength : 'any'} characters long.`
    }
}