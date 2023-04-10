import React, { useContext } from 'react';
import { LangContext } from '../LangContext';
import { Lang } from '../../types/types';

export const LangSelector: React.FC = () => {
    const { lang, setLang } = useContext(LangContext);

    return (
        <select
            value={lang}
            onChange={(event) => {
                setLang(event.target.value as Lang);
            }}
        >
            <option value='en'>English</option>
            <option value='ru'>Русский</option>
        </select>
    );
};
