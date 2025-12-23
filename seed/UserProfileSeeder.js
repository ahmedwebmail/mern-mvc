import mongoose from "mongoose";
import User from "../app/models/User.js";
import { faker } from '@faker-js/faker';
mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const users = await User.find().select("_id name");
const user_array = users.map(users => ({
    id: users._id,
    name: users.name
}))







const create_users= () => ({
  email: faker.internet.email(),  
});

const create_user = faker.helpers.multiple(create_users, {
  count: 30,
});

try{
    await User.insertMany(users);
    console.log("Users inserted successfully");
}
catch(err){
    console.error("Error inserting users:", err);
}

mongoose.connection.close();