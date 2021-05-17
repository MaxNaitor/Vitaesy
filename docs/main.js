(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tiziano Massa\Desktop\Vitaesy\src\main.ts */"zUnb");


/***/ }),

/***/ "0363":
/*!*********************************************************************************!*\
  !*** ./src/app/template/competenze-personali/competenze-personali.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompetenzePersonaliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenzePersonaliComponent", function() { return CompetenzePersonaliComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_forms_competenze_form_competenze_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/forms/competenze-form/competenze.service */ "4tvG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CompetenzePersonaliComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lingua_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lingua_r4.lingua);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Ascolto: ", lingua_r4.ascolto, " - Lettura: ", lingua_r4.lettura, " - Parlato: ", lingua_r4.parlato, "");
} }
function CompetenzePersonaliComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lingue Straniere:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompetenzePersonaliComponent_div_10_div_5_Template, 5, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.competenze.lingueStraniere);
} }
function CompetenzePersonaliComponent_div_11_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comp_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", comp_r6, "");
} }
function CompetenzePersonaliComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Competenze:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompetenzePersonaliComponent_div_11_h5_5_Template, 2, 1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.competenze.competenze);
} }
function CompetenzePersonaliComponent_div_12_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patente_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patente_r8);
} }
function CompetenzePersonaliComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Patenti di guida:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompetenzePersonaliComponent_div_12_h5_5_Template, 2, 1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.competenze.patenti);
} }
class CompetenzePersonaliComponent {
    constructor(compService) {
        this.compService = compService;
    }
    ngOnInit() {
        this.competenze = this.compService.competenze;
        this.compService.aggiornaCompetenze.subscribe((comp) => {
            this.competenze = comp;
        });
    }
}
CompetenzePersonaliComponent.ɵfac = function CompetenzePersonaliComponent_Factory(t) { return new (t || CompetenzePersonaliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_forms_competenze_form_competenze_service__WEBPACK_IMPORTED_MODULE_1__["CompetenzeService"])); };
CompetenzePersonaliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetenzePersonaliComponent, selectors: [["app-competenze-personali"]], decls: 13, vars: 4, consts: [[1, "componente", "rounded"], [1, "row"], [1, "col-md-3"], [1, "col-md-8"], ["class", "row", 4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function CompetenzePersonaliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Competenze Personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lingua Madre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompetenzePersonaliComponent_div_10_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CompetenzePersonaliComponent_div_11_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompetenzePersonaliComponent_div_12_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.competenze.linguaMadre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.competenze.lingueStraniere.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.competenze.competenze.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.competenze.patenti.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".componente[_ngcontent-%COMP%] {\r\n     padding: 1%;\r\n     border: 0.3vh solid rgb(28, 28, 121);\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n     font-size: 0.8vw;\r\n }\r\n \r\n h1[_ngcontent-%COMP%] {\r\n     font-size: 4vh;\r\n }\r\n \r\n h5[_ngcontent-%COMP%] {\r\n     font-size: 2vh;\r\n }\r\n \r\n h4[_ngcontent-%COMP%] {\r\n     font-size: 3vh;\r\n     margin-top: 2vh;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBldGVuemUtcGVyc29uYWxpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0tBQ0ksV0FBVztLQUNYLG9DQUFvQztDQUN4Qzs7Q0FFQTtLQUNJLGdCQUFnQjtDQUNwQjs7Q0FFQTtLQUNJLGNBQWM7Q0FDbEI7O0NBRUE7S0FDSSxjQUFjO0NBQ2xCOztDQUVBO0tBQ0ksY0FBYztLQUNkLGVBQWU7Q0FDbkIiLCJmaWxlIjoiY29tcGV0ZW56ZS1wZXJzb25hbGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuIC5jb21wb25lbnRlIHtcclxuICAgICBwYWRkaW5nOiAxJTtcclxuICAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIHJnYigyOCwgMjgsIDEyMSk7XHJcbiB9XHJcbiBcclxuIHAge1xyXG4gICAgIGZvbnQtc2l6ZTogMC44dnc7XHJcbiB9XHJcblxyXG4gaDEge1xyXG4gICAgIGZvbnQtc2l6ZTogNHZoO1xyXG4gfVxyXG4gXHJcbiBoNSB7XHJcbiAgICAgZm9udC1zaXplOiAydmg7XHJcbiB9XHJcbiBcclxuIGg0IHtcclxuICAgICBmb250LXNpemU6IDN2aDtcclxuICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiB9Il19 */"] });


/***/ }),

/***/ "4Hba":
/*!***********************************************************************************!*\
  !*** ./src/app/template/esperienze-lavorative/esperienze-lavorative.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EsperienzeLavorativeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsperienzeLavorativeComponent", function() { return EsperienzeLavorativeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_forms_esperienze_form_esperienze_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/forms/esperienze-form/esperienze.service */ "h02z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function EsperienzeLavorativeComponent_div_0_div_4_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esp_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, esp_r2.dataFine, "dd/MM/yyyy"));
} }
function EsperienzeLavorativeComponent_div_0_div_4_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esp_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](esp_r2.dataFine);
} }
function EsperienzeLavorativeComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inizio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fine:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EsperienzeLavorativeComponent_div_0_div_4_p_9_Template, 3, 4, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EsperienzeLavorativeComponent_div_0_div_4_p_10_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const esp_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, esp_r2.dataInizio, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isAttuale(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAttuale(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](esp_r2.titolo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](esp_r2.datoreLavoro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](esp_r2.descrizione);
} }
function EsperienzeLavorativeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Esperienze Lavorative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EsperienzeLavorativeComponent_div_0_div_4_Template, 19, 9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.esperienze);
} }
class EsperienzeLavorativeComponent {
    constructor(esperienzeService) {
        this.esperienzeService = esperienzeService;
    }
    ngOnInit() {
        this.esperienze = this.esperienzeService.esperienze;
        this.esperienzeService.aggiornaEsperienze.subscribe((esperienze) => {
            this.esperienze = esperienze;
        });
    }
    isAttuale(idEsperienza) {
        return typeof this.esperienze[idEsperienza].dataFine === 'string';
    }
}
EsperienzeLavorativeComponent.ɵfac = function EsperienzeLavorativeComponent_Factory(t) { return new (t || EsperienzeLavorativeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_forms_esperienze_form_esperienze_service__WEBPACK_IMPORTED_MODULE_1__["EsperienzeService"])); };
EsperienzeLavorativeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EsperienzeLavorativeComponent, selectors: [["app-esperienze-lavorative"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "componente", "rounded"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-3"], [1, "col-md-8"], [2, "width", "35.4vw", "margin-left", "1vw"]], template: function EsperienzeLavorativeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EsperienzeLavorativeComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esperienze.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".componente[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n    border: 0.3vh solid darkblue;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.8vw;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 4vw;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 0.9vw;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 1.5vw;\r\n    margin-top: 2vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzcGVyaWVuemUtbGF2b3JhdGl2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoiZXNwZXJpZW56ZS1sYXZvcmF0aXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbXBvbmVudGUge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIGRhcmtibHVlO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMC44dnc7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6IDAuOXZ3O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMnZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "4tvG":
/*!*************************************************************!*\
  !*** ./src/app/forms/competenze-form/competenze.service.ts ***!
  \*************************************************************/
/*! exports provided: CompetenzeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenzeService", function() { return CompetenzeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CompetenzeService {
    constructor() {
        this.competenze = {
            linguaMadre: 'Italiano',
            lingueStraniere: [{
                    lingua: 'Inglese',
                    ascolto: 'C1',
                    lettura: 'C1',
                    parlato: 'B2'
                },
                {
                    lingua: 'Francese',
                    ascolto: 'A1',
                    lettura: 'B1',
                    parlato: 'A2'
                },
            ],
            competenze: [
                'Comunicazione', 'Problem Solving'
            ],
            patenti: ['B']
        };
        this.aggiornaCompetenze = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    eliminaLingua(id) {
        this.competenze.lingueStraniere.splice(id, 1);
        this.aggiornaCompetenze.next(this.competenze);
    }
    eliminaCompetenza(id) {
        this.competenze.competenze.splice(id, 1);
        this.aggiornaCompetenze.next(this.competenze);
    }
    eliminaPatente(id) {
        this.competenze.patenti.splice(id, 1);
        this.aggiornaCompetenze.next(this.competenze);
    }
    inviaCompetenze(competenze) {
        console.log(competenze);
        this.competenze = competenze;
        this.aggiornaCompetenze.next(this.competenze);
    }
}
CompetenzeService.ɵfac = function CompetenzeService_Factory(t) { return new (t || CompetenzeService)(); };
CompetenzeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompetenzeService, factory: CompetenzeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Benvenuto su VitaEsy!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hai bisogno di aggiornare il tuo CV in modo facile e veloce?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sei nel posto giusto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.compila(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Compila ora il tuo CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hai completato il tuo CV!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hai bisogno di compilarne un altro?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In tal caso,ricominciamo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.compila(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Compila ora il tuo CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
    }
    compila() {
        this.router.navigate(['/riempimento', 'info-personali']);
    }
    ngOnInit() {
        this.stato = this.activeRoute.snapshot.params['stato'];
        this.activeRoute.params.subscribe((params) => {
            console.log(params['stato']);
        });
        console.log(this.stato);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [["class", "row no-gutters text-light", 4, "ngIf"], [1, "row", "no-gutters", "text-light"], [1, "col-md-12"], [1, "titolo"], [1, "corpo"], [1, "coda"], [1, "btn", "btn-success", "titolo", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 11, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stato === "nuovo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stato === "completato");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".col-md-12[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 10vw auto 10vw;\r\n    grid-template-rows: 10vw auto 10vw;\r\n}\r\n\r\n.titolo[_ngcontent-%COMP%] {\r\n    grid-column: 2;\r\n    grid-row: 1;\r\n    margin: auto auto;\r\n}\r\n\r\n.corpo[_ngcontent-%COMP%] {\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n    margin: auto auto;\r\n}\r\n\r\n.coda[_ngcontent-%COMP%] {\r\n    grid-column: 2;\r\n    grid-row: 3;\r\n    margin: auto auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtMTIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTB2dyBhdXRvIDEwdnc7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdncgYXV0byAxMHZ3O1xyXG59XHJcblxyXG4udGl0b2xvIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxufVxyXG5cclxuLmNvcnBvIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxufVxyXG5cclxuLmNvZGEge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBncmlkLXJvdzogMztcclxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Fttd":
/*!*************************************************!*\
  !*** ./src/app/forms/info-form/info.service.ts ***!
  \*************************************************/
/*! exports provided: InfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InfoService {
    constructor() {
        this.inserimento = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.immagine = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    inserisciInfo(info) {
        this.inserimento.next(info);
    }
    previewImmagine(img) {
        this.immagine.next(img);
    }
}
InfoService.ɵfac = function InfoService_Factory(t) { return new (t || InfoService)(); };
InfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InfoService, factory: InfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I7H1":
/*!*************************************************************************!*\
  !*** ./src/app/template/trattamento-dati/trattamento-dati.component.ts ***!
  \*************************************************************************/
/*! exports provided: TrattamentoDatiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrattamentoDatiComponent", function() { return TrattamentoDatiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TrattamentoDatiComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrattamentoDatiComponent.ɵfac = function TrattamentoDatiComponent_Factory(t) { return new (t || TrattamentoDatiComponent)(); };
TrattamentoDatiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrattamentoDatiComponent, selectors: [["app-trattamento-dati"]], decls: 5, vars: 0, consts: [[1, "container", 2, "text-align", "center"]], template: function TrattamentoDatiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trattamento dei dati personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base all\u2019art. 13 del D. Lgs. 196/2003 e all\u2019art. 13 del Regolamento UE 2016/679 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    font-size: 0.8vw;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    margin-top: 1vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXR0YW1lbnRvLWRhdGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoidHJhdHRhbWVudG8tZGF0aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUsIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjh2dztcclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "IMOr":
/*!***********************************************************!*\
  !*** ./src/app/home/descrizione/descrizione.component.ts ***!
  \***********************************************************/
/*! exports provided: DescrizioneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescrizioneComponent", function() { return DescrizioneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DescrizioneComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescrizioneComponent.ɵfac = function DescrizioneComponent_Factory(t) { return new (t || DescrizioneComponent)(); };
DescrizioneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescrizioneComponent, selectors: [["app-descrizione"]], decls: 2, vars: 0, template: function DescrizioneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Un botto di cazzate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcml6aW9uZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "JRg9":
/*!*************************************************************!*\
  !*** ./src/app/template/istruzione/istruzione.component.ts ***!
  \*************************************************************/
/*! exports provided: IstruzioneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstruzioneComponent", function() { return IstruzioneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_forms_istruzione_form_istruzione_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/forms/istruzione-form/istruzione.service */ "tnIB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IstruzioneComponent_div_0_div_4_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ist_r2.dataFine, "dd/MM/yyyy"));
} }
function IstruzioneComponent_div_0_div_4_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ist_r2.dataFine);
} }
function IstruzioneComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inizio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fine:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IstruzioneComponent_div_0_div_4_p_9_Template, 3, 4, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IstruzioneComponent_div_0_div_4_p_10_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ist_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, ist_r2.dataInizio, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isAttuale(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAttuale(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ist_r2.titolo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ist_r2.presso);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ist_r2.descrizione);
} }
function IstruzioneComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Istruzione e Formazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IstruzioneComponent_div_0_div_4_Template, 19, 9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.istruzione);
} }
class IstruzioneComponent {
    constructor(istruzioneService) {
        this.istruzioneService = istruzioneService;
    }
    ngOnInit() {
        this.istruzione = this.istruzioneService.istruzioni;
        this.istruzioneService.aggiornaIstruzione.subscribe((ist) => {
            this.istruzione = ist;
        });
    }
    isAttuale(idEsperienza) {
        return typeof this.istruzione[idEsperienza].dataFine === 'string';
    }
}
IstruzioneComponent.ɵfac = function IstruzioneComponent_Factory(t) { return new (t || IstruzioneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_forms_istruzione_form_istruzione_service__WEBPACK_IMPORTED_MODULE_1__["IstruzioneService"])); };
IstruzioneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IstruzioneComponent, selectors: [["app-istruzione"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "componente", "rounded"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-3"], [1, "col-md-8"], [2, "width", "35.4vw", "margin-left", "1vw"]], template: function IstruzioneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IstruzioneComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.istruzione.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".componente[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n    border: 0.3vh solid rgb(28, 28, 121);\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.8vw;\r\n}\r\n\r\n.date[_ngcontent-%COMP%] {\r\n    padding-left: 0.7vw;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 4vw;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 0.9vw;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 1.5vw;\r\n    margin-top: 2vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzdHJ1emlvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6ImlzdHJ1emlvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29tcG9uZW50ZSB7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGJvcmRlcjogMC4zdmggc29saWQgcmdiKDI4LCAyOCwgMTIxKTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDAuOHZ3O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuN3Z3O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1zaXplOiAwLjl2dztcclxufVxyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "OdKN":
/*!********************************************************************!*\
  !*** ./src/app/forms/esperienze-form/esperienze-form.component.ts ***!
  \********************************************************************/
/*! exports provided: EsperienzeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsperienzeFormComponent", function() { return EsperienzeFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _esperienze_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esperienze.service */ "h02z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EsperienzeFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invia Tutte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsperienzeFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsperienzeFormComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.eliminaTutte(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Elimina Tutte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsperienzeFormComponent_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci la tua esperienza! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsperienzeFormComponent_div_12_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci il datore di lavoro! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsperienzeFormComponent_div_12_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci una descrizione! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsperienzeFormComponent_div_12_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci quando hai iniziato! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EsperienzeFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Esperienza ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EsperienzeFormComponent_div_12_span_4_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Datore di Lavoro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EsperienzeFormComponent_div_12_span_9_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Descrizione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EsperienzeFormComponent_div_12_span_14_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data di Inizio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, EsperienzeFormComponent_div_12_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Data di Fine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EsperienzeFormComponent_div_12_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onDataFineChange(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Lavoro ancora qui");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsperienzeFormComponent_div_12_Template_input_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.adOggi(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsperienzeFormComponent_div_12_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.inviaSingola(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Invia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsperienzeFormComponent_div_12_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.resettaForm(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Svuota");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsperienzeFormComponent_div_12_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.eliminaEsperienza(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Elimina");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getEsperienze()[i_r6].get("titolo").invalid && ctx_r2.getEsperienze()[i_r6].get("titolo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getEsperienze()[i_r6].get("datoreLavoro").invalid && ctx_r2.getEsperienze()[i_r6].get("datoreLavoro").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getEsperienze()[i_r6].get("descrizione").invalid && ctx_r2.getEsperienze()[i_r6].get("descrizione").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getEsperienze()[i_r6].get("dataInizio").invalid && ctx_r2.getEsperienze()[i_r6].get("dataInizio").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.adOggiCheck[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.getEsperienze()[i_r6].invalid);
} }
class EsperienzeFormComponent {
    constructor(esperienzeService) {
        this.esperienzeService = esperienzeService;
        this.esperienzeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'esperienze': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
        });
        this.adOggiCheck = [];
    }
    ngOnInit() {
        for (let esp of this.esperienzeService.esperienze) {
            this.aggiungiEsperienza(esp.titolo, esp.datoreLavoro, esp.descrizione, esp.dataInizio, esp.dataFine);
        }
    }
    aggiungiEsperienza(titolo, datoreLavoro, descrizione, dataInizio, dataFine) {
        this.esperienzeForm.get('esperienze').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'titolo': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](titolo, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'datoreLavoro': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](datoreLavoro, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'descrizione': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](descrizione, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'dataInizio': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](dataInizio, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'dataFine': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](dataFine)
        }));
        this.adOggiCheck.push(false);
    }
    eliminaEsperienza(id) {
        this.esperienzeForm.get('esperienze').removeAt(id);
        this.esperienzeService.eliminaEsperienza(id);
    }
    eliminaTutte() {
        for (let i = this.getEsperienze().length - 1; i >= 0; i--) {
            this.esperienzeService.eliminaEsperienza(i);
        }
        this.esperienzeForm.get('esperienze').clear();
    }
    resettaForm(id) {
        this.esperienzeForm.get('esperienze').controls[id].reset();
    }
    getEsperienze() {
        return this.esperienzeForm.get('esperienze').controls;
    }
    adOggi(id) {
        this.adOggiCheck[id] = !this.adOggiCheck[id];
        this.getEsperienze()[id].get('dataFine').reset();
    }
    onDataFineChange(id) {
        this.adOggiCheck[id] = false;
    }
    onSubmit() {
        let validForms = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
        for (let control of this.getEsperienze()) {
            if (control.valid) {
                validForms.push(control);
            }
        }
        if (validForms.length === 0) {
            alert('Impossibile inviare!\n' +
                'Hai compilato tutti i campi? ');
        }
        let esperienze = validForms.value;
        for (let esp of esperienze) {
            if (esp.dataFine == null) {
                esp.dataFine = 'Ad oggi';
            }
        }
        this.esperienzeService.inviaEsperienze(esperienze);
    }
    inviaSingola(id) {
        this.esperienzeService.inviaEsperienze([this.getEsperienze()[id].value]);
    }
}
EsperienzeFormComponent.ɵfac = function EsperienzeFormComponent_Factory(t) { return new (t || EsperienzeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_esperienze_service__WEBPACK_IMPORTED_MODULE_2__["EsperienzeService"])); };
EsperienzeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EsperienzeFormComponent, selectors: [["app-esperienze-form"]], decls: 13, vars: 4, consts: [[1, "row"], [1, "col-md-11"], [1, "text-light"], [3, "formGroup", "ngSubmit"], [1, "pulsantiera", "row", "sticky"], [1, "col-md-4"], ["type", "button", 1, "btn", "btn-primary", "centered", 3, "click"], ["class", "col-md-4", 4, "ngIf"], ["formArrayName", "esperienze"], ["class", "f-group", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", "centered"], ["type", "button", 1, "btn", "btn-danger", "centered", 3, "click"], [1, "f-group", 3, "formGroupName"], [1, "form-group"], ["for", "titolo"], ["class", "help-block destra", 4, "ngIf"], ["type", "text", "formControlName", "titolo", 1, "form-control"], ["for", "datoreLavoro"], ["type", "text", "formControlName", "datoreLavoro", 1, "form-control"], ["for", "desc"], ["rows", "3", "formControlName", "descrizione", 1, "form-control"], ["for", "dataIn"], ["type", "date", "formControlName", "dataInizio", 1, "form-control"], ["for", "dataFin"], ["type", "date", "formControlName", "dataFine", 1, "form-control", 3, "change"], [1, "form-group", "form-check"], ["type", "checkbox", 1, "form-check-input", 2, "margin-left", "0.5vw", 3, "checked", "click"], [1, "row", "no-gutters"], ["type", "submit", 1, "btn", "btn-success", "centered", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "centered", 3, "click"], [1, "help-block", "destra"]], template: function EsperienzeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Esperienze Lavorative");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EsperienzeFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EsperienzeFormComponent_Template_button_click_7_listener() { return ctx.aggiungiEsperienza(null, null, null, null, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Aggiungi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EsperienzeFormComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EsperienzeFormComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EsperienzeFormComponent_div_12_Template, 39, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.esperienzeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getEsperienze().length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getEsperienze().length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getEsperienze());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".f-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 2vh;\r\n    padding: 4vw;\r\n    border-radius: 15%;\r\n    background-color: white;\r\n}\r\n\r\n.col-md-11[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.col-md-4[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 0.5vw auto 0.5vw;\r\n    grid-template-rows: 0.5vw auto 0.5vw;\r\n    height: 1vh;\r\n}\r\n\r\n.centered[_ngcontent-%COMP%] {\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n}\r\n\r\ntextarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n}\r\n\r\n.sticky[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.destra[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-left: 2vw;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin-top: 1vh;\r\n}\r\n\r\n.pulsantiera[_ngcontent-%COMP%] {\r\n    height: 3.5vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzcGVyaWVuemUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiZXNwZXJpZW56ZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmYtZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgcGFkZGluZzogNHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb2wtbWQtMTEge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbC1tZC00IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNXZ3IGF1dG8gMC41dnc7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNXZ3IGF1dG8gMC41dnc7XHJcbiAgICBoZWlnaHQ6IDF2aDtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRlc3RyYSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5wdWxzYW50aWVyYSB7XHJcbiAgICBoZWlnaHQ6IDMuNXZ3O1xyXG59Il19 */"] });


/***/ }),

/***/ "PTCb":
/*!********************************************************************!*\
  !*** ./src/app/forms/istruzione-form/istruzione-form.component.ts ***!
  \********************************************************************/
/*! exports provided: IstruzioneFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstruzioneFormComponent", function() { return IstruzioneFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _istruzione_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./istruzione.service */ "tnIB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function IstruzioneFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invia Tutte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IstruzioneFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IstruzioneFormComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.eliminaTutte(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Elimina Tutte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IstruzioneFormComponent_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci la tua istruzione! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IstruzioneFormComponent_div_12_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci il datore di lavoro! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IstruzioneFormComponent_div_12_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci una descrizione! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IstruzioneFormComponent_div_12_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Inserisci quando hai iniziato! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IstruzioneFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Istruzione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IstruzioneFormComponent_div_12_span_4_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Istituto/Azienda ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IstruzioneFormComponent_div_12_span_9_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Descrizione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, IstruzioneFormComponent_div_12_span_14_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data di Inizio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, IstruzioneFormComponent_div_12_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Data di Fine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IstruzioneFormComponent_div_12_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onDataFineChange(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Lavoro/Studio ancora qui");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IstruzioneFormComponent_div_12_Template_input_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.adOggi(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IstruzioneFormComponent_div_12_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.inviaSingola(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Invia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IstruzioneFormComponent_div_12_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.resettaForm(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Svuota");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IstruzioneFormComponent_div_12_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r6 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.eliminaIstruzione(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Elimina");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getIstruzioni()[i_r6].get("titolo").invalid && ctx_r2.getIstruzioni()[i_r6].get("titolo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getIstruzioni()[i_r6].get("presso").invalid && ctx_r2.getIstruzioni()[i_r6].get("presso").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getIstruzioni()[i_r6].get("descrizione").invalid && ctx_r2.getIstruzioni()[i_r6].get("descrizione").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getIstruzioni()[i_r6].get("dataInizio").invalid && ctx_r2.getIstruzioni()[i_r6].get("dataInizio").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.adOggiCheck[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.getIstruzioni()[i_r6].invalid);
} }
class IstruzioneFormComponent {
    constructor(istruzioniService) {
        this.istruzioniService = istruzioniService;
        this.istruzioniForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'istruzioni': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
        });
        this.adOggiCheck = [];
    }
    ngOnInit() {
        for (let ist of this.istruzioniService.istruzioni) {
            this.aggiungiIstruzione(ist.titolo, ist.presso, ist.descrizione, ist.dataInizio, ist.dataFine);
        }
        console.log(this.istruzioniForm);
    }
    aggiungiIstruzione(titolo, presso, descrizione, dataInizio, dataFine) {
        this.istruzioniForm.get('istruzioni').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'titolo': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](titolo, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'presso': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](presso, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'descrizione': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](descrizione, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'dataInizio': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](dataInizio, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'dataFine': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](dataFine)
        }));
        this.adOggiCheck.push(false);
    }
    eliminaIstruzione(id) {
        this.istruzioniForm.get('istruzioni').removeAt(id);
        this.istruzioniService.eliminaIstruzione(id);
    }
    eliminaTutte() {
        for (let i = this.getIstruzioni().length - 1; i >= 0; i--) {
            this.istruzioniService.eliminaIstruzione(i);
        }
        this.istruzioniForm.get('istruzioni').clear();
    }
    resettaForm(id) {
        this.istruzioniForm.get('istruzioni').controls[id].reset();
    }
    getIstruzioni() {
        return this.istruzioniForm.get('istruzioni').controls;
    }
    adOggi(id) {
        this.adOggiCheck[id] = !this.adOggiCheck[id];
        this.getIstruzioni()[id].get('dataFine').reset();
    }
    onDataFineChange(id) {
        this.adOggiCheck[id] = false;
    }
    onSubmit() {
        let validForms = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]);
        for (let control of this.getIstruzioni()) {
            if (control.valid) {
                validForms.push(control);
            }
        }
        if (validForms.length === 0) {
            alert('Impossibile inviare!\n' +
                'Hai compilato tutti i campi? ');
        }
        let istruzioni = validForms.value;
        for (let ist of istruzioni) {
            if (ist.dataFine == null) {
                ist.dataFine = 'Ad oggi';
            }
        }
        this.istruzioniService.inviaIstruzioni(istruzioni);
    }
    inviaSingola(id) {
        this.istruzioniService.inviaIstruzioni([this.getIstruzioni()[id].value]);
    }
}
IstruzioneFormComponent.ɵfac = function IstruzioneFormComponent_Factory(t) { return new (t || IstruzioneFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_istruzione_service__WEBPACK_IMPORTED_MODULE_2__["IstruzioneService"])); };
IstruzioneFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IstruzioneFormComponent, selectors: [["app-istruzione-form"]], decls: 13, vars: 4, consts: [[1, "row"], [1, "col-md-11"], [1, "text-light"], [3, "formGroup", "ngSubmit"], [1, "pulsantiera", "row", "sticky"], [1, "col-md-4"], ["type", "button", 1, "btn", "btn-primary", "centered", 3, "click"], ["class", "col-md-4", 4, "ngIf"], ["formArrayName", "istruzioni"], ["class", "f-group", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", "centered"], ["type", "button", 1, "btn", "btn-danger", "centered", 3, "click"], [1, "f-group", 3, "formGroupName"], [1, "form-group"], ["for", "titolo"], ["class", "help-block destra", 4, "ngIf"], ["type", "text", "formControlName", "titolo", 1, "form-control"], ["for", "presso"], ["type", "text", "formControlName", "presso", 1, "form-control"], ["for", "desc"], ["rows", "3", "formControlName", "descrizione", 1, "form-control"], ["for", "dataIn"], ["type", "date", "formControlName", "dataInizio", 1, "form-control"], ["for", "dataFin"], ["type", "date", "formControlName", "dataFine", 1, "form-control", 3, "change"], [1, "form-group", "form-check"], ["type", "checkbox", 1, "form-check-input", 2, "margin-left", "0.5vw", 3, "checked", "click"], [1, "row", "no-gutters"], ["type", "submit", 1, "btn", "btn-success", "centered", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "centered", 3, "click"], [1, "help-block", "destra"]], template: function IstruzioneFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Istruzione e Formazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function IstruzioneFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IstruzioneFormComponent_Template_button_click_7_listener() { return ctx.aggiungiIstruzione(null, null, null, null, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Aggiungi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IstruzioneFormComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, IstruzioneFormComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, IstruzioneFormComponent_div_12_Template, 39, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.istruzioniForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getIstruzioni().length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getIstruzioni().length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getIstruzioni());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".f-group[_ngcontent-%COMP%] {\r\n    margin-top: 1vh;\r\n    margin-bottom: 2vh;\r\n    padding: 4vw;\r\n    border-radius: 15%;\r\n    background-color: white;\r\n}\r\n\r\n.col-md-11[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.col-md-4[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 0.5vw auto 0.5vw;\r\n    grid-template-rows: 0.5vw auto 0.5vw;\r\n    height: 1vh;\r\n}\r\n\r\n.centered[_ngcontent-%COMP%] {\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n}\r\n\r\ntextarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n}\r\n\r\n.sticky[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.destra[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-left: 2vw;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin-top: 1vh;\r\n}\r\n\r\n.pulsantiera[_ngcontent-%COMP%] {\r\n    height: 3vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzdHJ1emlvbmUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiaXN0cnV6aW9uZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmYtZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgcGFkZGluZzogNHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb2wtbWQtMTEge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbC1tZC00IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNXZ3IGF1dG8gMC41dnc7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNXZ3IGF1dG8gMC41dnc7XHJcbiAgICBoZWlnaHQ6IDF2aDtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRlc3RyYSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5wdWxzYW50aWVyYSB7XHJcbiAgICBoZWlnaHQ6IDN2dztcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'Vitaesy';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "corpo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".corpo[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    padding-left: 3vw;\r\n    padding-right: 3vw;\r\n    \r\n    background-image: linear-gradient(to bottom right, #ff4d4d, #ffb3b3);\r\n    overflow-y: auto;\r\n    font-family: 'Times New Roman';\r\n}\r\n.col-md-6[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEVBQTBFO0lBQzFFLG9FQUFvRTtJQUNwRSxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvcnBvIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDN2dztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDN2dztcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMDY5RDksICM5OWNhZmYpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2ZmNGQ0ZCwgI2ZmYjNiMyk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xyXG59XHJcbi5jb2wtbWQtNiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template/template.component */ "t2VV");
/* harmony import */ var _template_infopersonali_infopersonali_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template/infopersonali/infopersonali.component */ "aM6+");
/* harmony import */ var _template_esperienze_lavorative_esperienze_lavorative_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template/esperienze-lavorative/esperienze-lavorative.component */ "4Hba");
/* harmony import */ var _template_istruzione_istruzione_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template/istruzione/istruzione.component */ "JRg9");
/* harmony import */ var _template_competenze_personali_competenze_personali_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template/competenze-personali/competenze-personali.component */ "0363");
/* harmony import */ var _template_trattamento_dati_trattamento_dati_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template/trattamento-dati/trattamento-dati.component */ "I7H1");
/* harmony import */ var _forms_info_form_info_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/info-form/info-form.component */ "m09v");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _home_descrizione_descrizione_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/descrizione/descrizione.component */ "IMOr");
/* harmony import */ var _forms_esperienze_form_esperienze_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/esperienze-form/esperienze-form.component */ "OdKN");
/* harmony import */ var _forms_istruzione_form_istruzione_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/istruzione-form/istruzione-form.component */ "PTCb");
/* harmony import */ var _forms_competenze_form_competenze_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/competenze-form/competenze-form.component */ "roE3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _riempimento_riempimento_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./riempimento/riempimento.component */ "mENJ");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _template_template_component__WEBPACK_IMPORTED_MODULE_5__["TemplateComponent"],
        _template_infopersonali_infopersonali_component__WEBPACK_IMPORTED_MODULE_6__["InfopersonaliComponent"],
        _template_esperienze_lavorative_esperienze_lavorative_component__WEBPACK_IMPORTED_MODULE_7__["EsperienzeLavorativeComponent"],
        _template_istruzione_istruzione_component__WEBPACK_IMPORTED_MODULE_8__["IstruzioneComponent"],
        _template_competenze_personali_competenze_personali_component__WEBPACK_IMPORTED_MODULE_9__["CompetenzePersonaliComponent"],
        _template_trattamento_dati_trattamento_dati_component__WEBPACK_IMPORTED_MODULE_10__["TrattamentoDatiComponent"],
        _forms_info_form_info_form_component__WEBPACK_IMPORTED_MODULE_11__["InfoFormComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _home_descrizione_descrizione_component__WEBPACK_IMPORTED_MODULE_13__["DescrizioneComponent"],
        _forms_esperienze_form_esperienze_form_component__WEBPACK_IMPORTED_MODULE_14__["EsperienzeFormComponent"],
        _forms_istruzione_form_istruzione_form_component__WEBPACK_IMPORTED_MODULE_15__["IstruzioneFormComponent"],
        _forms_competenze_form_competenze_form_component__WEBPACK_IMPORTED_MODULE_16__["CompetenzeFormComponent"],
        _riempimento_riempimento_component__WEBPACK_IMPORTED_MODULE_18__["RiempimentoComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "aM6+":
/*!*******************************************************************!*\
  !*** ./src/app/template/infopersonali/infopersonali.component.ts ***!
  \*******************************************************************/
/*! exports provided: InfopersonaliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfopersonaliComponent", function() { return InfopersonaliComponent; });
/* harmony import */ var _default_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.img */ "efeg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_forms_info_form_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/forms/info-form/info.service */ "Fttd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class InfopersonaliComponent {
    constructor(infoService) {
        this.infoService = infoService;
        this.infoUtente = {
            'nome': 'Nome',
            'cognome': 'Cognome',
            'dataDiNascita': new Date(),
            'indirizzo': 'Indirizzo',
            'civico': 123,
            'telefono': '3663938924',
            'email': 'mail@mail.com',
        };
        this.imageURL = new _default_img__WEBPACK_IMPORTED_MODULE_0__["DefaultImg"]().url;
    }
    ngOnInit() {
        this.infoService.inserimento.subscribe((info) => {
            this.infoUtente = info;
        });
        this.infoService.immagine.subscribe((img) => {
            // File Preview
            const reader = new FileReader();
            reader.onload = () => {
                this.imageURL = reader.result;
            };
            reader.readAsDataURL(img);
        });
    }
}
InfopersonaliComponent.ɵfac = function InfopersonaliComponent_Factory(t) { return new (t || InfopersonaliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_forms_info_form_info_service__WEBPACK_IMPORTED_MODULE_2__["InfoService"])); };
InfopersonaliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InfopersonaliComponent, selectors: [["app-infopersonali"]], decls: 17, vars: 11, consts: [[1, "row", "componente", "rounded"], [1, "col-md-4"], ["alt", "", 1, "foto", "rounded-circle", 3, "src"], [1, "col-md-8"]], template: function InfopersonaliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Info Personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.infoUtente.nome, " ", ctx.infoUtente.cognome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Data di nascita: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 8, ctx.infoUtente.dataDiNascita, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Indirizzo: ", ctx.infoUtente.indirizzo, " ", ctx.infoUtente.civico, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Telefono: ", ctx.infoUtente.telefono, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", ctx.infoUtente.email, "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".foto[_ngcontent-%COMP%] {\r\n   width: 18vh;\r\n   height: 18vh;\r\n   margin-left: 1.5vw;\r\n   margin-top: 1.2vh;\r\n   object-fit: cover;\r\n   object-position: 100% 0;\r\n}\r\n\r\n.componente[_ngcontent-%COMP%] {\r\n    padding: 1%;\r\n    border: 0.3vh solid rgb(28, 28, 121);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 4vh;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 2vh;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 3vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9wZXJzb25hbGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsdUJBQXVCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJpbmZvcGVyc29uYWxpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm90byB7XHJcbiAgIHdpZHRoOiAxOHZoO1xyXG4gICBoZWlnaHQ6IDE4dmg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxLjV2dztcclxuICAgbWFyZ2luLXRvcDogMS4ydmg7XHJcbiAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICBvYmplY3QtcG9zaXRpb246IDEwMCUgMDtcclxufVxyXG5cclxuLmNvbXBvbmVudGUge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXI6IDAuM3ZoIHNvbGlkIHJnYigyOCwgMjgsIDEyMSk7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "efeg":
/*!*******************************************************!*\
  !*** ./src/app/template/infopersonali/default.img.ts ***!
  \*******************************************************/
/*! exports provided: DefaultImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultImg", function() { return DefaultImg; });
class DefaultImg {
    constructor() {
        this.url = 'data:image/jpeg;base64,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';
    }
}


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "row", "no-gutters"], [1, "col-sm-1"], ["href", "https://github.com/MaxNaitor", "target", "_blank"], ["src", "assets/github.png"], ["href", "https://www.linkedin.com/in/tiziano-massa-061151158/", "target", "_blank"], ["src", "assets/linkedin.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    margin-top: -4vh;\r\n    margin-left: -3vw;\r\n    background-color: transparent;\r\n}\r\n\r\na[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    height: 4vh;\r\n    width: 3vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogLTR2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtM3Z3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmEgPiBpbWcge1xyXG4gICAgaGVpZ2h0OiA0dmg7XHJcbiAgICB3aWR0aDogM3Z3O1xyXG59Il19 */"] });


/***/ }),

/***/ "h02z":
/*!*************************************************************!*\
  !*** ./src/app/forms/esperienze-form/esperienze.service.ts ***!
  \*************************************************************/
/*! exports provided: EsperienzeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsperienzeService", function() { return EsperienzeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EsperienzeService {
    constructor() {
        this.esperienze = [
            {
                dataInizio: new Date(),
                dataFine: 'Ad oggi',
                titolo: 'Esperienza 1',
                datoreLavoro: 'Datore 1',
                descrizione: 'Descrizione 1'
            },
            {
                dataInizio: new Date(),
                dataFine: new Date(),
                titolo: 'Esperienza 2',
                datoreLavoro: 'Datore 2',
                descrizione: 'Descrizione 2'
            },
        ];
        this.aggiornaEsperienze = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    inviaEsperienze(esperienze) {
        this.esperienze = esperienze;
        this.aggiornaEsperienze.next(this.esperienze);
    }
    eliminaEsperienza(id) {
        this.esperienze.splice(id, 1);
        this.aggiornaEsperienze.next(this.esperienze);
    }
}
EsperienzeService.ɵfac = function EsperienzeService_Factory(t) { return new (t || EsperienzeService)(); };
EsperienzeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EsperienzeService, factory: EsperienzeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home", "nuovo"]; };
const _c1 = function () { return ["/riempimento", "info-personali"]; };
const _c2 = function () { return ["/riempimento", "esperienze"]; };
const _c3 = function () { return ["/riempimento", "istruzione"]; };
const _c4 = function () { return ["/riempimento", "competenze"]; };
class NavbarComponent {
    constructor() {
        this.active = 1;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 14, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "rounded"], [1, "container-fluid"], [1, "navbar-brand", "text-light", 3, "routerLink"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "text-light", 3, "routerLink", "routerLinkActive"], [1, "nav-link", "text-light", 3, "routerLink", "routerLinkActive"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vitaesy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Info Personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Esperienze Lavorative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Istruzione e Formazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Competenze Personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2))("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4))("routerLinkActive", "active");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    \r\n    background-color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0RBQStEO0lBQy9ELDZCQUE2QjtBQUNqQyIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIDQ1JSwgIzdFQjNFQiwgd2hpdGUpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "m09v":
/*!********************************************************!*\
  !*** ./src/app/forms/info-form/info-form.component.ts ***!
  \********************************************************/
/*! exports provided: InfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoFormComponent", function() { return InfoFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.service */ "Fttd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function InfoFormComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci il tuo nome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InfoFormComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci il tuo cognome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InfoFormComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci la tua data di nascita!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InfoFormComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci il tuo indirizzo! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InfoFormComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci il civico!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InfoFormComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci il tuo numero di telefono!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InfoFormComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci il tuo indirizzo email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class InfoFormComponent {
    constructor(infoService, fb) {
        this.infoService = infoService;
        this.fb = fb;
        this.imgInserita = false;
        this.uploadForm = this.fb.group({
            avatar: [null],
            name: ['']
        });
    }
    ngOnInit() {
        this.infoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'nome': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'cognome': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'dataNascita': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'indirizzo': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'civico': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.civicoValidator.bind(this)]),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
        });
    }
    mostraImg(event) {
        this.imgInserita = true;
        console.log(this.imgInserita);
        const file = event.target.files[0];
        this.uploadForm.patchValue({
            avatar: file
        });
        this.uploadForm.get('avatar').updateValueAndValidity();
        this.infoService.previewImmagine(this.uploadForm.get('avatar').value);
    }
    onSubmit() {
        alert('GESTISCI IMMAGINE PER METTERLA REQUIRED');
        const info = {
            'nome': this.infoForm.get('nome').value,
            'cognome': this.infoForm.get('cognome').value,
            'dataDiNascita': this.infoForm.get('dataNascita').value,
            'indirizzo': this.infoForm.get('indirizzo').value,
            'civico': this.infoForm.get('civico').value,
            'telefono': this.infoForm.get('telefono').value,
            'email': this.infoForm.get('email').value,
        };
        this.infoService.inserisciInfo(info);
    }
    civicoValidator(control) {
        if (control.value <= 0) {
            return { isCivicoInvalid: true };
        }
        return null;
    }
    mostraForm() {
        console.log(this.infoForm);
    }
}
InfoFormComponent.ɵfac = function InfoFormComponent_Factory(t) { return new (t || InfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_info_service__WEBPACK_IMPORTED_MODULE_2__["InfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
InfoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InfoFormComponent, selectors: [["app-info-form"]], decls: 44, vars: 9, consts: [[1, "row"], [1, "col-md-10", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "nome"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "text", "formControlName", "nome", 1, "form-control"], [4, "ngIf"], ["for", "cognome"], ["type", "text", "formControlName", "cognome", 1, "form-control"], ["for", "data"], ["type", "date", "formControlName", "dataNascita", 1, "form-control"], [1, "input-group"], ["type", "text", "formControlName", "indirizzo", 1, "form-control", 2, "width", "80%"], ["type", "number", "formControlName", "civico", "placeholder", "n\u00B0", 1, "form-control"], ["for", "telefono"], ["type", "text", "formControlName", "telefono", 1, "form-control"], ["for", "email"], ["type", "text", "formControlName", "email", "placeholder", "esempio@esempio.com", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]], template: function InfoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Info Personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function InfoFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InfoFormComponent_Template_input_change_8_listener($event) { return ctx.mostraImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, InfoFormComponent_span_13_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cognome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, InfoFormComponent_span_18_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Data di nascita");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, InfoFormComponent_span_23_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Indirizzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, InfoFormComponent_span_30_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, InfoFormComponent_span_31_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, InfoFormComponent_span_36_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, InfoFormComponent_span_41_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Invia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.infoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoForm.get("nome").valid && ctx.infoForm.get("nome").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoForm.get("cognome").valid && ctx.infoForm.get("cognome").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoForm.get("dataNascita").valid && ctx.infoForm.get("dataNascita").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoForm.get("indirizzo").valid && ctx.infoForm.get("indirizzo").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoForm.get("civico").valid && ctx.infoForm.get("civico").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoForm.get("telefono").valid && ctx.infoForm.get("telefono").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoForm.get("email").valid && ctx.infoForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.infoForm.valid || !ctx.imgInserita);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: [".row[_ngcontent-%COMP%] {\r\n    height: 83vh;\r\n    background-color: white;\r\n    border-radius: 15%;\r\n    width: 80vh;\r\n    padding: 5%;\r\n    margin-top:-2vh;\r\n}\r\n\r\nform[_ngcontent-%COMP%]  {\r\n    height: 65vh;\r\n    overflow-y: auto;\r\n    width: 30vw;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoiaW5mby1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIGhlaWdodDogODN2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gICAgd2lkdGg6IDgwdmg7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIG1hcmdpbi10b3A6LTJ2aDtcclxufVxyXG5cclxuZm9ybSAge1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59Il19 */"] });


/***/ }),

/***/ "mENJ":
/*!******************************************************!*\
  !*** ./src/app/riempimento/riempimento.component.ts ***!
  \******************************************************/
/*! exports provided: RiempimentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiempimentoComponent", function() { return RiempimentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template/template.component */ "t2VV");



class RiempimentoComponent {
    constructor() { }
    ngOnInit() {
    }
}
RiempimentoComponent.ɵfac = function RiempimentoComponent_Factory(t) { return new (t || RiempimentoComponent)(); };
RiempimentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RiempimentoComponent, selectors: [["app-riempimento"]], decls: 5, vars: 0, consts: [[1, "row", "no-gutters"], [1, "col-md-6", 2, "padding", "5vh"], [1, "col-md-6"]], template: function RiempimentoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _template_template_component__WEBPACK_IMPORTED_MODULE_2__["TemplateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWVtcGltZW50by5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "roE3":
/*!********************************************************************!*\
  !*** ./src/app/forms/competenze-form/competenze-form.component.ts ***!
  \********************************************************************/
/*! exports provided: CompetenzeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenzeFormComponent", function() { return CompetenzeFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _competenze_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./competenze.service */ "4tvG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CompetenzeFormComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inserisci la tua lingua madre!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompetenzeFormComponent_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La lingua non \u00E8 stata compilata correttamente! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompetenzeFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompetenzeFormComponent_div_15_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ascolto: A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Ascolto: A2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ascolto: B1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ascolto: B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Ascolto: C1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ascolto: C2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Lettura: A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Lettura: A2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Lettura: B1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Lettura: B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Lettura: C1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lettura: C2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Parlato: A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Parlato: A2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Parlato: B1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Parlato: B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Parlato: C1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Parlato: C2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompetenzeFormComponent_div_15_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r5 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.eliminaLingua(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lingua_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lingua_r4.invalid && lingua_r4.touched);
} }
function CompetenzeFormComponent_div_21_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Specifica la competenza! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompetenzeFormComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompetenzeFormComponent_div_21_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompetenzeFormComponent_div_21_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const i_r10 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.eliminaCompetenza(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comp_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comp_r9.invalid && comp_r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r10);
} }
function CompetenzeFormComponent_div_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Specifica la patente! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompetenzeFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompetenzeFormComponent_div_27_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "B1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "B96");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "BE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "CE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "C1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "C1E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "DE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "D1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "D1E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "KA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "CQC Persone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "CQC Merci");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompetenzeFormComponent_div_27_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r15 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.eliminaPatente(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patente_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", patente_r14.invalid && patente_r14.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r15);
} }
class CompetenzeFormComponent {
    constructor(compService) {
        this.compService = compService;
    }
    ngOnInit() {
        this.competenzeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'linguaMadre': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.compService.competenze.linguaMadre, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'lingueStraniere': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            'competenze': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            'patenti': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
        });
        const lingueStraniere = this.compService.competenze.lingueStraniere;
        for (let i = 0; i < lingueStraniere.length; i++) {
            this.aggiungiLingua(lingueStraniere[i].lingua, lingueStraniere[i].ascolto, lingueStraniere[i].lettura, lingueStraniere[i].parlato);
        }
        const competenze = this.compService.competenze.competenze;
        for (let i = 0; i < competenze.length; i++) {
            console.log(competenze[i]);
            this.aggiungiCompetenza(competenze[i]);
        }
        const patenti = this.compService.competenze.patenti;
        for (let i = 0; i < patenti.length; i++) {
            this.aggiungiPatente(patenti[i]);
        }
    }
    aggiungiLingua(lingua, ascolto, lettura, parlato) {
        this.competenzeForm.get('lingueStraniere').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'lingua': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](lingua, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'ascolto': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](ascolto, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'lettura': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](lettura, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'parlato': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](parlato, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        }));
    }
    aggiungiCompetenza(competenza) {
        this.competenzeForm.get('competenze').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](competenza, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
    }
    aggiungiPatente(patente) {
        this.competenzeForm.get('patenti').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patente, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
    }
    eliminaLingua(id) {
        this.competenzeForm.get('lingueStraniere').removeAt(id);
        this.compService.eliminaLingua(id);
    }
    eliminaCompetenza(id) {
        this.competenzeForm.get('competenze').removeAt(id);
        this.compService.eliminaCompetenza(id);
    }
    eliminaPatente(id) {
        this.competenzeForm.get('patenti').removeAt(id);
        this.compService.eliminaPatente(id);
    }
    getLingueStraniere() {
        return this.competenzeForm.get('lingueStraniere').controls;
    }
    getCompetenze() {
        return this.competenzeForm.get('competenze').controls;
    }
    getPatenti() {
        return this.competenzeForm.get('patenti').controls;
    }
    onSubmit() {
        let competenze = {
            linguaMadre: this.competenzeForm.get('linguaMadre').value,
            lingueStraniere: this.competenzeForm.get('lingueStraniere').value,
            competenze: this.competenzeForm.get('competenze').value,
            patenti: this.competenzeForm.get('patenti').value
        };
        this.compService.inviaCompetenze(competenze);
    }
}
CompetenzeFormComponent.ɵfac = function CompetenzeFormComponent_Factory(t) { return new (t || CompetenzeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_competenze_service__WEBPACK_IMPORTED_MODULE_2__["CompetenzeService"])); };
CompetenzeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompetenzeFormComponent, selectors: [["app-competenze-form"]], decls: 30, vars: 6, consts: [[1, "row"], [1, "col-md-10", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "nome"], ["type", "text", "formControlName", "linguaMadre", 1, "form-control"], [4, "ngIf"], ["formArrayName", "lingueStraniere"], ["for", ""], [1, "btn", "btn-primary", "addButton", 3, "click"], ["class", "f-group", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "competenze"], ["class", "f-group", 4, "ngFor", "ngForOf"], ["formArrayName", "patenti"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "f-group", 3, "formGroupName"], [1, "input-group"], ["type", "text", "formControlName", "lingua", "placeholder", "Lingua", 1, "form-control"], ["formControlName", "ascolto", 1, "form-control"], ["value", "A1"], ["value", "A2"], ["value", "B1"], ["value", "B2"], ["value", "C1"], ["value", "C2"], ["formControlName", "lettura", 1, "form-control"], ["formControlName", "parlato", 1, "form-control"], [1, "btn", "btn-danger", 3, "click"], [1, "f-group"], ["type", "text", "placeholder", "Competenza", 1, "form-control", 3, "formControlName"], ["placeholder", "Patente", 1, "form-control", 3, "formControlName"], ["value", "A"], ["value", "B"], ["value", "B96"], ["value", "BE"], ["value", "C"], ["value", "CE"], ["value", "C1E"], ["value", "D"], ["value", "DE"], ["value", "D1"], ["value", "D1E"], ["value", "KA"], ["value", "KB"], ["value", "CQC Persone"], ["value", "CQC Merci"]], template: function CompetenzeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Competenze Personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CompetenzeFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Lingua Madre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CompetenzeFormComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Lingue Straniere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompetenzeFormComponent_Template_button_click_13_listener() { return ctx.aggiungiLingua(null, null, null, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Aggiungi Lingua");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CompetenzeFormComponent_div_15_Template, 46, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Competenze");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompetenzeFormComponent_Template_button_click_19_listener() { return ctx.aggiungiCompetenza(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Aggiungi Competenza");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CompetenzeFormComponent_div_21_Template, 7, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Patenti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompetenzeFormComponent_Template_button_click_25_listener() { return ctx.aggiungiPatente(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Aggiungi Patente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CompetenzeFormComponent_div_27_Template, 45, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Invia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.competenzeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.competenzeForm.get("linguaMadre").valid && ctx.competenzeForm.get("linguaMadre").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getLingueStraniere());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getCompetenze());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getPatenti());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.competenzeForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".row[_ngcontent-%COMP%] {\r\n    height: 83vh;\r\n    overflow-y: auto;\r\n    background-color: white;\r\n    border-radius: 15%;\r\n    width: 80vh;\r\n    padding: 5%;\r\n    margin-top:-2vh;\r\n}\r\n\r\nform[_ngcontent-%COMP%]  {\r\n    height: 50vh;\r\n    width: 30vw;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n}\r\n\r\n.addButton[_ngcontent-%COMP%] {\r\n    margin-left: 2vw;\r\n    margin-bottom: 1vh;\r\n    margin-top: 1vh;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    width: 70vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBldGVuemUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiY29tcGV0ZW56ZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIGhlaWdodDogODN2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICAgIHdpZHRoOiA4MHZoO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBtYXJnaW4tdG9wOi0ydmg7XHJcbn1cclxuXHJcbmZvcm0gIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIHNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uYWRkQnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogNzB2dztcclxufSJdfQ== */"] });


/***/ }),

/***/ "t2VV":
/*!************************************************!*\
  !*** ./src/app/template/template.component.ts ***!
  \************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _infopersonali_infopersonali_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infopersonali/infopersonali.component */ "aM6+");
/* harmony import */ var _esperienze_lavorative_esperienze_lavorative_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esperienze-lavorative/esperienze-lavorative.component */ "4Hba");
/* harmony import */ var _istruzione_istruzione_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./istruzione/istruzione.component */ "JRg9");
/* harmony import */ var _competenze_personali_competenze_personali_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./competenze-personali/competenze-personali.component */ "0363");
/* harmony import */ var _trattamento_dati_trattamento_dati_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trattamento-dati/trattamento-dati.component */ "I7H1");










const _c0 = ["cv"];
class TemplateComponent {
    constructor(elementRef, renderer, router) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.noScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    noScrollMetoo() {
        alert('lanciato');
    }
    generatePdf(nome, cognome) {
        this.renderer.removeStyle(this.cv.nativeElement, 'height');
        let data = document.getElementById('cv');
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(data, { allowTaint: true }).then(canvas => {
            let HTML_Width = canvas.width;
            let HTML_Height = canvas.height;
            let top_left_margin = 0;
            let PDF_Width = HTML_Width + (top_left_margin * 2);
            let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
            let canvas_image_width = HTML_Width;
            let canvas_image_height = HTML_Height;
            let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
            canvas.getContext('2d');
            let imgData = canvas.toDataURL("image/jpeg", 1.0);
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            for (let i = 1; i <= totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height], 'p');
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            pdf.save('CV ' + nome + ' ' + cognome + '.pdf');
        });
        this.router.navigate(['/home', 'completato']);
    }
}
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-template"]], viewQuery: function TemplateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cv = _t.first);
    } }, outputs: { noScroll: "no-scroll" }, decls: 11, vars: 0, consts: [[1, "btn", "btn-success", 3, "click"], ["id", "cv", "appScroll", "", 1, "corpo", 2, "height", "83vh"], ["cv", ""], [2, "font-size", "2.5vw", "margin-top", "1vh"]], template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateComponent_Template_button_click_0_listener() { return ctx.generatePdf("Prova", "De Provis"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Scarica CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Curriculum Vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-infopersonali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-esperienze-lavorative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-istruzione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-competenze-personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-trattamento-dati");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_infopersonali_infopersonali_component__WEBPACK_IMPORTED_MODULE_4__["InfopersonaliComponent"], _esperienze_lavorative_esperienze_lavorative_component__WEBPACK_IMPORTED_MODULE_5__["EsperienzeLavorativeComponent"], _istruzione_istruzione_component__WEBPACK_IMPORTED_MODULE_6__["IstruzioneComponent"], _competenze_personali_competenze_personali_component__WEBPACK_IMPORTED_MODULE_7__["CompetenzePersonaliComponent"], _trattamento_dati_trattamento_dati_component__WEBPACK_IMPORTED_MODULE_8__["TrattamentoDatiComponent"]], styles: [".corpo[_ngcontent-%COMP%] {\r\n    margin-top: -1.5vh;\r\n    \r\n    padding-left: 4vw;\r\n    \r\n    padding-right: 4vw;\r\n    padding-bottom: 3.5vh;\r\n    overflow-y: auto;\r\n    background-color: white;\r\n    border-radius: 15%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-left: 40vw;\r\n    z-index: 1;\r\n    position: sticky;\r\n    top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLE1BQU07QUFDViIsImZpbGUiOiJ0ZW1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvcnBvIHtcclxuICAgIG1hcmdpbi10b3A6IC0xLjV2aDtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMy44dnc7ICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDR2dztcclxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDQuNXZ3OyAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogNHZ3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMuNXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwdnc7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "tnIB":
/*!*************************************************************!*\
  !*** ./src/app/forms/istruzione-form/istruzione.service.ts ***!
  \*************************************************************/
/*! exports provided: IstruzioneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstruzioneService", function() { return IstruzioneService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IstruzioneService {
    constructor() {
        this.istruzioni = [
            {
                dataInizio: new Date(),
                dataFine: 'Ad oggi',
                titolo: 'Istruzione 1',
                presso: 'Presso 1',
                descrizione: 'Descrizione 1'
            },
            {
                dataInizio: new Date(),
                dataFine: new Date(),
                titolo: 'Istruzione 2',
                presso: 'Presso 2',
                descrizione: 'Descrizione 2'
            },
        ];
        this.aggiornaIstruzione = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    inviaIstruzioni(istruzioni) {
        this.istruzioni = istruzioni;
        this.aggiornaIstruzione.next(this.istruzioni);
    }
    eliminaIstruzione(id) {
        this.istruzioni.splice(id, 1);
        this.aggiornaIstruzione.next(this.istruzioni);
    }
}
IstruzioneService.ɵfac = function IstruzioneService_Factory(t) { return new (t || IstruzioneService)(); };
IstruzioneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IstruzioneService, factory: IstruzioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forms_competenze_form_competenze_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/competenze-form/competenze-form.component */ "roE3");
/* harmony import */ var _forms_esperienze_form_esperienze_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/esperienze-form/esperienze-form.component */ "OdKN");
/* harmony import */ var _forms_info_form_info_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/info-form/info-form.component */ "m09v");
/* harmony import */ var _forms_istruzione_form_istruzione_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/istruzione-form/istruzione-form.component */ "PTCb");
/* harmony import */ var _home_descrizione_descrizione_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/descrizione/descrizione.component */ "IMOr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _riempimento_riempimento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./riempimento/riempimento.component */ "mENJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', redirectTo: "/home/nuovo", pathMatch: 'full' },
    {
        path: 'home/:stato', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], children: [
        // { path: ':stato', component: HomeComponent }
        ]
    },
    {
        path: 'riempimento', component: _riempimento_riempimento_component__WEBPACK_IMPORTED_MODULE_7__["RiempimentoComponent"], children: [
            { path: '', component: _home_descrizione_descrizione_component__WEBPACK_IMPORTED_MODULE_5__["DescrizioneComponent"], pathMatch: 'full' },
            { path: 'info-personali', component: _forms_info_form_info_form_component__WEBPACK_IMPORTED_MODULE_3__["InfoFormComponent"] },
            { path: 'esperienze', component: _forms_esperienze_form_esperienze_form_component__WEBPACK_IMPORTED_MODULE_2__["EsperienzeFormComponent"] },
            { path: 'istruzione', component: _forms_istruzione_form_istruzione_form_component__WEBPACK_IMPORTED_MODULE_4__["IstruzioneFormComponent"] },
            { path: 'competenze', component: _forms_competenze_form_competenze_form_component__WEBPACK_IMPORTED_MODULE_1__["CompetenzeFormComponent"] },
        ]
    },
    { path: '**', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map