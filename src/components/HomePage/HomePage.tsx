import React from 'react';
import { getTranslation } from '../../data/translation';
import { Lang } from '../../types/types';

type Props = {
    lang: Lang;
};

export const HomePage: React.FC<Props> = ({ lang }) => {
    return (
        <section className='homepage'>
            <HomePageTitle lang={lang} />
            <HomePageContext lang={lang} />
        </section>
    );
};

const HomePageTitle: React.FC<Props> = ({ lang }) => {
    return (
        <h1>{getTranslation(lang, 'homePage.title')}</h1>
    );
};

const HomePageContext: React.FC<Props> = ({ lang }) => {
    return (
        <section>{getTranslation(lang, 'homePage.context')}</section>
    );
};
