const defaultAccountValidationPage: FormPage = {
  title: 'Activate your account',
  subtitle: 'Not your email adress?',
  subtitleButton: 'Register',
  form: {
    comment: `Building the future way of handling Webhook`,
    fields: {
      email: {
        label: 'Email',
        placeholder: '',
      },
      code: {
        label: 'Code',
        placeholder: '',
        required: true,
      },
    },
    legend: 'Please enter the activation code',
    submitButton: 'Confirm',
    altButton: 'Get Code',
  },
};

export { defaultAccountValidationPage };
