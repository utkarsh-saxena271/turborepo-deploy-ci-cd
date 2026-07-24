import {prisma} from "@repo/db"
export default async function Home() {
  const user = await prisma.user.findFirst()
  return (
    <div>
      ci is finally working ngl

      hell yeah, its workingg
      {user?.id}
      <br/>
      {user?.username}
    </div>
  );
}
