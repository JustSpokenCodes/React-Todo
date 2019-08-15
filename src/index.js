import React from 'react';
import { render } from 'react-dom';
import App from './App';

function App(){
    return (
        <div className='App'>
            <App />
        </div>
    );
}

render(<App />, document.getElementById('root'));
