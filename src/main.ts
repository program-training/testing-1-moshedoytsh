export function stringLength(str: string) {
    return str.length;
}

export function isPalindrome(str: string) {
    return str === [...str].reverse().join('');
}

export function sortArrayOfNumbers(arr: number[]) {
    return arr.sort();
}

export function sqrt(n: number) {
    if (n < 0 ) throw new Error('negative number');
    return Math.sqrt(n);
}

export function sumArray(arr: number[]) {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
}

export async function fetchUserData(userId: number) {
    if (userId < 1 || userId > 10) throw new Error('invalid id');
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return user;
}

export function nextFibonacci(arr: number[]) {
    arr.slice(2).forEach((n, i) => {
        if (arr[i] + arr[i + 1] != n) throw new Error(`invalid sequence ${arr[i]} + ${arr[i + 1]} != ${n}`);
    })
    arr = [0, 0, ...arr];
    return arr[arr.length - 2] + arr[arr.length - 1];
}