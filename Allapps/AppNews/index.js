import { StyleSheet, Text, View, FlatList,Button } from 'react-native'
import React from 'react'

import { news } from '../../datas/news'

import ItemNews from './components/ItemNews'

import { useState, useEffect } from 'react'

import { apiNews } from './function/api'

const NewsScreen = () => {

    /* useState contient un setteur(setNews) et un getteur(getNews) */
    /* setNews remplit getNews */
    

    const [getNews, setNews] = useState([])

    //Gestion de ma pagination

    const [getPage, setPage] = useState(1)

    //Page suivante (load More)
    const nextPage = async () => { 
        //Va à la page suivante
        setPage(getPage + 1)

        //charge nouvelle page d'aricles avec page suivante
        const articles = await apiNews(getPage);
         //creation des nouveaux articles
        setNews(articles)
        
        console.log('pages :' , getPage)
     }



    /* creation de l'action de l'ajout */
    const initNews = async () => { 
        
        
        // chargement de mon API
        apiNews();

        const articles = await apiNews(1);
         
        setNews(articles)

     }


     useEffect(()=>{

        //initialisation de mes Articles
        initNews()

     },[]) 


  return (
    <FlatList
        ListHeaderComponent={<Button
                                title='Page Suivant'
                                onPress={nextPage} // utilisation de l'action
                                />}
        data={getNews} //recoit les données de setNews
        renderItem = {({item})=><ItemNews item={item}/>}
        keyExtractor = {item => item.id}
        ListEmptyComponent={<Text>pas d'actu pour le moment</Text>}

    />
  )
}

export default NewsScreen

const styles = StyleSheet.create({})