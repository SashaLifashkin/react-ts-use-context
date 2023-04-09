// type Translations = {
//     en: {
//         [key: string]: string;
//     };
//     ru: {
//         [key: string]: string;
//     };
// };

import { Lang } from "../types/types";

type Translations = {
    [key in Lang]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en: {
        'homePage.title': 'Home page',
        'homePage.context': 'Some info on home page',
        'footer.text': 'Some footer text',
    },
    ru: {
        'homePage.title': 'Домашняя страница',
        'homePage.context': 'Некоторая информация на домашней странице',
        'footer.text': 'Некоторый текст футера',
    }
};

export const getTranslation = <T extends keyof Translations>(lang: T, text: string): string => {
    return translations[lang][text];
}
