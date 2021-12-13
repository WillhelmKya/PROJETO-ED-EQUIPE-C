function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

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
        let rr = range(i,this.n)
        let rr2 = range(i,(this.n)-1)
        /*if (this.n = this.a.length){
            resize()
        }*/
        this.a[rr] = this.a[rr2]
        this.a[i] = x
        this.n++
    }
}

const a = new TADArray()
a.add(0,3)
a.add(1,4)
a.add(0,5)
console.log(a.a)