const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middleware
app.use(cors({
    origin:['http://localhost:5173','https://car-doctor-3efcb.web.app','https://car-doctor-3efcb.firebaseapp.com'],
    credentials:true,
}))
app.use(express.json())
app.use(morgan('combined'))
app.use(cookieParser())


const varifytoken=async(req,res,next)=>{
    const token=req.cookies?.token
     if(!token){
        return res.status(401).send({message:'Unauthorized token'})
     }
     
     jwt.verify(token,`${process.env.ASSENTOKEN}`,(err,decoded)=>{
        // error
        if(err){
            console.log(err)
            return res.status(401).send({message:'Unauthorized token varify'})
        }
        req.user=decoded
        next()
     })  
}
 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.BD_PASS}@cluster0.3ksqccu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true, } });


async function run() {
    try {
        const service = client.db("Cardoctor").collection("service");
        const Order = client.db("Cardoctor").collection("order");

        // jwt token post and cookie set
        app.post('/jwt',async(req,res)=>{
            const user=req.body
            const token=jwt.sign(user,`${process.env.ASSENTOKEN}`, { expiresIn: '1h' });
            res.cookie('token',token,{
               // maxAge
               httpOnly:true,
               secure:true,
               sameSite:'none'
            }).send({success:true})
        })
        // logout button jwt use for token clear
        app.post('/logout',async(req,res)=>{
            const body=req.body
            res.clearCookie('token',{maxAge:0}).send({success:true})
        })
        //    service get data
        app.get('/service', async (req, res) => {
            const query = {}
            const result = await service.find(query).toArray()
            res.send(result)
        })

        //service findone all data
        app.get('/service/:id',async(req,res)=>{
            const id=req.params.id
            const query={_id:new ObjectId(id)}
            const result=await service.findOne(query)
            res.send(result)
        })

        // order get data
        app.get("/order",varifytoken,async(req,res)=>{
            if(req.query?.email !== req.user?.email){
                return res.status(403).send({message:'Forbidden access boss'})
            }
            let query={}
            if(req.query?.email){
                query={Customaremail:req.query.email}
            }
            const result=await Order.find(query).toArray()
            res.send(result)
        })

        // order find data
        app.get('/order/:id',async(req,res)=>{
            const id=req.params.id
            const query={_id:new ObjectId(id)}
            const result=await Order.findOne(query)
            res.send(result)
        })

        // order delete data
        app.delete('/order/:id',async(req,res)=>{
            const {id}=req.params
            const query={_id:new ObjectId(id)}
            const result=await Order.deleteOne(query)
            res.send(result)
        })

        // order post data 
        app.post('/order',async(req,res)=>{
            const bodydata=req.body
            const query={Orderid: bodydata?.Orderid , Customaremail:bodydata?.Customaremail}
            const exsistingorder=await Order.findOne(query)
            if(exsistingorder){
                res.send({message:'❌Alreay❌ Added,not Successfull'})
            }else{
                const result = await Order.insertOne(bodydata);
                if(result.insertedId !== undefined){
                    res.send({
                      success:true,
                      message:'Product added Successfully'
                    })
                  }else{
                    res.send({
                      success:false,
                      message:'Product not Successfully'
                    })
                  }
            }
        })

        // order patch data
        app.patch('/order/:id',async(req,res)=>{
            const id=req.params.id
            const body=req.body
            const filter = {_id:new ObjectId(id)};
            const options = { upsert: true };
            const updateDoc = {
              $set: {
                confirm:body.confirm
              },
            };
            const result = await Order.updateOne(filter, updateDoc, options);
            res.send(result)
          })

        // example starting
        app.get('/', (req, res) => {
            res.send('Car Doctor Server Ranning successfully 2023 deploy')
        })
    } finally {
        // Ensures that the client will close when you finish/error
        //   await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server side is ranning ${port}`)
})