import { useState } from "react";
import { Alert, FlatList, NativeEventEmitter, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
//import { Product } from "../../components/Product";
import { styles } from "./styles"

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.titleText}>Lista de Compras</Text>
            </View>
            

            <View style={styles.bottom}></View>
            <View style={styles.inputwrapper}>
                <TextInput
                placeholder="Adicione uma nova produto"
                style={styles.input}
                />
                <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
                    <Image
                        source={require('../../../assets/plus.png')}
                        style={styles.button}
                        
                    />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}