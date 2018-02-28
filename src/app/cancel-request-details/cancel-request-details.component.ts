import { Component, OnInit, Input } from "@angular/core";
import { DataTableResource } from '../data-table';
import { RequestDetailsService } from './cancel-request-details.service';
import { debug } from "util";
import { RequestDetails } from '../Interfaces/RequestDetails'


@Component({
    selector: "app-cancel-request-details",
    templateUrl: "./cancel-request-details.component.html",
    styleUrls: ["./cancel-request-details.component.css"],
    providers: [RequestDetailsService]
})

export class CancelRequestDetailsComponent implements OnInit {
    itemResource = null;
    items = [];
    itemCount = 0;
    @Input() requestId: any;
    public requestDetails: RequestDetails;

    constructor(private service: RequestDetailsService) {
        debugger;
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        debugger;
        this.service.getData(this.requestId).subscribe(
            a => {
                this.requestDetails = a;
                this.items = a.RequestHistory;
                this.itemResource = new DataTableResource(this.items);
                this.itemCount = this.items.length;
                console.log(this.requestDetails);
            }
        );
    }
    reloadItems(params) {
        if (this.itemResource != null)
            this.itemResource.query(params).then(items => this.items = items);
        else {
            this.service.getData(this.requestId).subscribe(
                a => {
                    this.requestDetails = a;
                    this.items = a.RequestHistory;
                    this.itemResource = new DataTableResource(this.items);
                    this.itemCount = this.items.length;                    
                    this.itemResource.query(params).then(items => this.items = items);
                    console.log('reloadItems...');
                }
            );
        }
    }


    deleteRequest(){
        alert('deleted');
    }

    downloadPDF(){
        alert('downloaded');        
    }
    closePopup(){
        alert('closed');
    }
}