const defaultConfigureWebhookPage: FormPage = {
  title: 'Configure your Webhook',
  subtitle: `Configure your Webhook`,
  form: {
    legend: 'Configure your Webhook',
    submitButton: 'Next',
    altButton: 'Back',
    fields: {
      name: {
        label: 'Name of the connection',
      },
      'source.option.apiKey': {
        label: 'API Key',
        placeholder: 'Enter your API Key (if provided)',
      },
      'source.option.token': {
        label: 'Authorization Token',
        placeholder: 'Enter your Token',
      },
      'source.option.authType': {
        label: 'Authorization Type',
        placeholder: 'Choose your Authorization Type',
      },
    },
  },
};

export { defaultConfigureWebhookPage };
