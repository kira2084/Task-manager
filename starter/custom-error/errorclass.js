

class customerrorapi extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode=statuscode;
    }
}

const createcustomerror=(msg,statuscode)=>{
    return new customerrorapi(msg,statuscode);
}

module.exports={createcustomerror,customerrorapi};