import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ClerkUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username?: string;
  externalAccounts?: {
    google?: {
      id: string;
    };
  };
}

export async function createUser(clerkUser: ClerkUser) {
  const {
    id: clerkId,
    email,
    firstName,
    lastName,
    username,
    externalAccounts,
  } = clerkUser;

  const user = await prisma.user.create({
    data: {
      clerkId,
      email,
      name: `${firstName} ${lastName}`,
      username: username || null,
      googleId: externalAccounts?.google?.id || null,
    },
  });

  return user;
}
