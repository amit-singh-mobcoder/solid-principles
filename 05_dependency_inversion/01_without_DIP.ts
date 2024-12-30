interface IUSER {
    username: string;
    password: string;
}


class ConcreteUserRepository {
    private users: IUSER[] = [{username: 'test', password: 'pass123'}]

    findUserBy(username: string): IUSER | null {
        const user = this.users.find((user) => user.username === username);
        if(user) return user
        return null;
    }

    createUser(user: IUSER): void {
        this.users.push(user);
    }
}

class UserService {
    private userRepository: ConcreteUserRepository; // Direct Dependency on Concrete Implementation

    constructor(userRepository: ConcreteUserRepository){
        this.userRepository = userRepository;
    }

    registerUser(username: string, password: string){
        const isUserExist = this.userRepository.findUserBy(username);
        if(isUserExist){
            return 'User with username already exists'
        }

        // create user
        this.userRepository.createUser({ username, password })
        return 'User created successfully';
    }
}

const userRepository = new ConcreteUserRepository()
const userService = new UserService(userRepository);

console.log(userService.registerUser('test', 'pass123')); // User with username already exists
console.log(userService.registerUser('new_user', 'new_pass')); // User created successfully
























export {}