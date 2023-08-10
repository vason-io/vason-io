/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually

    documentationSidebar: [
        'intro',
        {
            type: 'category',
            label: 'Visualization',
            link: {
                type: 'generated-index',
                title: 'Visualization',
                description: 'Vason views',
            },
            items: [
                'Visualization/text-representation-of-JSON',
                'Visualization/compare-panels',
                'Visualization/tree-and-compact-views',
                'Visualization/nested view',
                'Visualization/3d-view',
                'Visualization/notes',
            ],
        },
//        {
//            type: 'doc',
//            label: 'Query-system',
//            id: 'Query-system/query-system',
//        },
        {
            type: 'category',
            label: 'Query system',
            link: {
                type: 'generated-index',
                title: 'Query system',
                description: 'Query system',
            },
            items: [
                'Query-system/query-system',
            ],
        },
        {
            type: 'category',
            label: 'HTTP requests and automation',
            link: {
                type: 'generated-index',
                title: 'HTTP requests and automation',
                description: 'HTTP requests and automation',
            },
            items: [
                'HTTP-requests-and-automation/HTTP-requests',
                'HTTP-requests-and-automation/HTTP-variables',
                'HTTP-requests-and-automation/Script',
            ],
        },
    ],
    supportSidebar: [
        {
            type: 'autogenerated',
            dirName: 'Support',
        },
    ]
};

module.exports = sidebars;
