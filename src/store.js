import {createStore} from 'redux';
import reducers from "./reducers";

const store=createStore(reducers);

export default store;

// fisierul de store trebuie sa stea intotdeauna la acelasi nivel cu index.js