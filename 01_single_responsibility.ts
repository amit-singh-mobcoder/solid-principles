// Bad Example: A class handling both report generation and file-saving.
class Report {
    generateRepote(data: any){
        console.log('generating report...')
    }

    saveToFile(data: any){
        console.log('saving file...')
    }
}

// Good Example: Separate classes for generating and saving reports.

class ReportGenerator {
    generate(data: any) {
        console.log('generating report...')
    }
}

class FileSaver {
    saveToFile(data: any) {
        console.log('Saving file...')
    }
}



// -------------- Another Example ---------------------------
// BAD Example: Suppose we have a class handling both user data and email sending.

class UserServices {
    createUser(username: string, email: string) {
        // Save user to database
        console.log(`User ${username} created.`);

        // Send welcome email
        console.log(`Welcome email sent to ${email}.`);
    }
}

// Improved Example: Split the responsibilities into separate classes:
class UserService {
    createUser(username: string) {
        console.log(`User ${username} created.`);
    }
}

class EmailService {
    sendWelcomeEmail(email: string) {
        console.log(`Welcome email sent to ${email}.`);
    }
}

// Usage
const userService = new UserService();
const emailService = new EmailService();

userService.createUser("JohnDoe");
emailService.sendWelcomeEmail("john@example.com");


















export {}