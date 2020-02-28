module.exports = function (plop) {
	// controller generator
	plop.setGenerator('component', {
		description: 'UI component template',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'component name please(example component)?'
			}
		],
		actions: [
            {
                type: 'add',
                path: './src/components/{{camelCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/component.js'
            },
            {
                type: 'add',
                path: './src/components/{{camelCase name}}/{{camelCase name}}.scss',
                templateFile: 'plop-templates/component.scss'
            },
            {
				type: 'modify',
				path: './src/components/index.js',
				pattern: /(\/\/ IMPORT NEW REACT COMPONENT HERE)/g,
				template: 'export { default as {{pascalCase name}} } from \'./{{camelCase name}}/{{pascalCase name}}\';\n// IMPORT NEW REACT COMPONENT HERE',
            
            },
            {
				type: 'modify',
				path: './src/components/index.scss',
				pattern: /(\/\/ IMPORT NEW COMPONENT STYLE HERE)/g,
				template: '@import \'./{{camelCase name}}/{{camelCase name}}.scss\';\n// IMPORT NEW PAGE STYLES HERE',
			},
        ]
	});
};