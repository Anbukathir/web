const { User } = require('../models');
const sendMail = require('./email.service');

const postUser = async (userBodyData) => {
  const userBody = userBodyData;

  const user = await User.create(userBody).then(res => {
    sendMail(res.email);
    return res

  }).catch(err => new Error('error'));
  return user;


}
const queryUser = async (filter, options) => {
  const userBody = filter;
  let sort = "";
  if (options.sortBy) {
    const sortingCriteria = [];
    options.sortBy.split(",").forEach((sortOption) => {
      const [key, order] = sortOption.split(":");
      sortingCriteria.push((order === "desc" ? "-" : "") + key);
    });
    sort = sortingCriteria.join(" ");
  }
  try {
    const user = await User.find(filter).sort(sort);
    // const sort = users.find({ })
    return user;
  } catch (error) {
    console.log('error');
  }
}

const getuserById = async (id) => {

  try {
    return User.find({ _id: id, isDelete: false }, { isDelete: 0 })

  } catch (error) {
    console.log('error');
  }
}

const updateUserById = async (userId, updateBodyData) => {
  const updateBody = updateBodyData;
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    console.log('success');
    updateBody.updatedBy = userId;
    Object.assign(user, updateBody);
    return await user
      .save();
  } catch (error) {
    console.log('error');
  }
}

const deleteUserById = async (userid) => {
  const user = await User.findById(userId);
  if (!user) {
    throw Error("user not found");
  }
  console.log("success");
  user.isDeleted
    = true;
  await user.save();
  return user;
}

const getUserByEmail = async (email) => {
  return User.findOne({ email, isDeleted: false });
};
module.exports = {
  postUser,
  queryUser,
  getuserById,
  updateUserById,
  deleteUserById,
  getUserByEmail
};