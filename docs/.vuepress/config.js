module.exports = {
    title: 'VenusHub',
    description: 'Venus Hub is a collection of programs for Venus community.',
    base: '/',
    markdown: {
        config: md => {
            md.set({linkify: true})
            md.use(require('markdown-it-emoji'))
            md.use(require('markdown-it-container'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-task-lists'))
        }
    },
    plugins: [
        'vuepress-plugin-check-md',
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        '@vuepress-plugin-zooming',
        ['@vuepress/google-analytics',
            {
                'ga': 'G-SYDDWWLQSP' // Property: Filecoin Docs
            }
        ],
        ['vuepress-plugin-code-copy', true]
    ],
    head: [
        ['link', {rel: 'icon', href: '/assets/venus-logo-04.png'}]
        // ['link', {rel: 'icon', href: '/assets/venus-logo-04.jpg'}]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            // title: 'VenusHub',
            description: 'A long-running community-driven project that aims to continuously support Venus community',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'VenusHub',
            description: '一个由社区发起的项目，旨在长期支持Venus社区',
        }
    },
    themeConfig: {
        logo: '/assets/venus-logo-02.svg',
        lastUpdated: 'Last Updated',
        // Optional options for generating "Edit this page" link
        // if your docs are in a different repo from your main project:
        docsRepo: 'ipfs-force-community/venus-hub',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'main',
        // defaults to false, set to true to enable
        editLinks: true,
        // end Edit on Github section
        displayAllHeaders: false,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                lang: 'en-US',
                title: '',
                description: 'Venus Hub is a collection of programs for Venus community.',
                nav: [
                    {
                        text: 'Meetup',
                        link: '/meetup/'
                    },
                    {
                        text: 'Master',
                        link: '/master/'
                    },
                    
                    {
                        text: 'SP Incubator',
                        link: '/incubator/'
                    },
                    {
                        text: 'Deal Accelerator',
                        link: '/accelerator/'
                    },
                    {
                        text: 'Hackathon',
                        link: '/hackathon/'
                    },
                    {
                        text: 'Contact Us',
                        link: '/contact/'
                    },               
                ],
                sidebar: {
                    '/meetup/': [
                        {
                            title: 'Venus Meetups',
                            collapsable: false,
                            children: [
                                ['', 'Overview'],
                            ]
                        }
                    ],
                    '/master/': [
                        {
                            title: 'Venus Master Program',
                            collapsable: false,
                            children: [
                                ['', 'Overview'],
                                ['p2.md', 'Phase 2 (on-going)'],
                                ['p1.md', 'Phase 1 (end)'],
                            ]
                        }
                    ],
                    '/hackathon/': [
                        {
                            title: 'Hackathon',
                            collapsable: false,
                            children: [
                                ['', 'Overview'],
                            ]
                        }
                    ],
                    '/incubator/': [
                        {
                            title: 'Venus SP Incubator',
                            collapsable: false,
                            children: [
                                ['', 'Overview'],
                                ['p3.md', 'Phase 3 (Coming)'],
                                ['p1p2.md', 'Phase 1&2 (End)'],
                            ]
                        }
                    ],
                    '/accelerator/': [
                        {
                            title: 'Venus Deal Accelerator',
                            collapsable: false,
                            children: [
                                ['', 'Overview'],
                                ['p1.md', 'Phase 1 (Coming)'],
                            ]
                        }
                    ],
                    '/contact/': [
                        {
                            title: 'Contact Us',
                            collapsable: false,
                            children: [
                                ['', 'Overview'],
                            ]
                        }
                    ],
                }
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                title: 'VenusHub',
                description: '一个由社区发起的项目，旨在长期支持Venus社区',
                nav: [
                    {
                        text: 'Meetup',
                        link: '/zh/meetup/'
                    },
                    {
                        text: 'Master',
                        link: '/zh/master/'
                    },
                    
                    {
                        text: 'SP Incubator',
                        link: '/zh/incubator/'
                    },
                    {
                        text: 'Deal Accelerator',
                        link: '/zh/accelerator/'
                    },
                    {
                        text: 'Hackathon',
                        link: '/zh/hackathon/'
                    },
                    {
                        text: '联系我们',
                        link: '/zh/contact/'
                    }, 
                ],
                sidebar: {
                    '/zh/meetup/': [
                        {
                            title: 'Venus Meetup',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                            ]
                        }
                    ],
                    '/zh/master/': [
                        {
                            title: 'Venus Master',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                                ['p2.md', 'Phase 2 (on-going)'],
                                ['p1.md', 'Phase 1 (end)'],
                            ]
                        }
                    ],
                    '/zh/hackathon/': [
                        {
                            title: 'Hackathon',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                            ]
                        }
                    ],
                    '/zh/incubator/': [
                        {
                            title: 'Venus SP Incubator',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                                ['p3.md', 'Phase 3 (Coming)'],
                                ['p1p2.md', 'Phase 1&2 (End)'],
                            ]
                        }
                    ],
                    '/zh/accelerator/': [
                        {
                            title: 'Venus Deal Accelerator',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                                ['p1.md', 'Phase 1 (Coming)'],
                            ]
                        }
                    ],
                    '/zh/contact/': [
                        {
                            title: '联系我们',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                            ]
                        }
                    ],
                }
            }
        }
    }
}

