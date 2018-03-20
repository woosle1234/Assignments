export class employee{
    _id: string;
    FirstName: string;
    LastName: string;
    AddressStreet: string;
    AddressState: string;
    AddressCity: string;
    AddressZip: string;
    PhoneNum: string;
    Extension: number;
    Position:{
        _id:string;
        PositionName:string;
        PositionDescription:string;
        PositionBaseSalary:number;
        __v:number;
    };
    HireDate:string;
    SalaryBouns:number;
    __v:number;
}