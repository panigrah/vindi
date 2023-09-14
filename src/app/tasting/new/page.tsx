'use client'

import * as options from '@/selectOptions'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Controller, FormProvider, useController, useForm, useFormContext } from 'react-hook-form'
import { ListItem, Link, Popup, BlockTitle, Page, List, Navbar, Block, Button, Actions, ActionsGroup, ActionsLabel, ActionsButton, ListInput, ListButton } from 'konsta/react'
import { useState } from 'react'
import { useQueryWines } from '@/app/wine/queries'
import { WineItem } from '@/app/wine/WineItem'

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

/*
const WineSelectInput = ({ name }: { name: string }) => {
  const { control } = useRemixFormContext()
  const wines = useFetcher()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="w-72">
          <Combobox value={field.value} onChange={field.onChange}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(w: any) => w.name}
                  onChange={e => wines.submit({ q: e.target.value }, { method: 'get', action: '/wine-search' })}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  v
                </Combobox.Button>
              </div>
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {wines.state === 'submitting' ?
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Searching...</div>
                  :
                  wines.data?.error ?
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Error failed to load wines</div>
                    :
                    (!wines.data?.length) ?
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">No wines found</div>
                      :
                      wines.data.map((w: any) => (
                        <Combobox.Option
                          key={w.id}
                          value={w}
                        >
                          <span>{w.name}</span>
                        </Combobox.Option>
                      ))
                }
              </Combobox.Options>
            </div>
          </Combobox>
        </div>
      )}
    />
  )
}
*/

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
            <Link navbar onClick={() => setOpen(false)}>
              Close
            </Link>
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
  const methods = useForm()

  const onSubmit = (data:any, e:any) => console.log(data, e);
  const onError = (errors:any, e:any) => console.log(errors, e);

  return (
    <Page>
      <Navbar title="New Tasting" />
      <FormProvider {...methods}>
        <SelectWine name="wine" />
        <BlockTitle>Appearance</BlockTitle>
        <List strongIos insetIos>
          <SelectInput name="clarity" options={options.clarityOptions} label="Clarity" />
          <SelectInput name="intensity" options={options.appearanceIntensityOptions} label="Intensity" />
          <SelectInput name="color" options={options.colorOptions} label="Color" />
          <ListInput 
            label="Appearance Notes"
            type="textarea"
            placeholder="Other notes on appearance"
            inputClassName="!h-20 resize-none"
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
          />
          <ListInput 
            label="Other Observations"
            type="textarea"
            placeholder="Any Other Characteristics"
            inputClassName="!h-20 resize-none"
          />
          <SelectInput name="finish" options={options.finishOptions} label="Finish" />
        </List>

        <BlockTitle>Conclusions</BlockTitle>
        <List strongIos insetIos >
          <SelectInput name="qualityLevel" options={options.qualityLevelOptions} label="Quality Level" />
          <SelectInput name="readiness" options={options.readinessOptions} label="Readiness" />
          <ListButton onClick={methods.handleSubmit(onSubmit, onError)}>Save</ListButton>
        </List>
      </FormProvider>
    </Page>
  )
}