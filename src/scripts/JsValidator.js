var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Helper = (function () {
    function Helper() {
        this.IsAnyError = false;
        this.Errors = [
            {
                Type: 'required',
                ErrorMsg: 'Required field'
            },
            {
                Type: 'email',
                Regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                ErrorMsg: 'Invalid email'
            },
            {
                Type: 'url',
                Regex: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
                ErrorMsg: 'Invalid url'
            },
            {
                Type: 'number',
                Code: function (value) {
                    return isNaN(value);
                },
                ErrorMsg: "Value should contains only digits"
            },
            {
                Type: 'mobile',
                Regex: /^[789]\d{9}$/,
                ErrorMsg: 'Invalid mobile'
            }
        ];
        /**
         * return the error message
         *
         * @protected
         *
         * @memberOf Helper
         */
        this.getErrorMsg = function (errorType) {
            var Msg;
            this.Errors.every(function (item) {
                if (item.Type == errorType) {
                    Msg = item.ErrorMsg;
                    return true;
                }
                return false;
            });
            return Msg;
        };
        /**
         * check whether value is valid or not
         *
         * @protected
         *
         * @memberOf Helper
         */
        this.isError = function (value, error) {
            var ErrorOccured = false;
            this.ErrMsg = "";
            //checking error status
            if (error == undefined) {
                error = {
                    Is: {
                        Required: true
                    }
                };
            }
            else if (error.Is == undefined || error.Is.Required == undefined) {
                error["Is"] = {
                    Required: true
                };
            }
            //fetching error property
            if (error.Type != undefined) {
                var ErrorDef = this.selectError(error.Type);
                for (var property in ErrorDef) {
                    error[property] = error[property] == null ? ErrorDef[property] : error[property];
                }
            }
            //validation start
            if (error.Is.Required) {
                this.ErrMsg = error.Is.Msg == undefined ? "Required field" : error.Is.Msg;
                ErrorOccured = value.toString().length == 0 ? true : false;
            }
            //if regex exist
            if (!ErrorOccured && error.Regex) {
                this.ErrMsg = error.ErrorMsg;
                ErrorOccured = !error.Regex.test(value);
            }
            //if code exist
            if (!ErrorOccured && error.Code) {
                this.ErrMsg = error.ErrorMsg;
                ErrorOccured = error.Code(value);
            }
            //MinMax Check
            if (!ErrorOccured) {
                if (error.MinMax) {
                    this.ErrMsg = error.MinMax.Msg == undefined ? "The length of Value should be between " + error.MinMax.Min.toString() + "and " + error.MinMax.Max.toString() : error.MinMax.Msg;
                    ErrorOccured = (value.length >= error.MinMax.Min) && (value.length <= error.MinMax.Max);
                }
                else if (error.Min) {
                    this.ErrMsg = "Minimum length should be " + error.Min.Length.toString();
                    ErrorOccured = value.length >= error.Min.Length;
                }
                else if (error.Max) {
                    this.ErrMsg = "Maximum length should be " + error.Max.Length.toString();
                    ErrorOccured = value.length <= error.Max.Length;
                }
            }
            // Equal To check
            if (!ErrorOccured && error.Equal) {
                this.ErrMsg = error.Equal.Msg == undefined ? "invalid value" : error.Equal.Msg;
                ErrorOccured = (value === error.Equal.To);
            }
            if (!this.IsAnyError && ErrorOccured) {
                this.IsAnyError = ErrorOccured;
            }
            return ErrorOccured;
        };
        this.selectError = function (type) {
            var OutError;
            this.Errors.every(function (item, index) {
                if (item.Type == type) {
                    OutError = item;
                    OutError['Index'] = index;
                    return false;
                }
                return true;
            });
            return OutError;
        };
        this.selectErrorIndex = function (type) {
            for (var i = 0, length = this.Errors.length; i < length; i++) {
                if (this.Errors[i].Type == type) {
                    return i;
                }
            }
            return -1;
        };
        this.updateError = function (item) {
            var Index = item["Index"], That = this;
            for (var property in item) {
                switch (property) {
                    case 'Type':
                        That.Errors[Index] = item[property];
                        break;
                    case 'Regex':
                        That.Errors[Index] = item[property];
                        break;
                    case 'Code':
                        That.Errors[Index] = item[property];
                        break;
                    case 'ErrorMsg':
                        That.Errors[Index] = item[property];
                        break;
                    case 'Is':
                        That.Errors[Index] = item[property];
                        break;
                }
            }
        };
    }
    return Helper;
}());
var JsValidator = (function (_super) {
    __extends(JsValidator, _super);
    function JsValidator(errors) {
        if (errors === void 0) { errors = []; }
        var _this = _super.call(this) || this;
        /**
         * validate the value
         *
         *
         * @memberOf JsValidator
         */
        _this.isInvalid = function (value, error) {
            // this.ErrMsg = "";
            // if (error == undefined) {
            //     return this.isError(value, <IError>{
            //         Is: {
            //             Required: true
            //         }
            //     });
            // }
            // else if (error.Is == undefined || error.Is.Required == undefined) {
            //     error["Is"] = <any>{
            //         Required: true
            //     }
            //     return this.isError(value, error);
            // }
            return this.isError(value, error);
        };
        _this.isValid = function (value, error) {
            // this.ErrMsg = "";
            // if (error == undefined) {
            //     return !this.isError(value, <IError>{
            //         Is: {
            //             Required: true
            //         }
            //     });
            // }
            // else if (error.Is == undefined || error.Is.Required == undefined) {
            //     error["Is"] = <any>{
            //         Required: true
            //     }
            //     return !this.isError(value, error);
            // }
            return !this.isError(value, error);
        };
        /**
         * set the error definition
         *
         *
         * @memberOf JsValidator
         */
        _this.setErrorDef = function (error) {
            var TmpError = this.selectError(error.Type);
            if (TmpError != null && error.Type == TmpError.Type) {
                this.updateError(error);
            }
            else {
                this.Errors.push(error);
            }
        };
        _this.startValidation = function () {
            this.IsAnyError = false;
        };
        var That = _this;
        errors.forEach(function (item) {
            That.setErrorDef(item);
        });
        return _this;
    }
    return JsValidator;
}(Helper));
/// <reference path="Business/MainLogic.ts" />
//# sourceMappingURL=JsValidator.js.map