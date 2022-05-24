import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar: string;
}

@injectable()
class UpdateAvatarService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ user_id, avatar }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatar;

        this.usersRepository.create(user);
    }

}

export { UpdateAvatarService };