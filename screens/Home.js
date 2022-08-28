import { useEffect, useState } from "react"
import { View, Text , Button, TouchableNativeFeedback, TouchableWithoutFeedback, FlatList} from "react-native"
import Styles from "./styles"

export const Home = ({navigation}) => {
    let [inputs, setInputs] = useState([0])
    let [inputsDisplay, setInputsDisplay] = useState([0])
    let [tempDisplay, setTempDisplay] = useState([0])
    let [oper, setOper] = useState("")
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState(0)
    const [calculated, setCalculated] = useState(false)
    let answer = 0

    
    const joinInputs = (operator)=>{
        if(operator != "="){
            setOper(operator)
        }
        if(operator == "="){
            setCalculated(true)
            setTempDisplay(inputsDisplay)
            setInputs([0])
            setInputsDisplay([0])
        }
        let numberStringValue1 = ""
        let numberStringValue2 = ""
      
        if(firstNumber == 0){
            for(let i =0; i < inputs.length; i++){
                numberStringValue1 += inputs[i] 
            }   
            setFirstNumber(numberStringValue1)  
        }else if(firstNumber != 0 && firstNumber){
            for(let i =0; i < inputs.length; i++){
                numberStringValue2 += inputs[i]
            }
            setSecondNumber(numberStringValue2)
            }
    }
    useEffect(()=>{
        if(calculated){
            setInputs([0])
            // setTempDisplay(inputsDisplay)
        }
    },[calculated])
    useEffect(()=>{
        console.log("First one"+firstNumber)
    },[firstNumber])
    useEffect(()=>{
        computation()
    },[secondNumber])
    
    const computation=()=>{
        let resultComputation
        switch(oper){
            case "/":
                resultComputation = Number(firstNumber) / Number(secondNumber)
                setResult(resultComputation)
                break;
            case "X":
                resultComputation = Number(firstNumber) * Number(secondNumber)
                setResult(resultComputation)
                break;
            case "-":
                resultComputation = Number(firstNumber) - Number(secondNumber)
                setResult(resultComputation)
                break;
            case "+":
                resultComputation = Number(firstNumber) + Number(secondNumber)
                setResult(resultComputation)
                break;
        }
    }

    
    const setInputValue =(value)=>{
        if(value == "AC"){
            setInputs([0])
            setTempDisplay([0])
            setFirstNumber(0)
            setInputsDisplay([0])
            return
        }
        if(calculated == true){
            setFirstNumber(0) //Important. Helps consistent calculation. May be edited to 
            //allow continous calculation
        }
        if(inputs[0]==0){
            const newInputs = inputs.shift();
            setInputs(newInputs)
            setTempDisplay(newInputs)
        }
        if(inputsDisplay[0]==0){
            const newInputs = inputsDisplay.shift();
            setInputsDisplay(newInputs)
            setTempDisplay(newInputs)
        }
        
        setCalculated(false)

        const inputValue = value
        switch(inputValue){
            case "=":
                joinInputs("=")
                break;
            case "/":
                joinInputs("/")
                break;
            case "X":
                joinInputs("X")
                break;
            case "-":
                joinInputs("-")
                break;
            case "+":
                joinInputs("+")
                break;
           
        }
        
        if(value !="/" || value !="X" || value !="-" || value !="+" || value !="="){
            setInputs([...inputs, value])
        }
        if(value =="/" || value =="X" || value =="-" || value =="+" || value =="="){
            setInputs([0])
            
        }
        if(value !="="){
            setInputsDisplay([...inputsDisplay, value])
            setTempDisplay([...inputsDisplay, value])
        }
    }
   
    
  return (
    <View style={Styles.container}>
        <View style={Styles.displayContainer}>
            <Text style={Styles.result}>{result}</Text>
            <View style={Styles.calculation}>   
                {inputsDisplay[0]!=0 && inputsDisplay.map((input, i) =>(
                <Text style={Styles.input} key={i}>
                    {input}
                </Text>)
                )}
                </View>
                <View style={Styles.calculation2}>   
                {inputsDisplay[0]==0 && tempDisplay.map((input, i) =>(
                <Text style={Styles.input} key={i}>
                    {input}
                </Text>)
                )}
            </View>
        </View>
        <View style={Styles.buttonsContainer}>
            <View style={Styles.buttonsRow}>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("AC")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>AC</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("+/-")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>+/-</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("%")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>%</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("/")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>/</Text>
                </View>
                </TouchableNativeFeedback>
            </View>

            <View style={Styles.buttonsRow}>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("7")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>7</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("8")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>8</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("9")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>9</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("X")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>X</Text>
                </View>
                </TouchableNativeFeedback>
            </View>

            <View style={Styles.buttonsRow}>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("4")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>4</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("5")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>5</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("6")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>6</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("-")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>-</Text>
                </View>
                </TouchableNativeFeedback>
            </View>

            <View style={Styles.buttonsRow}>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("1")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>1</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("2")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>2</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("3")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>3</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("+")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>+</Text>
                </View>
                </TouchableNativeFeedback>
            </View>

            <View style={Styles.buttonsRow}>
                <TouchableNativeFeedback
                onPress={()=>setInputValue(0)}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>0</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue(".")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>.</Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback>
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}></Text>
                </View>
                </TouchableWithoutFeedback>
                <TouchableNativeFeedback
                onPress={()=>setInputValue("=")}
                >
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>=</Text>
                </View>
                </TouchableNativeFeedback>
            </View>
            
        </View>
    </View>
  )
}
