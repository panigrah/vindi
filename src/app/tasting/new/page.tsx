'use client'

import * as options from '@/selectOptions'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Controller, FormProvider, useController, useForm, useFormContext } from 'react-hook-form'
import { Panel, Link as ConstaLink, ListItem, Popup, BlockTitle, Page, List, Navbar, Block, Button, Actions, ActionsGroup, ActionsLabel, ActionsButton, ListInput, ListButton, Notification } from 'konsta/react'
import { useState } from 'react'
import { useQueryWines } from '@/app/wine/queries'
import { WineItem } from '@/app/wine/WineItem'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/app/atoms'
import { useRouter } from 'next/navigation'
import { useMutationAddTasting } from '../queries'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import AromaInput from './aroma-input'
import Clarity from '../clarity'
import { SelectInput } from './SelectInput'

const schema = z.object({
  wine: z.object({ id: z.string() }),
  clarity: z.object({ name: z.string() }),
  appearanceNotes: z.string(),
  aromaDescription: z.string(),
  flavorCharacteristics: z.string(),
  otherObservations: z.string(),
  acidity: z.string(),
})

type FormData = z.infer<typeof schema>
const resolver = zodResolver(schema)

const SelectWine = ({ name }: { name: string }) => {
  const { field, fieldState, formState } = useController({name})
  const [open, setOpen] = useState(false)
  const { data: wines, isLoading, error } = useQueryWines()

  const select = (w:any) => {
    field.onChange(w)
    setOpen(false)
  }

  return(
    <>
    <List inset outline strong>
      {field.value?
        <WineItem wine={field.value} onSelect={() => setOpen(true)} />
      :
        <ListItem 
          link
          onClick={() => setOpen(true)}
          title="Select a wine"
        />
      }

    </List>
    <Popup 
      opened={open}
      onBackdropClick={() => setOpen(false)}
    >
      <Page>
        <Navbar 
          title="Select a wine"
          right={
            <Button navbar onClick={() => setOpen(false)}>
              Close
            </Button>
          }
        />
        <List strongIos insetIos>
          <ListInput
            type="text"
            clearButton
            placeholder="search for a wine"
          />
        </List>
        <List strong inset outline dividers>
          { wines?.map( w => (
            <WineItem 
              key={w.id}
              wine={w}
              onSelect={select}
            />
          ))}
        </List>
      </Page>
    </Popup>
    </>
  )
}

const InputWizard = ({ name, title, options }: { name: string, title: string, options: {name: string}[] }) => {
  const { field } = useController({name})
  const [open, setOpen] = useState(false)
  return(
    <>
      <ListItem header={title} title={field.value} link onClick={() => setOpen(true)} />
      <Actions
        opened={open}
        onBackdropClick={() => setOpen(false)}
      >
        <ActionsGroup>
          <ActionsLabel>{title}</ActionsLabel>
          { options.map( option => {
            return (
              <ActionsButton 
                key={option.name} 
                onClick={() => {
                  field.onChange(option)
                  setOpen(false)
                }}
              >
                {option.name}
              </ActionsButton>
            )
          })}
        </ActionsGroup>
      </Actions>
    </>
  )
}

export default function NewTastingRoute() {
  const [panelTopic, setPanelTopic] = useState<string>()
  const [openNotification, setNotification] = useState(false)
  const methods = useForm({
    defaultValues: {
      acidity: "n/a",
      alcohol: "n/a",
      body: "n/a",
      clarity: "n/a",
      color: "n/a",
      condition: "n/a",
      development: "n/a",
      finish: "n/a",
      flavorIntensity: "n/a",
      appearanceIntensity: "n/a",
      noseIntensity: "n/a",
      quality: "n/a",
      readiness: "n/a",
      sweetness: "n/a",
      tannin: "n/a",
      appearanceNotes: "",
      aromaDescription: "",
      flavorCharacteristics: "",
      otherCharacteristics: "",
      aromaDescriptors: []
    }
  })
  const user = useAtomValue(userAtom)
  const router = useRouter()
  const mutation = useMutationAddTasting()

  const setField = (fieldName: any, value: string) => {
    methods.setValue(fieldName, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true})
    setPanelTopic(undefined)
  }

  const onSubmit = (data:any, e:any) => {
    if( !data.wine?.id ) {
      setNotification(true)
      return;
    }
    mutation.mutate(data, {
      onSuccess: (data) => {
        router.replace(`/tasting/${data.id}`)
      },
      onError: (error) => {
        console.log('cannot add tasting', error)
      }
    })
  }

  const onError = (errors:any, e:any) => console.log(errors, e);

  if(!user?.username) {
    router.push('/user/new?redirect=/tasting/new')
    return <Page><Block>Checking if you are logged in</Block></Page>
  }

  return (
    <Page>
      <Navbar 
        left={<Link href="/tasting"><ChevronLeftIcon className="w-5 h-5" /></Link>} 
        title="New Tasting" 
        right={<span>{user.username}</span>} 
      />
      <Notification
        opened={openNotification}
        title={'Please update'}
        onClick={() => setNotification(false)}
        subtitle={'Please select a wine to proceed'}
      />
      <FormProvider {...methods}>
        <SelectWine name="wine" />
        <BlockTitle>Appearance</BlockTitle>
        <List strongIos insetIos>
          <SelectInput 
            {...methods.register('clarity')}
            name="clarity" 
            options={options.clarityOptions}
            label="Clarity" 
            openHelp={setPanelTopic}
          />
          <SelectInput 
            openHelp={setPanelTopic}
            name="appearanceIntensity" 
            options={options.appearanceIntensityOptions} 
            label="Intensity" 
          />
          <SelectInput name="color" options={options.colorOptions} label="Color" />
          <ListInput 
            label="Appearance Notes"
            type="textarea"
            placeholder="Other notes on appearance"
            inputClassName="!h-20 resize-none"
            {...methods.register('appearanceNotes')}
          />
        </List>

        <BlockTitle>Nose</BlockTitle>
        <List strongIos insetIos >
          <SelectInput name="condition" options={options.conditionOptions} label="Condition" />
          <SelectInput name="noseIntensity" options={options.noseIntensityOptions} label="Intensity" />
          <ListInput 
            label="Aroma"
            type="textarea"
            placeholder="Aroma description"
            inputClassName="!h-20 resize-none"
            {...methods.register('aromaDescription')}
          />
          <SelectInput name="development" options={options.developmentOptions} label="Development" />
        </List>
        <AromaInput name="aromaDescriptors" label="Aromas" />
        <BlockTitle>Palete</BlockTitle>
        <List strongIos insetIos >
          <SelectInput name="sweetness" options={options.sweetnessOptions} label="Sweetness" />
          <SelectInput name="acidity" options={options.acidityOptions} label="Acidity" />
          <SelectInput name="tannin" options={options.tanninOptions} label="Tannin" />
          <SelectInput name="alcohol" options={options.alcoholOptions} label="Alcohol" />
          <SelectInput name="body" options={options.bodyOptions} label="Body" />
          <SelectInput name="flavorIntensity" options={options.flavorIntensityOptions} label="Flavor Intensity" />
          <ListInput 
            label="Flavor Characteristics"
            type="textarea"
            placeholder="Additional Flavor Characteristics"
            {...methods.register('flavorCharacteristics')}
          />
          <ListInput 
            label="Other Observations"
            type="textarea"
            placeholder="Any Other Characteristics"
            inputClassName="!h-20 resize-none"
            {...methods.register('otherCharacteristics')}
          />
          <SelectInput name="finish" options={options.finishOptions} label="Finish" />
        </List>

        <BlockTitle>Conclusions</BlockTitle>
        <List strongIos insetIos >
          <SelectInput name="quality" options={options.qualityLevelOptions} label="Quality Level" />
          <SelectInput name="readiness" options={options.readinessOptions} label="Readiness" />
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
            <Clarity onChange={(v) => setField(panelTopic, v)} />
          </Block>
        </Page>

      </Panel>
    </Page>
  )
}