import {jsDateToUnixDate} from "./utils";

class VDLP{
   private auth?: string;
   private readonly baseURL:string = 'https://app.visualdlp.com/PublicApi'

   setAuth(username:string, password:string ){
      this.auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
      return this
   }
   constructor(username?:string, password?:string ) {
      if(username && password) this.setAuth(username,password)
   }

   private fetchPost(urlPath:string, body?:object){
      if(!this.auth) throw new Error('Missing Authorization')
      return fetch( this.baseURL + urlPath, {
         method: 'post',
         body: JSON.stringify(body),
         headers: {'Content-Type': 'application/json', 'Authorization': this.auth}
      })
      // return 'fetch/' + urlPath
   }
   private fetchGet(urlPath:string){
      if(!this.auth) throw new Error('Missing Authorization')
      return fetch( this.baseURL + urlPath, {
         method: 'get',
         headers: {'Accept': 'application/json', 'Authorization': this.auth}
      })
   }

   GetActiveAccountAgingReportData(){
      return this.fetchPost('/GetActiveAccountAgingReportData')
   }


   GetAgedAccountBalanceForOpenTransactions(){
      return this.fetchPost('/GetAgedAccountBalanceForOpenTransactions')
   }

   GetDoctorsList(){
      return this.fetchGet('/GetDoctorsList')
   }

   GetProductPriceList(){
      return this.fetchPost('/GetProductPriceList')
   }
   GetOrderByShipDate(startDate:Date, endDate:Date){
      const body = {StartDate: jsDateToUnixDate(startDate) , EndDate: jsDateToUnixDate(endDate)}
      return this.fetchPost('/GetOrderByShipDate' , body)
   }

}

export const initializeVDLP = (username?:string , password?:string) => new VDLP(username, password)