import Form from './components/Form'
import './App.css'
import Formik from './components/Formik'
import PForm from './components/PForm'
function App() {
  return (
   <>
   <div style={{border:"solid 1px black", padding:"10px"}}>
   <Form/>
   </div>
   <div style={{border:"solid 1px black", padding:"10px"}}>
   <Formik/>
   </div>
   <div style={{border:"solid 1px black", padding:"10px"}}>
   <PForm/>
   </div>
   </>
  )
}

export default App
