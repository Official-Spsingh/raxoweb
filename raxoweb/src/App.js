import React from 'react';
import MainContainer from './components/MainContainer';
import { getCookie } from '@utils/cookie'
import { setUserAuthentication } from '@utils/auth'

function App() {
    if (getCookie('accessToken').length > 25) {
        setUserAuthentication(true)
    }
    return (
        <div className="App" id="RaxowebMain" >
            <MainContainer />
        </div>
    );
}

export default App;