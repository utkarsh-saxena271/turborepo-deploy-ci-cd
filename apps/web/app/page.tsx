import {prisma} from "@repo/db"
export default async function Home() {
  const user = await prisma.user.findFirst()
  return (
    <div>
      productoin work
      {user?.id}
      <br/>
      {user?.username}
    </div>
  );
}
