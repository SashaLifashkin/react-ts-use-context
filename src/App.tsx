import { useState } from 'react';
import './App.css';
import { LangSelector } from './components/LangSelector';
import { HomePage } from './components/HomePage';
import { Lang } from './types/types';
import { Footer } from './components/Footer';
import { LangContext } from './components/LangContext';

function App() {
    const [lang, setLang] = useState<Lang>('en');

    return (
        <LangContext.Provider value={lang}>
            <div className="App">
                <header className="header">
                    Some page

                    <LangSelector
                        lang={lang}
                        setLang={setLang}
                    />
                </header>
                <main>
                    <HomePage />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </LangContext.Provider>

    );
}

export default App;
