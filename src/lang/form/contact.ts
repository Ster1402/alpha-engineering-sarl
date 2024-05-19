const defaultContactPage: FormPage = {
  title: "Besoin de nos services ?",
  subtitle: "Contactez-nous pour plus d'informations",
  form: {
    comment: `Alpha Engineering is a full-service construction company.`,
    fields: {
      name: {
        label: "Nom",
        placeholder: "",
        required: true,
      },
      surname: {
        label: "Prénom",
        placeholder: "",
      },
      tel: {
        label: "Téléphone",
        placeholder: "",
        required: false,
      },
      email: {
        label: "Email",
        placeholder: "",
        required: true,
      },
      message: {
        label: "De quoi avez-vous besoin ?",
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
