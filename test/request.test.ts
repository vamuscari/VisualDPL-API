import {describe, expect, test} from '@jest/globals';
import { initializeVDLP } from '../src/index';

let user:string = process.env.VDLP_USER!
let pw:string = process.env.VDLP_PW!
if (!user || !pw) throw new Error('Auth Env variables not found')
const vdlp = initializeVDLP(user,pw)
vdlp.setResponseType('base')
function resPrint(res:any){
    const n = '\n'
    console.log(
        'status ' + res.status + n +
        'text ' + res.statusText + n +
        'type ' + res.type + n +
        'url ' + res.url + n
    )
}

describe('Request', () => {
    test('GetAccountAgingReport', async () => {
        const data = await vdlp.GetAccountAgingReport();
        expect(data.status).toEqual(200);
    });
    test('GetActiveAccountAgingReportData', async () => {
        const data = await vdlp.GetAccountAgingReport();
        expect(data.status).toEqual(200);
    });
    test('GetAccountActivityInDateRange', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetAccountActivityInDateRange(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetAgedAccountBalanceForOpenTransactions', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetAgedAccountBalanceForOpenTransactions()
        expect(data.status).toEqual(200);
    });
    test('GetCreditAndDebitRegister', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetCreditAndDebitRegister(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetDeliveriesByDueDateForAccount', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetDeliveriesByDueDateForAccount(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetDiscountRegister', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetDiscountRegister(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetEmployeeScans', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetEmployeeScans(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    // test('getFeeScheduleForDoctorAndAccount', async () => {
    //     const startDate = new Date( 2021,2,1,0,0,0)
    //     const endDate = new Date( 2025,4,10,0,0,0)
    //     const data = await vdlp.getFeeScheduleForDoctorAndAccount(startDate, endDate)
    //     expect(data.status).toEqual(200);
    // });
    test('GetInvoiceRegister', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetInvoiceRegister(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetInvoiceRegisterWithDetails', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetInvoiceRegisterWithDetails(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetLateOrderListing', async () => {
        const data = await vdlp.GetLateOrderListing()
        expect(data.status).toEqual(200);
    });
    test('GetAccountNotesInDateRange', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetAccountNotesInDateRange(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetOrderByShipDate', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetOrderByShipDate(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetOrderByShipDateDetail', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetOrderByShipDateDetail(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetOrderByShipDateDetail', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetOrderByShipDateDetail(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetOrderReportListing', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetOrderReportListing(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetOrdersDueOutByDept', async () => {
        const shipDate = new Date( 2025,2,1,0,0,0)
        const data = await vdlp.GetOrdersDueOutByDept(shipDate)
        expect(data.status).toEqual(200);
    });
    test('GetPaymentRegister', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetPaymentRegister(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetPickUpsAndDeliveriesByAccount', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetPickUpsAndDeliveriesByAccount(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetPickUpsAndDeliveriesForAllOnHold', async () => {
        const data = await vdlp.GetPickUpsAndDeliveriesForAllOnHold()
        expect(data.status).toEqual(200);
    });
    test('GetProductAnalysisByAccount', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetProductAnalysisByAccount(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetProductPriceList', async () => {
        const data = await vdlp.GetProductPriceList()
        expect(data.status).toEqual(200);
    });
    test('GetProductSalesHistory', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetProductSalesHistory(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetOrderByShipDateDetail', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetOrderByShipDateDetail(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetRushOrdersByEntryDate', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetRushOrdersByEntryDate(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetSalesByDepartment', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetSalesByDepartment(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetSalesRanking', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetSalesRanking(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetShippingTodayOrderListing', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetShippingTodayOrderListing(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetTaxableAndNonTaxableSalesByLocation', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetTaxableAndNonTaxableSalesByLocation(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetTimeClockRecordsForBusinessUnit', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetTimeClockRecordsForBusinessUnit(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('GetUnitsListing', async () => {
        const startDate = new Date( 2025,2,1,0,0,0)
        const endDate = new Date( 2025,4,10,0,0,0)
        const data = await vdlp.GetUnitsListing(startDate, endDate)
        expect(data.status).toEqual(200);
    });
    test('RetentionAnalysis', async () => {
        const data = await vdlp.RetentionAnalysis(1, 1)
        expect(data.status).toEqual(200);
    });

    // test('GetActiveAccountAgingReportData', async () => {
    //     const vdlp = initializeVDLP(user,pw)
    //     const data = await vdlp.GetActiveAccountAgingReportData();
    //     let json = await data
    //     console.log(data)
    //     expect(data.status).toEqual(200);
    // });
});