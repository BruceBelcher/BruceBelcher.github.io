import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    calcStr: ""   //need it to be string not mixing types
  };
  
  makeCalcStr = (calc) => {
    /* 
    WHy doenst thiw work?
    this.setState({calcStr: this.state.calcStr+calc})
    */ 
    console.log('calc entry = ', calc)  //look at key returned. Parse calc string for error here? 
    console.log('calcSrt on entry = ', this.state.calcStr, 'length:')
    //if result is 0 then clear this prior to next calculate or its a leading 0
    if (this.state.calcStr==="0") {console.log('reset calcStr'); this.state.calcStr = ""}
    
    switch (calc) {
      case "=":   this.calculteIt(); break
      case "DEL": this.deleteIt(); break
      case "CLR": this.clearIt(); break
      case  "0":  //let errCheckIt deal with '0's
      case  "+":  //if operator pressed check not multiple operators, latest is used
      case  "*":
      case  "/":
      case  "-":  
      case  ".":  this.errCheckIt(calc); break
      default  :  if (this.state.calcStr === "ERR"){this.state.calcStr = ""} //setState doesnt wirk so fudge it!
                     this.setState({calcStr: this.state.calcStr+calc}) //its a number so add it
    }//end switch
    console.log('calcStr on exit: ', this.state.calcStr) //print string
  } //end makeCalcStr
  deleteIt = () => {
    this.setState({calcStr: ""})
  }
  clearIt = () => {
    /*remove last key entered*/
    this.setState({calcStr: this.state.calcStr.slice(0, -1)})
  }

  errCheckIt = (calc) => {
    /*control multiple operands and leading '0's*/
    console.log('errCheckIt')
    let secToLast=""
    let locCalcStr = this.state.calcStr+calc //can't seem to manipulate calcStr so use a local var
    if (locCalcStr.length >= 2 ) {secToLast=locCalcStr[locCalcStr.length-2]}
    console.log ('localCalcStr: ', locCalcStr, 'length: ', locCalcStr.length, 'secToLast: ', secToLast)
    
    //1st key press so can only be '-' or "." or '0' if followed by '.' otherwise clear the string
    if (locCalcStr.length === 1 && locCalcStr === "-") //its '-' so write it
      {console.log('hello 1'); (this.setState({calcStr: locCalcStr}));}
    else if (locCalcStr.length === 1 && locCalcStr === ".") //its '.' so write it and precede with 0
      {console.log('hello 2'); locCalcStr="0"+calc; this.setState({calcStr: locCalcStr});}
    else if (locCalcStr.length === 1 && locCalcStr === "0") //its '0' so write it and a .
      {console.log('hello - its 0'); locCalcStr=locCalcStr+"."; this.setState({calcStr: locCalcStr});} 
    else if (locCalcStr.length === 1) //it's an op so slice it
      {console.log('hello 3'); locCalcStr = locCalcStr.slice(0, -1); this.setState({calcStr: locCalcStr})} 
    //end of 1st key press logic

    //calc is an op or 0 so if previous key is an op slice it and write calc
    
    if (secToLast === "0" && calc ==='.') // its a '.' following a '0' so write it
      {console.log('hello its a . following a 0'); this.setState({calcStr: locCalcStr})}
    else if (secToLast === "0" && calc ==='0') // its a repeated '0' so slice it
      {console.log('hello its a rep 0'); locCalcStr=locCalcStr.slice(0, -1); this.setState({calcStr: locCalcStr})}
    else if (secToLast === "0" && calc ==='0') // its a repeated '0' so slice it
    {console.log('hello its a rep 0'); locCalcStr=locCalcStr.slice(0, -1); this.setState({calcStr: locCalcStr})} if (secToLast === "." && calc ==='.') // its a repeated '.' so slice it
      {console.log('hello 4'); locCalcStr=locCalcStr.slice(0, -1); this.setState({calcStr: locCalcStr})}
    else if (calc === '.') //its a '.' following an op so write it - can i add a lead 0
      {console.log('hello 5'); /*locCalcStr=locCalcStr.splice(-1,0,"0");*/ this.setState({calcStr: locCalcStr});} 
    else if (secToLast === "-"|| secToLast === "+" || secToLast === "/" || secToLast === "*")
      {console.log('hello 6'); locCalcStr=locCalcStr.slice(0, -1); this.setState({calcStr: locCalcStr});}
    else {console.log('hello 7'); this.setState({calcStr: locCalcStr})} //its legal so write it

    console.log('locCalStr on exit: ', locCalcStr )
  }
  calculteIt = () => {
    let result = ""
    console.log('calcit: ', this.state.calcStr)
    try {result = eval(this.state.calcStr || "")}
    catch (err) { console.log('error'); result = "ERR"}
    this.setState({calcStr: result.toString()})
  }
 
  render() {
    const buttonArray = ["(", ")", ".", "/",
                    "7", "8", "9", "*",
                    "4", "5", "6", "+",
                    "1", "2", "3", "-",
                    "0", "DEL", "CLR", "="]
    return (
        <div className="calculatorBox">
              <KeyBox num={buttonArray} calc={this.makeCalcStr}/>
            <div id="outputBox">{this.state.calcStr}</div>
        </div>
    );
  }
}

const KeyBox = props => (
  <div className = "numberBox">
  {
    props.num.map(buttonVal => {
      return <button name={buttonVal} onClick={event => props.calc(event.target.name)}>{buttonVal}</button>
    })
  }

  </div>
)

export default App;
