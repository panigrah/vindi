'use client'

import * as options from '@/selectOptions'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Controller, FormProvider, useController, useForm, useFormContext } from 'react-hook-form'
import { ListItem, Popup, BlockTitle, Page, List, Navbar, Block, Button, Actions, ActionsGroup, ActionsLabel, ActionsButton, ListInput, ListButton } from 'konsta/react'
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

const schema = z.object({
  wine: z.object({ id: z.string() }),
  clarity: z.object({ name: z.string() }),
  appearanceNotes: z.string(),
  aromaDescription: z.string(),
  flavorCharacteristics: z.string(),
  otherObservations: z.string()
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

const SelectInput = ({ name, options, label }: { name: string, label?: string, options: { name: string }[] }) => {
  const { field, fieldState, formState } = useController({name: name})
  return (
    <ListInput
      label={label}
      type="select"
      dropdown
      placeholder="please choose"
      defaultValue={field.value}
      onChange={(e:any) => field.onChange(e.target.value)}
    >
      <option value={'n/a'}>N/A</option>
      {options.map( o => (
        <option key={o.name} value={o.name}>
          {o.name}
        </option>
      ))}
    </ListInput>
  )
}

export default function NewTastingRoute() {
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
    }
  })
  const user = useAtomValue(userAtom)
  const router = useRouter()
  const mutation = useMutationAddTasting()

  const onSubmit = (data:any, e:any) => {
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
      <Navbar left={<Link href="/tasting"><ChevronLeftIcon className="w-5 h-5" /></Link>} title="New Tasting" right={<span>{user.username}</span>} />
      <FormProvider {...methods}>
        <SelectWine name="wine" />
        <BlockTitle>Appearance</BlockTitle>
        <List strongIos insetIos>
          <SelectInput name="clarity" options={options.clarityOptions} label="Clarity" />
          <SelectInput name="appearanceIntensity" options={options.appearanceIntensityOptions} label="Intensity" />
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
          <SelectInput name="noseIntensity" options={options.noseIntesityOptions} label="Intensity" />
          <ListInput 
            label="Aroma"
            type="textarea"
            placeholder="Aroma description"
            inputClassName="!h-20 resize-none"
            {...methods.register('aromaDescription')}
          />
          <SelectInput name="development" options={options.developmentOptions} label="Development" />
        </List>
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
        <Block inset strong>
          <AromaInput />
        </Block>
      </FormProvider>
    </Page>
  )
}