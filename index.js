 const express=require('express')
 const cors=require('cors')
 const app=express()
 app.use(cors())
 app.use(express.json())
 const PORT=process.env.port || 3000

 const persona={

        "nombre":"juan",
        "apellido":"perez",
        "edad":21,
        "direccion":"castellana cra 24 #1-12",
        "telefono":"312-5678888"
 }


 app.get('/api/persona',(req,res)=>{
    res.json({        
        persona:persona,
        "nombre":"juan",
        "apellido":"perez",
        "edad":21,
        "direccion":"castellana cra 24 #1-12",
        "telefono":"312-5678888",
        "estatura":1.75
    })
 })

 app.get('/api/persona/:nombre/:apellido',(req,res)=>{
     const nombre=req.params.nombre
     const apellido=req.params.apellido
     res.json({
         "saludo":"Hola "+nombre+" "+apellido
     })
 })

 app.post("/api/persona",(req,res)=>{
     const persona=Object.values(req.body)
     const nombre=persona[0]
     const apellido=persona[1]
     const edad=persona[2]
     const estudios=persona[3]
     console.log(persona)
     res.json({
         "respuesta":"Enviada peticion Post",
         "nombre":nombre,
         "apellido":apellido,
         "edad":edad,
         "estudios":estudios,
         "persona":req.body,

     })
 })


 app.put("/api/persona",(req,res)=>{
    const persona=Object.values(req.body)
    const nombre=persona[0]
    const apellido=persona[1]
    const edad=persona[2]
    const estudios=persona[3]
    console.log(persona)
    res.json({
        "respuesta":"Enviada peticion Put",
        "nombre":nombre,
        "apellido":apellido,
        "edad":edad,
        "estudios":estudios,
        "persona":req.body,

    })
})

app.delete("/api/persona/:id",(req,res)=>{
    
    const id=req.params.id
    res.json({
        mensaje:"Persona eliminada Id "+id
    })

})
 

 
 app.listen(PORT,()=>{
     console.log("Servidor Ejecutando Puerto "+PORT)
 })