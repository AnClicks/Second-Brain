import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plusicon'

function App() {


  return (
    <>
    <Button startIcon={<PlusIcon size='md'/>}variant="primary" size="sm" text="Share" onClick={()=>{}}></Button>
    <Button variant="secondary" size="md" text="Add content" onClick={()=>{}}></Button>
    <Button variant="secondary" size="lg" text="Add content" onClick={()=>{}}></Button>
    
    </>
  )
}

export default App
