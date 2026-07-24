import {prisma} from "@repo/db"
export default async function Home() {
  const user = await prisma.user.findFirst()
  return (
    <div>
      prod branch cd work kr raha oyee
      {user?.id}
      <br/>
      {user?.username}
    </div>
  );
}
