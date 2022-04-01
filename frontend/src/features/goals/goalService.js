import instance from "../../config/axiosConfig";

const API_URL = "/api/goals/";

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.get(API_URL, config);

  return response.data;
};

// Set goals
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.post(API_URL, goalData, config);

  return response.data;
};

// Update goals
const updateGoal = (goal) => {};

// Delete goals
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.delete(API_URL + goalId, config);

  return response.data;
};

const goalService = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};

export default goalService;
