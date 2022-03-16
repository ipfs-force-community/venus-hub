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
            title: '启明星枢纽',
            description: '启明星枢纽是一些列启明星相关社区活动的合集',
        }
    },
    themeConfig: {
        logo: '/assets/venus-logo-02.svg',
        lastUpdated: 'Last Updated',
        // Optional options for generating "Edit this page" link
        // if your docs are in a different repo from your main project:
        docsRepo: 'filecoin-project/venus-docs',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
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
                title: '启明星',
                description: 'Venus is a Go implementation of the Filecoin Distributed Storage Network.',
                nav: [
                    {
                        text: '快速上手',
                        link: '/zh/guide/'
                    },
                    {
                        text: '组件模块',
                        link: '/zh/modules/'
                    },
                    {
                        text: '进阶',
                        link: '/zh/advanced/'
                    },
                    {
                        text: '运维',
                        link: '/zh/operation/'
                    },
                    {
                        text: '孵化器',
                        link: '/zh/incubation/'
                    },
                    {
                        text: 'Master',
                        link: '/zh/master/'
                    }
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            title: '快速上手',
                            collapsable: false,
                            children: [
                                ['', '启明星概要'],
                                ['How-To-Deploy-MingPool.md', '部署链服务'],
                                ['Using-venus-Shared-Modules.md', '使用链服务'],
                                ['using-venus-market-v1.md', '加入存储市场'],
                                ['fil_withdraw_and_send.md', '提取奖励'],
                                ['chain.md', '链维护'],
                                ['How-To-Connect-Network.md', '加入不同网络'],
                                ['How-To-Contribute-Docs.md', '贡献文档'],
                            ]
                        }
                    ],
                    '/zh/modules/': [
                        {
                            title: '启明星模块',
                            collapsable: false,
                            children: [
                                ['', 'Venus daemon'],
                                ['Venus-Auth.md', 'Venus auth'],
                                ['venus-miner.md', 'venus-miner'],
                                ['How-To-Use-Messager.md', 'Venus messager'],
                                ['Venus-Gateway.md', 'Venus gateway'],
                                ['How-To-Use-Wallet-In-Venus.md', 'Venus 本地钱包'],
                                ['Venus-Wallet.md', 'Venus 远程钱包'],
                                ['Venus-Worker.md', 'Venus worker'],
                                ['Venus-Market.md', 'Venus market'],
                                ['Venus-Messager-Design-Spec.md', 'Venus Messager 设计说明书'],
                            ]
                        }
                    ],
                    '/zh/advanced/': [
                        {
                            title: '进阶',
                            collapsable: false,
                            children: [
                                ['', 'venus矿池进阶'],
                                ['How-To-Setup_2knet.md', '如何搭建私网'],
                                ['tips-running-in-China.md', '中国部署小贴士'],
                                ['Venus-Project-Dependency-Upgrade.md', 'venus组件依赖与升级'],
                                ['venus-cli.md', 'CLI命令'],
                                ['Multisig-Wallet.md', '多签钱包'],
                                ['venus_load_balancing.md', '负载均衡'],
                                ['Payment-Channel.md', '支付通道'],
                                ['How-To-Setup_2knet.md', '本地2k开发网络'],
                            ]
                        }
                    ],
                    '/zh/operation/': [
                        {
                            title: '独立组件运维',
                            collapsable: false,
                            children: [
                                ['', '独立组件运维进阶'],
                                ['example-single-box.md', '单矿机示例'],
                                ['Efficiency_of_sealing.md', '最大化利用资源提升密封扇区效率'],
                                ['System_monitor_of_Zabbix.md', '系统监控安装与使用之Zabbix'],
                                ['lotus-vs-venus.md', '从Lotus中来'],
                                ['Nv15_upgrade_guide.md', 'nv15网络升级'],
                                ['migrate_market_v1_to_v2.md', 'market_v2升级'],
                            ]
                        }
                    ],
                    '/zh/incubation/': [
                        {
                            title: '孵化器',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                                ['存储提供者孵化中心参与流程.md', '参与流程'],
                                ['第二阶段正式启动.md', '孵化中心第二阶段'],
                                ['Incubation_Center_Prize_Pool.md', '参与奖励'],
                                ['announcement.md', '公告'],
                                ['Rules.md', '规则'],
                            ]
                        }
                    ],
                    '/zh/master/': [
                        {
                            title: 'Master',
                            collapsable: false,
                            children: [
                                ['', '概述'],
                                ['Course_introduction.md', '大师课程'],
                                ['Intro_to_Venus.md', 'Venus概要'],
                                ['Chain_service_construction.md', '部署链服务'],
                                ['Daily_op_and_maintenance.md', '节点日常运维'],
                                ['Q&A.md', 'Q&A'],
                                ['Incubation_exit_guide.md', '节点迁出指南'],
                            ]
                        }
                    ]
                }
            }
        }
    }
}

