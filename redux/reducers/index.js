import { combineReducers } from "redux";

import login from "./login";

import compteur from "./compteur";

import dataCategorie from "./dataCategorie";

export default combineReducers({login,compteur,dataCategorie});