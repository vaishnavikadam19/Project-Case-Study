const db= require('../db/models');
const Category= db.Category;
exports.findAll=(req,resp)=>{

    Category.findAll()

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

// 2. seelct * from Category where id=?=>findByPK

exports.findByPk=(req,resp)=>{

    const id=parseInt(req.params.id);

    Category.findByPk(id)

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

//3. insert into users(firstName, lastName,createdAt, updatedAt)
exports.createCategory=(req,resp)=>{
    if(!req.body.name){
        resp.status(400)
            .send({message:"Category Name must be provided"});
        }
    
        const newCategory={
            name:req.body.name,
            icon:req.body.icon,
            createdAt:new Date(),
            updatedAt:new Date()
        }
        Category.create(newCategory)
            .then(data=>resp.send(data))
            .catch(err=>{
                resp.status(500)
                    .send({message:err.message || `Cannot insert value in Category table`})
            })
    };
    
    //4. update users set firstName=?, lastName=?, ccreatedAt=?, updatedAt=?
    //where id=? =>update()
    exports.updateCategory=(req,resp)=>{
        const c_id = parseInt(req.params.id);
    
       Category.update(req.body,{where:{id:c_id}})
            .then(num=>{
                if(num>1){
                    resp.send({message: `Category with id ${id} updated succeessfully.`})
                }
                else{
                    resp.send({message:`Cannot update Category with id=${id}. May be Category was not found or req.body is empty!`})
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
        Category.destroy({where:{id:c_id}})
        .then(num=>{
            if(num==1){
                resp.send({message: `Category with id ${id} deleted succeessfully.`})
            }
            else{
                resp.send({message:`Cannot delete Category with id=${id}. May be Category was not found or req.body is empty!`})
            }
        })
        .catch(err=>{
            resp.status(500)
                .send({message:err.message || "Could not delete Category with id=" + id})
        })
    }