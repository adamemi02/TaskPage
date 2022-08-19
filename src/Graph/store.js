import { createStore } from '@reduxjs/toolkit';
import graph from "./reducers/graph";

const store=createStore(graph);

export default store;