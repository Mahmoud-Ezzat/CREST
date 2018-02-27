import { Directive, Input, ContentChild, OnInit,EventEmitter,Output } from '@angular/core';
import { DataTableRow } from './row';
import { CellCallback } from './types';
//import { Output } from '../../../../node_modules/@angular/core/src/metadata/directives';
//import { EventEmitter } from '../../../../CREST-master/node_modules/@angular/core/src/event_emitter';


@Directive({
  selector: 'data-table-column'
})
export class DataTableColumn implements OnInit {

    // init:
    @Input() header: string;
    @Input() sortable = false;
    @Input() resizable = false;
    @Input() property: string;
    @Input() styleClass: string;
    @Input() cellColors: CellCallback;
    @Output() cellClick = new EventEmitter();

    // init and state:
    @Input() width: number | string;
    @Input() visible = true;
    

    @ContentChild('dataTableCell') cellTemplate;
    @ContentChild('dataTableHeader') headerTemplate;

    getCellColor(row: DataTableRow, index: number) {
        if (this.cellColors !== undefined) {
            return (<CellCallback>this.cellColors)(row.item, row, this, index);
        }
    }

    private styleClassObject = {}; // for [ngClass]

    ngOnInit() {
        this._initCellClass();
    }

    private _initCellClass() {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            } else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }

        if (this.styleClass != null) {
            this.styleClassObject = {
                [this.styleClass]: true
            };
        }
    }
    onCellClick(row:any)
    {
        let data:string[] = [];
        data.push(this.property);
        data.push(row.item.ID);
        this.cellClick.emit(data);
    }
}
