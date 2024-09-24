import { User } from "../../core/types/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class GerUserUseCase {
    constructor(private userRepository: UserRepository) { }
    async execute(username: string): Promise<User> {
        return this.userRepository.getUser(username);
    }
}