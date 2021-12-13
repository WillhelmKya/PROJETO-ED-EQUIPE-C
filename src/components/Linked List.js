class TADArray {
    constructor(){
        this.a = new Array(1)
        this.n = 0
    }
    get(i){
        return this.a[i]
    }
    set(i,x){
        const y = this.a[i]
        this.a[i] = x
        return y
    }
    add(i,x){
        /*if (this.n = this.a.length){
            resize()
        }*/
    
    }
}
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

const a = range(1,3)
console.log(a)