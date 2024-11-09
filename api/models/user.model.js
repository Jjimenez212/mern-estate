import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://th.bing.com/th/id/R.ac1c0bcbc5bb8fa178036b03a11ba729?rik=WU%2fEpaVn0uhXfA&riu=http%3a%2f%2fpm1.narvii.com%2f6890%2fe1c9d19217d4ee8712899931a79c5ba1463b016er1-300-168v2_uhq.jpg&ehk=Wkg0IEbld7xZiFHVhbwzW4PEhL51eSR%2bIkGZDJOsaIU%3d&risl=&pid=ImgRaw&r=0"
    }
}, 
{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;