'use client'

import * as options from '@/selectOptions'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Controller, FormProvider, useController, useForm, useFormContext } from 'react-hook-form'
import { ListItem, BlockTitle, Page, List, Navbar, Block, Actions, ActionsGroup, ActionsLabel, ActionsButton, ListInput, ListButton, Notification } from 'konsta/react'
import { useEffect, useState } from 'react'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/app/atoms'
import { useRouter } from 'next/navigation'
import { useMutationAddTasting } from '../queries'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import AromaInput from './aroma-input'
import { SelectInput } from './SelectInput'
import { SelectWine } from './SelectWine'
import { HelpWizard } from './help-wizard'

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

  useEffect(() => {
    if(!user?.username) {
      router.push('/user/new?redirect=/tasting/new')
    }
  }, [user, router])

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
            name="clarity" 
            options={options.clarityOptions}
            label="Clarity" 
            openHelp={setPanelTopic}
          />
          <SelectInput 
            openHelp={setPanelTopic}
            name="color" 
            options={options.colorOptions} 
            label="Color" 
          />
          <SelectInput 
            openHelp={setPanelTopic}
            name="appearanceIntensity" 
            options={options.appearanceIntensityOptions} 
            label="Intensity" 
          />
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
          <SelectInput 
            openHelp={setPanelTopic}
            name="condition"
            options={options.conditionOptions} 
            label="Condition" 
          />
          <SelectInput 
            name="noseIntensity" 
            openHelp={setPanelTopic}
            options={options.noseIntensityOptions} 
            label="Intensity" 
          />
          <ListInput 
            label="Aroma"
            type="textarea"
            placeholder="Aroma description"
            inputClassName="!h-20 resize-none"
            {...methods.register('aromaDescription')}
          />
          <SelectInput
            openHelp={setPanelTopic}
            name="development" 
            options={options.developmentOptions} 
            label="Development" 
          />
        </List>
        <AromaInput 
          openHelp={setPanelTopic}
          name="aromaDescriptors" 
          label="Aromas" 
        />
        <BlockTitle>Palete</BlockTitle>
        <List strongIos insetIos >
          <SelectInput 
            openHelp={setPanelTopic}
            name="sweetness" 
            options={options.sweetnessOptions} 
            label="Sweetness" 
          />
          <SelectInput 
            openHelp={setPanelTopic}
            name="acidity" options={options.acidityOptions} label="Acidity" />
          <SelectInput 
            openHelp={setPanelTopic}
            name="tannin" options={options.tanninOptions} label="Tannin" />
          <SelectInput 
            openHelp={setPanelTopic}
            name="alcohol" options={options.alcoholOptions} label="Alcohol" />
          <SelectInput 
            openHelp={setPanelTopic}
            name="body" options={options.bodyOptions} label="Body" />
          <SelectInput 
            openHelp={setPanelTopic}
            name="flavorIntensity" options={options.flavorIntensityOptions} label="Flavor Intensity" />
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
          <SelectInput 
            openHelp={setPanelTopic}
            name="finish" options={options.finishOptions} label="Finish" />
        </List>

        <BlockTitle>Conclusions</BlockTitle>
        <List strongIos insetIos >
          <SelectInput name="quality" options={options.qualityLevelOptions} label="Quality Level" />
          <SelectInput 
            openHelp={setPanelTopic}
            name="readiness" options={options.readinessOptions} label="Readiness" 
          />
          <ListButton onClick={methods.handleSubmit(onSubmit, onError)}>Save</ListButton>
        </List>
      </FormProvider>
      <HelpWizard 
        topic={panelTopic}
        update={ (topic:string, value:any) => setField(topic, value)}
        onClose={() => setPanelTopic(undefined)}
      />
    </Page>
  )
}