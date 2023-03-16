
import { createContext, useState } from 'react';

import StuateComponent from './StuateComponent';

export const TextContext = createContext();
function InputComponent() {
  const [situate, setSituate] = useState(false);

const handleChange = ()=>{
  setSituate(!situate);
}




  return (
    <TextContext.Provider value={situate}>
    <div >
       <input type="checkbox" checked={situate} onChange={handleChange}  />
     
     <StuateComponent/>

    </div>
    </TextContext.Provider>
  );
}

export default InputComponent;
