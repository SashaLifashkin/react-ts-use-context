import React from 'react';
import { Lang } from '../../types/types';

type Props = {
    lang: Lang;
    setLang: (value: Lang) => void;
}

export const LangSelector: React.FC<Props> = ({ lang, setLang }) => {
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
