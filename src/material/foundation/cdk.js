
class MDCDK {
    constructor(root,options={}){
        this.root=root
        this.options=options

        this.init()
    }

    init(){}

    destroy(){}

    on(type,listener){
        this.addEventListener(type,listener)
    }
    off(type,listener){
        this.removeEventListener(type,listener)
    }
    emit(type,detail){
        this.dispatchEvent(type,new CustomEvent(type,{
            bubbles:true,
            cancelable:true,
            detail
        }))
    }
}

export{
    MDCDK
}