'use client'
import {Page, Block, Navbar, List, Link, ListItem } from 'konsta/react'
import { useQueryWines } from './queries';
import { WineItem } from './WineItem';
import slugify from 'slugify';

export default function TastingsPage() {
    const {data, isLoading, error}  = useQueryWines()
    
    console.log('slugs: ', data?.map( w => slugify(w.name).toLowerCase()))
    return (
        <Page>
            <Navbar 
                left={<Link>Back</Link>}
                right={<Link>Add</Link>}
                title="Wines"
            />
            <List inset outline strong  dividers>
                {data?.length ?
                    data.map(w => <WineItem key={w.id} wine={w} />)
                :
                <ListItem link title="No tastings found - add one"></ListItem>
                }
            </List>
        </Page>
    )
}