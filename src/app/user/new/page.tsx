'use client'
import { Button, Block, Page, Navbar, List, ListInput, ListButton } from 'konsta/react'

export default function NewUserPage() {
    return(
        <Page>
            <Navbar title="Start here"/>
            <div className='flex flex-auto flex-col h-full justify-center'>
                <List inset outline strong>
                    <ListInput 
                        type="text" 
                        label="Your name"
                        placeholder="Please enter your name or alias"
                        clearButton
                    />
                </List>
                <Block>
                    <Button 
                        large 
                        rounded
                        href="/tasting/new"
                    >
                        Proceed
                    </Button>
                </Block>
            </div>
        </Page>
    )
}