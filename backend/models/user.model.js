import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: 'i',
    unique: true,
    required: true,
  },
  name: {
    type: String,
    default: 'Shadan Anwar',
  },
  password: {
    type: String,
    default: '',
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;