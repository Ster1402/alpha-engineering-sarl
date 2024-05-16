const defaultConfigureSourcePage: FormPage = {
  title: 'Configure a Source',
  subtitle: `Define where your events come from. Sources can be reused across multiple connections.`,
  form: {
    legend: 'Choose your source',
    submitButton: 'Next',
    altButton: 'Back',
    fields: {
      source_id: {
        label: 'Choose existing source',
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

export { defaultConfigureSourcePage };
