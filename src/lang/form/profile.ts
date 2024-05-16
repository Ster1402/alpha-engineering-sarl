const defaultProfilePage: FormPage = {
  title: 'Profile Information',
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
      newPassword: {
        label: 'New Password',
        placeholder: '',
      },
    },
    submitButton: 'Save Changes',
    altButton: 'Cancel',
  },
};

export { defaultProfilePage };
