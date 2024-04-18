import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import session from 'express-session';


const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  secret: 'IRONMAN',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.NODE_ENV === 'production' 
  }
}));


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
    username: {
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
    role: {
      type: String,
      default: 'User'
    }
    
  });

const User = mongoose.model('logininfo', UserSchema);

const feedbackSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);


app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
  
      if (user) {
        return res.status(404).json({ message: 'User already exist' });
      }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
    
        return res.status(201).json({ message: 'User created successfully' });
      
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Error creating user' });
  }
});


app.post('/login', async (req, res) =>{

  const { email, password } = req.body;

    console.log(email, password);
  
    try {

      const user = await User.findOne({ email:email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      req.session.userId = user._id;

      return res.status(200).json({ message: 'Login successful', username: user.username, role: user.role});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }

})

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Could not log out, please try again' });
    }
    res.clearCookie('connect.sid');
    return res.status(200).json({ message: 'Logout successful' });
  });
}); 

app.get('/authentication', (req, res) => {
  if (req.session.userId) {
    return res.json({ isLoggedIn: true });
  } else {
    return res.json({ isLoggedIn: false });
  }
});

app.post("/feedback", async (req, res) => {

  try {

    const { Name, email, feedback } = req.body;

    const newFeedback = new Feedback({Name, email, feedback})

    await newFeedback.save();
    res.status(201).json({ message: 'sent feedback successfully', feedback: newFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

})



/*----------------------------------------------------------------------------------------------------------------------*/


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});