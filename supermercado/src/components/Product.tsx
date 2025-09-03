import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"

interface Props {
    name: string;
    finalized: boolean,
    onRemove: () => void;
    onToggle: () => void;
}

export function Product({name, finalized = false, onRemove, onToggle} : Props) {
    return (
        <View style={[styles.container, finalized && styles.containerChecked]}>
            <TouchableOpacity onPress={onToggle} style={styles.checkButton} activeOpacity={0.1}>
                {finalized ? (
                    <Image
                        source={require('../../assets/check.png')}
                        style={styles.checkButtonPurple}
                    />
                ) : (
                    
                    <Image
                        source={require('../../assets/layer1.png')}
                        style={styles.checkButton}
                    />
                )}
                
            </TouchableOpacity>
            <Text style={[styles.name, finalized && styles.nameFinalized]}>{name}</Text>
            <TouchableOpacity onPress={onRemove}>
                <>
                    <Image
                        source={require('../../assets/trash.png')}
                        style={styles.deleteButton}
                    />
                </>

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F2F2F2",
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 8,
        borderWidth: 1,
        borderColor: "#808080",
        alignSelf: "stretch",
        gap: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    containerChecked: {
        flex: 1,
        width: "100%",
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F2F2F2",
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 8,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        alignSelf: "stretch",
        gap: 8,
    },
    checkButton: {
        display: "flex",
        width: 24,
        height: 24,
        padding: 3.273,
        justifyContent: "center",
        alignItems: "center"
    },
    checkButtonPurple: {
        display: "flex",
        width: 34,
        height: 34,
        padding: 3.273,
        justifyContent: "center",
        alignItems: "center"
    },
    deleteButton: {
        display: "flex",
        width: 32,
        height: 32,
        borderRadius: 4,
        
    },
    name: {
        flex: 1,
        color: "#262626",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 19.6,
        width: 253,
    },
    nameFinalized: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 19.6,
        textDecorationLine: "line-through",
        color: "#808080",
        width: 253,
    }
})