import { View, Text,Image } from 'react-native'
import React from 'react'

import { styles } from '../theme/style'

import { colors } from '../theme/color'

const ItemNews = ({item}) => {
  return (
    <View style={styles.content}>

        <View style={styles.viewImg}>

               <Image style={styles.image} source={{uri:item.urlToImage}}/> 

        </View>

        <View style={styles.viewText}>
            
            <Text>{item.title}</Text>
        
        </View>
      
    </View>
  )
}

export default ItemNews