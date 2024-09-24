import { User } from "../../core/types/User";

export class UserEntity implements User {
    constructor(
        public readonly username: string,
        public readonly password: string
    ) { }
}