import mongoose from "mongoose";
import User from "../app/models/User.js";
import UserProfile from "../app/models/UserProfile.js";
import { faker } from '@faker-js/faker';
mongoose.connect("mongodb+srv://admin:admin@cluster0.nx8kf.mongodb.net/basarbazzar?retryWrites=true&w=majority", {

})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const user_list = await User.find().select("_id email");

for (const user of user_list) {
    await UserProfile.create({
        user_id: user._id,
        cus_name: faker.person.fullName(),
        cus_add: faker.location.streetAddress(),
        cus_city: faker.location.city(),
        cus_state: faker.location.state(),
        cus_country: faker.location.country(),
        cus_postcode: faker.location.zipCode(),
        cus_phone: faker.phone.number(),

        ship_name: faker.person.fullName(),
        ship_add: faker.location.streetAddress(),
        ship_city: faker.location.city(),
        ship_state: faker.location.state(),
        ship_country: faker.location.country(),
        ship_postcode: faker.location.zipCode(),
        ship_phone: faker.phone.number(),
    });
}

console.log("User profiles seeded successfully.");
mongoose.connection.close();