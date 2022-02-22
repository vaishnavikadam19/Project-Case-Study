const db= require('../db/models');
const UserRegister = db.UserRegister;
exports.findAll=(req,resp)=>{

    UserRegister.findAll()

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

// 2. seelct * from UserRegister where id=?=>findByPK

exports.findByPk=(req,resp)=>{

    const id=parseInt(req.params.id);

    UserRegister.findByPk(id)

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

//3. insert into users(firstName, lastName,createdAt, updatedAt)
exports.createUserRegister=(req,resp)=>{
    if(!req.body.firstName){
        resp.status(400)
            .send({message:"First Name must be provided"});
        }

    if(!req.body.lastName){
        resp.status(400)
            .send({message:"Last Name must be provided"});
        }

    if(!req.body.Phone){
        resp.status(400)
            .send({message:"Phone must be provided"});
        }
 
    if(!req.body.Address){
        resp.status(400)
            .send({message:"Address must be provided"});
        }
        
    if(!req.body.Email){
        resp.status(400)
            .send({message:"Email must be provided"});
        }
        const newUserRegister={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            Phone:req.body.Phone,
            Address:req.body.Address,
            Email:req.body.Email,
            Password:req.body.Password,
            Confirm_password:req.body.Confirm_password,
            createdAt:new Date(),
            updatedAt:new Date()
        }
        UserRegister.create(newUserRegister)
            .then(data=>resp.send(data))
            .catch(err=>{
                resp.status(500)
                    .send({message:err.message || `Cannot insert value in UserRegister table`})
            })
    };
    
    //4. update users set firstName=?, lastName=?, ccreatedAt=?, updatedAt=?
    //where id=? =>update()
    exports.updateUserRegister=(req,resp)=>{
        const c_id = parseInt(req.params.id);
    
       UserRegister.update(req.body,{where:{id:c_id}})
            .then(num=>{
                if(num>1){
                    resp.send({message: `UserRegister with id ${id} updated succeessfully.`})
                }
                else{
                    resp.send({message:`Cannot update UserRegister with id=${id}. May be UserRegister was not found or req.body is empty!`})
                }
            })
            .catch(err=>{
                resp.status(500)
                    .send({message:err.message})
            })
    };
    
    //5. Delete users where id=?=>delete()
    exports.delete=(req,resp)=>{
        const c_id = parseInt(req.params.id);
        UserRegister.destroy({where:{id:c_id}})
        .then(num=>{
            if(num==1){
                resp.send({message: `UserRegister with id ${id} deleted succeessfully.`})
            }
            else{
                resp.send({message:`Cannot delete UserRegister with id=${id}. May be UserRegister was not found or req.body is empty!`})
            }
        })
        .catch(err=>{
            resp.status(500)
                .send({message:err.message || "Could not delete UserRegister with id=" + id})
        })
    }