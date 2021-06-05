type First<T extends any[]> = T extends [] ? never : T[0];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

let aaaaa: First<[3, 2, 1]> = 3;

console.log(aaaaa);
