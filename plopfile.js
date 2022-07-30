export default (plop) => {
  plop.setGenerator('comp', {
    description: 'generate a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name: '
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.jsx',
        templateFile: 'plop-templates/component.hbs'
      },
      // {
      //   type: 'add',
      //   path: 'src/components/{{name}}/index.module.css',
      //   templateFile: 'plop-templates/component.css.hbs'
      // }
    ]
  }),
  plop.setGenerator('page', {
    description: 'generate a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name: '
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{name}}/index.jsx',
        templateFile: 'plop-templates/component.hbs'
      },
      // {
      //   type: 'add',
      //   path: 'src/pages/{{name}}/index.module.css',
      //   templateFile: 'plop-templates/component.css.hbs'
      // }
    ]
  })
}