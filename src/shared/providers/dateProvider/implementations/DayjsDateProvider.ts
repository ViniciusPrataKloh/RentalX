import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDayjsDateProvider } from "../interfaces/IDayjsDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDayjsDateProvider {

    convertToUtcFormat(date: Date): string {
        return dayjs(date).utc().local().format();
    }

    getDateNowUtcFormat(): string {
        return dayjs().utc().local().format();
    };

    compareInHours(expected_return_date: Date): number {
        const dateNow = this.getDateNowUtcFormat();
        const expectedReturnDateFormat = this.convertToUtcFormat(expected_return_date);

        return dayjs(expectedReturnDateFormat).diff(dateNow, "hours");
    }

}

export { DayjsDateProvider };
