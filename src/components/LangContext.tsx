import React, { useState } from 'react';
import { Lang } from '../types/types';

type ContextValue = {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

export const LangContext = React.createContext<ContextValue>({
    lang: 'en',
    setLang: () => {},
});

export const LangProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [lang, setLang] = useState<Lang>('en');

    const contextValue: ContextValue = {
        lang,
        setLang,
    }

    return (
        <LangContext.Provider value={contextValue}>
            {children}
        </LangContext.Provider>
    );
};
