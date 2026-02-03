// cms/schemas/linkedinEmbed.ts
export default {
  name: 'linkedinEmbed',
  title: 'LinkedIn Embed',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'LinkedIn Post Link 🔗',
      type: 'string',
      validation: (Rule: any) => Rule.custom((isIframe: any) => {
        
        // Check if input is an iframe
        if (!isIframe.startsWith('<iframe src=') && !isIframe.endsWith('>')) {
          return 'LinkedIn embed URL must start with <iframe> and end with >';
        }

        return true;
      }) 
    }
  ],
};
