import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter} from "react-router-dom";
import Allpages from './Allpages';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Allpages/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// ca toate componentele tale sa aiba acces la store (unde definesti state ul aplicatiei),
// este nevoie sa conectam ce avem in index la store printr un provider

