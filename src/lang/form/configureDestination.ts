const defaultConfigureDestinationPage: FormPage = {
  title: 'Configure your Destination',
  subtitle: `Define where your events should be sent.`,
  form: {
    legend: 'Choose your Destination',
    submitButton: 'Next',
    altButton: 'Back',
    fields: {
      destination_id: {
        label: 'Choose existing destination',
      },
      'destination.displayName': {
        label: 'Display name',
        placeholder: 'Example Zeeven API',
      },
      'destination.slug': {
        label: 'Slug',
        placeholder: 'Example : api-zeeven',
      },
      'destination.type': {
        label: 'Type',
      },
      'destination.uri': {
        label: 'Endpoint URL / URI',
        placeholder: 'Example for email: sterdevs@gmail.com',
      },
      'destination.description': {
        label: 'Description (optional)',
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

export { defaultConfigureDestinationPage };
