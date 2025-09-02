import { useState } from "react";
import { Alert, FlatList, NativeEventEmitter, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Product } from "../../components/Product";
import { styles } from "./styles"

export default function Home() {

    const [products, setProducts] = useState<string[]>([
        "a", "hj"
    ]);
    const productsCount = products.length;
    function handleRemoveProduct() {
        
    }

    function handleOnToggle() {
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.titleText}>Lista de Compras</Text>
            </View>
            

            <View style={styles.bottom}>
                <View style={styles.infoContainer}>

                    {/* Produtos */}
                    <View style={styles.infoContainerItem}>
                        <Text style={styles.productLabel}>Produtos</Text>
                        <Text style={styles.counterCard}>{productsCount}</Text>
                    </View>
                
                    {/* Finalizados */}
                    <View style={styles.infoContainerItem}>
                        <Text style={styles.finalizedLabel}>Finalizados</Text>
                        <Text style={styles.counterCard}>{productsCount}</Text>
                    </View>
                </View>

                <FlatList
                    data={products}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <Product name={item} finalized={false} onRemove={handleRemoveProduct} onToggle={handleOnToggle}></Product>}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listView}
                    ListEmptyComponent={() => (
                        <>
                            <View style={styles.emptyListView}>
                                <Image
                                    source={require('../../../assets/shopping_list.png')}
                                    style={styles.shoppingListImage}
                                />
                                <View style={styles.emptyListText}>
                                    <Text style={styles.emptyListTextUp}>Você ainda não tem produtos na lista de compra</Text>
                                    <Text style={styles.emptyListTextDown}>Adicione produtos e organize sua lista de compras</Text>
                                </View>
                            </View>
                            
                        </>
                    )}
                />
            </View>
            <View style={styles.inputwrapper}>
                <TextInput
                placeholder="Adicione um novo produto"
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