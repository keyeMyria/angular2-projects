export interface PageMenuItem {
    path: string;
    title?: string;
    icon?: string;
    children?: PageMenuItem[];
}

export const PAGES_MENU: PageMenuItem[] = [
    {
        path    : 'pages',
        children: [
            {
                path : 'dashboard',
                title: 'Dashboard',
                icon : ''
            },
            {
                path : 'questions',
                title: 'Questions',
                icon : ''
            }
        ]
    }
];