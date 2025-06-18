//判定アルゴリズムに用いるスタック
class bracketStack {
    /** stackの各要素は'(', '{', '['のいずれか */
    #stack: string[] = [];

    push(b: string) {
        this.#stack.push(b);
    }

    /**     
    * stackが空の場合はundefinedを返すが、空の時は呼ばれない想定
    * @returns stackの先頭の要素
    */
    pop(): string | undefined {
        return this.#stack.pop();
    }

    isEmpty(): boolean {
        return this.#stack.length == 0;
    }

    /**     
    * 閉じられていないかっこの中で一番内側のものを返す
    * stackが空の場合はundefinedを返す
    * @returns stackの一番右側にある括弧 
    */
    lastBracket(): string | undefined {
        if (this.#stack.length == 0){
            return undefined;
        }
        return this.#stack[this.#stack.length - 1];
    }

    /**
     * デバッグ用
     * stackの中身を出力
     */
    print() {
        console.log(this.#stack);
    }
}

/**
 * 二つの括弧を受け取って、それらが対応するかを判定する
 * b1, b2は順番通り与える必要がある
 * stackが空だった場合も考慮してb1にはundefinedが入ることも許容する
 * @param b1 - 1つ目の括弧
 * @param b2 - 2つ目の括弧
 * @returns - 対応するか否か
 */
const areBracketsMatched: (b1: string | undefined, b2: string) => boolean = (b1, b2) => {
    switch(b1) {
        case '(': 
            return b2 === ')';
        case '{':
            return b2 === '}'; 
        case '[': 
            return b2 === ']';
        default:
            return false;
    }
}

/**
 * 与えられた括弧が始まり('(','{','[')かどうか判定
 * stackが空だった場合も考慮してbにはundefinedが入ることも許容する
 * @param b - 括弧
 * @returns - 始まりか否か
 */
const isStartBracket: (b: string | undefined) => boolean = (b) => {
    if(b === undefined) return false;
    return b === '(' || b === '{' || b === '[';
}

/**
 * 与えられた括弧列が条件を満たすか判定
 * 括弧列の長さ N に対して O(N)の計算量で判定
 * @param s - 括弧列
 * @returns - 条件を満たすか否か
 */
export const isValid: (s: string) => boolean = (s) => {
    let bStack: bracketStack = new bracketStack();
    for(let i = 0; i < s.length; i++){
        //開き括弧 -> stackにpush
        if(isStartBracket(s[i])){
            bStack.push(s[i]);
            continue;
        }
        
        //閉じ括弧 -> 閉じられるか確認
        //閉じられなかったらnot valid
        //閉じられるなら、対応する開き括弧をstackから消す
        if(areBracketsMatched(bStack.lastBracket(), s[i])) {
            bStack.pop();
        }
        else {
            return false;
        }
    }

    //開き括弧が余ってなければvalid
    return bStack.isEmpty();
};

// コマンドラインから直接実行されたときの処理
if (require.main === module) {
  const input = process.argv[2];
  const result = isValid(input);
  console.log(result);
}