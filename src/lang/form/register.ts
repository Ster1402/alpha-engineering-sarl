const defaultRegisterPage: FormPage = {
  title: 'Register',
  subtitle: 'Already have an account?',
  subtitleButton: 'Log In',
  form: {
    comment: `Building the future way of handling Webhook`,
    fields: {
      'user.username': {
        label: 'Username',
        placeholder: 'Your username',
      },
      'user.name': {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
      },
      'user.surname': {
        label: 'Surname',
        placeholder: 'Enter your surname',
      },
      'user.phoneNumber': {
        label: 'Phone Number',
        placeholder: '',
      },
      'user.email': {
        label: 'Email',
        placeholder: '',
        required: true,
      },
      'user.password': {
        label: 'Password',
        placeholder: '',
        required: true,
      },
      confirmPassword: {
        label: 'Confirm Password',
        placeholder: '',
        required: true,
      },
    },
    legend: 'Create your account',
    submitButton: 'Register',
    altButton: 'Cancel',
  },
};

export { defaultRegisterPage };
