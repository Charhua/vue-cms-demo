"use strict";(self["webpackChunkmycms"]=self["webpackChunkmycms"]||[]).push([[583],{9994:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});n(2181),n(6458);var o=n(3901),d=(n(1703),n(3396)),a=n(4870),r=n(7139),s=n(9242);n(6699);const l="$treeNodeId",i=function(e,t){t&&!t[l]&&Object.defineProperty(t,l,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},c=function(e,t){return e?t[e]:t[l]},h=e=>{let t=!0,n=!0,o=!0;for(let d=0,a=e.length;d<a;d++){const a=e[d];(!0!==a.checked||a.indeterminate)&&(t=!1,a.disabled||(o=!1)),(!1!==a.checked||a.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:o,half:!t&&!n}},u=function(e){if(0===e.childNodes.length)return;const{all:t,none:n,half:o}=h(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):o?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const d=e.parent;d&&0!==d.level&&(e.store.checkStrictly||u(d))},p=function(e,t){const n=e.store.props,o=e.data||{},d=n[t];if("function"===typeof d)return d(o,e);if("string"===typeof d)return o[d];if("undefined"===typeof d){const e=o[t];return void 0===e?"":e}};let f=0;class g{constructor(e){this.id=f++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const t in e)(0,r.RI)(e,t)&&(this[t]=e[t]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const t=e.props;if(t&&"undefined"!==typeof t.isLeaf){const e=p(this,"isLeaf");"boolean"===typeof e&&(this.isLeafByUser=e)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||i(this,this.data),!this.data)return;const n=e.defaultExpandedKeys,o=e.key;o&&n&&n.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}setData(e){let t;Array.isArray(e)||i(this,e),this.data=e,this.childNodes=[],t=0===this.level&&Array.isArray(this.data)?this.data:p(this,"children")||[];for(let n=0,o=t.length;n<o;n++)this.insertChild({data:t[n]})}get label(){return p(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return p(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){return(this.childNodes||[]).some((n=>n===e||t&&n.contains(e)))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,t,n){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof g)){if(!n){const n=this.getChildren(!0);n.includes(e.data)||("undefined"===typeof t||t<0?n.push(e.data):n.splice(t,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=(0,a.qj)(new g(e)),e instanceof g&&e.initialize()}e.level=this.level+1,"undefined"===typeof t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),this.updateLeafState()}insertBefore(e,t){let n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}insertAfter(e,t){let n;t&&(n=this.childNodes.indexOf(t),-1!==n&&(n+=1)),this.insertChild(e,n)}removeChild(e){const t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);const o=this.childNodes.indexOf(e);o>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){t=this.childNodes[n];break}t&&this.removeChild(t)}expand(e,t){const n=()=>{if(t){let e=this.parent;while(e.level>0)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e(),this.childNodes.forEach((e=>{e.canFocus=!0}))};this.shouldLoadData()?this.loadData((e=>{Array.isArray(e)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||u(this),n())})):n()}doCreateChildren(e,t={}){e.forEach((e=>{this.insertChild(Object.assign({data:e},t),void 0,!0)}))}collapse(){this.expanded=!1,this.childNodes.forEach((e=>{e.canFocus=!1}))}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&"undefined"!==typeof this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,n,o){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){const{all:n,allWithoutDisable:d}=h(this.childNodes);this.isLeaf||n||!d||(this.checked=!1,e=!1);const a=()=>{if(t){const n=this.childNodes;for(let r=0,s=n.length;r<s;r++){const d=n[r];o=o||!1!==e;const a=d.disabled?d.checked:o;d.setChecked(a,t,!0,o)}const{half:d,all:a}=h(n);a||(this.checked=a,this.indeterminate=d)}};if(this.shouldLoadData())return void this.loadData((()=>{a(),u(this)}),{checked:!1!==e});a()}const d=this.parent;d&&0!==d.level&&(n||u(d))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const n=this.store.props;let o="children";return n&&(o=n.children||"children"),void 0===t[o]&&(t[o]=null),e&&!t[o]&&(t[o]=[]),t[o]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map((e=>e.data)),n={},o=[];e.forEach(((e,d)=>{const a=e[l],r=!!a&&t.findIndex((e=>e[l]===a))>=0;r?n[a]={index:d,data:e}:o.push({index:d,data:e})})),this.store.lazy||t.forEach((e=>{n[e[l]]||this.removeChildByData(e)})),o.forEach((({index:e,data:t})=>{this.insertChild({data:t},e)})),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const n=n=>{this.loaded=!0,this.loading=!1,this.childNodes=[],this.doCreateChildren(n,t),this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,n)}}}class y{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const t in e)(0,r.RI)(e,t)&&(this[t]=e[t]);this.nodesMap={}}initialize(){if(this.root=new g({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,(e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()}))}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,n=this.lazy,o=function(d){const a=d.root?d.root.childNodes:d.childNodes;if(a.forEach((n=>{n.visible=t.call(n,e,n.data,n),o(n)})),!d.visible&&a.length){let e=!0;e=!a.some((e=>e.visible)),d.root?d.root.visible=!1===e:d.visible=!1===e}e&&(!d.visible||d.isLeaf||n||d.expand())};o(this)}setData(e){const t=e!==this.root.data;t?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof g)return e;const t="object"!==typeof e?e:c(this.key,e);return this.nodesMap[t]||null}insertBefore(e,t){const n=this.getNode(t);n.parent.insertBefore({data:e},n)}insertAfter(e,t){const n=this.getNode(t);n.parent.insertAfter({data:e},n)}remove(e){const t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}append(e,t){const n=t?this.getNode(t):this.root;n&&n.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach((e=>{const n=t[e];n&&n.setChecked(!0,!this.checkStrictly)}))}_initDefaultCheckedNode(e){const t=this.defaultCheckedKeys||[];t.includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(e&&e.data)if(t){const t=e.key;void 0!==t&&(this.nodesMap[e.key]=e)}else this.nodesMap[e.id]=e}deregisterNode(e){const t=this.key;t&&e&&e.data&&(e.childNodes.forEach((e=>{this.deregisterNode(e)})),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1){const n=[],o=function(d){const a=d.root?d.root.childNodes:d.childNodes;a.forEach((d=>{(d.checked||t&&d.indeterminate)&&(!e||e&&d.isLeaf)&&n.push(d.data),o(d)}))};return o(this),n}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map((e=>(e||{})[this.key]))}getHalfCheckedNodes(){const e=[],t=function(n){const o=n.root?n.root.childNodes:n.childNodes;o.forEach((n=>{n.indeterminate&&e.push(n.data),t(n)}))};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map((e=>(e||{})[this.key]))}_getAllNodes(){const e=[],t=this.nodesMap;for(const n in t)(0,r.RI)(t,n)&&e.push(t[n]);return e}updateChildren(e,t){const n=this.nodesMap[e];if(!n)return;const o=n.childNodes;for(let d=o.length-1;d>=0;d--){const e=o[d];this.remove(e.data)}for(let d=0,a=t.length;d<a;d++){const e=t[d];this.append(e,n.data)}}_setCheckedKeys(e,t=!1,n){const o=this._getAllNodes().sort(((e,t)=>t.level-e.level)),d=Object.create(null),a=Object.keys(n);o.forEach((e=>e.setChecked(!1,!1)));for(let r=0,s=o.length;r<s;r++){const n=o[r],s=n.data[e].toString(),l=a.includes(s);if(!l){n.checked&&!d[s]&&n.setChecked(!1,!1);continue}let i=n.parent;while(i&&i.level>0)d[i.data[e]]=!0,i=i.parent;if(n.isLeaf||this.checkStrictly)n.setChecked(!0,!1);else if(n.setChecked(!0,!0),t){n.setChecked(!1,!1);const e=function(t){const n=t.childNodes;n.forEach((t=>{t.isLeaf||t.setChecked(!1,!1),e(t)}))};e(n)}}}setCheckedNodes(e,t=!1){const n=this.key,o={};e.forEach((e=>{o[(e||{})[n]]=!0})),this._setCheckedKeys(n,t,o)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const n=this.key,o={};e.forEach((e=>{o[e]=!0})),this._setCheckedKeys(n,t,o)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach((e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)}))}setChecked(e,t,n){const o=this.getNode(e);o&&o.setChecked(!!t,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,t=!0){const n=e[this.key],o=this.nodesMap[n];this.setCurrentNode(o),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,t=!0){if(null===e||void 0===e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);const n=this.getNode(e);n&&(this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}var C=n(8532),k=n(236),v=n(3034),N=n(9693),m=n(5402);const x=(0,d.aZ)({name:"CaretRight"}),b={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w=(0,d._)("path",{fill:"currentColor",d:"M384 192v640l384-320.064z"},null,-1),D=[w];function E(e,t,n,o,a,r){return(0,d.wg)(),(0,d.iD)("svg",b,D)}var K=(0,m.Z)(x,[["render",E]]),S=n(5989),B=n(9668);const T=(0,d.aZ)({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const t=(0,B.s)("tree"),n=(0,d.f3)("NodeInstance"),o=(0,d.f3)("RootTree");return()=>{const a=e.node,{data:r,store:s}=a;return e.renderContent?e.renderContent(d.h,{_self:n,node:a,data:r,store:s}):o.ctx.slots.default?o.ctx.slots.default({node:a,data:r}):(0,d.h)("span",{class:t.be("node","label")},[a.label])}}});var A=(0,S.Z)(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function _(e){const t=(0,d.f3)("TreeNodeMap",null),n={treeNodeExpand:t=>{e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(n),(0,d.JJ)("TreeNodeMap",n),{broadcastExpanded:t=>{if(e.accordion)for(const e of n.children)e.treeNodeExpand(t)}}}var I=n(488);const H=Symbol("dragEvents");function L({props:e,ctx:t,el$:n,dropIndicator$:o,store:r}){const s=(0,B.s)("tree"),l=(0,a.iH)({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null}),i=({event:n,treeNode:o})=>{if("function"===typeof e.allowDrag&&!e.allowDrag(o.node))return n.preventDefault(),!1;n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain","")}catch(d){}l.value.draggingNode=o,t.emit("node-drag-start",o.node,n)},c=({event:d,treeNode:a})=>{const r=a,i=l.value.dropNode;i&&i!==r&&(0,I.IV)(i.$el,s.is("drop-inner"));const c=l.value.draggingNode;if(!c||!r)return;let h=!0,u=!0,p=!0,f=!0;"function"===typeof e.allowDrop&&(h=e.allowDrop(c.node,r.node,"prev"),f=u=e.allowDrop(c.node,r.node,"inner"),p=e.allowDrop(c.node,r.node,"next")),d.dataTransfer.dropEffect=u||h||p?"move":"none",(h||u||p)&&i!==r&&(i&&t.emit("node-drag-leave",c.node,i.node,d),t.emit("node-drag-enter",c.node,r.node,d)),(h||u||p)&&(l.value.dropNode=r),r.node.nextSibling===c.node&&(p=!1),r.node.previousSibling===c.node&&(h=!1),r.node.contains(c.node,!1)&&(u=!1),(c.node===r.node||c.node.contains(r.node))&&(h=!1,u=!1,p=!1);const g=r.$el.getBoundingClientRect(),y=n.value.getBoundingClientRect();let C;const k=h?u?.25:p?.45:1:-1,v=p?u?.75:h?.55:0:1;let N=-9999;const m=d.clientY-g.top;C=m<g.height*k?"before":m>g.height*v?"after":u?"inner":"none";const x=r.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),b=o.value;"before"===C?N=x.top-y.top:"after"===C&&(N=x.bottom-y.top),b.style.top=`${N}px`,b.style.left=x.right-y.left+"px","inner"===C?(0,I.cn)(r.$el,s.is("drop-inner")):(0,I.IV)(r.$el,s.is("drop-inner")),l.value.showDropIndicator="before"===C||"after"===C,l.value.allowDrop=l.value.showDropIndicator||f,l.value.dropType=C,t.emit("node-drag-over",c.node,r.node,d)},h=e=>{const{draggingNode:n,dropType:o,dropNode:d}=l.value;if(e.preventDefault(),e.dataTransfer.dropEffect="move",n&&d){const a={data:n.node.data};"none"!==o&&n.node.remove(),"before"===o?d.node.parent.insertBefore(a,d.node):"after"===o?d.node.parent.insertAfter(a,d.node):"inner"===o&&d.node.insertChild(a),"none"!==o&&r.value.registerNode(a),(0,I.IV)(d.$el,s.is("drop-inner")),t.emit("node-drag-end",n.node,d.node,o,e),"none"!==o&&t.emit("node-drop",n.node,d.node,o,e)}n&&!d&&t.emit("node-drag-end",n.node,null,o,e),l.value.showDropIndicator=!1,l.value.draggingNode=null,l.value.dropNode=null,l.value.allowDrop=!0};return(0,d.JJ)(H,{treeNodeDragStart:i,treeNodeDragOver:c,treeNodeDragEnd:h}),{dragState:l}}var M=n(8775);const P=(0,d.aZ)({name:"ElTreeNode",components:{ElCollapseTransition:C.Z,ElCheckbox:k.Xb,NodeContent:A,ElIcon:v.gn,Loading:N.Z},props:{node:{type:g,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,t){const n=(0,B.s)("tree"),{broadcastExpanded:o}=_(e),s=(0,d.f3)("RootTree"),l=(0,a.iH)(!1),i=(0,a.iH)(!1),h=(0,a.iH)(null),u=(0,a.iH)(null),p=(0,a.iH)(null),f=(0,d.f3)(H),g=(0,d.FN)();(0,d.JJ)("NodeInstance",g),s||(0,M.N)("Tree","Can not find node's tree."),e.node.expanded&&(l.value=!0,i.value=!0);const y=s.props["children"]||"children";(0,d.YP)((()=>{const t=e.node.data[y];return t&&[...t]}),(()=>{e.node.updateChildren()})),(0,d.YP)((()=>e.node.indeterminate),(t=>{v(e.node.checked,t)})),(0,d.YP)((()=>e.node.checked),(t=>{v(t,e.node.indeterminate)})),(0,d.YP)((()=>e.node.expanded),(e=>{(0,d.Y3)((()=>l.value=e)),e&&(i.value=!0)}));const C=e=>c(s.props.nodeKey,e.data),k=t=>{const n=e.props.class;if(!n)return{};let o;if((0,r.mf)(n)){const{data:e}=t;o=n(e,t)}else o=n;return(0,r.HD)(o)?{[o]:!0}:o},v=(t,n)=>{h.value===t&&u.value===n||s.ctx.emit("check-change",e.node.data,t,n),h.value=t,u.value=n},N=t=>{const n=s.store.value;n.setCurrentNode(e.node),s.ctx.emit("current-change",n.currentNode?n.currentNode.data:null,n.currentNode),s.currentNode.value=e.node,s.props.expandOnClickNode&&x(),s.props.checkOnClickNode&&!e.node.disabled&&b(null,{target:{checked:!e.node.checked}}),s.ctx.emit("node-click",e.node.data,e.node,g,t)},m=t=>{s.instance.vnode.props["onNodeContextmenu"]&&(t.stopPropagation(),t.preventDefault()),s.ctx.emit("node-contextmenu",t,e.node.data,e.node,g)},x=()=>{e.node.isLeaf||(l.value?(s.ctx.emit("node-collapse",e.node.data,e.node,g),e.node.collapse()):(e.node.expand(),t.emit("node-expand",e.node.data,e.node,g)))},b=(t,n)=>{e.node.setChecked(n.target.checked,!s.props.checkStrictly),(0,d.Y3)((()=>{const t=s.store.value;s.ctx.emit("check",e.node.data,{checkedNodes:t.getCheckedNodes(),checkedKeys:t.getCheckedKeys(),halfCheckedNodes:t.getHalfCheckedNodes(),halfCheckedKeys:t.getHalfCheckedKeys()})}))},w=(e,t,n)=>{o(t),s.ctx.emit("node-expand",e,t,n)},D=t=>{s.props.draggable&&f.treeNodeDragStart({event:t,treeNode:e})},E=t=>{t.preventDefault(),s.props.draggable&&f.treeNodeDragOver({event:t,treeNode:{$el:p.value,node:e.node}})},S=e=>{e.preventDefault()},T=e=>{s.props.draggable&&f.treeNodeDragEnd(e)};return{ns:n,node$:p,tree:s,expanded:l,childNodeRendered:i,oldChecked:h,oldIndeterminate:u,getNodeKey:C,getNodeClass:k,handleSelectChange:v,handleClick:N,handleContextMenu:m,handleExpandIconClick:x,handleCheckChange:b,handleChildNodeExpand:w,handleDragStart:D,handleDragOver:E,handleDrop:S,handleDragEnd:T,CaretRight:K}}}),O=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],R=["aria-expanded"];function $(e,t,n,o,a,l){const i=(0,d.up)("el-icon"),c=(0,d.up)("el-checkbox"),h=(0,d.up)("loading"),u=(0,d.up)("node-content"),p=(0,d.up)("el-tree-node"),f=(0,d.up)("el-collapse-transition");return(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",{ref:"node$",class:(0,r.C_)([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=(0,s.iM)(((...t)=>e.handleClick&&e.handleClick(...t)),["stop"])),onContextmenu:t[2]||(t[2]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t)),onDragstart:t[3]||(t[3]=(0,s.iM)(((...t)=>e.handleDragStart&&e.handleDragStart(...t)),["stop"])),onDragover:t[4]||(t[4]=(0,s.iM)(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["stop"])),onDragend:t[5]||(t[5]=(0,s.iM)(((...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),["stop"])),onDrop:t[6]||(t[6]=(0,s.iM)(((...t)=>e.handleDrop&&e.handleDrop(...t)),["stop"]))},[(0,d._)("div",{class:(0,r.C_)(e.ns.be("node","content")),style:(0,r.j5)({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?((0,d.wg)(),(0,d.j4)(i,{key:0,class:(0,r.C_)([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:(0,s.iM)(e.handleExpandIconClick,["stop"])},{default:(0,d.w5)((()=>[((0,d.wg)(),(0,d.j4)((0,d.LL)(e.tree.props.icon||e.CaretRight)))])),_:1},8,["class","onClick"])):(0,d.kq)("v-if",!0),e.showCheckbox?((0,d.wg)(),(0,d.j4)(c,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=(0,s.iM)((()=>{}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):(0,d.kq)("v-if",!0),e.node.loading?((0,d.wg)(),(0,d.j4)(i,{key:2,class:(0,r.C_)([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:(0,d.w5)((()=>[(0,d.Wm)(h)])),_:1},8,["class"])):(0,d.kq)("v-if",!0),(0,d.Wm)(u,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),(0,d.Wm)(f,null,{default:(0,d.w5)((()=>[!e.renderAfterExpand||e.childNodeRendered?(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",{key:0,class:(0,r.C_)(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.node.childNodes,(t=>((0,d.wg)(),(0,d.j4)(p,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])))),128))],10,R)),[[s.F8,e.expanded]]):(0,d.kq)("v-if",!0)])),_:1})],42,O)),[[s.F8,e.node.visible]])}var q=(0,S.Z)(P,[["render",$],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]),F=n(5853),z=n(8823);function Z({el$:e},t){const n=(0,B.s)("tree"),o=(0,a.XI)([]),r=(0,a.XI)([]);(0,d.bv)((()=>{l(),(0,F.on)(e.value,"keydown",s)})),(0,d.Jd)((()=>{(0,F.S1)(e.value,"keydown",s)})),(0,d.ic)((()=>{o.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),r.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))})),(0,d.YP)(r,(e=>{e.forEach((e=>{e.setAttribute("tabindex","-1")}))}));const s=d=>{const a=d.target;if(!a.className.includes(n.b("node")))return;const r=d.code;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const s=o.value.indexOf(a);let l;if([z.n.up,z.n.down].includes(r)){if(d.preventDefault(),r===z.n.up){l=-1===s?0:0!==s?s-1:o.value.length-1;const e=l;while(1){if(t.value.getNode(o.value[l].dataset.key).canFocus)break;if(l--,l===e){l=-1;break}l<0&&(l=o.value.length-1)}}else{l=-1===s?0:s<o.value.length-1?s+1:0;const e=l;while(1){if(t.value.getNode(o.value[l].dataset.key).canFocus)break;if(l++,l===e){l=-1;break}l>=o.value.length&&(l=0)}}-1!==l&&o.value[l].focus()}[z.n.left,z.n.right].includes(r)&&(d.preventDefault(),a.click());const i=a.querySelector('[type="checkbox"]');[z.n.enter,z.n.space].includes(r)&&i&&(d.preventDefault(),i.click())},l=()=>{var t;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),r.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const d=e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);d.length?d[0].setAttribute("tabindex","0"):null==(t=o.value[0])||t.setAttribute("tabindex","0")}}var j=n(7747);const W=(0,d.aZ)({name:"ElTree",components:{ElTreeNode:q},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:[String,Object]},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,t){const{t:n}=(0,j.bU)(),o=(0,B.s)("tree"),r=(0,a.iH)(new y({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));r.value.initialize();const s=(0,a.iH)(r.value.root),l=(0,a.iH)(null),i=(0,a.iH)(null),h=(0,a.iH)(null),{broadcastExpanded:u}=_(e),{dragState:p}=L({props:e,ctx:t,el$:i,dropIndicator$:h,store:r});Z({el$:i},r);const f=(0,d.Fl)((()=>{const{childNodes:e}=s.value;return!e||0===e.length||e.every((({visible:e})=>!e))}));(0,d.YP)((()=>e.defaultCheckedKeys),(e=>{r.value.setDefaultCheckedKey(e)})),(0,d.YP)((()=>e.defaultExpandedKeys),(e=>{r.value.setDefaultExpandedKeys(e)})),(0,d.YP)((()=>e.data),(e=>{r.value.setData(e)}),{deep:!0}),(0,d.YP)((()=>e.checkStrictly),(e=>{r.value.checkStrictly=e}));const g=t=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");r.value.filter(t)},C=t=>c(e.nodeKey,t.data),k=t=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const n=r.value.getNode(t);if(!n)return[];const o=[n.data];let d=n.parent;while(d&&d!==s.value)o.push(d.data),d=d.parent;return o.reverse()},v=(e,t)=>r.value.getCheckedNodes(e,t),N=e=>r.value.getCheckedKeys(e),m=()=>{const e=r.value.getCurrentNode();return e?e.data:null},x=()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const t=m();return t?t[e.nodeKey]:null},b=(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");r.value.setCheckedNodes(t,n)},w=(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");r.value.setCheckedKeys(t,n)},D=(e,t,n)=>{r.value.setChecked(e,t,n)},E=()=>r.value.getHalfCheckedNodes(),K=()=>r.value.getHalfCheckedKeys(),S=(t,n=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");r.value.setUserCurrentNode(t,n)},T=(t,n=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");r.value.setCurrentNodeKey(t,n)},A=e=>r.value.getNode(e),I=e=>{r.value.remove(e)},H=(e,t)=>{r.value.append(e,t)},M=(e,t)=>{r.value.insertBefore(e,t)},P=(e,t)=>{r.value.insertAfter(e,t)},O=(e,n,o)=>{u(n),t.emit("node-expand",e,n,o)},R=(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");r.value.updateChildren(t,n)};return(0,d.JJ)("RootTree",{ctx:t,props:e,store:r,root:s,currentNode:l,instance:(0,d.FN)()}),{ns:o,store:r,root:s,currentNode:l,dragState:p,el$:i,dropIndicator$:h,isEmpty:f,filter:g,getNodeKey:C,getNodePath:k,getCheckedNodes:v,getCheckedKeys:N,getCurrentNode:m,getCurrentKey:x,setCheckedNodes:b,setCheckedKeys:w,setChecked:D,getHalfCheckedNodes:E,getHalfCheckedKeys:K,setCurrentNode:S,setCurrentKey:T,t:n,getNode:A,remove:I,append:H,insertBefore:M,insertAfter:P,handleNodeExpand:O,updateKeyChildren:R}}});function Y(e,t,n,o,a,l){var i;const c=(0,d.up)("el-tree-node");return(0,d.wg)(),(0,d.iD)("div",{ref:"el$",class:(0,r.C_)([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner","inner"===e.dragState.dropType),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.root.childNodes,(t=>((0,d.wg)(),(0,d.j4)(c,{key:e.getNodeKey(t),node:t,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])))),128)),e.isEmpty?((0,d.wg)(),(0,d.iD)("div",{key:0,class:(0,r.C_)(e.ns.e("empty-block"))},[(0,d._)("span",{class:(0,r.C_)(e.ns.e("empty-text"))},(0,r.zw)(null!=(i=e.emptyText)?i:e.t("el.tree.emptyText")),3)],2)):(0,d.kq)("v-if",!0),(0,d.wy)((0,d._)("div",{ref:"dropIndicator$",class:(0,r.C_)(e.ns.e("drop-indicator"))},null,2),[[s.F8,e.dragState.showDropIndicator]])],2)}var J=(0,S.Z)(W,[["render",Y],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);J.install=e=>{e.component(J.name,J)};const U=J,V=U;var X=n(7195),G=n(7171);const Q={class:"role"},ee={class:"menu-tree"};function te(e,t,n,a,r,s){const l=G.Z,i=X.Z,c=V,h=o.Z;return(0,d.wg)(),(0,d.iD)("div",Q,[(0,d.Wm)(l,{searchFormConf:e.searchFormConf,onResetBtnClick:e.handleResetClick,onSubmitBtnClick:e.handleSubmitClick},null,8,["searchFormConf","onResetBtnClick","onSubmitBtnClick"]),(0,d.Wm)(i,{contentTableConf:e.contentTableConf,ref:"pageContentRef",pageName:"role",onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentTableConf","onNewBtnClick","onEditBtnClick"]),(0,d.Wm)(h,{ref:"pageModalRef",defaultInfo:e.defaultInfo,otherInfo:e.otherInfo,modalConfig:e.modalConf,pageName:"role"},{default:(0,d.w5)((()=>[(0,d._)("div",ee,[(0,d.Wm)(c,{ref:"elTreeRef",data:e.menus,"show-checkbox":"","node-key":"id",props:{children:"children",label:"name"},onCheck:e.handleCheckChange},null,8,["data","onCheck"])])])),_:1},8,["defaultInfo","otherInfo","modalConfig"])])}const ne={labelWidth:"120px",formItems:[{field:"name",type:"input",label:"角色名称",placeholder:"请输入角色名称"},{field:"intro",type:"input",label:"权限介绍",placeholder:"请输入权限介绍"}]},oe={title:"角色列表",propList:[{prop:"id",label:"ID",minWidth:100},{prop:"name",label:"角色名",minWidth:"100"},{prop:"intro",label:"权限介绍",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0};var de=n(7416);const ae={formItems:[{field:"name",type:"input",label:"角色名",placeholder:"请输入角色名"},{field:"intro",type:"input",label:"角色介绍",placeholder:"请输入角色介绍"}],colLayout:{span:24},itemStyle:{}};function re(e){const t=[],n=e=>{for(const o of e)o.children?n(o.children):t.push(o.id)};return n(e),t}var se=n(9599),le=n(4560),ie=n(3766),ce=(0,d.aZ)({name:"Role",components:{PageModal:o.Z,PageContent:X.Z,PageSearch:G.Z},setup(){const{pageContentRef:e,handleResetClick:t,handleSubmitClick:n}=(0,de.Y)(),o=(0,a.iH)(),r=e=>{const t=re(e.menuList);(0,d.Y3)((()=>{console.log("测试"),o.value?.setCheckedKeys(t,!1)}))},{pageModalRef:s,defaultInfo:l,handleNewData:i,handleEditData:c}=(0,se.S)(void 0,r),h=(0,le.c)(),{entireMenu:u}=(0,ie.Jk)(h),p=(0,a.iH)({}),f=(e,t)=>{const n=t.checkedKeys,o=t.halfCheckedKeys,d=[...n,...o];console.log("很好",d),p.value={menuList:d}};return{searchFormConf:ne,contentTableConf:oe,pageContentRef:e,handleResetClick:t,handleSubmitClick:n,modalConf:ae,handleCheckChange:f,otherInfo:p,menus:u,elTreeRef:o,pageModalRef:s,defaultInfo:l,handleNewData:i,handleEditData:c}}}),he=n(89);const ue=(0,he.Z)(ce,[["render",te],["__scopeId","data-v-61a3e104"]]);var pe=ue},8532:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(3396),d=n(9242),a=n(5989),r=n(9668);const s=(0,o.aZ)({name:"ElCollapseTransition",setup(){const e=(0,r.s)("collapse-transition");return{ns:e,on:{beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}}}});function l(e,t,n,a,r,s){return(0,o.wg)(),(0,o.j4)(d.uT,(0,o.dG)({name:e.ns.b()},(0,o.mx)(e.on)),{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default")])),_:3},16,["name"])}var i=(0,a.Z)(s,[["render",l],["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);i.install=e=>{e.component(i.name,i)};const c=i}}]);
//# sourceMappingURL=583.88702846.js.map