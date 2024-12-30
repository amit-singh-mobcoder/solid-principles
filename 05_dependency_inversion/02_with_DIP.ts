/*
To implement the Dependency Inversion Principle, we need to ensure that the UserService depends on an abstraction (interface) instead of the concrete class ConcreteUserRepository. This makes the code more flexible, testable, and maintainable.
*/
interface IUSER {
    username: string;
    password: string;
}

// abstraction for the repository
interface IUserRepository {
    findUserBy(username: string): IUSER | null;
    createUser(user: IUSER): void
}

// concrete implementation of repository
class ConcreteUserRepository implements IUserRepository {
    private users: IUSER[] = [{ username: 'test', password: 'pass123' }];

    findUserBy(username: string): IUSER | null {
        return this.users.find(user => user.username === username) || null;
    }
    createUser(user: IUSER): void {
        this.users.push(user);
    }
}

// user service depends on the abstraction not the concrete implementation
class UserService {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    registerUser(username: string, password: string): string {
        const isUserExist = this.userRepository.findUserBy(username);
        if (isUserExist) {
            return 'User with username already exists';
        }

        this.userRepository.createUser({ username, password });
        return 'User created successfully';
    }
}

const userRepository = new ConcreteUserRepository();
const userService = new UserService(userRepository);

console.log(userService.registerUser('test', 'pass123')); // User with username already exists
console.log(userService.registerUser('new_user', 'new_pass')); // User created successfully

// High level module ==> UserService
// Low level module ==> ConcreteUserRepository

/**
 * In Our Case:
 * High level module (UserService) doesn't depends on Low level module (ConcreteUserRepository), But
 * Both depends on abstraction (IUserRepository)
 */















export {}