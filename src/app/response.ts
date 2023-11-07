export interface Response {
    status:string,
    message:string,
    data:{
        emailAddress:string,
        otp:number,
    },
    statuscode:number
}
