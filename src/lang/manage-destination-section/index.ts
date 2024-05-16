const defaultManageDestinationSection: ManageDestinationSection = {
  title: "Manage your Webhook Destination's",
  subtitle: '',
  description:
    'Just tell us where you want to get your information, and we will take care of the rest',
  destinations: [
    {
      title: 'API Endpoint',
      slug: 'api',
      description:
        'You can provide an API endpoint to manage your service responses.',
    },
    {
      title: 'Email Address',
      slug: 'email',
      description: `You can provide an email address on where you'll get the information back.`,
    },
    {
      title: 'SMS',
      slug: 'sms',
      description: `You can provide a phone number on where you'll get the information back with SMS.`,
    },
  ],
};

export { defaultManageDestinationSection };
