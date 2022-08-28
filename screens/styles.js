const Styles={
    container:{
        marginTop:0, 
        flex: 1
    },
    displayContainer:{
        backgroundColor:"#2f2c3b", 
        height: "40%",
        padding: 10, 
        display: "flex", 
        flexDirection:"column", 
        justifyContent: "flex-end", 
        alignItems:"flex-end"
            
    },
    input:{
        color:"#ddd", 
        fontSize:20, 
        marginLeft:3,
        textAlign:"right",
        
    },
    
    result:{
        color:"#ddd", 
        fontSize:50
    },
    numberList:{
        display: "flex",
        flexDirection:"row",
        backgroundColor:"green"
    },
    calculation:{
        display: "flex", 
        flexDirection:"row",
        backgroundColor:"green",
        
    },
    calculation2:{
        display: "flex", 
        flexDirection:"row",  
        backgroundColor:"blue",
        
    },
    buttonsContainer:{
        display: "flex", 
        flexDirection:"column", 
        flex:1, 
        maxHeight:"60%",
        justifyContent: "center",
        justifyContent: "space-evenly",
        alignItems: "stretch"
        
    },
    buttonsRow:{
        display: "flex", 
        flexDirection: "row"
    },
    button: {
        backgroundColor:"#2f2c3b",
        justifyContent:"center",
        paddingTop:"9%",
        paddingBottom:"9%",
        alignItems:"center",
        flex:1 
    },
    buttonText:{
        color:"#ddd",
        fontSize: 20
    }
}

export default Styles
