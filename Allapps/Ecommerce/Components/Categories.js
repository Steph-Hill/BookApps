import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const data = [

    {
        id:1,
        nom:'cat1',
    },
    {
        id:2,
        nom:'cat2',

    },
    {
        id:3,
        nom:'cat3',

    },
    {
        id:4,
        nom:'cat4',

    },
    {
        id:5,
        nom:'cat5',

    }

]

RenderCategorie = ({categorie}) => {

    return(
        
        <TouchableOpacity style={styles.toucheCategorie}>

            <Text style={styles.catText}>{categorie.nom}</Text>

        </TouchableOpacity>
    )
}

const Categories = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <RenderCategorie
                                categorie={item}/>}
        keyExtractor={item=>item.nom}
        horizontal={true}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

    content :{
        
        
        width:'100%',
        height:100
       
    },

    title :{
        fontSize:25,
        color:'green',
        fontWeight:'700'
    },
    toucheCategorie:{

        backgroundColor:'rgba(58, 226, 145, 0.8)',
        margin : 10,
        padding:10,
        borderRadius:10,
        height:45,
        width:150
    },
    catText:{

        fontSize:16,
        fontWeight:'500',
        color:'white',
        flexDirection:'row',
        justifyContent:'center'

    }


})