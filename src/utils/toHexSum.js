import chartMapper from "./chartMapper";
import is_numeric from "./isNumaric";

export default function toHexSum(hex) {
    let hexSum = 0;
    for (let i = 0; i < hex.length; i++) {
        if (is_numeric(hex[i])) {
            hexSum += Number(hex[i]);
        } else {
            hexSum += chartMapper[hex[i].toLowerCase()];
        }
    }
    return hexSum;
}