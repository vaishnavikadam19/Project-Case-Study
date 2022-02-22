module.exports=(app)=>{

    const express=require('express');

    const ROUTER=express.Router();

    const AdminController=require('./login-controller');
    const CategoryController=require('./category-controller');
    const ProductController=require('./product-controller');
    const UserRegisterController=require('./UserRegister-controller');
// ADMIN LOGIN
    ROUTER.get('/Logins',AdminController.findAll);

    ROUTER.get('/Logins/:id',AdminController.findByPk);

    ROUTER.post('/Logins/add',AdminController.createLogin);

    ROUTER.put('/Logins/update/:id',AdminController.updateLogin);

    ROUTER.delete('/Logins/delete/:id',AdminController.delete);

// ADMIN - CATEGORY

    ROUTER.get('/Categories',CategoryController.findAll);

    ROUTER.get('/Categories/:id',CategoryController.findByPk);

    ROUTER.post('/Categories/add',CategoryController.createCategory);

    ROUTER.put('/Categories/update/:id',CategoryController.updateCategory);

    ROUTER.delete('/Categories/delete/:id',CategoryController.delete);

    //PRODUCT

    ROUTER.get('/products',ProductController.findAll);

    ROUTER.get('/products/:id',ProductController.findByPk);

    ROUTER.post('/products/add',ProductController.createProduct);

    ROUTER.put('/products/update/:id',ProductController.updateProduct);

    ROUTER.delete('/products/delete/:id',ProductController.delete);

//USER - REGISTRATION

    ROUTER.get('/UserRegisters',UserRegisterController.findAll);

    ROUTER.get('/UserRegisters/:id',UserRegisterController.findByPk);

    ROUTER.post('/UserRegisters/add',UserRegisterController.createUserRegister);

    ROUTER.put('/UserRegisters/update/:id',UserRegisterController.updateUserRegister);

    ROUTER.delete('/UserRegisters/delete/:id',UserRegisterController.delete);

    app.use('/app',ROUTER);

}

