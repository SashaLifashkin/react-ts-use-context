import { useState } from 'react';
import './App.css';
import { LangSelector } from './components/LangSelector';
import { HomePage } from './components/HomePage';
import { Lang } from './types/types';
import { Footer } from './components/Footer';
import { LangProvider } from './components/LangContext';

function App() {
    const [lang, setLang] = useState<Lang>('en');

    return (
        <LangProvider>
            <div className="App">
                <header className="header">
                    Some page

                    <LangSelector />
                </header>
                <main>
                    <HomePage />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </LangProvider>

    );
}

export default App;
