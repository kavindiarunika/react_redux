import React from 'react'
import reducer from './reducer/Number';

import { createStore } from 'redux'



const Store = createStore(reducer);

export default Store