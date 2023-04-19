import {describe, expect, test} from '@jest/globals';
import { initializeVDLP } from '../src/index';

let user:string = process.env.VDLP_USER!
let pw:string = process.env.VDLP_PW!
if (!user || !pw) throw new Error('Auth Env variables not found')

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
    test('VDLP', async () => {
        const vdlp = initializeVDLP(user,pw)
        const startDate = new Date( 2023,2,1,0,0,0)
        const endDate = new Date( 2023,2,2,0,0,0)
        const data = await vdlp.GetOrderByShipDate(startDate, endDate);
        resPrint(data)
        console.log(await data.json())
        expect(user).toEqual('TSDGCloud');
    });
});