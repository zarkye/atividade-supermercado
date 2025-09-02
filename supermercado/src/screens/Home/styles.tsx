import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
        //flexShrink: 0,
        backgroundColor: '#7A4A9E',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    bottom: {
        
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
        lineHeight: 140

    },
    input: {
        flex: 1,
        marginRight: 4,
        fontSize: 16,
        backgroundColor: "#ffffff",
        gap: 8,
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
    }
})