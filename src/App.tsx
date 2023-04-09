import { useState } from 'react';
import './App.css';
import { LangSelector } from './components/LangSelector';
import { HomePage } from './components/HomePage';
import { Lang } from './types/types';
import { Footer } from './components/Footer';

function App() {
    const [lang, setLang] = useState<Lang>('en');

    return (
        <div className="App">
            <header className="header">
                Some page

                <LangSelector
                    lang={lang}
                    setLang={setLang}
                />
            </header>
            <main>
                <HomePage lang={lang} />
            </main>
            <footer>
                <Footer lang={lang} />
            </footer>
        </div>
    );
}

export default App;
