'use client'
import { Page, Block, Preloader, Navbar, List, Link, ListItem } from 'konsta/react'
import { useQueryWines } from './queries';
import { WineItem } from './WineItem';
import slugify from 'slugify';

export default function TastingsPage() {
	const { data, isLoading, error } = useQueryWines()

	console.log('slugs: ', data?.map(w => slugify(w.name).toLowerCase()))
	return (
		<Page>
			<Navbar
				left={<Link>Back</Link>}
				right={<Link>Add</Link>}
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
						<ListItem link title="No tastings found - add one"></ListItem>
					}
				</List>
			}
		</Page>
	)
}