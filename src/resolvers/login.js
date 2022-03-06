const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const { signToken } = require("../utils/auth");

const login = async (_, { input }, context) => {
  try {
    const userFromDb = await User.findOne({ email: input.email });

    if (!userFromDb) {
      console.log("[ERROR]: Failed to login | User does not exist");
      throw new AuthenticationError("Failed to login");
    }

    const isValidPassword = await userFromDb.checkPassword(input.password);

    if (!isValidPassword) {
      console.log("[ERROR]: Failed to login | Incorrect password");
      throw new AuthenticationError("Failed to login");
    }

    return {
      token: signToken(userFromDb),
      user: userFromDb,
    };
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);
    throw new AuthenticationError("Failed to login");
  }
};

module.exports = login;
