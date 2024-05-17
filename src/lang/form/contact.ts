const defaultContactPage: FormPage = {
  title: "Contact Us",
  subtitle: "Contact us today to learn more about our services.",
  form: {
    comment: `Alpha Engineering is a full-service construction company.`,
    fields: {
      name: {
        label: "Name and Surname",
        placeholder: "",
        required: true,
      },
      subject: {
        label: "Subject",
        placeholder: "",
        required: false,
      },
      email: {
        label: "Email",
        placeholder: "",
        required: true,
      },
      message: {
        label: "Message",
        placeholder: "",
        required: true,
      },
    },
    // legend: 'Please enter your informations',
    submitButton: "Send",
    altButton: "Cancel",
  },
};

export { defaultContactPage };
