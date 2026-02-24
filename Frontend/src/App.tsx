import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/Shareicon'
import { Card } from './components/ui/Card'
import { NotebookIcon } from './icons/Notebookicon'
import { CreateContentModel } from './components/modal/CreateContentModal'
import { useState } from 'react'
function App() {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='p-4'>
      <CreateContentModel open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }} />
      <div className='flex justify-end p-4'>
        <div className='pr-2'>
          <Button startIcon={<ShareIcon size='md' />} variant="primary" size="md" text="Share Brain" onClick={() => { }}></Button>
        </div>
        <div>
          <Button startIcon={<PlusIcon size='md' />} variant="secondary" size="md" text="Add content" onClick={() => {setModalOpen(true)}}></Button>
        </div>
      </div>
      <div className='flex'>
      <Card titleIcon={<NotebookIcon size={'lg'} />} title={"First video"} type={"youtube"} link="https://www.youtube.com/watch?v=E8n9bcOqP2A"></Card>
      <Card titleIcon={<NotebookIcon size={'lg'} />} title={"first tweet"} type={"x"} link={"https://x.com/bymichael/status/2023290875065896995?s=20"}></Card>
      <Card titleIcon={<NotebookIcon size={'lg'} />} title={"first tweet"} type={"x"} link={"https://x.com/bymichael/status/2023290875065896995?s=20"}></Card>

      </div>
    </div>
  )
}

export default App
