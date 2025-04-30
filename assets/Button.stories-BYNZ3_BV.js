import{c as xe,a as z,j as i,b as ke}from"./createLucideIcon-BqX-VbKT.js";import{R as Se}from"./index-l2PZgWEW.js";const D=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,O=xe,Le=(r,n)=>e=>{var l;if((n==null?void 0:n.variants)==null)return O(r,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:o,defaultVariants:s}=n,u=Object.keys(o).map(t=>{const a=e==null?void 0:e[t],d=s==null?void 0:s[t];if(a===null)return null;const c=D(a)||D(d);return o[t][c]}),m=e&&Object.entries(e).reduce((t,a)=>{let[d,c]=a;return c===void 0||(t[d]=c),t},{}),I=n==null||(l=n.compoundVariants)===null||l===void 0?void 0:l.reduce((t,a)=>{let{class:d,className:c,...fe}=a;return Object.entries(fe).every(we=>{let[j,N]=we;return Array.isArray(N)?N.includes({...s,...m}[j]):{...s,...m}[j]===N})?[...t,d,c]:t},[]);return O(r,u,I,e==null?void 0:e.class,e==null?void 0:e.className)};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=z("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Ne=Le("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-12 rounded-md px-8 text-base",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ve=Se.forwardRef(({className:r,variant:n,size:e,asChild:l=!1,isLoading:o=!1,leftIcon:s,rightIcon:u,children:m,disabled:I,...t},a)=>i.jsxs("button",{className:ke(Ne({variant:n,size:e,className:r})),ref:a,disabled:I||o,...t,children:[o&&i.jsx(Ie,{className:"mr-2 h-4 w-4 animate-spin"}),!o&&s&&i.jsx("span",{className:"mr-2",children:s}),m,!o&&u&&i.jsx("span",{className:"ml-2",children:u})]}));ve.displayName="Button";const De={title:"Components/Button",component:ve,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/..."}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"],description:"The visual style of the button"},size:{control:"select",options:["default","sm","lg","icon"],description:"The size of the button"},isLoading:{control:"boolean",description:"Whether the button is in a loading state"},disabled:{control:"boolean",description:"Whether the button is disabled"},leftIcon:{control:{disable:!0},description:"Icon to display on the left side of the button text"},rightIcon:{control:{disable:!0},description:"Icon to display on the right side of the button text"}}},p={args:{children:"Button",variant:"default",size:"default"},parameters:{docs:{description:{story:"The default button style with primary color (#102de6)"}}}},h={args:{children:"Secondary",variant:"secondary"},parameters:{docs:{description:{story:"Secondary button style with a more subtle appearance"}}}},g={args:{children:"Destructive",variant:"destructive"},parameters:{docs:{description:{story:"Used for destructive actions like delete or remove"}}}},y={args:{children:"Outline",variant:"outline"},parameters:{docs:{description:{story:"Outlined button with a border and transparent background"}}}},b={args:{children:"Ghost",variant:"ghost"},parameters:{docs:{description:{story:"Minimal button with no background or border"}}}},v={args:{children:"Link Button",variant:"link"},parameters:{docs:{description:{story:"Button that looks like a link, using the primary color"}}}},f={args:{children:"Small Button",size:"sm"},parameters:{docs:{description:{story:"Small-sized button for compact UIs"}}}},w={args:{children:"Large Button",size:"lg"},parameters:{docs:{description:{story:"Large-sized button for emphasis"}}}},x={args:{children:"With Icon",leftIcon:i.jsx(be,{className:"h-4 w-4"})},parameters:{docs:{description:{story:"Button with an icon on the left side"}}}},k={args:{children:"Next Step",rightIcon:i.jsx(Be,{className:"h-4 w-4"})},parameters:{docs:{description:{story:"Button with an icon on the right side"}}}},S={args:{children:"Loading",isLoading:!0},parameters:{docs:{description:{story:"Loading state with animated spinner"}}}},L={args:{children:"Disabled",disabled:!0},parameters:{docs:{description:{story:"Disabled state with reduced opacity"}}}},B={args:{children:i.jsx(be,{className:"h-4 w-4"}),size:"icon","aria-label":"Send email"},parameters:{docs:{description:{story:"Icon-only button with a square shape and accessibility label"}}}};var R,V,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default",
    size: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "The default button style with primary color (#102de6)"
      }
    }
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,C,T;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary button style with a more subtle appearance"
      }
    }
  }
}`,...(T=(C=h.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var A,U,G;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Destructive",
    variant: "destructive"
  },
  parameters: {
    docs: {
      description: {
        story: "Used for destructive actions like delete or remove"
      }
    }
  }
}`,...(G=(U=g.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var _,q,E;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  },
  parameters: {
    docs: {
      description: {
        story: "Outlined button with a border and transparent background"
      }
    }
  }
}`,...(E=(q=y.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var P,K,$;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal button with no background or border"
      }
    }
  }
}`,...($=(K=b.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var F,H,J;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: "Link Button",
    variant: "link"
  },
  parameters: {
    docs: {
      description: {
        story: "Button that looks like a link, using the primary color"
      }
    }
  }
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    size: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: "Small-sized button for compact UIs"
      }
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: "Large-sized button for emphasis"
      }
    }
  }
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    children: "With Icon",
    leftIcon: <Mail className="h-4 w-4" />
  },
  parameters: {
    docs: {
      description: {
        story: "Button with an icon on the left side"
      }
    }
  }
}`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,oe,ie;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: "Next Step",
    rightIcon: <ArrowRight className="h-4 w-4" />
  },
  parameters: {
    docs: {
      description: {
        story: "Button with an icon on the right side"
      }
    }
  }
}`,...(ie=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,le;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    children: "Loading",
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state with animated spinner"
      }
    }
  }
}`,...(le=(de=S.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ue,me,pe;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity"
      }
    }
  }
}`,...(pe=(me=L.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ge,ye;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    children: <Mail className="h-4 w-4" />,
    size: "icon",
    "aria-label": "Send email"
  },
  parameters: {
    docs: {
      description: {
        story: "Icon-only button with a square shape and accessibility label"
      }
    }
  }
}`,...(ye=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const Oe=["Default","Secondary","Destructive","Outline","Ghost","Link","Small","Large","WithLeftIcon","WithRightIcon","Loading","Disabled","IconButton"];export{p as Default,g as Destructive,L as Disabled,b as Ghost,B as IconButton,w as Large,v as Link,S as Loading,y as Outline,h as Secondary,f as Small,x as WithLeftIcon,k as WithRightIcon,Oe as __namedExportsOrder,De as default};
