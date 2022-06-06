const Task = require("../models/Task");

const TaskController = {
  async create(req, res) {
    try {
      const task = await Task.create({
        title: req.body.title,
        completed: false,
      });
      res
        .status(201)
        .send({ msg: "Tu vaina loca se ha creado correctamente", task });
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  async getAll (req,res){
    try{
    const tasks = await Task.find()
    res.send({message:"Todas tus vainas locas", tasks})
    }
    catch (error){
        console.error(error)
        res.status(500).send(error)
    }
  }
};
module.exports = TaskController