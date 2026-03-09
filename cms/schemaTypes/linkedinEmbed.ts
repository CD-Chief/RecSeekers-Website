// cms/schemas/linkedinEmbed.ts
export default {
  name: 'linkedinEmbed',
  title: 'LinkedIn Embed',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'LinkedIn Post Link 🔗',
      description: 'Paste Embed URL here (you can do more than one)',
      type: 'array',
      of: [{
         type: 'string'
        }],
      validation: (Rule: any) => Rule.custom((isIframe: string) => {
        
        return true;
      }) 
    }
  ],
};
