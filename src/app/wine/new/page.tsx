'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { FormProvider, useForm } from 'react-hook-form'
import { Panel, Link as ConstaLink, ListItem, Popup, BlockTitle, Page, List, Navbar, Block, Button, Actions, ActionsGroup, ActionsLabel, ActionsButton, ListInput, ListButton, Notification } from 'konsta/react'
import { useState } from 'react'
import { useMutationAddWine, useQueryWines } from '@/app/wine/queries'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/app/atoms'
import { useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/solid'

const schema = z.object({
  name: z.string(),
  appelation: z.string(),
  description: z.string(),
  variety: z.string(),
  vintage: z.number(),
  media: z.array(z.string()).optional()
})

type WineInputType = z.infer<typeof schema>
const resolver = zodResolver(schema)

export default function NewWinePage() {
  const [panelTopic, setPanelTopic] = useState<string>()
  const [openNotification, setNotification] = useState(false)
  const methods = useForm<WineInputType>({
    defaultValues: {
      name: '',
      appelation: '',
      description: '',
      vintage: 1900,
      media: [],
      variety: ''
    }
  })

  const user = useAtomValue(userAtom)
  const router = useRouter()
  const mutation = useMutationAddWine()

  const onSubmit = (data:any, e:any) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        router.replace(`/wine/${data.id}`)
      },
      onError: (error) => {
        console.log('cannot add wine', error)
      }
    })
  }

  const onError = (errors:any, e:any) => console.log(errors, e);

  if(!user?.username) {
    router.push('/user/new?redirect=/wine/new')
    return <Page><Block>Checking if you are logged in</Block></Page>
  }

  return (
    <Page>
      <Navbar 
        left={<Link href="/wine"><ChevronLeftIcon className="w-5 h-5" /></Link>} 
        title="New Wine" 
        right={<span>{user.username}</span>} 
      />
      <Notification
        opened={openNotification}
        title={'Please update'}
        onClick={() => setNotification(false)}
        subtitle={'Please select a wine to proceed'}
      />
      <FormProvider {...methods}>
        <Block strong inset>
          <div className='flex gap-2'>
          <img src="/cline-ancient-vines-zinfandel.png" alt='wine-photo' className='border w-32 aspect-square object-cover rounded-md' />
          <div className='border rounded-md w-32 aspect-square flex'>
            <PlusIcon className='w-8 h-8 m-auto'/>
          </div>
          </div>
        </Block>
        <BlockTitle>Details</BlockTitle>
        <List strongIos insetIos>
          <ListInput 
            label="Name"
            type="text"
            placeholder="Name of Wine"
            {...methods.register('name')}
          />
          <ListInput 
            label="Appelation"
            type="text"
            placeholder="Where was it grown"
            {...methods.register('appelation')}
          />
          <ListInput 
            label="Variety"
            type="text"
            placeholder="Wine Variety"
            {...methods.register('variety')}
          />
          <ListInput 
            label="Vintage"
            type="text"
            placeholder="Year"
            {...methods.register('vintage')}
          />
          <ListInput 
            label="Description"
            type="textarea"
            placeholder="Other notes"
            inputClassName="!h-20 resize-none"
            {...methods.register('description')}
          />
          <ListButton onClick={methods.handleSubmit(onSubmit, onError)}>Save</ListButton>
        </List>
      </FormProvider>
      <Panel
        side="left"
        opened={!!panelTopic}
        onBackdropClick={() => setPanelTopic(undefined)}
       
      >
        <Page>
          <Navbar
            title={panelTopic}
            right={
              <ConstaLink navbar onClick={() => setPanelTopic(undefined)}>
                Close
              </ConstaLink>
            } />
          <Block>
          </Block>
        </Page>

      </Panel>
    </Page>
  )
}