import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <div className='toggle'>
        <span
          className={`light  ${darkMode && 'light__active'}`}
          onClick={changeToggle}
        >
          ☼
        </span>

        <span
          className={`dark  ${!darkMode && 'dark__active'}`}
          onClick={changeToggle}
        >
          ☽
        </span>
      </div>

      <p>
        {darkMode ? (
          <span>
            You are in{' '}
            <strong className={`dark  ${darkMode && 'dark__active'}`}>
              Dark
            </strong>{' '}
            mode.
          </span>
        ) : (
          <span>
            You are in{' '}
            <strong className={`light ${!darkMode && 'light__active'}`}>
              Light
            </strong>{' '}
            mode.
          </span>
        )}
      </p>
    </div>
  );
}

export default App;

/*

    <div className='app'>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
          <div className='toggle-mode'>
            <span className={!darkMode && 'light'}>☼</span>
            <input type='checkbox' onClick={() => setDarkMode(!darkMode)} />
            <span className={darkMode && 'dark'}>☽</span>
          </div>

          <p>
            You are in{' '}
            <strong>
              {darkMode ? (
                <span className='dark'>Dark</span>
              ) : (
                <span className='light'>Light</span>
              )}
            </strong>{' '}
            mode
          </p>
      </div>
    </div>
*/

/*
import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <div className='mode-toggle'>
        <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☼</span>
        <input type='checkbox' onClick={() => setDarkMode(!darkMode)} />
        <span style={{ color: darkMode ? '#8c7ae6' : 'grey' }}>☽</span>
      </div>

      <p>
        You are in{' '}
        <strong>
          {darkMode ? (
            <span className='dark'>Dark</span>
          ) : (
            <span className='light'>Light</span>
          )}
        </strong>{' '}
        mode
      </p>
    </div>
  );
}

export default App;
*/
