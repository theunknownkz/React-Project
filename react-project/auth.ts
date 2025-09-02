import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const {} = NextAuth({
    providers: [GitHub],
    adapter: PrismaAdapter(),
})