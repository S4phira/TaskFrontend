import React, { Component } from 'react'; 

function IconSexDisplay(bool) {
  if(bool === "true")  {
    return <img src="./female_icon.png"></img>
  }
  else return <img src = "./male_icon.png"></img>
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clientsList:[]
    };
  
  }

  componentDidMount() {
    fetch('./clients.json')
      .then(response => response.json())
      .then((res) => {
        this.setState(
          {clientsList : res.data})
      })
  }
  
  render() {

    return this.state.clientsList.map(clientsList => {
      return (
        <div className='listOfPeopleContainer'>
          <div className = "containerPeople" key={clientsList._id}> 
            <div className = "image-container">
              <img src={clientsList.avatar}></img>
            </div>

            <div className = "info-container">
              <h2>{clientsList.name}, <span className = "ageParagraph">{clientsList.age}</span> lat <span className = "sexIcon">{IconSexDisplay(JSON.stringify(clientsList.sex))}</span></h2>
              <p>{clientsList.address.city}, {clientsList.address.street} {clientsList.address.houseNumber}</p>
              <p className = 'emailParagraph'>{clientsList.email} </p>
            </div>
        
            </div>
          </div>
        )
      
    })
    
  }
}

export default App;