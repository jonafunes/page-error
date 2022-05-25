import React, { useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBorderAll } from '@fortawesome/free-solid-svg-icons'
import ScrollReveal from 'scrollreveal'

function App() {
    useEffect(() => {
        ScrollReveal({
            distance: '90px',
            duration: 3000,
        }).reveal(`.home__data`, { origin: 'top', delay: 400 });
        ScrollReveal({
            distance: '90px',
            duration: 3000,
        }).reveal(`.home__img`, { origin: 'bottom', delay: 600 });
        ScrollReveal({
            distance: '90px',
            duration: 3000,
        }).reveal(`.home__footer`, { origin: 'bottom', delay: 800 });
    });

    return (
        <div className="App">
            <header className="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        JONAPROJECT
                    </a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#" className="nav__link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Contact</a>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close">
                            <FontAwesomeIcon icon={faX} onClick={() => document.getElementById('nav-menu')!.classList.remove('show-menu')}/>
                        </div>
                    </div>


                    <div className="nav__toggle" id="nav-toggle">
                        <FontAwesomeIcon icon={faBorderAll} onClick={() => document.getElementById('nav-menu')!.classList.add('show-menu')}/>
                    </div>
                </nav>
            </header>

            <main className="main">
                <section className="home">
                    <div className="home__container container">
                        <div className="home__data">
                            <span className="home__subtitle">Error 404</span>
                            <h1 className="home__title">Hey Buddy</h1>
                            <p className="home__description">
                                We can't seem to find the page <br /> you are looking for.
                            </p>
                            <a href="#" className="home__button">
                                Go Home
                            </a>
                        </div>

                        <div className="home__img">
                            <img src={require('./assets/images/ghost-img.png')} />
                            <div className="home__shadow"></div>
                        </div>
                    </div>

                    <footer className="home__footer">
                        <span>(554) 987-654</span>
                        <span>|</span>
                        <span>info@company.com</span>
                    </footer>
                </section>
            </main>

        </div>
    );
}

export default App;
