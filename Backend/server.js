import express from 'express';
import mongoose from 'mongoose';


const app = express();

/*----------------------------------- Mongodb Connection -----------------------------------------------*/

mongoose.connect('mongodb://localhost:27017/final-project')
.then(()=>{
    console.log('mongodb connected successfully');
})
.catch(()=>{
    console.log('mongodb connection failed');
})

/*------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------- API's -------------------------------------------------*/

const UserSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
      },
    
  });

const User = mongoose.model('logininfo', UserSchema);

app.post('/signup', async (req, res) => {{
    const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({ Name, email, password: hashedPassword });
      await newUser.save();
}})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});