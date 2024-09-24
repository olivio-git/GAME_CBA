import { User } from "../../core/types/User";

export interface UserRepository {
    getUser: (username: string) => Promise<User>;
}