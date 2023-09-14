'use client'
import { useQuery } from '@tanstack/react-query'
import {Page, Block, Navbar, List, Link, ListItem } from 'konsta/react'

export default function TastingsPage() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['wines'],
        queryFn: async () => {
            const result = await fetch('/api/wine').then( res => res.json())
            console.log('received:', result)
            return result
        }
    })
    
    return (
        <Page>
            <Navbar 
                left={<Link>Back</Link>}
                right={<Link>Add</Link>}
                title="Tastings"
            />
            <List inset outline strong  dividers>
                <ListItem link title="No tastings found - add one"></ListItem>
            </List>
        </Page>
    )
}