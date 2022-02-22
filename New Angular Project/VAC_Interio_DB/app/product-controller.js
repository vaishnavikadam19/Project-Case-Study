const db= require('../db/models');
const product= db.product;
exports.findAll=(req,resp)=>{

    product.findAll()

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

    product.findByPk(id)

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

//3. insert into users(firstName, lastName,createdAt, updatedAt)
exports.createProduct=(req,resp)=>{
    if(!req.body.productName){
        resp.status(400)
            .send({message:"Product Name must be provided"});
        }
    
        const newProduct={
            productName:req.body.productName,
            description:req.body.description,
            price:req.body.price,
            image:req.body.image,
            createdAt:new Date(),
            updatedAt:new Date()
        }
        product.create(newProduct)
            .then(data=>resp.send(data))
            .catch(err=>{
                resp.status(500)
                    .send({message:err.message || `Cannot insert value in Product table`})
            })
    };
    
    //4. update users set firstName=?, lastName=?, ccreatedAt=?, updatedAt=?
    //where id=? =>update()
    exports.updateProduct=(req,resp)=>{
        const c_id = parseInt(req.params.id);
    
        product.update(req.body,{where:{id:c_id}})
            .then(num=>{
                if(num>1){
                    resp.send({message: `Product with id ${id} updated succeessfully.`})
                }
                else{
                    resp.send({message:`Cannot update Product with id=${id}. May be Product was not found or req.body is empty!`})
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
        product.destroy({where:{id:c_id}})
        .then(num=>{
            if(num==1){
                resp.send({message: `Product with id ${id} deleted succeessfully.`})
            }
            else{
                resp.send({message:`Cannot delete Product with id=${id}. May be Product was not found or req.body is empty!`})
            }
        })
        .catch(err=>{
            resp.status(500)
                .send({message:err.message || "Could not delete Product with id=" + id})
        })
    }