import{c as Se,a as B,j as c,b as Ne}from"./createLucideIcon-BWmfR2X8.js";import{R as ke}from"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,O=Se,Le=(a,s)=>e=>{var l;if((s==null?void 0:s.variants)==null)return O(a,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:o,defaultVariants:n}=s,u=Object.keys(o).map(r=>{const t=e==null?void 0:e[r],d=n==null?void 0:n[r];if(t===null)return null;const i=D(t)||D(d);return o[r][i]}),m=e&&Object.entries(e).reduce((r,t)=>{let[d,i]=t;return i===void 0||(r[d]=i),r},{}),w=s==null||(l=s.compoundVariants)===null||l===void 0?void 0:l.reduce((r,t)=>{let{class:d,className:i,...be}=t;return Object.entries(be).every(xe=>{let[I,z]=xe;return Array.isArray(z)?z.includes({...n,...m}[I]):{...n,...m}[I]===z})?[...r,d,i]:r},[]);return O(a,u,w,e==null?void 0:e.class,e==null?void 0:e.className)};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=B("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),ze=Le("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-12 rounded-md px-8 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ye=ke.forwardRef(({className:a,variant:s,size:e,asChild:l=!1,isLoading:o=!1,leftIcon:n,rightIcon:u,children:m,disabled:w,...r},t)=>c.jsxs("button",{className:Ne(ze({variant:s,size:e,className:a})),ref:t,disabled:w||o,...r,children:[o&&c.jsx(we,{className:"mr-2 h-4 w-4 animate-spin"}),!o&&n&&c.jsx("span",{className:"mr-2",children:n}),m,!o&&u&&c.jsx("span",{className:"ml-2",children:u})]}));ye.displayName="Button";const Oe={title:"Components/Button",component:ye,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon"]},isLoading:{control:"boolean"},disabled:{control:"boolean"}}},g={args:{children:"Button",variant:"default",size:"default"}},h={args:{children:"Secondary",variant:"secondary"}},p={args:{children:"Destructive",variant:"destructive"}},v={args:{children:"Outline",variant:"outline"}},f={args:{children:"Ghost",variant:"ghost"}},y={args:{children:"Link Button",variant:"link"}},b={args:{children:"Small Button",size:"sm"}},x={args:{children:"Large Button",size:"lg"}},S={args:{children:"With Icon",leftIcon:c.jsx(fe,{className:"h-4 w-4"})}},N={args:{children:"Next Step",rightIcon:c.jsx(je,{className:"h-4 w-4"})}},k={args:{children:"Loading",isLoading:!0}},L={args:{children:"Disabled",disabled:!0}},j={args:{children:c.jsx(fe,{className:"h-4 w-4"}),size:"icon","aria-label":"Send email"}};var R,V,C;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default",
    size: "default"
  }
}`,...(C=(V=g.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var W,M,A;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(A=(M=h.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var G,_,E;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  }
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var P,T,q;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...(q=(T=v.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var K,U,$;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...($=(U=f.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var F,H,J;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: "Link Button",
    variant: "link"
  }
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    size: "sm"
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "lg"
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ne;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: "With Icon",
    leftIcon: <Mail className="h-4 w-4" />
  }
}`,...(ne=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,oe,ce;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: "Next Step",
    rightIcon: <ArrowRight className="h-4 w-4" />
  }
}`,...(ce=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,de,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    children: "Loading",
    isLoading: true
  }
}`,...(le=(de=k.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ue,me,ge;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...(ge=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,pe,ve;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    children: <Mail className="h-4 w-4" />,
    size: "icon",
    "aria-label": "Send email"
  }
}`,...(ve=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};const Re=["Default","Secondary","Destructive","Outline","Ghost","Link","Small","Large","WithLeftIcon","WithRightIcon","Loading","Disabled","IconButton"];export{g as Default,p as Destructive,L as Disabled,f as Ghost,j as IconButton,x as Large,y as Link,k as Loading,v as Outline,h as Secondary,b as Small,S as WithLeftIcon,N as WithRightIcon,Re as __namedExportsOrder,Oe as default};
