class UserService {
  constructor(userDao) {
    this.userDao = userDao;
  }

  async createUser(data) {
    return await this.userDao.createUser(data);
  }
  async getUser(id) {
    return await this.userDao.getUser(id);
  }
  async userUpdate(id, data) {
    return await this.userDao.userUpdate(id, data);
  }
  async deleteUser(id) {
    return await this.userDao.deleteUser(id);
  }
}

export default UserService;
