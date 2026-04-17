import { Button } from '../../components/ui/Button'
import { PlusIcon } from '../../icons/Plusicon'
import { ShareIcon } from '../../icons/Shareicon'
import { Card } from '../../components/ui/Card'
import { NotebookIcon } from '../../icons/Notebookicon'
import { useContent } from '../../hooks/useContent'
import { CreateContentModel } from '../../components/modal/CreateContentModal'
import { SearchBar } from '../../components/SearchBar'
import { useState } from 'react'
export const MainContent = () => {
  const contents = useContent();
  const [modalOpen, setModalOpen] = useState(false);
  return <>
    <div className='w-full m p-4  min-h-screen bg-gray-100'>
      <CreateContentModel open={modalOpen} onClose={() => {
        setModalOpen(false)
      }} />
      <div className={` ${modalOpen ? 'pointer-events-none': ''} flex items-center justify-between w-full`}>
      <div className='grow flex justify-center'>
        <div className='ml-18'>
        <SearchBar modalStatus={modalOpen}></SearchBar>
        </div>
      </div>
        <div className='flex p-4'>
        <div className='pr-2'>
          <Button startIcon={<ShareIcon size='md' />} variant="primary" size="md" text="Share Brain" onClick={() => { }}></Button>
        </div>
        <div>
          <Button startIcon={<PlusIcon size='md' />} variant="secondary" size="md" text="Add content" onClick={() => {setModalOpen(true)}}></Button>
        </div>
      </div>

      </div>
      <div className='flex ml-8 mt-6'>
      {contents.map(({type, link, title}) =>
      <Card titleIcon={<NotebookIcon size={'lg'}/>} type={type} link={link} title={title}>
      </Card>
      )
      }
        <Card titleIcon={<NotebookIcon size={'lg'} />} title={"First video"} type={"youtube"} link="https://www.youtube.com/watch?v=E8n9bcOqP2A"></Card>
                                                                                                  {/* https://youtu.be/usvVGXFIpTM?si=7LGtCidNt2d3GgZM */}
                                                                                                  {/* https://www.youtube.com/watch?v=CecBiiZrWk0&list=RDk-UQz3f7ZPI&index=6 */}
        <Card titleIcon={<NotebookIcon size={'lg'} />} title={"first tweet"} type={"twitter"} link={"https://x.com/bymichael/status/2023290875065896995?s=20"}></Card>
      </div>
    </div>
  </>
}