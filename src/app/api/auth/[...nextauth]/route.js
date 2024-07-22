import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // Additional NextAuth configuration options if needed
};

export default async (req, res) => {
  try {
    console.log("Request received:", req.method);

    if (req.method === "GET" || req.method === "POST") {
      return await NextAuth(req, res, options);
    }

    // Respond with method not allowed if method is not GET or POST
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error("Error in NextAuth:", error);
    res.status(500).end(error.message);
  }
};
