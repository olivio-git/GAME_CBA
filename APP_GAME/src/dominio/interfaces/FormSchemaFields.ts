interface FormField {
  label: string;
  name:string;
  type: string;
  required: boolean;
}

export interface FormSchemaFields {
  [key: string]: FormField;
}
