import { container } from "tsyringe";

import { DayjsDateProvider } from "./implementations/DayjsDateProvider";
import { IDayjsDateProvider } from "./interfaces/IDayjsDateProvider";

container.registerSingleton<IDayjsDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
);