import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button'
import { useState } from 'react';

function App(){
  let items = ["This", "is", "A", "Server", "Test"];

  const [alertVisible, setAlertVisibility] = useState(false);
  
  const handleSelectItem = (item:string)=> {
    console.log(item);
  }
  
  return (
  <div>
    <ListGroup items={items} heading='Random AHH List' onSelectItem={handleSelectItem}></ListGroup>
    {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>BITCH</Alert>}
    <Button onClick={()=> setAlertVisibility(true)}>wassupp GAMERSS!! </Button>
  </div>);
}
 
export default App