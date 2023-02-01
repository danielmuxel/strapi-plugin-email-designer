module.exports = [
  {
    method: 'GET',
    path: '/templates',
    handler: 'designer.getTemplates',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/templates/:templateId',
    handler: 'designer.getTemplate',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/templates/:templateId',
    handler: 'designer.saveTemplate',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/templates/:templateId',
    handler: 'designer.deleteTemplate',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/templates/duplicate/:sourceTemplateId',
    handler: 'designer.duplicateTemplate',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/config/:configKey',
    handler: 'config.getConfig',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/core/:coreEmailType',
    handler: 'designer.getCoreEmailType',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/core/:coreEmailType',
    handler: 'designer.saveCoreEmailType',
    config: {
      policies: [
        'admin::isAuthenticatedAdmin',
        {
          name: 'admin::hasPermissions',
          config: { actions: ['plugin::email-designer.read'] },
        },
      ],
    },
  },
];
