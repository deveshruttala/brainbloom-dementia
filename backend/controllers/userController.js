import { User } from "../models/User.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password); 
    res.status(200).json({email});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;

  try {
    const newUser = await User.signup(username, email, password, firstName, lastName);
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { email, firstName, lastName, username } = req.body;
  
  try {
    const updatedUser = await User.updateProfile(email, firstName, lastName, username);
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePassword = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const updatedUser = await User.updatePassword(email, password);
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateStats = async (req, res) => {
  const { email, exercisesCompleted, totalXp, memoryLevel } = req.body;

  try {
    const updatedUser = await User.updateStats(email, exercisesCompleted, totalXp, memoryLevel);
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getInfo = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.getInfo(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default { login, signup, updateProfile, updatePassword, updateStats, getInfo };
