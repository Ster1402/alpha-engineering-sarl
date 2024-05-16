const defaultContactPage: FormPage = {
  title: 'Contact Us',
  subtitle: 'Want to send us an email?',
  subtitleButton: 'Send Email',
  form: {
    comment: `Building the future way of handling Webhook`,
    fields: {
      name: {
        label: 'Name and Surname',
        placeholder: '',
        required: true,
      },
      subject: {
        label: 'Subject',
        placeholder: '',
        required: false,
      },
      email: {
        label: 'Email',
        placeholder: '',
        required: true,
      },
      message: {
        label: 'Message',
        placeholder: '',
        required: true,
      },
    },
    // legend: 'Please enter your informations',
    submitButton: 'Send',
    altButton: 'Cancel',
  },
};

export { defaultContactPage };
