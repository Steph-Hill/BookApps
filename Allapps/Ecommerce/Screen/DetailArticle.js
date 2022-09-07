import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FirebaseContext } from '../../../firebaseContext';
import { useContext } from 'react';



const DetailArticle = ({route}) => {
 //recup de l'id
    const { id } = route.params ;

    console.log('id :', id)

    //utilisation de mon state
    const [article, setArticle] = useState()

    //communication avec mon fireBase
    const firebase = useContext(FirebaseContext)

    //preparation de mon action
    const getArticle = async () => { 
      
      const rqArticle = await firebase.getArticleById(id)
      
     }


     //Chargement de mon tableau
     useEffect(()=>{

        getArticle();

     },[])

  return (
    <View>
      <Text>DetailArticle</Text>
    </View>
  )
}

export default DetailArticle

const styles = StyleSheet.create({})