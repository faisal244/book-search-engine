const { User } = require("../models")

const {ApolloError} = require("apollo-server")

const me = (_, _, { user }) => {
  const foundUser = await User.findOne({
      $or: [{ _id: user._id } ],
    });

    if (!foundUser) {
      return ApolloError('Cannot find a user with this id!');
    }

   return foundUser;
};

module.exports = me;
 