const ComponentD =()=>{
    return (
    <h2> Component D</h2>
    )
  }
    
  
  const ComponentC = ()=>{
    return(
      <h2>Component C</h2>
    )
  }
  const ComponentB = ({parentf,parentWithoutClick})=>{
      const [name ,setName] = React.useState('')
    const handleClick = ()=>{
      parentf('child')
    
    }
    React.useEffect(()=>{
      parentWithoutClick(name)
    })
    return(
      <>
      <h1>Component B </h1>
         <input type="text" value={name} />
      <button onClick={handleClick}>Click me</button>
       
        </>
    )
  }
  const ComponentA = (props)=>{
    return(
      <>
      <h1>Component A</h1>
      <p>{props.name}</p>
        </>
    )
  }
  
  class App extends React.Component{
    
    constructor(){
      super();
      this.state={
        name:'sonam',
        Text:'',
        childText:''
      }
      
      this.printValue = this.printValue.bind(this);
      this.dataFromChild = this.dataFromChild.bind(this)
    }
       printValue(data){
        this.setState({text:data})
      }
    dataFromChild(childName){
      this.setState({childText:ChildName})
    }
    
    
    render(
  
    
    ){
  
   
      return (
        
        <>
         
        <h1>hello</h1>
        <div className="container">
          <div className = "componentA">
            <p>{this.state.text}</p>
            <ComponentA name={this.state.name}/>
            <p>{childText}</p>
          </div>
           <div className = "componentB">
             <ComponentB parentf={this.printValue} parentWithoutClick={this.dataFromChild}/>
          </div>
          
          </div>
          </>
      )
    }
  }
  
  ReactDOM.render(
     <App/>,
   document.getElementById('root')
  
  );