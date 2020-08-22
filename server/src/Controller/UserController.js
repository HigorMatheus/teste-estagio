const DataBase = require('../database/db')

const UserController = {
        async index (req,res){
            const {page = 1}= req.query
            const limit =3
           const users= await DataBase.select( "name",
           "sobrenome",
           "idade",
           "escolaridade",
           "tecnologia"
           ).table('users')
           .limit(limit)
           .offset((page - 1) * limit)
            const [countt]= await DataBase.table('users').count()
            const total = countt["count(*)"] 
            const totalpages = total/limit
            const pages = Math.ceil(totalpages)
            return res.json({users, total, limit, page , pages})
        },

        async create (req, res){
          const {
            name,
            sobrenome,
            idade,
            escolaridade,
            tecnologia
          } = req.body
          
         const data = await DataBase.table('users').insert({
            name,
            sobrenome,
            idade,
            escolaridade,
            tecnologia
          });
            return res.status(201).json({ data })
        }
}
module.exports = UserController


