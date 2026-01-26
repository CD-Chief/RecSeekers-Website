// cms/schemas/templateStatus.ts
export default {
  name: 'templateStatus',
  title: 'Template Status',
  type: 'document',
  fields: [
    {
      name: 'status',
      title: 'Status Message',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isReady',
      title: 'Template Ready?',
      type: 'boolean',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
