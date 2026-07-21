import express from 'express'
import {prisma} from '@repo/db'

const app = express()


app.get('/user', async(req,res)=>{
    const user = await prisma.user.findFirst()

    res.status(200).json({
        user
    })
})







app.listen(3001, () => {
    console.log("server is running on port 3001")
})