export function victory(arr: string[]): string {
    const mat: string[][] = [[], [], []];
    let it = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) mat[i][j] = arr[it++]
    }
    if (check(mat, "X")) return "X";
    if (check(mat, "O")) return "O";
    return "";
}


function check(mat: string[][], sign: string): Boolean {
    for (let i = 0; i < 3; i++) {
        if (mat[i][0] === sign && mat[i][1] === sign && mat[i][2] === sign) return true;
    }
    for (let j = 0; j < 3; j++) {
        if (mat[0][j] === sign && mat[1][j] === sign && mat[2][j] === sign) return true;
    }
    if (mat[0][0] === sign && mat[1][1] === sign && mat[2][2] === sign) return true;
    if (mat[0][2] === sign && mat[1][1] === sign && mat[2][0] === sign) return true;
    return false;
}
