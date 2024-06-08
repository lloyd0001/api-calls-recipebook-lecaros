import { useState } from 'react';
import DataForm from '../web-design/dataForm';
import '../web-design/dataForm.css'

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
     <DataForm/>
     </>
    );
  }
  
  export default App;