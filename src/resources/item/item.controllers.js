import { crudControllers } from '../../utils/crud'
// import mongoose from 'mongoose'
import { Item } from './item.model'
// import { connect } from '../../utils/db'

export default crudControllers(Item)

// const run = async () => {
//   await connect('mongodb://localhost:27017/api-test')
//   const item = await Item.create({
//     name: 'Sushi Item',
//     createdBy: mongoose.Types.ObjectId(),
//     list: mongoose.Types.ObjectId()
//   })
//   console.log(Item)
//   return item
// }

// run()
// .then(res => console.log('response man-------', res))
// .catch(err => console.log(err))



// const findAllItems = async () => {
//   await connect('mongodb://localhost:27017/api-test')

//   const itemsFound = await Item.find()
//   // console.log('---------------------', itemsFound)

//   const itembyId5f1da68a4c7c1a72b9d9512a = await Item.findById(
//     '5f1da68a4c7c1a72b9d9512a'
//   )
// //   console.log('--------itembyId----------', itembyId5f1da68a4c7c1a72b9d9512a)

//   const itemUpdateById5f1da68a4c7c1a72b9d9512a = await Item.findOneAndUpdate(
//     {
//       _id: '5f1da68a4c7c1a72b9d9512a'
//     },
//     { name: 'Jooombaaas Items222' 
//     },
//     // {new: true}
//   ).exec()

//   console.log('update------', itemUpdateById5f1da68a4c7c1a72b9d9512a)

// }

// findAllItems()
