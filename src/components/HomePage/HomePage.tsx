import React, { useContext } from 'react';
import { getTranslation } from '../../data/translation';
import { LangContext } from '../LangContext';

// export const HomePage: React.FC = () => {
//     return (
//         <section className='homepage'>
//             <HomePageTitle />
//             <HomePageContext />
//         </section>
//     );
// };

export const HomePage: React.NamedExoticComponent = React.memo(
    () => {
        return (
            <section className='homepage'>
                <HomePageTitle />
                <HomePageContext />
            </section>
        );
    }
);

const HomePageTitle: React.FC = () => {
    const { lang } = useContext(LangContext);

    return (
        <h1>{getTranslation(lang, 'homePage.title')}</h1>
    );
};

const HomePageContext: React.FC = () => {
    const { lang } = useContext(LangContext);

    return (
        <section>{getTranslation(lang, 'homePage.context')}</section>
    );
};
