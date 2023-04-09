import React from 'react';
import { getTranslation } from '../../data/translation';
import { Lang } from '../../types/types';

type Props = {
    lang: Lang;
};

export class Footer extends React.Component<Props> {
    render () {
        const lang = this.props.lang;

        return (
            <footer className='footer'>{getTranslation(lang, 'footer.text')}</footer>
        );
    }
}
