'use client'
import { useQuery } from '@tanstack/react-query'
import { Page, Block, Navbar, List, ListItem, Preloader } from 'konsta/react'
import { TastingType, useQueryTastings } from './queries'
import Link from 'next/link'
import { ChevronLeftIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const TastingListItem = ({ tasting }: { tasting: TastingType }) => {
	return (
		<ListItem
			link
			title={tasting.wine ? tasting.wine.name : tasting.wineId}
			href={`/tasting/${tasting.id}`}
		/>
	)
}

export default function TastingsPage() {
	const { data, isLoading, error } = useQueryTastings()
	const router = useRouter()

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
				<List inset outline strong dividers>
					{data?.length ?
						data.map(t => <TastingListItem tasting={t} key={t.id} />)
						:
						<ListItem link title="No tastings found - add one" onClick={() => router.push('/tasting/new')}></ListItem>
					}
				</List>
			}
		</Page>
	)
}