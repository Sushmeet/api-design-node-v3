export const getOne = model => async (req, res) => {
  const userId = req.user['_id'];
  const listId = req.params.id

  const doc = await model.findOne({
    createdBy: userId,
    _id: listId
  }).exec()

  if(!doc) {
    return res.status(400).end()
  }
  
  res.status(200).json({
    data: doc
  })
}

export const getMany = model => async (req, res) => {
  const userId = req.user._id

  const doc = await model.find({
    createdBy: userId
  })

  res.status(200).json({
    data: doc
  })

}

export const createOne = model => async (req, res) => {
  const name = req.body.name
  const userId = req.user._id

  const doc = await model.create({
    createdBy: userId,
    name
  })
  res.status(201).json({ data: doc})

}

export const updateOne = model => async (req, res) => {
  const userId = req.user._id
  const listId = req.params.id
  const name = req.body

  const doc = await model.findOneAndUpdate(
    {
      _id: listId,
      createdBy: userId
    },
     name,
    {
      new: true
    }
  )

  if(!doc) {
    return res.status(400).end()
  }

  res.status(200).json({
    data: doc
  })

}

export const removeOne = model => async (req, res) => {
  const userId = req.user._id
  const listId = req.params.id

  const doc = await model.findOneAndRemove({
    _id: listId,
    createdBy: userId
  })
  
  if(!doc) {
    return res.status(400).end()
  }

  res.status(200).json({
    data: doc
  })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
