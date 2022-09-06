import  React, {useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';

import { FirebaseContext } from '../../firebaseContext';

import { useDispatch } from 'react-redux'
import { addCategorie } from '../../redux/action';


const Tab = createBottomTabNavigator();

const App = () => {

  const  dispatch = useDispatch();

  const firebase = useContext(FirebaseContext)

    const initCategories = async () => {

        const categories = await firebase.getCategories();

        if (!categories.empty) {

          console.log("y ranpli !")

          //lit les donnees de categorie
              categories.forEach( categorieData =>{

                const temCategorie = {
                                        id : categorieData.id,
                                        nom : categorieData.data().nom
                                          }
                  //version destructurée
                                          /* {
                                            id : categorieData.id,,
                                            ...categorieData.data()

                                          } */

                console.log("Mes Categories :", categorieData.data())
                              
                
                dispatch(addCategorie(temCategorie))

              }


          )
          
        }

    }

  //initialisation de la page
  useEffect(()=>{

    initCategories();

  },[])

  return (
    
    
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Compte" component={Setting} />
      </Tab.Navigator>
  
  )
}




export default App;  