const normalizedName = (componentName) =>
    componentName.replace(/\s/g, '').toLowerCase();

module.exports = (plop) => {
    // Normalize the component name - remove whitespace and convert to lowercase.
    plop.setHelper('normalizedName', normalizedName);

    plop.setGenerator('component', {
        description: 'Creating a reusable React Component',
        prompts: [
            {
                type: 'list',
                name: 'atomicType',
                message: 'What type of component are you creating?',
                choices: [
                    'atoms',
                    'molecules',
                    'organisms',
                    'templates',
                    'pages'
                ]
            },
            {
                type: 'input',
                name: 'figmaURL',
                message: 'What is the Figma link?',
                default:
                    'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System?type=design&node-id=15-21&mode=design&t=vxXU596MnnyQqgIQ-4'
            },
            {
                type: 'confirm',
                name: 'hasCVA',
                message:
                    'Does this component need CVA (Class Variance Authority)?'
            },
            {
                type: 'input',
                name: 'componentName',
                message: 'What is the name of the component?'
            }
        ],
        actions: (data) => {
            const { componentName, hasCVA, atomicType } = data;

            const prefix = `src/components/${atomicType}/{{pascalCase componentName}}`;

            const templates = [
                // Add an export to the component index.
                {
                    type: 'add',
                    path: `${prefix}/index.ts`,
                    templateFile: 'plop-templates/component-index.hbs'
                },
                // Add a corresponding mock file.
                {
                    type: 'add',
                    path: `src/mocks/{{kebabCase componentName}}.tsx`,
                    templateFile: 'plop-templates/mock-template.hbs'
                },
                // Add a corresponding test file.
                {
                    type: 'add',
                    path: `src/tests/{{kebabCase componentName}}.tsx`,
                    templateFile: 'plop-templates/test-template.hbs'
                },
                // Add a Docs.mdx to the component.
                {
                    type: 'add',
                    path: `${prefix}/Docs.mdx`,
                    templateFile: 'plop-templates/component-docs.hbs',
                    force: true
                },
                // Add a css file to the component.
                {
                    type: 'add',
                    path: `${prefix}/{{pascalCase componentName}}.module.scss`,
                    templateFile: 'plop-templates/component-scss.hbs'
                },
                // Add TSX component.
                {
                    type: 'add',
                    path: `${prefix}/{{pascalCase componentName}}.tsx`,
                    templateFile: 'plop-templates/component-template.hbs'
                },
                // Add Storybook Story.
                {
                    type: 'add',
                    path: `${prefix}/{{pascalCase componentName}}.stories.tsx`,
                    templateFile:
                        'plop-templates/component-storybook-template.hbs',
                    data: {
                        ...data,
                        normalizedName: normalizedName(componentName)
                    }
                },
                // Update the mock root index.
                {
                    path: `src/mocks/index.ts`,
                    pattern: /(\/\/ MOCK IMPORTS)/g,
                    template:
                        "export * from './{{kebabCase componentName}}';\n$1",
                    type: 'modify'
                },
                // Update the test root index.
                {
                    path: `src/tests/index.ts`,
                    pattern: /(\/\/ TEST IMPORTS)/g,
                    template:
                        "export * from './{{kebabCase componentName}}';\n$1",
                    type: 'modify'
                },
                // Update the component root index.
                {
                    path: `src/components/${atomicType}/index.ts`,
                    pattern: /(\/\/ COMPONENT IMPORTS)/g,
                    template:
                        "export * from './{{pascalCase componentName}}';\n$1",
                    type: 'modify'
                }
            ];

            // If the component has CVA, add a styles file.
            if (hasCVA) {
                templates.push({
                    type: 'add',
                    path: `${prefix}/styles.ts`,
                    templateFile: 'plop-templates/component-cva-styles.hbs'
                });
            }

            return templates;
        }
    });
};
