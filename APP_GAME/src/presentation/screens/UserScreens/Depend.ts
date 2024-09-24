import { UserRepositoryImplement } from "../../../data/repositories/userRepositoryImplement";
import { GerUserUseCase } from "../../../domain/useCases/getUser";


const userRepository = new UserRepositoryImplement();
export const userUseCase = new GerUserUseCase(userRepository); 