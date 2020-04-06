export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e8baf491303e4e717e4b619',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7sdww6g8',
                  apiId: 'a7eeb7e8-59af-488b-b02e-04126d9dbafe'
                },
                {
                  buildHookId: '5e8baf49a9985ac46e633e8a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xdw2hdcd',
                  apiId: '163bbbb0-cc5e-49cf-b15f-a875397c5cfb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/delux220/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xdw2hdcd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
