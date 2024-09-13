import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // You can add more providers here if needed
  ],
  pages: {
    signIn: '/auth/signin',  // Customize the sign-in page URL
  },
  // Other NextAuth.js options here
};

export const { GET, POST } = NextAuth(authOptions);
