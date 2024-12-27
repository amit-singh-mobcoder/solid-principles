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





















export {}