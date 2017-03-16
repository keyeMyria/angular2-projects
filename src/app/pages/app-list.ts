export enum ApplicationType {
    GAME = 1
}

export interface Application {
    name: string;
    version: string;
    link: string;
    image: string;
    type: ApplicationType;
}

export const APP_LIST: Application[] = [
    {
        name   : 'Sudoku',
        version: '1.0',
        link   : '/games/sudoku',
        image  : null,
        type   : ApplicationType.GAME
    },
    {
        name   : 'Snake',
        version: '1.0',
        link   : '/games/snake',
        image  : null,
        type   : ApplicationType.GAME
    }
];

export class ApplicationUtils {

    static searchByName(term: string): Application[] {
        term = term.replace(/^\s+|\s+$/g, '');

        if (!term) {
            return APP_LIST;
        }
        term = term.toLocaleLowerCase();

        return APP_LIST.filter((item) => {
            return ~item.name.toLocaleLowerCase().indexOf(term);
        });
    }

    static getApplications(type?: ApplicationType) {
        return APP_LIST;
    }
}