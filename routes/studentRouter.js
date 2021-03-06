import express from 'express';
import { studentModel } from '../models/student.js';

const routers = express();

routers.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

routers.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

routers.delete('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndDelete({ _id: req.params.id });
    //const student = await studentModel.findByIdAndDelete(req.params.id);

    if (!student) {
      res.status(404).send('Documento não encontrado na coleção');
    }

    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

routers.patch('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

routers.put('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { routers };
