const defaultLoginPage: FormPage = {
  title: 'Welcome back,',
  subtitle: 'Do not have an account yet?',
  subtitleButton: 'Register',
  form: {
    comment: `Building the future way of handling Webhook`,
    fields: {
      email: {
        label: 'Email',
        placeholder: '',
        required: true,
      },
      password: {
        label: 'Password',
        placeholder: '',
        required: true,
      },
    },
    legend: 'Please enter your credentials',
    submitButton: 'Sign in',
    altButton: 'Cancel',
  },
};

export { defaultLoginPage };
