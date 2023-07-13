"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[6214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},78666:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:1},o="Architecture Decision Records (ADR)",l={unversionedId:"architecture/README",id:"architecture/README",title:"Architecture Decision Records (ADR)",description:"This is a location to record all high-level architecture decisions in the Cosmos-SDK.",source:"@site/docs/architecture/README.md",sourceDirName:"architecture",slug:"/architecture/",permalink:"/main/architecture/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hubl",permalink:"/main/tooling/hubl"},next:{title:"ADR Creation Process",permalink:"/main/architecture/PROCESS"}},c={},u=[{value:"Rationale",id:"rationale",level:2},{value:"Creating new ADR",id:"creating-new-adr",level:2},{value:"Use RFC 2119 Keywords",id:"use-rfc-2119-keywords",level:3},{value:"ADR Table of Contents",id:"adr-table-of-contents",level:2},{value:"Accepted",id:"accepted",level:3},{value:"Proposed",id:"proposed",level:3},{value:"Draft",id:"draft",level:3}],s={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture-decision-records-adr"},"Architecture Decision Records (ADR)"),(0,n.kt)("p",null,"This is a location to record all high-level architecture decisions in the Cosmos-SDK."),(0,n.kt)("p",null,"An Architectural Decision (",(0,n.kt)("strong",{parentName:"p"},"AD"),") is a software design choice that addresses a functional or non-functional requirement that is architecturally significant.\nAn Architecturally Significant Requirement (",(0,n.kt)("strong",{parentName:"p"},"ASR"),") is a requirement that has a measurable effect on a software system\u2019s architecture and quality.\nAn Architectural Decision Record (",(0,n.kt)("strong",{parentName:"p"},"ADR"),") captures a single AD, such as often done when writing personal notes or meeting minutes; the collection of ADRs created and maintained in a project constitute its decision log. All these are within the topic of Architectural Knowledge Management (AKM)."),(0,n.kt)("p",null,"You can read more about the ADR concept in this ",(0,n.kt)("a",{parentName:"p",href:"https://product.reverb.com/documenting-architecture-decisions-the-reverb-way-a3563bb24bd0#.78xhdix6t"},"blog post"),"."),(0,n.kt)("h2",{id:"rationale"},"Rationale"),(0,n.kt)("p",null,"ADRs are intended to be the primary mechanism for proposing new feature designs and new processes, for collecting community input on an issue, and for documenting the design decisions.\nAn ADR should provide:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Context on the relevant goals and the current state"),(0,n.kt)("li",{parentName:"ul"},"Proposed changes to achieve the goals"),(0,n.kt)("li",{parentName:"ul"},"Summary of pros and cons"),(0,n.kt)("li",{parentName:"ul"},"References"),(0,n.kt)("li",{parentName:"ul"},"Changelog")),(0,n.kt)("p",null,"Note the distinction between an ADR and a spec. The ADR provides the context, intuition, reasoning, and\njustification for a change in architecture, or for the architecture of something\nnew. The spec is much more compressed and streamlined summary of everything as\nit stands today."),(0,n.kt)("p",null,"If recorded decisions turned out to be lacking, convene a discussion, record the new decisions here, and then modify the code to match."),(0,n.kt)("h2",{id:"creating-new-adr"},"Creating new ADR"),(0,n.kt)("p",null,"Read about the ",(0,n.kt)("a",{parentName:"p",href:"/main/architecture/PROCESS"},"PROCESS"),"."),(0,n.kt)("h3",{id:"use-rfc-2119-keywords"},"Use RFC 2119 Keywords"),(0,n.kt)("p",null,'When writing ADRs, follow the same best practices for writing RFCs. When writing RFCs, key words are used to signify the requirements in the specification. These words are often capitalized: "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL. They are to be interpreted as described in ',(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119"),"."),(0,n.kt)("h2",{id:"adr-table-of-contents"},"ADR Table of Contents"),(0,n.kt)("h3",{id:"accepted"},"Accepted"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-002-docs-structure"},"ADR 002: SDK Documentation Structure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-004-split-denomination-keys"},"ADR 004: Split Denomination Keys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-006-secret-store-replacement"},"ADR 006: Secret Store Replacement")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-009-evidence-module"},"ADR 009: Evidence Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-010-modular-antehandler"},"ADR 010: Modular AnteHandler")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-019-protobuf-state-encoding"},"ADR 019: Protocol Buffer State Encoding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-020-protobuf-transaction-encoding"},"ADR 020: Protocol Buffer Transaction Encoding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-021-protobuf-query-encoding"},"ADR 021: Protocol Buffer Query Encoding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-023-protobuf-naming"},"ADR 023: Protocol Buffer Naming and Versioning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-024-coin-metadata"},"ADR 024: Coin Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-029-fee-grant-module"},"ADR 029: Fee Grant Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-030-authz-module"},"ADR 030: Message Authorization Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-031-msg-service"},"ADR 031: Protobuf Msg Services")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-046-module-params"},"ADR 046: Module Params")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-055-orm"},"ADR 055: ORM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-058-auto-generated-cli"},"ADR 058: Auto-Generated CLI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-060-abci-1.0"},"ADR 060: ABCI 1.0 (Phase I)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-061-liquid-staking"},"ADR 061: Liquid Staking"))),(0,n.kt)("h3",{id:"proposed"},"Proposed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-003-dynamic-capability-store"},"ADR 003: Dynamic Capability Store")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-011-generalize-genesis-accounts"},"ADR 011: Generalize Genesis Accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-012-state-accessors"},"ADR 012: State Accessors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-013-metrics"},"ADR 013: Metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-016-validator-consensus-key-rotation"},"ADR 016: Validator Consensus Key Rotation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-017-historical-header-module"},"ADR 017: Historical Header Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-018-extendable-voting-period"},"ADR 018: Extendable Voting Periods")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-022-custom-panic-handling"},"ADR 022: Custom baseapp panic handling")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-027-deterministic-protobuf-serialization"},"ADR 027: Deterministic Protobuf Serialization")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-028-public-key-addresses"},"ADR 028: Public Key Addresses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-032-typed-events"},"ADR 032: Typed Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-033-protobuf-inter-module-comm"},"ADR 033: Inter-module RPC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-035-rosetta-api-support"},"ADR 035: Rosetta API Support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-037-gov-split-vote"},"ADR 037: Governance Split Votes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-038-state-listening"},"ADR 038: State Listening")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-039-epoched-staking"},"ADR 039: Epoched Staking")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-040-storage-and-smt-state-commitments"},"ADR 040: Storage and SMT State Commitments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-054-semver-compatible-modules"},"ADR 054: Semver Compatible SDK Modules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-057-app-wiring"},"ADR 057: App Wiring")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-059-test-scopes"},"ADR 059: Test Scopes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-062-collections-state-layer"},"ADR 062: Collections State Layer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-063-core-module-api"},"ADR 063: Core Module API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-065-store-v2"},"ADR 065: Store v2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-067-simulator-v2"},"ADR 067: Simulator v2"))),(0,n.kt)("h3",{id:"draft"},"Draft"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-044-protobuf-updates-guidelines"},"ADR 044: Guidelines for Updating Protobuf Definitions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-047-extend-upgrade-plan"},"ADR 047: Extend Upgrade Plan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/main/architecture/adr-053-go-module-refactoring"},"ADR 053: Go Module Refactoring"))))}m.isMDXComponent=!0}}]);