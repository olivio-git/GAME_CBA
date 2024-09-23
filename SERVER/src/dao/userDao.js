class UserDao {
  constructor(userModel) {
    this.userModel = userModel;
  }
  async createUser(data) {
    return await this.userModel.create(data);
  }
  async getUser(id) {
    return await this.userModel.findById(id);
  }
  async userUpdate(id, data) {
    return await this.userModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: data,
      },
      {
        new: true,
      },
    );
  }
  async deleteUser(id) {
    return await this.userModel.deleteOne({ _id: id });
  }
}

export default UserDao;
