export interface Question {
    controlType: string;
    id: string;
    label: string;
    required: boolean;
    options?: any[];
    type?: string;
    value?: any;
}