import { useState } from "react";
import { Alert, FlatList, NativeEventEmitter, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Product } from "../../components/Product";
import { styles } from "./styles"
import Toast from 'react-native-toast-message';
import { showErrorToast, showSuccessToast } from "../../ui/toastConfig";

interface ProductType{
        name: string
        finalized: boolean
    }

export default function Home() {
    const [newProduct, setNewProduct] = useState("");
    const [products, setProducts] = useState<ProductType[]>([]);

    const productCount = products.length

    const productFinalizedCount = products.filter(p => p.finalized).length

    function handleAddProduct() {
        if (newProduct.trim() === "") {
            setNewProduct("");
            return showErrorToast('Produto Inválido', `"${newProduct}" não é um caracter válido`);
        } 
        else if (products.some(item => item.name === newProduct)) {
            setNewProduct("");
            return showErrorToast('Produto já cadastrado', `"${newProduct}" já existe`);
        }
        setProducts([...products, { name: newProduct, finalized: false }]);
        showSuccessToast('Produto Adicionado', `"${newProduct}" foi adicionado à lista`);
        setNewProduct("");
    }

    function handleRemoveProduct(name: string) {
        setProducts(products.filter(p => p.name !== name))
        showSuccessToast('Produto Removido', `"${name}" foi removido da lista`)
    }

    function handleOnToggle(name: string) {
        setProducts(products.map(item => item.name === name ? {...item, finalized: !item.finalized} : item))
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
                        <Text style={styles.counterCard}>{productCount}</Text>
                    </View>
                
                    {/* Finalizados */}
                    <View style={styles.infoContainerItem}>
                        <Text style={styles.finalizedLabel}>Finalizados</Text>
                        <Text style={styles.counterCard}>{productFinalizedCount}</Text>
                    </View>  
                </View>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) =>
                        <Product
                            name={item.name} finalized={item.finalized}
                            onRemove={() => handleRemoveProduct(item.name)} onToggle={() => handleOnToggle(item.name)}
                        />}
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
                    style={styles.input}
                    placeholder="Adicione um novo produto"
                    placeholderTextColor={"#808080"}
                    value={newProduct}
                    onChangeText={setNewProduct}
                />
                <TouchableOpacity onPress={() => handleAddProduct()} activeOpacity={0.8}>
                    <Image
                        source={require('../../../assets/plus.png')}
                        style={styles.button}
                        
                    />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}