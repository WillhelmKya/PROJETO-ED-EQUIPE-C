class Lista {
    constructor(){
        this.a = []
    }
    set(i,x){
        this.a[i] = x
    }
    get(i){
        return this.a[i]
    }
    add(i,x){
        if (this.a[i]!= null){
                this.a.splice(i,0,x)
            }
        else {
            this.a[i] = x;
        }
        this.tailIndex++;
        return this.a
    }
    remove(i){
        this.a.splice(i,1)
        return this.a
    }
    }


