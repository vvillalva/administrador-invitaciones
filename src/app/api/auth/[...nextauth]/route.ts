// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

//TODO: CAMBIAR URL DEL BACKEND,
//TODO: CONFIGURAR EL .ENV
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Llama a tu backend aquí
                const res = await fetch("https://TU_BACKEND.com/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                })

                const user = await res.json()

                // Si el backend devuelve error o no hay usuario válido
                if (!res.ok || !user) return null

                // Puedes adaptar aquí el objeto user que retornará la sesión
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    // Agrega aquí cualquier otro dato necesario (roles, etc.)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt", // recomendada para backend custom y serverless
    },
    pages: {
        signIn: "/login", // tu ruta de login
    },
    callbacks: {
        async jwt({ token, user }) {
            // Guarda en el token info extra (roles, etc) si lo necesitas
            if (user) {
                token.id = user.id
                token.email = user.email
                token.name = user.name
            }
            return token
        },
        async session({ session, token }) {
            // Pasa info del token a la sesión de frontend
            if (token) {
                //session.user.id = token.id
                //session.user.email = token.email
                //session.user.name = token.name
            }
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }