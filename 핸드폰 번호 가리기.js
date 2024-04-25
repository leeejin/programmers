function solution(phone_number) {
    let length = phone_number.length-4;
    return "*".repeat(length)+ phone_number.slice(length);
}