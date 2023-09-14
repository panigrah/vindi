'use client'
import { Page, Block, Preloader, Navbar, List, ListItem } from 'konsta/react'
import { useQueryWines } from './queries';
import { WineItem } from './WineItem';
import slugify from 'slugify';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function TastingsPage() {
	const { data, isLoading, error } = useQueryWines()

	console.log('slugs: ', data?.map(w => slugify(w.name).toLowerCase()))
	return (
		<Page>
			<Navbar
				left={<Link href="/"><ChevronLeftIcon className='w-5 h-5' /></Link>}
				right={
					<Link href="/wine/new">
						Add
					</Link>
				}
				title="Wines"
			/>
			{isLoading ?
				<Block className="text-center flex justify-center flex-col flex-auto w-full h-full">
					<Preloader className="mx-auto" />
				</Block>
				:
				<List inset outline strong dividers>
					{data?.length ?
						data.map(w => <WineItem key={w.id} wine={w} />)
						:
						<ListItem link title="No wines found - add one"></ListItem>
					}
				</List>
			}
		</Page>
	)
}