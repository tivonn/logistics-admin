import{u as Q}from"./index.es-21745a3a.js";import{d as W,u as X,a as Z,I as m,r as C,D as y,H as w,K as ee,c as te,e as r,t as s,b as o,w as a,T as oe,f as n,E as F,i,o as le,j as u,S,N as ae,h as ce}from"./index-a9039ce2.js";/* empty css                                                              */const se={class:"subject-collect-view"},ne={class:"subject-collect-header"},ie={style:{display:"flex"}},re={class:"subject-collect-title"},ue={class:"subject-collect-type"},_e={class:"subject-collect-action"},de={style:{padding:"8px"}},be={style:{"font-weight":"bold"}},ve=W({__name:"SubjectCollectView",setup(pe){const{t}=X();Z();const $=[{text:t("subjectCollectView.info.subjectCollectProjectFilters.manage_cost"),value:"manage_cost"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.business_cost"),value:"business_cost"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.finance_cost"),value:"finance_cost"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.bonus"),value:"bonus"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.cost_receivable"),value:"cost_receivable"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.cost_payable"),value:"cost_payable"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.other_cost_receivable"),value:"other_cost_receivable"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.cost_allot"),value:"cost_allot"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.cost_real_in"),value:"cost_real_in"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.short_borrow_cost"),value:"short_borrow_cost"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.other_cost_in"),value:"other_cost_in"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.accrual_in"),value:"accrual_in"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.bonus_payable"),value:"bonus_payable"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.other_cost_payable"),value:"other_cost_payable"},{text:t("subjectCollectView.info.subjectCollectProjectFilters.other_cost_out"),value:"other_cost_out"}],B=[{dataIndex:"bank_report_date",key:"bank_report_date",title:t("subjectCollectView.info.bankReportDate"),customFilterDropdown:!0},{dataIndex:"subject_collect_project",key:"subject_collect_project",title:t("subjectCollectView.info.subjectCollectProject"),filters:$},{dataIndex:"accounting_subject",key:"accounting_subject",title:t("subjectCollectView.info.accountingSubject")},{dataIndex:"detail",key:"detail",title:t("subjectCollectView.info.detail")},{dataIndex:"in_price",key:"in_price",title:t("subjectCollectView.info.inPrice"),customRender:({text:e})=>m(e)},{dataIndex:"out_price",key:"out_price",title:t("subjectCollectView.info.outPrice"),customRender:({text:e})=>m(e)}],b=C(y("bank-pay-currency")||"CNY"),h=e=>{b.value=e,F("bank-pay-currency",e),window.location.reload()},p=C(y("subject-collect-month")?w(y("subject-collect-month")):w()),z=e=>{p.value=e,F("subject-collect-month",w(e).format("YYYY-MM")),window.location.reload()},R=e=>ce.post("/subject/collect/get_list",{pay_currency:b.value,month:p.value,...e}),{data:j,run:I,loading:N,current:Y,pageSize:D,total:T}=Q(R,{pagination:{currentKey:"page_index",pageSizeKey:"page_size",totalKey:"data.count"}}),E=ee(()=>({total:T.value,current:Y.value,pageSize:D.value,showSizeChanger:!0})),H=(e,c,d)=>{const v=Object.assign({},c,c.bank_report_date?{bank_report_date:c.bank_report_date[0]}:{});I({page_index:e.current,page_size:e.pageSize,sortField:d.field,sortOrder:d.order,...v})},g=e=>{e()},K=e=>{e({confirm:!0})};C(!1),C({});const M=()=>{};return(e,c)=>{var k,V;const d=i("a-radio-button"),v=i("a-radio-group"),O=i("a-date-picker"),f=i("a-button"),L=i("a-input"),_=i("a-table-summary-cell"),U=i("a-table-summary-row"),q=i("a-table");return le(),te("div",se,[r("div",ne,[r("div",ie,[r("div",re,s(e.$t("route.reports.subjectCollect")),1),r("div",ue,[o(v,{value:b.value,"onUpdate:value":c[2]||(c[2]=l=>b.value=l)},{default:a(()=>[o(d,{value:"CNY",onClick:c[0]||(c[0]=l=>h("CNY"))},{default:a(()=>[u(s(e.$t("subjectCollectView.actions.selectCNYBankReport")),1)]),_:1}),o(d,{value:"THB",onClick:c[1]||(c[1]=l=>h("THB"))},{default:a(()=>[u(s(e.$t("subjectCollectView.actions.selectTHBBankReport")),1)]),_:1})]),_:1},8,["value"]),o(O,{value:p.value,"onUpdate:value":c[3]||(c[3]=l=>p.value=l),picker:"month",placeholder:e.$t("common.actions.monthSelectPlaceholder"),style:{"margin-left":"16px"},allowClear:!1,onChange:z},null,8,["value","placeholder"])])]),r("div",_e,[o(f,{type:"primary",style:{"margin-left":"16px"},onClick:M,disabled:""},{default:a(()=>[u(s(e.$t("subjectCollectView.actions.downloadBankReport")),1)]),_:1})])]),o(q,{columns:B,"row-key":l=>l.id,"data-source":(k=n(j))==null?void 0:k.data.rows,locale:{filterConfirm:e.$t("common.actions.confirm"),filterReset:e.$t("common.actions.reset")},pagination:E.value,loading:n(N),onChange:H},oe({customFilterIcon:a(({filtered:l})=>[o(n(S),{style:ae({color:l?"#108ee9":void 0})},null,8,["style"])]),customFilterDropdown:a(({setSelectedKeys:l,selectedKeys:A,confirm:x,clearFilters:G,column:J})=>[r("div",de,[o(L,{placeholder:`${e.$t("common.actions.search")}${J.title}`,value:A[0],style:{width:"188px","margin-bottom":"8px",display:"block"},onChange:P=>l(P.target.value?[P.target.value]:[]),onPressEnter:()=>g(x)},null,8,["placeholder","value","onChange","onPressEnter"]),o(f,{type:"primary",size:"small",style:{width:"90px","margin-right":"8px"},onClick:()=>g(x)},{icon:a(()=>[o(n(S))]),default:a(()=>[u(" "+s(e.$t("common.actions.search")),1)]),_:2},1032,["onClick"]),o(f,{size:"small",style:{width:"90px"},onClick:()=>K(G)},{default:a(()=>[u(s(e.$t("common.actions.reset")),1)]),_:2},1032,["onClick"])])]),_:2},[(V=n(j))!=null&&V.data.count?{name:"summary",fn:a(()=>[o(U,null,{default:a(()=>[o(_,null,{default:a(()=>[r("span",be,s(e.$t("subjectCollectView.info.total")),1)]),_:1}),o(_),o(_),o(_),o(_,null,{default:a(()=>{var l;return[u(s(n(m)((l=n(j))==null?void 0:l.data.in_total)),1)]}),_:1}),o(_,null,{default:a(()=>{var l;return[u(s(n(m)((l=n(j))==null?void 0:l.data.out_total)),1)]}),_:1})]),_:1})]),key:"0"}:void 0]),1032,["row-key","data-source","locale","pagination","loading"])])}}});export{ve as default};
