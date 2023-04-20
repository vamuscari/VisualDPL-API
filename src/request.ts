import {jsDateToUnixDate} from "./utils";
import {VDLPOrder} from "./interfaces";
import {Response} from "node-fetch";
class VDLP{
   private auth?: string;
   private readonly baseURL:string = 'https://app.visualdlp.com/PublicApi'
   private responseType: 'truncated' | 'base' = 'truncated'

   setAuth(username:string, password:string ){
      this.auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
      return this
   }
   setResponseType(responseType: 'truncated' | 'base' ):void{
      this.responseType = responseType
   }
   constructor(username?:string, password?:string ) {
      if(username && password) this.setAuth(username,password)
   }

   private fetchPost<T>(urlPath:string, body?:object):Promise<globalThis.Response>{
      if(!this.auth) throw new Error('Missing Authorization')
      return fetch( this.baseURL + urlPath, {
         method: 'post',
         body: JSON.stringify(body),
         headers: {'Content-Type': 'application/json', 'Authorization': this.auth}
      })//.then( res => this.responseType === "base" ? res : res.json().then( json => json.results))
   }
   private fetchGet(urlPath:string){
      if(!this.auth) throw new Error('Missing Authorization')
      return fetch( this.baseURL + urlPath, {
         method: 'get',
         headers: {'Accept': 'application/json', 'Authorization': this.auth}
      })
   }

   GetAccountAgingReport():Promise<any>{
      return this.fetchPost('/GetAccountAgingReport')
   }
   GetActiveAccountAgingReportData(){
      return this.fetchPost('/GetActiveAccountAgingReportData')
   }
   GetAccountActivityForAccountingPeriod(AccountPeriod:string){
      const body = {AccountPeriod: AccountPeriod}
      return this.fetchPost('/GetAccountActivityInDateRange' , body)
   }
   GetAccountActivityInDateRange(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetAccountActivityInDateRange' , body)
   }
   GetAccountNotesInDateRange(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetAccountNotesInDateRange' , body)
   }
   GetAgedAccountBalanceForOpenTransactions(){
      return this.fetchPost('/GetAgedAccountBalanceForOpenTransactions')
   }
   GetCreditAndDebitRegister(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetCreditAndDebitRegister' , body)
   }
   GetDeliveriesByDueDateForAccount(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetDeliveriesByDueDateForAccount' , body)
   }
   GetDiscountRegister(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetDiscountRegister' , body)
   }
   GetEmployeeScans(StartDate:Date, EndDate:Date, employeeId?:string){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetEmployeeScans' , body)
   }
   getFeeScheduleForDoctorAndAccount(AccountId:string, DoctorId:string){
      const body = {AccountId: AccountId , DoctorId: DoctorId}
      return this.fetchPost('/getFeeScheduleForDoctorAndAccount' , body)
   }
   GetInvoiceRegister(StartDate:Date, EndDate:Date, AccountId?:string){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetInvoiceRegister' , body)
   }
   GetInvoiceRegisterWithDetails(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost('/GetInvoiceRegisterWithDetails' , body)
   }
   GetLateOrderListing(){
      return this.fetchPost('/GetLateOrderListing')
   }
   GetOrderByShipDate(StartDate:Date, EndDate:Date, AccountId?:string){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetOrderByShipDate' , body)
   }
   GetOrderByShipDateDetail(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetOrderByShipDateDetail' , body)
   }
   GetOrderReportListing(StartDate:Date, EndDate:Date, AccountId?:string){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetOrderReportListing' , body)
   }
   GetOrdersDueOutByDept(ShipDate:Date){
      const body = {ShipDate: jsDateToUnixDate(ShipDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetOrdersDueOutByDept' , body)
   }
   GetPaymentRegister(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetPaymentRegister' , body)
   }
   GetPickUpsAndDeliveriesByAccount(StartDate:Date, EndDate:Date, AccountId?:string){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetPickUpsAndDeliveriesByAccount' , body)
   }
   GetPickUpsAndDeliveriesForAllOnHold(){
      return this.fetchPost<Array<VDLPOrder>>('/GetPickUpsAndDeliveriesForAllOnHold')
   }
   GetProductAnalysisByAccount(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetPickUpsAndDeliveriesForAllOnHold' , body)
   }
   GetProductPriceList(){
      return this.fetchPost('/GetProductPriceList')
   }
   GetProductSalesHistory(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetProductSalesHistory' , body)
   }
   GetRushOrdersByEntryDate(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetRushOrdersByEntryDate' , body)
   }
   GetSalesByDepartment(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetSalesByDepartment' , body)
   }
   GetSalesRanking(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetSalesRanking' , body)
   }
   GetShippingTodayOrderListing(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetShippingTodayOrderListing' , body)
   }
   GetTaxableAndNonTaxableSalesByLocation(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetTaxableAndNonTaxableSalesByLocation' , body)
   }
   GetTimeClockRecordsForBusinessUnit(StartDate:Date, EndDate:Date){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetTimeClockRecordsForBusinessUnit' , body)
   }
   GetUnitsListing(StartDate:Date, EndDate:Date, AccountId?:string){
      const body = {StartDate: jsDateToUnixDate(StartDate) , EndDate: jsDateToUnixDate(EndDate)}
      return this.fetchPost<Array<VDLPOrder>>('/GetUnitsListing' , body)
   }
   RetentionAnalysis(Weeks:number, PercentThreshold:number){
      const body = {Weeks:Weeks, PercentThreshold:PercentThreshold}
      return this.fetchPost<Array<VDLPOrder>>('/RetentionAnalysis' , body)
   }
   GetDoctorsList(){
      return this.fetchGet('/GetDoctorsList')
   }
   GetProducts(){}
   GetProductsPriceList(){}

}

export const initializeVDLP = (username?:string , password?:string) => new VDLP(username, password)