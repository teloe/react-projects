import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => {
    return (
        <div>
            <Display value="17" />
            <ButtonPanel />
        </div>
    );
};

export default App;
