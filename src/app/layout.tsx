import { Login, Logout } from '@/app/componetns/Buttonts'
import { NextAuthProvider } from '@/app/componetns/Providers'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import { authOptions } from './lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getServerSession(authOptions)

	console.log('session', session)
	return (
		<html lang="en">
			<head />
			<body className={inter.className}>
				<NextAuthProvider>
					<nav className="flex px-10 py-5 justify-between items-center fixed top-0 left-0 w-full bg-white">
						<h1 className="text-black text-3xl font-bold">
							ReaDG<span className="text-teal-500">Chat</span>
						</h1>

						{session ? (
							<div className="flex items-center">
								<Image
									src={session.user.image}
									alt="user profile photo"
									className="w-12 h-12 rounded-full mr-3"
									width={50}
									height={50}
								/>
								<Logout />
							</div>
						) : (
							<Login />
						)}
					</nav>

					<main>{children}</main>
				</NextAuthProvider>
			</body>
		</html>
	)
}
