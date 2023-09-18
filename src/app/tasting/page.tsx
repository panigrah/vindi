'use client'
import { useQuery } from '@tanstack/react-query'
import { Page, Block, Navbar, List, ListItem, Preloader, Checkbox } from 'konsta/react'
import { TastingType, useQueryTastings } from './queries'
import Link from 'next/link'
import { ChevronLeftIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { tastingListAtom } from '../atoms'
import { SyntheticEvent } from 'react'

const TastingListItem = ({ tasting }: { tasting: TastingType }) => {
	const [tastingList, setTastingList] = useAtom(tastingListAtom)

	const updateTastingList = (state: boolean) => {
		if( state && !tastingList.includes(tasting.id!)) {
			setTastingList([...tastingList, tasting.id!])
		} else if (!state) {
			setTastingList(tastingList.filter(tid => tid !== tasting.id!))
		}
	}

	return (
		<ListItem
			title={tasting.wine ? tasting.wine.name : tasting.wineId}
			href={`/tasting/${tasting.id}`}
			link
			media={
				<>
					<Checkbox 
						name={`checkbox-${tasting.id}`}  
						checked={tastingList.includes(tasting.id!)}
						onChange={(e:React.ChangeEvent<HTMLInputElement>) => updateTastingList(e.target.checked)}
					/>
				</>
			}
		/>
	)
}

export default function TastingsPage() {
	const { data, isLoading, error } = useQueryTastings()
	const router = useRouter()
	const [tastingList, setTastingList] = useAtom(tastingListAtom)

	return (
		<Page>
			<Navbar
				left={<Link href="/"><ChevronLeftIcon className='h-5 w-5'/></Link>}
				right={
					<Link href="/tasting/new" className='rounded-md bg-rose-700 text-slate-100 px-2 py-1'>
						Add
					</Link>
				}
				title="Tastings"
			/>
			{isLoading ?
				<Block className="text-center flex justify-center flex-col flex-auto w-full h-full">
					<Preloader className="mx-auto" />
				</Block>
				:
				<>
					<Block inset strong>
						{ tastingList.length > 1 &&
							<a href={`/tasting/compare/${tastingList.join('+')}`}>Compare</a>
						}
					</Block>
					<List inset outline strong dividers>
						{data?.length ?
							data.map(t => <TastingListItem tasting={t} key={t.id} />)
							:
							<ListItem link title="No tastings found - add one" onClick={() => router.push('/tasting/new')}></ListItem>
						}
					</List>
				</>
			}
		</Page>
	)
}