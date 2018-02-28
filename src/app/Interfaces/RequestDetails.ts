export interface RequestDetails {
    CreditFacilityId: number;
    ReportingEntity: string;
    LegalEntity: string;
    TotalFacilityLimit: string;
    Currency: string;
    ExpiryDate: string;
    BankName: string;
    BankCity: string;
    BankCountry: string;
    requestHistory: RequestHistory
}

export interface RequestHistory{ 
        UserName: string;
        ActionDate: Date;
        Comment: string;
        IsLatest: boolean;
        CurrentStatusID:number;
        RequestAction: string;
        UserRole:string;
        ShowAcceptRejectBtn : boolean;
        ShowDeleteRequestBtn: boolean;
        ShowCloseRequestBtn: boolean;
}
