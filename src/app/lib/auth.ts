import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import GitbubProvider from 'next-auth/providers/github'
import { prisma } from './db'

export const authOptions: NextAuthOptions = {
	// @ts-ignore
	adapter: PrismaAdapter(prisma),
	providers: [
		GitbubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
	],
}
