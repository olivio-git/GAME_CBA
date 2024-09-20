class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async createUser(req, res) {
    const { codigoUsuario, password, email } = req.body;
    if (!codigoUsuario && !email && !password) {
      res.status(401).json({
        message: "All data is required!",
      });
    }
    try {
      const responseData = await this.userService.createUser({
        codigoUsuario,
        password,
        email,
      });
      res
        .status(200)
        .json({ message: "User created successfull!", user: responseData });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async getUser(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({ message: "Id is required!" });
    }
    try {
      const user = await this.userService.getUser(id);

      res.status(200).json({ message: "User get successfull!", user: user });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async userUpdate(req, res) {
    const { id } = req.params;
    const { fullName, email, age } = req.body;
    try {
      const user = await this.userService.userUpdate(id, {
        fullName,
        email,
        age,
      });
      res.status(200).json({ message: "User update successfull!", user });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const user = await this.userService.deleteUser(id);
      res.status(200).json({ message: "User delete successfull!", user: user });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

export default UserController;
