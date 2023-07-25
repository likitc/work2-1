import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function RowItem() {
    const items = ['One', 'Two', 'Three', 'Four']
    return(
        <View style={styles.container}>
            {items.map((item, i) => {
                return(
                    <View key={i} style={[styles.item, styles.itembg0]}>
                            <Text style={styles.text}>{item}</Text>     
                    </View>
                )
            }
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop:50,
        padding:5
    },
    item:{
        height:150,
        width: 150,
        //backgroundColor: 'tomato',
        marginBottom:15,
        //paddingLeft:10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    itembg0:{
        backgroundColor: 'blue'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})