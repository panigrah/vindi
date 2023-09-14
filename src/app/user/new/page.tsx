'use client'
import { userAtom } from '@/app/atoms'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { Button, Block, Page, Navbar, List, ListInput, ListButton, Preloader } from 'konsta/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useQueryUser } from '../queries'

export default function NewUserPage() {
	const searchParams = useSearchParams()
	const { data, isLoading, error } = useQueryUser()
	const redirectTo = searchParams.get('redirect')
	const [username, setName] = useState('')
	const [user, setUser] = useAtom(userAtom)
	const router = useRouter()
	const login = useMutation({
		mutationFn: (credentials: { username: string }) => {
			return fetch( 
				'/api/user', 
				{ method: 'POST', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(credentials)})
				.then(res => res.json())
		}
	})

	//if user is already available then do nothing
	useEffect(() => {
		if(!isLoading && !error && data?.id) {
			setUser(data)
			router.replace(redirectTo || '/tasting')
		}
	}, [isLoading, data, error, redirectTo, setUser, router])

	const signup = async () => {
		if (username) {
			login.mutate(
					{ username },
					{ onSuccess: (data) => {
						setUser(user)
						router.replace(redirectTo || '/tasting')
					}}
				)
		}
	}

	return (
		<Page>
			<Navbar title="Start here" />
			<div className='flex flex-auto flex-col h-full justify-center'>
				{ (isLoading || login.isLoading || data?.id) ? 
					<Preloader className="mx-auto" />
				:
				<>
				<List inset outline strong>
					<ListInput
						type="text"
						label="Your name"
						placeholder="Please enter your name or alias"
						clearButton
						value={username}
						onChange={(e: any) => setName(e.target.value)}
					/>
				</List>
				<Block>
					<Button
						large
						rounded
						onClick={signup}
					>
						Proceed
					</Button>
				</Block>
				</>
			}
			</div>
		</Page>
	)
}