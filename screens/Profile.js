import { View, Text, Button, TextInput } from "react-native"
import { useState } from "react"

export const Profile = ({navigation}) => {
    const [someValue, setSomeValue] = useState("")
  return (
    <View style={{marginTop:0}}>
        <Text>Profile </Text>
        <TextInput onChangeText={(e)=>setSomeValue(e)} defaultValue={someValue}/>
        <Button 
        title="Home"
        onPress={()=>navigation.navigate("Home", {name:"Smart"})}/>
        <Text>{someValue}</Text>
    </View>
  )
}
