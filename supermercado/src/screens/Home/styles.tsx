import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
        //flexShrink: 0,
        padding: 24,
        backgroundColor: '#7A4A9E',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    bottom: {
        padding: 24,
        height: 679,
        backgroundColor: '#F2F2F2',
        
    },
    titleText: {
        color: "#F2F2F2",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: 140,
        width: 345
        

    },
    input: {
        display: "flex",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        marginRight: 4,
        fontSize: 16,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        padding: 16,
        height: 54,
        width: 289,
        borderWidth: 0.5,
        borderColor: "#7A4A9E",


    },
    inputwrapper: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
        position: "absolute",
        top: "21%", 
        width: "100%",
        flexDirection: "row",
    
    },
    button: {
        height: 52,
        width: 52,
        display: "flex",
        padding: 18,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: "#31C667"
    },
    productLabel: {
        fontSize: 14,
        fontWeight: 700,
        fontStyle: "normal",
        color: "#31C667"
    },
    finalizedLabel: {
        fontSize: 14,
        fontWeight: 700,
        fontStyle: "normal",
        color: "#7A4A9E"
    },
    infoContainer: {
        display: "flex",
        marginTop: 32,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    infoContainerItem: {
        gap: 8,  
        flexDirection: "row",
        
        alignItems: "center"
    },
    counterCard: {
        display: "flex",
        paddingVertical: 2,
        paddingHorizontal: 8,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        borderRadius: 999,
        backgroundColor: "#D9D9D9"
    },
    listView: {
        paddingVertical: 20,
        
        flexDirection: "column",
        gap: 8
    },
    emptyListView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#D9D9D9",
        paddingVertical: 48,
        paddingHorizontal: 20,
        flexDirection: "column",
        gap: 16
    },
    shoppingListImage: {
        width: 56,
        height: 56
    },
    emptyListText: {
        width: 345
    },
    emptyListTextUp: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 19.6,
        color: "#808080"
    },
    emptyListTextDown: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 19.6,
        color: "#808080"
    }

})