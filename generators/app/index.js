'use strict';

const path = require('path');
const Generator = require('yeoman-generator');

function joinPath(basePathTokens, filename) {
    return basePathTokens.concat([filename]).join(path.sep);
}

module.exports = class extends Generator {
    prompting() {
        const prompts = [
            {
                type: 'input',
                name: 'projectName',
                message: 'Project name:'
            },
            {
                type: 'input',
                name: 'projectVarName',
                message: 'Module variable name:'
            },
            {
                type: 'input',
                name: 'projectDescription',
                message: 'Project description:'
            },
            {
                type: 'input',
                name: 'gitUser',
                message: 'Git username:'
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {
        const projectName = this.props.projectName;

        this.destinationRoot(projectName);

        const templateValues = {
            gitUser: this.props.gitUser,
            projectName: projectName,
            projectVarName: this.props.projectVarName,
            projectDescription: this.projectDescription
        };

        let binPathTokens = ['bin'];
        let testPathTokens = ['test'];
        let testUtilsPathTokens = testPathTokens.concat(['test-utils']);

        const copyDefinitions = [
            {
                templatePath: joinPath(testPathTokens, 'test.template.js'),
                filePath: joinPath(testPathTokens, projectName + '.test.js'),
                isTemplate: true
            },
            {
                templatePath: 'index.template.js',
                filePath: 'index.js',
                isTemplate: true
            },
            {
                templatePath: 'package.template.json',
                filePath: 'package.json',
                isTemplate: true
            },
            {
                templatePath: 'README.template.md',
                filePath: 'README.md',
                isTemplate: true
            },
            {
                templatePath: '.editorconfig',
                filePath: '.editorconfig',
                isTemplate: false
            },
            {
                templatePath: '.eslintrc',
                filePath: '.eslintrc',
                isTemplate: false
            },
            {
                templatePath: '.gitignore',
                filePath: '.gitignore',
                isTemplate: false
            },
            {
                templatePath: '.npmignore.template',
                filePath: '.npmignore',
                isTemplate: false
            },
            {
                templatePath: joinPath(binPathTokens, 'empty'),
                filePath: joinPath(binPathTokens, 'empty'),
                isTemplate: false
            },
            {
                templatePath: 'gulpfile.template.js',
                filePath: 'gulpfile.js',
                isTemplate: true

            },
            {
                templatePath: 'signet-types.js',
                filePath: 'signet-types.js',
                isTemplate: false
            },
            {
                templatePath: joinPath(testUtilsPathTokens, 'approvals-config.js'),
                filePath: joinPath(testUtilsPathTokens, 'approvals-config.js'),
                isTemplate: false
            },
            {
                templatePath: joinPath(testUtilsPathTokens, 'prettyJson.js'),
                filePath: joinPath(testUtilsPathTokens, 'prettyJson.js'),
                isTemplate: false
            }
        ];

        copyDefinitions.forEach(copyDefinition => {
            if (copyDefinition.isTemplate) {
                this.fs.copyTpl(
                    this.templatePath(copyDefinition.templatePath),
                    this.destinationPath(copyDefinition.filePath),
                    templateValues
                );
            } else {
                this.fs.copy(
                    this.templatePath(copyDefinition.templatePath),
                    this.destinationPath(copyDefinition.filePath)
                );
            }
        });

    }

    install() {
        this.installDependencies({
            npm: true,
            bower: false,
            yarn: false
        });
    }
};
