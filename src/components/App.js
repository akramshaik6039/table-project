import React from "react";
class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api:[],
      keys:[]
    }
  }
  componentDidMount(){
    let api=fetch("https://jsonplaceholder.typicode.com/users")
    api.then((x)=>x.json()).then((y)=>{
      this.setState({api:y,keys:y[0]})
    })
    
  }
  render(){
    
    return(
      <>
      
      <div id='maindiv'>
      
        <form>
        <h1 style={{position:'relative',left:"260px"}}>DATA TABLE</h1>
          <table id='table' border={'solid  '}>
            <thead>
            <tr id='tr'></tr>
            </thead>
          </table>
        </form>
        
        </div>
        { Object.keys(this.state.keys).slice(0,4).map((x)=>{
          document.getElementById('tr').innerHTML+=`
          <th id='td'>${x}</td>`
          
        })}
        {this.state.api.slice(0,4).map((x)=>{
          document.getElementById('table').innerHTML+=`
          <tbody>
          <tr>
          <td class='body'>${x.id}</td>
          <td class='body'>${x.name}</td>
          <td class='body'>${x.username}</td>
          <td class='body'>${x.email}</td>
          </tr>
          </tbody>`
        })}
      </>
    
    )
  }
}
export default App;