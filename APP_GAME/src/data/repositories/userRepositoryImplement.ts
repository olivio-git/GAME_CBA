import { User } from "../../core/types/User";
import { UserEntity } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserRepositoryImplement implements UserRepository { //interactua con las vistas con la capa de presentación
    async getUser(username: string): Promise<User> {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return new UserEntity(data.login, data.password);
    }
}