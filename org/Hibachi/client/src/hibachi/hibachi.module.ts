/// <reference path='../../typings/hibachiTypescript.d.ts' />
/// <reference path='../../typings/tsd.d.ts' />
//import alertmodule = require('./alert/alert.module');
import {alertmodule} from "../alert/alert.module";
import {collectionmodule} from "../collection/collection.module";
import {listingmodule} from "../listing/listing.module";
import {dialogmodule} from "../dialog/dialog.module";
import {entitymodule} from "../entity/entity.module";
import {paginationmodule} from "../pagination/pagination.module";
import {formmodule} from "../form/form.module";
import {validationmodule} from "../validation/validation.module";
import {workflowmodule} from "../workflow/workflow.module";

//directives
import {SWSaveAndFinish} from "./components/swsaveandfinish";

var hibachimodule = angular.module('hibachi',[
    alertmodule.name,
    collectionmodule.name,
    entitymodule.name,
    dialogmodule.name,
    listingmodule.name,
    paginationmodule.name,
    formmodule.name,
    validationmodule.name,
    workflowmodule.name
]).config([()=>{
}])
.constant('hibachiPartialsPath','hibachi/components/')
.directive('swSaveAndFinish',SWSaveAndFinish.Factory())
;

export{
    hibachimodule
};
