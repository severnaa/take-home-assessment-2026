import { StateRegistrationData } from "./types";

export default function dataLabeler(data: StateRegistrationData[]) {
    let labeledData = {};

    data.forEach((item: StateRegistrationData) => {
        let identifier = item.State
        labeledData[identifier] = item
    });

    return labeledData
}
