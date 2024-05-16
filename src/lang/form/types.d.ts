interface FormFields {
  [key: string]: {
    defaultValue?: string | number | readonly string[] | undefined;
    label: string;
    pattern?: RegExp;
    placeholder?: string | undefined;
    required?: boolean;
  };
}

interface FormPage {
  form: {
    fields: FormFields;
    legend?: string;
    submitButton: string;
    altButton?: string;
    comment?: string;
  };
  subtitle?: string;
  subtitleButton?: string;
  description?: string;
  image?: string;
  title: string;
}
