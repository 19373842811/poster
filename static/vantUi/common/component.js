Object.defineProperty(exports,"__esModule",{value:!0}),exports.VantComponent=function(s){var a={};r=s,t=a,o={data:"data",props:"properties",watch:"observers",mixins:"behaviors",methods:"methods",beforeCreate:"created",created:"attached",mounted:"ready",destroyed:"detached",classes:"externalClasses"},Object.keys(o).forEach((function(e){r[e]&&(t[o[e]]=r[e])})),a.externalClasses=a.externalClasses||[],a.externalClasses.push("custom-class"),a.behaviors=a.behaviors||[],a.behaviors.push(e.basic);var r,t,o;var i=s.relation;i&&(a.relations=i.relations,a.behaviors.push(i.mixin));s.field&&a.behaviors.push("wx://form-field");a.options={multipleSlots:!0,addGlobalClass:!0},Component(a)};var e=require("../mixins/basic");