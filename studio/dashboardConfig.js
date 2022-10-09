export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6342ecd7ba7c2d3705b2ab91',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ws5nb1wu',
                  apiId: '06683814-62f3-4de6-a7ba-a60ad5ec04ac'
                },
                {
                  buildHookId: '6342ecd700e30a345421aee8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-igtt48w9',
                  apiId: 'a7b8411c-d288-4bab-993d-f130296f2ad7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/altruity/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-igtt48w9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
