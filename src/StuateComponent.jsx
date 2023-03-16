import { useContext } from "react"
import { TextContext } from "./InputComponent"


const StuateComponent = () => {
    const situate = useContext(TextContext)
    const situateChange =()=>{
        if(situate){
          return <div> olumlu</div>
        }else{
          return <div>olumsuz</div>
        }
        }
  return (
    <div>
         <h2>Durum Değişimi</h2>
      <h1> {situateChange()}</h1> 
    </div>
  )
}

export default StuateComponent