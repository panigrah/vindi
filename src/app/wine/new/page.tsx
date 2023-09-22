'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Panel, Link as ConstaLink, ListItem, Popup, BlockTitle, Page, List, Navbar, Block, Button, Actions, ActionsGroup, ActionsLabel, ActionsButton, ListInput, ListButton, Notification } from 'konsta/react'
import { useState } from 'react'
import { useMutationAddWine, useQueryWines } from '@/app/wine/queries'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/app/atoms'
import { useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/solid'
import ImageUpload from '../image-upload'
import { Loader } from '@/app/tasting/new/Loader'

const schema = z.object({
  name: z.string(),
  appelation: z.string(),
  description: z.string(),
  variety: z.string(),
  vintage: z.coerce.number(),
  alcohol: z.coerce.number(),
  images: z.array(z.object({
    public_id: z.string(),
    url: z.string(),
    format: z.string(),
    width: z.number(),
    height: z.number(),
    original_filename: z.string(),
    asset_id: z.string(),
    bytes: z.number()
  })).optional()
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
      images: [],
      variety: '',
      alcohol: 13,
    }
  })

  const user = useAtomValue(userAtom)
  const router = useRouter()
  const mutation = useMutationAddWine()

  const onSubmit = (data:any, e:any) => {
    const payload = schema.parse(data)
    mutation.mutate(payload as any, {
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
    return <Loader message={'Logging you in'} />
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
          <Controller
            control={methods.control}
            name='images'
            render={({field, fieldState}) => {
              return <ImageUpload images={field.value} onChange={field.onChange} />
            }}
          />
        </Block>
        <BlockTitle>Details</BlockTitle>
        <List strongIos insetIos>
          <Controller
            control={methods.control}
            name="name"
            render={({field, fieldState})=> (
              <ListInput 
                label="Name"
                type="text"
                placeholder="Name of Wine"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="appelation"
            render={({field, fieldState})=> (
              <ListInput 
                label="Appelation"
                type="text"
                placeholder="Where was it grown"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="variety"
            render={({field, fieldState})=> (
              <ListInput 
                label="Variety"
                type="text"
                placeholder="Wine Variety"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="vintage"
            render={({field, fieldState})=> (
              <ListInput 
                label="Vintage"
                type="number"
                placeholder="Year Produced"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="alcohol"
            render={({field, fieldState})=> (
              <ListInput 
                label="Alcohol %"
                type="number"
                placeholder="13%"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="description"
            render={({field, fieldState})=> (
              <ListInput 
              label="Description"
                type="textarea"
                placeholder="Other notes"
                inputClassName="!h-20 resize-none"
                value={field.value}
                onChange={field.onChange}
              />
            )}
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