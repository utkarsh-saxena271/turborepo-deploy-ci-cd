import express from 'express'
import {prisma} from '@repo/db'

const app = express()


app.post('/user', async(req,res)=>{
    const user = await prisma.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    res.status(200).json({
        user
    })
})







app.listen(3001, () => {
    console.log("server is running on port 3001")
})