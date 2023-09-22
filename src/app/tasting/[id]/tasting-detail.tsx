'use client'
import { Page, Navbar, List, ListItem, BlockTitle, Block, Chip, Button } from "konsta/react";
import { TastingType, useMutationDeleteTasting } from "../queries";
import { WineItem } from "@/app/wine/WineItem";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { aromaList } from "@/selectOptions";

type UserType = {
  username: string;
  id: string;
}

const UserItem = ({ user }: { user: UserType }) => {
  return (
    <ListItem 
      title={user.username} 
      // eslint-disable-next-line @next/next/no-img-element
      media={<img src={`https://ui-avatars.com/api/?name=${user.username}`} alt={user.username} className="object-cover rounded-full w-16 h-16 aspect-square"/>}
      header='Reviewer' 
    />
  )
}

export default function TastingDetail({ tasting }: { tasting: TastingType }) {
  const deleteMutation = useMutationDeleteTasting()
  const router = useRouter()

  const aromas = useMemo(() => aromaList(), [])

  const deleteTasting = () => {
    deleteMutation.mutate(tasting.id!, { 
      onSuccess: (data) => {
        //deleted tasting get back to list..
        router.replace('/tasting')
      }, 
      onError: (error) => {
        console.log('error deleting tasting')
      }
    })
  }

  return (
      <Page>
        <Navbar 
          left={<Link href="/tasting"><ChevronLeftIcon className="w-5 h-5" /></Link>} 
          title={tasting.wine?.name} 
          titleClassName="truncate max-w-[240px]"
          right={<Button onClick={deleteTasting}><TrashIcon className="w-5 h-5"/></Button>}
        />
        <List inset strong outline>
          {tasting.wine && <WineItem wine={tasting.wine} />}
          {tasting.reviewer && <UserItem user={tasting.reviewer} />}
        </List>
        
        <BlockTitle>Conclusions</BlockTitle>
        <List strongIos insetIos >
          <ListItem title={tasting.quality}  header="Quality Level" />
          <ListItem title={tasting.readiness} header="Readiness" />
        </List>

        <BlockTitle>Aroma Descriptors</BlockTitle>
        <Block strong inset>
          {tasting.aromaDescriptors?.map( a => <Chip 
            media={
            // eslint-disable-next-line @next/next/no-img-element
            <img alt={a.name} className="ios:h-7 material:h-6 rounded-full" src={aromas.find(aroma => aroma.name === a.name)?.media ?? ''} />}
              className="m-0.5"
              key={a.name}
              >{a.name}</Chip>)
            }
        </Block>
        <BlockTitle>Appearance</BlockTitle>
        <List inset strong outline dividers>
          <ListItem title={tasting.clarity} header="Clarity" />
          <ListItem title={tasting.appearanceIntensity} header="Intensity" />
          <ListItem title={tasting.color} header="Color" />
          <ListItem 
            header="Appearance Notes"
            text={tasting.appearanceNotes}
          />
        </List>

        <BlockTitle>Nose</BlockTitle>
        <List strongIos insetIos >
          <ListItem title={tasting.condition} header="Condition" />
          <ListItem title={tasting.noseIntensity} header="Intensity" />
          <ListItem 
            header="Aroma"
            text={tasting.aromaDescription}
          />
          <ListItem title={tasting.development} header="Development" />
        </List>
        <BlockTitle>Palete</BlockTitle>
        <List strongIos insetIos >
          <ListItem title={tasting.sweetness} header="Sweetness" />
          <ListItem title={tasting.acidity} header="Acidity" />
          <ListItem title={tasting.tannin} header="Tannin" />
          <ListItem title={tasting.alcohol} header="Alcohol" />
          <ListItem title={tasting.body} header="Body" />
          <ListItem title={tasting.flavorIntensity} header="Flavor Intensity" />
          <ListItem 
            header="Flavor Characteristics"
            text={tasting.flavorCharacteristics}
          />
          <ListItem 
            header="Other Observations"
            text={tasting.otherCharacteristics}
          />
          <ListItem title={tasting.finish} header="Finish" />
        </List>
      </Page>
  )
}