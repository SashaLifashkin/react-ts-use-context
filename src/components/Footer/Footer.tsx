import React from 'react';
import { getTranslation } from '../../data/translation';
import { LangContext } from '../LangContext';

export class Footer extends React.Component {
    static contextType = LangContext;
    context!: React.ContextType<typeof LangContext>

    render () {
        const lang = this.context;

        return (
            <footer className='footer'>{getTranslation(lang, 'footer.text')}</footer>
        );
    }
}
