define("table",["lodash","santa-components","componentsCore","prop-types"],function(e,t,r,o){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1088)}({0:function(t,r){t.exports=e},1088:function(e,t,r){var o,n;o=[r(2),r(0),r(4),r(3)],void 0===(n=function(e,t,r,o){"use strict";function n(){var r=t.times(this.props.compProp.numOfRows,function(r){var o=t.times(this.props.compProp.numOfColumns,function(t){var o=this.props.getBodyCell(t,r),n="cell_"+r+"_"+t,i={style:this.props.compData.columnsStyle[t],ref:n,key:n};return e.utils.createReactElement("td",i,o)}.bind(this));return e.utils.createReactElement("tr",{key:"row_"+r,ref:"row_"+r},o)}.bind(this)),o=e.utils.createReactElement("tr",{key:"row_spacer",ref:"row_spacer",className:this.classSet({spacer:!0})},e.utils.createReactElement("td",{colSpan:"100%"}));return r.push(o),r}function i(r){var o=r?"header":"footer",n=r?this.props.getHeaderCell:this.props.getFooterCell;return t.times(this.props.compProp.numOfColumns,function(t){var r=n(t),i=o+"_cell_"+t,s={ref:i,key:i};return e.utils.createReactElement("td",s,r)})}var s={displayName:"Table",mixins:[o.mixins.skinBasedComp],propType:{getBodyCell:r.func.isRequired,getHeaderCell:r.func.isRequired,getFooterCell:r.func.isRequired},getSkinProperties:function(){var t={tableBody:{children:n.call(this)}};return this.props.compProp.minHeight&&(t[""]={style:{minHeight:this.props.compProp.minHeight,width:"100%"}},t.table={style:{height:this.props.compProp.minHeight}}),this.props.compProp.header&&(t.tableHeader={children:e.utils.createReactElement("tr",{key:"row_header"},i.call(this,!0))}),this.props.compProp.footer&&(t.tableFooter={children:e.utils.createReactElement("tr",{key:"row_footer"},i.call(this,!1))}),t}};return o.compRegistrar.register("wysiwyg.viewer.components.Table",s),s}.apply(t,o))||(e.exports=n)},2:function(e,r){e.exports=t},3:function(e,t){e.exports=r},4:function(e,t){e.exports=o}})});
//# sourceMappingURL=table.min.js.map