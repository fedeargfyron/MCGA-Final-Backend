const Product = require('../Models/productSchema');

const getProducts = async (req, res) => {
    try{
        let data = await Product.find();
        res.json(data);
    }
    catch (err){
        res.status(500).json({ 
            Success: false,
            Message: err.message
        })
    }
}

const getById = async (req, res) => {
    const id = req.params.id;
    try{
        let data =  await Product.findById(id);
        res.json(data);
    }
    catch (err){
        res.status(500).json({ 
            Success: false,
            Message: err.message
        })
    }
}

const postProduct = async (req, res) => {
    try{
        await new Product(req.body).save();
        res.json({ 
            Success: true,
            Message: "Product created."
        })
    }
    catch (err){
        res.status(500).json({ 
            Success: false,
            Message: err.message
        })
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    try{
        await Product.findByIdAndUpdate(id, req.body);
        res.json({ 
            Success: true,
            Message: "Product updated."
        })
    }
    catch (err){
        res.status(500).json({ 
            Success: false,
            Message: err.message
        })
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try{
        await Product.findByIdAndDelete(id);
        res.json({ 
            Success: true,
            Message: "Product deleted."
        }) 
    }
    catch (err){
        res.status(500).json({ 
            Success: false,
            Message: err.message
        })
    }
}

module.exports = {
    getProducts,
    getById,
    postProduct,
    updateProduct,
    deleteProduct
}