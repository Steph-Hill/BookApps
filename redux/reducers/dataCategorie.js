import { ADD_CATEGORIE } from "../type";


//initialisation de l'etat initial de categorie

const initStateCategories = []

// creation de ma function
//state init a 
export default function ( state = initStateCategories,action){

    if (action.type == ADD_CATEGORIE) {
        
        return [...state,action.payload]

    } else {
        
        return state;
    }

}