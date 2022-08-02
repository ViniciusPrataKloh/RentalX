

interface IDayjsDateProvider {
    convertToUtcFormat(date: Date): string;
    compareInHours(expected_return_date: Date): number
    compareInHours(expected_return_date: Date): number;
}

export { IDayjsDateProvider };
