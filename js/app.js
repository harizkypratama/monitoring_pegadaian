"use strict";

const MASTER_AREA="Area Senen";
const MASTER=[
  {
    "Kode_Outlet": "12307",
    "Outlet": "UPC KAMPUNG RAWA",
    "Cabang": "CP CEMPAKA PUTIH",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12485",
    "Outlet": "UPC RAWASARI",
    "Cabang": "CP CEMPAKA PUTIH",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12487",
    "Outlet": "UPC MARDANI",
    "Cabang": "CP CEMPAKA PUTIH",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12484",
    "Outlet": "CP CEMPAKA PUTIH",
    "Cabang": "CP CEMPAKA PUTIH",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12488",
    "Outlet": "UPC RUMAH SAKIT ISLAM",
    "Cabang": "CP CEMPAKA PUTIH",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12652",
    "Outlet": "UPC CEMPAKA MAS",
    "Cabang": "CP ITC CEMPAKA MAS",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12996",
    "Outlet": "UPC SERDANG BARU",
    "Cabang": "CP ITC CEMPAKA MAS",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "13031",
    "Outlet": "UPC HOWITZER",
    "Cabang": "CP ITC CEMPAKA MAS",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "17463",
    "Outlet": "BRI UNIT SUNTER HIJAU",
    "Cabang": "CP ITC CEMPAKA MAS",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12654",
    "Outlet": "CP ITC CEMPAKA MAS",
    "Cabang": "CP ITC CEMPAKA MAS",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12653",
    "Outlet": "UPC PASAR SERDANG",
    "Cabang": "CP ITC CEMPAKA MAS",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12303",
    "Outlet": "UPC UTAN KAYU",
    "Cabang": "CP KAMPUNG AMBON",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12418",
    "Outlet": "UPC PASAR KAMPUNG AMBON",
    "Cabang": "CP KAMPUNG AMBON",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12505",
    "Outlet": "UPC TARUNA",
    "Cabang": "CP KAMPUNG AMBON",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12417",
    "Outlet": "CP KAMPUNG AMBON",
    "Cabang": "CP KAMPUNG AMBON",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12420",
    "Outlet": "UPC PRAMUKA",
    "Cabang": "CP KAMPUNG AMBON",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12333",
    "Outlet": "UPC KEBON KOSONG",
    "Cabang": "CP KEMAYORAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12408",
    "Outlet": "UPC CEMPAKA SARI",
    "Cabang": "CP KEMAYORAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12409",
    "Outlet": "UPC CEMPAKA BARU",
    "Cabang": "CP KEMAYORAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12410",
    "Outlet": "UPC BENDUNGAN JAGO",
    "Cabang": "CP KEMAYORAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12407",
    "Outlet": "CP KEMAYORAN",
    "Cabang": "CP KEMAYORAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12335",
    "Outlet": "UPC KARANGANYAR",
    "Cabang": "CP PASAR BARU",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12901",
    "Outlet": "UPC APRON",
    "Cabang": "CP PASAR BARU",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12997",
    "Outlet": "UPC A RAYA",
    "Cabang": "CP PASAR BARU",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "17462",
    "Outlet": "BRI UNIT KEAMANAN",
    "Cabang": "CP PASAR BARU",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12332",
    "Outlet": "CP PASAR BARU",
    "Cabang": "CP PASAR BARU",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12308",
    "Outlet": "UPC POS CIKINI",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12322",
    "Outlet": "UPC KWITANG",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12324",
    "Outlet": "UPC BUNGUR",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12325",
    "Outlet": "UPC SENYUM KRAMAT SENTIONG",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12330",
    "Outlet": "UPC ATRIUM SENEN",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12331",
    "Outlet": "UPC GONDANGDIA",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "17456",
    "Outlet": "BRI UNIT CEMPAKA PUTIH",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12321",
    "Outlet": "CP PASAR SENEN",
    "Cabang": "CP PASAR SENEN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12294",
    "Outlet": "UPC GANG LONTAR",
    "Cabang": "CP PETAMBURAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12297",
    "Outlet": "UPC BLOK B TANAH ABANG",
    "Cabang": "CP PETAMBURAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12293",
    "Outlet": "CP PETAMBURAN",
    "Cabang": "CP PETAMBURAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12835",
    "Outlet": "UPC BIAK",
    "Cabang": "CP PETAMBURAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12301",
    "Outlet": "UPC PASAR JANGKRIK II",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12302",
    "Outlet": "UPC PASAR JOHAR",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12305",
    "Outlet": "UPC TAMBAK",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12306",
    "Outlet": "UPC PASAR GENJING",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12309",
    "Outlet": "UPC MATRAMAN",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12300",
    "Outlet": "CP SALEMBA",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12310",
    "Outlet": "UPC SABANG",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12323",
    "Outlet": "UPC CIKINI",
    "Cabang": "CP SALEMBA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12533",
    "Outlet": "CP SUDIRMAN",
    "Cabang": "CP SUDIRMAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12304",
    "Outlet": "UPC SARINAH",
    "Cabang": "CP SUDIRMAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12535",
    "Outlet": "UPC THAMRIN CITY",
    "Cabang": "CP SUDIRMAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "12536",
    "Outlet": "UPC DANAU TOBA",
    "Cabang": "CP SUDIRMAN",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60140",
    "Outlet": "UPS PS JAYA CEMPAKA PUTIH",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60141",
    "Outlet": "UPS PASAR DJOHAR BARU",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60142",
    "Outlet": "UPS MEDITERANIA",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60143",
    "Outlet": "UPS KALIBARU",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60144",
    "Outlet": "UPS PERCETAKAN NEGARA",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60145",
    "Outlet": "UPS KAYU JATI RAWA BENING",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60822",
    "Outlet": "UPS TAMAN SOLO",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60825",
    "Outlet": "UPS KAYUMANIS",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60139",
    "Outlet": "CPS KRAMAT RAYA",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  },
  {
    "Kode_Outlet": "60826",
    "Outlet": "UPS PISANGAN LAMA",
    "Cabang": "CPS KRAMAT RAYA",
    "Area": "Area Senen"
  }
];
const MASTER_BRANCHES=[...new Set(MASTER.map(x=>x.Cabang).filter(Boolean))].sort();
const KARAT_OPTIONS=[24,23,22,21,20,19,18,17,16,15,14,10];

const state={
  data:[],
  importBatches:[],
  importFilters:{Cabang:"",Outlet:""},
  hdle:Number(localStorage.getItem("mg_hdle")||2500000),
  hdleDate:localStorage.getItem("mg_hdle_date")||new Date().toISOString().slice(0,10),
  currentContractNo:"", previewSearch:"", previewFilters:{No_Kontrak:"",Cabang:"",Outlet:"",Customer_NM:""}
};
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const empty=v=>v===null||v===undefined||String(v).trim()==="";
const num=v=>{if(typeof v==="number")return Number.isFinite(v)?v:0;if(empty(v))return 0;let s=String(v).trim().replace(/[^0-9,.-]/g,"");if(s.includes(",")&&s.includes(".")){const lastComma=s.lastIndexOf(","),lastDot=s.lastIndexOf(".");if(lastComma>lastDot){s=s.replace(/\./g,"").replace(",",".")}else{s=s.replace(/,/g,"").replace(/\.(?=.*\.)/g,"")}}else if(s.includes(",")||s.includes(".")){const sep=s.includes(",")?",":".";const parts=s.split(sep);if(parts.length>2)s=parts.join("");else if(parts.length===2&&parts[1].length===3)s=parts.join("");}const n=Number(s);return Number.isFinite(n)?n:0};
const rupiah=v=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(num(v));
const dec=v=>num(v).toLocaleString("id-ID",{minimumFractionDigits:2,maximumFractionDigits:2});
const safeDate=v=>{if(!v)return "";if(v instanceof Date&&!isNaN(v))return v.toISOString().slice(0,10);let s=String(v).trim();if(/^\d{4}-\d{2}-\d{2}/.test(s))return s.slice(0,10);const m=s.match(/^(\d{1,2})[-\/]([A-Za-z]{3}|\d{1,2})[-\/](\d{2,4})$/);if(m){const months={JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};const mon=isNaN(Number(m[2]))?months[m[2].toUpperCase()]:Number(m[2])-1;let y=Number(m[3]);if(y<100)y+=2000;return new Date(y,mon,Number(m[1])).toISOString().slice(0,10)}const d=new Date(s);return isNaN(d)?"":d.toISOString().slice(0,10)};
const todayISO=()=>new Date().toISOString().slice(0,10);
const bjdpl=cutoff=>{if(!cutoff)return null;const a=new Date(cutoff+"T00:00:00"),b=new Date(todayISO()+"T00:00:00");if(isNaN(a))return null;return Math.max(0,Math.floor((b-a)/86400000))};
const karat=v=>{if(empty(v))return 0;const n=num(String(v).replace(/K/ig,""));return Number.isFinite(n)?n:0};
const estGold=(k,bb)=>Math.round((karat(k)/24)*num(bb)*state.hdle);
const branchForOutlet=outlet=>{const x=MASTER.find(m=>m.Outlet===outlet);return x?x.Cabang:""};
const masterForContractNo=no=>{const code=String(no||"").replace(/\\D/g,"").slice(0,5);return MASTER.find(m=>String(m.Kode_Outlet)===code)||null};
const autoPopulateByContractCode=no=>{const m=masterForContractNo(no);if(!m)return null;$("contract-area").value=m.Area||MASTER_AREA;setBranchOptions("contract-branch",m.Cabang);setOutletOptions("contract-outlet",m.Cabang,m.Outlet);$("contract-branch").value=m.Cabang||"";$("contract-outlet").value=m.Outlet||"";$("contract-search-result").textContent=`Kode outlet ${m.Kode_Outlet} • ${m.Cabang} • ${m.Outlet}`;return m};
const outletsForBranch=branch=>MASTER.filter(m=>!branch||m.Cabang===branch).map(m=>m.Outlet).sort();
const toast=(msg,type="ok")=>{const e=document.createElement("div");e.className="toast "+type;e.textContent=msg;$("toast-container").appendChild(e);setTimeout(()=>e.remove(),3000)};


function normalizeExportRows(rows){
  const transformed = contractSelisihNpblUp(rows);
  return transformed.map(r => ({
    ...r,
    Selisih_Harga_VS_UP: r.Selisih_Harga_VS_UP ?? "",
    "Diskon Lelang (%)": (r["Diskon Lelang (%)"] === "" || r["Diskon Lelang (%)"] == null)
      ? r["Diskon Lelang (%)"]
      : (num(r["Diskon Lelang (%)"]) > 1 ? num(r["Diskon Lelang (%)"])/100 : num(r["Diskon Lelang (%)"]))
  }));
}
function styleExcelExport(wb, wsName){
  const ws=wb.Sheets[wsName];
  if(!ws||!ws["!ref"]) return;
  const range=XLSX.utils.decode_range(ws["!ref"]);
  const rupiahHeaders=new Set([
    "UP","SEWA MODAL","DENDA SEWA MODAL","DENDA KETERLAMBATAN","KEWAJIBAN",
    "BEA LELANG PEMBELI","BEA LELANG PENJUAL","HMLS","BERLIAN","NPBL",
    "SELISIH NPBL VS UP","HARGA MINIMAL LELANG","HARGA LIMIT LELANG",
    "MINIMAL PENJUALAN LELANG","DISKON LELANG (RP)","MINIMAL KEWAJIBAN PEMBELI LELANG"
  ]);
  const percentHeaders=new Set(["DISKON LELANG (%)"]);
  const headerMap={};
  for(let col=range.s.c;col<=range.e.c;col++){
    const cell=ws[XLSX.utils.encode_cell({r:range.s.r,c:col})];
    const h=String(cell?.v??"").trim().toUpperCase();
    headerMap[col]=h;
    if(cell){
      cell.s={
        font:{bold:true,color:"FFFFFF"},
        fill:{fgColor:{rgb:"006B4F"}},
        alignment:{horizontal:"center",vertical:"center",wrapText:true},
        border:{
          top:{style:"thin",color:{rgb:"B7C9C1"}},
          bottom:{style:"thin",color:{rgb:"B7C9C1"}},
          left:{style:"thin",color:{rgb:"B7C9C1"}},
          right:{style:"thin",color:{rgb:"B7C9C1"}}
        }
      };
    }
  }
  for(let row=range.s.r+1;row<=range.e.r;row++){
    for(let col=range.s.c;col<=range.e.c;col++){
      const addr=XLSX.utils.encode_cell({r:row,c:col});
      const cell=ws[addr];
      if(!cell) continue;
      cell.s={
        ...(cell.s||{}),
        alignment:{vertical:"center"},
        border:{
          top:{style:"thin",color:{rgb:"D9E2DE"}},
          bottom:{style:"thin",color:{rgb:"D9E2DE"}},
          left:{style:"thin",color:{rgb:"D9E2DE"}},
          right:{style:"thin",color:{rgb:"D9E2DE"}}
        }
      };
      if(rupiahHeaders.has(headerMap[col]) && typeof cell.v==="number"){
        cell.z='"Rp" #,##0';
      }else if(percentHeaders.has(headerMap[col]) && typeof cell.v==="number"){
        if(Math.abs(cell.v)>1) cell.v=cell.v/100;
        cell.z='0.00%';
        cell.t="n";
      }
    }
  }
  ws["!freeze"]={xSplit:0,ySplit:1};
  ws["!autofilter"]={ref:ws["!ref"]};
  const widths=[];
  for(let col=range.s.c;col<=range.e.c;col++){
    let max=12;
    for(let row=range.s.r;row<=range.e.r;row++){
      const cell=ws[XLSX.utils.encode_cell({r:row,c:col})];
      max=Math.max(max,Math.min(32,String(cell?.v??"").length+2));
    }
    widths.push({wch:max});
  }
  ws["!cols"]=widths;
}
function diskonLelangFormulaText(hargaLimit,npbl){
 return `Harga Limit Lelang − NPBL = ${rupiah(hargaLimit)} − ${rupiah(npbl)}`;
}
function openMGDB(){
  return new Promise((resolve,reject)=>{
    if(!("indexedDB" in window)){reject(new Error("IndexedDB tidak tersedia"));return}
    const req=indexedDB.open("monitoring_pegadaian_db",1);
    req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains("app"))db.createObjectStore("app")};
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
async function persistData(){
  try{
    const db=await openMGDB();
    await new Promise((resolve,reject)=>{
      const tx=db.transaction("app","readwrite");
      tx.objectStore("app").put({rows:state.data,batches:state.importBatches},"imports");
      tx.objectStore("app").put(state.data,"data");
      tx.oncomplete=resolve; tx.onerror=()=>reject(tx.error);
    });
    db.close();
  }catch(err){console.warn("Data belum dapat dipersist:",err)}
}
async function restoreData(){
  try{
    const db=await openMGDB();
    const saved=await new Promise((resolve,reject)=>{
      const tx=db.transaction("app","readonly"), req=tx.objectStore("app").get("imports");
      req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
    });
    db.close();
    if(saved && Array.isArray(saved.batches)){
      state.importBatches=saved.batches;
      state.data=mergeImportedRows(state.importBatches.flatMap(b=>Array.isArray(b.rows)?b.rows:[]));
      rebuildContractCalculations(); populateContractSuggestions(); renderAll();
      if(state.data.length) toast(`Data tersimpan dipulihkan • ${state.data.length.toLocaleString("id-ID")} baris`);
      return;
    }
    // Kompatibilitas data versi sebelumnya.
    const db2=await openMGDB();
    const rows=await new Promise((resolve,reject)=>{
      const tx=db2.transaction("app","readonly"), req=tx.objectStore("app").get("data");
      req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
    });
    db2.close();
    if(Array.isArray(rows) && rows.length){
      state.data=rows;
      state.importBatches=[{id:`legacy-${Date.now()}`,name:"Data Import Sebelumnya",rows:[...rows],count:rows.length,createdAt:new Date().toISOString()}];
      rebuildContractCalculations(); populateContractSuggestions(); renderAll();
      toast(`Data tersimpan dipulihkan • ${rows.length.toLocaleString("id-ID")} baris`);
    }
  }catch(err){console.warn("Data tersimpan tidak dapat dipulihkan:",err)}
}
function saveState(){
  try{
    localStorage.setItem("mg_hdle",String(state.hdle));
    localStorage.setItem("mg_hdle_date",String(state.hdleDate));
  }catch(err){console.warn("Pengaturan tidak dapat disimpan:",err)}
  if(Array.isArray(state.data)) persistData();
}

function saveInputDraft(){
  try{
    const snapshot={
      currentContractNo:state.currentContractNo,
      fields:{},
      items:[...document.querySelectorAll(".item-card")].map(card=>({
        Jenis_Barang:card.querySelector(".item-name")?.value||"",
        Karatase:card.querySelector(".item-karat")?.value||"",
        BK:card.querySelector(".item-bk")?.value||"",
        BB:card.querySelector(".item-bb")?.value||""
      })),
      taksir:[...document.querySelectorAll(".taksir-card")].map(card=>({
        Karatase:card.querySelector(".taksir-karat")?.value||"",
        BB:card.querySelector(".taksir-bb")?.value||"",
        Berlian:card.querySelector(".diamond-value")?.value||""
      }))
    };
    ["contract-no","contract-area","contract-branch","contract-outlet","contract-customer","contract-product","tgl-kredit","tgl-cutoff","input-up","input-sm","input-denda-sm","input-denda-keterlambatan","rubrik","item-count"].forEach(id=>{
      const el=$(id); if(el) snapshot.fields[id]=el.value;
    });
    localStorage.setItem("mg_input_draft",JSON.stringify(snapshot));
  }catch(err){console.warn("Draft taksir belum tersimpan:",err)}
}
function clearInputDraft(){
  try{localStorage.removeItem("mg_input_draft")}catch(err){}
}
function restoreInputDraft(){
  try{
    const raw=localStorage.getItem("mg_input_draft"); if(!raw)return;
    const s=JSON.parse(raw); if(!s||!s.fields)return;
    Object.entries(s.fields).forEach(([id,val])=>{const el=$(id);if(el)el.value=val});
    state.currentContractNo=s.currentContractNo||"";
    if(s.fields["contract-branch"]) setOutletOptions("contract-outlet",s.fields["contract-branch"],s.fields["contract-outlet"]);
    renderItemForms(s.items&&s.items.length?s.items:blankRows(Math.max(1,num(s.fields["item-count"])||1)));
    const taksirRows=(s.taksir&&s.taksir.length?s.taksir:[]).map((r,i)=>({
      Jenis_Barang:s.items?.[i]?.Jenis_Barang||"",
      Karatase:r.Karatase,BB:r.BB,Berlian:num(r.Berlian)
    }));
    renderTaksirForms(taksirRows.length?taksirRows:blankRows(Math.max(1,num(s.fields["item-count"])||1)));
    updateInputCalculations();
    toast("Draft taksir terakhir dipulihkan");
  }catch(err){console.warn("Draft taksir tidak dapat dipulihkan:",err)}
}
function rebuildContractCalculations(){
 const groups=contractGroups();
 groups.forEach(rows=>{
   const first=rows[0],items=rows.map(r=>({Taksir_Ulang_Karatase:num(r.Taksir_Ulang_Karatase??r.Karatase),Taksir_Ulang_BB:num(r.Taksir_Ulang_BB??r.BB),Berlian:num(r.Berlian)}));
   const a=calcAuction(items,num(first.UP),num(first.Sewa_Modal),num(first.Denda_Sewa_Modal),num(first.Denda_Keterlambatan));
   rows.forEach((r,i)=>{
     const itemNpbl=Math.round((karat(r.Taksir_Ulang_Karatase??r.Karatase)/24)*num(r.Taksir_Ulang_BB??r.BB)*state.hdle)+num(r.Berlian);
     r.NPBL=itemNpbl;
     r._NPBL_Total=a.npbl;
     r.Harga_Minimal_Lelang=a.hml;r.Harga_Limit_Lelang=a.hargaLimit;r.Diskon_Tidak_Diskon=a.diskon?"DISKON":"TIDAK DISKON";r.Minimal_Penjualan_Lelang=a.minimalPenjualan;r.Diskon_Lelang_Rp=a.diskonRp;r.Diskon_Lelang_Persen=a.diskonPct;r.Bea_Lelang_Pembeli=a.beaPembeli;r.Bea_Lelang_Penjual=a.beaPenjual;r.HMLS=a.hmls;r.Minimal_Kewajiban_Pembeli_Lelang=a.minimalKewajiban;
   });
 });
}
function loadData(){state.data=[]}loadData();rebuildContractCalculations();

function headerKey(h){
 const x=String(h??"")
   .replace(/\r?\n/g," ")
   .replace(/\s+/g," ")
   .trim()
   .toUpperCase();
 return x;
}
function standardHeader(h){
 const x=headerKey(h);
 const map={
   "NO KONTRAK":"No_Kontrak",
   "AREA":"Area",
   "CABANG":"Cabang",
   "OUTLET":"Outlet",
   "CUSTOMER NM":"Customer_NM",
   "CUSTOMER NAME":"Customer_NM",
   "CUSTOMER_NM":"Customer_NM",
   "PRODUCT":"Product",
   "JENIS BARANG":"Jenis_Barang",
   "KARATASE":"Karatase",
   "BK":"BK",
   "BB":"BB",
   "TAKSIR ULANG KARATASE":"Taksir_Ulang_Karatase",
   "TAKSIR ULANG BB":"Taksir_Ulang_BB",
   "TGL KREDIT":"Tgl_Kredit",
   "TGL CUT OFF":"Tgl_Cut_Off",
   "BJDPL HARI":"BJDPL_Hari",
   "UP":"UP",
   "UP (UANG PINJAMAN)":"UP",
   "SEWA MODAL":"Sewa_Modal",
   "KEWAJIBAN":"Kewajiban",
   "RUBRIK":"Rubrik",
   "KODE OUTLET":"Kode_Outlet",
   "KODE_OUTLET":"Kode_Outlet",
   "OUTLET CODE":"Kode_Outlet",
   "DENDA SEWA MODAL":"Denda_Sewa_Modal",
   "DENDA SEWA MODAL (KCA FLEKSI)":"Denda_Sewa_Modal",
   "DENDA KETERLAMBATAN":"Denda_Keterlambatan",
   "NPBL":"NPBL",
   "SELISIH DGN UP":"Selisih_Harga_VS_UP",
   "SELISIH HARGA VS UP":"Selisih_Harga_VS_UP",
   "KETERANGAN":"Keterangan"
 };
 return map[x]||String(h??"").trim();
}
function rowHasAnyValue(row){
 return Array.isArray(row) && row.some(cell=>!empty(cell));
}
function normalizeRows(raw){
 if(!raw||!raw.length)return [];

 // Header utama adalah baris pertama yang dikirim oleh readExcel().
 // Jika ada sub-header (mis. "TAKSIR ULANG" -> Karatase/BB),
 // baris kedua dipakai hanya untuk melengkapi nama kolom, bukan sebagai data.
 const headersRaw=raw[0]||[];
 const second=raw[1]||[];
 let taksir=false;
 const headers=headersRaw.map((h,i)=>{
   const main=headerKey(h);
   const sub=headerKey(second[i]);
   if(main==="TAKSIR ULANG"){
     taksir=true;
     if(sub==="BB")return "Taksir_Ulang_BB";
     if(sub==="KARATASE")return "Taksir_Ulang_Karatase";
     return "Taksir_Ulang_Karatase";
   }
   if(taksir && !main && sub==="BB"){
     taksir=false;
     return "Taksir_Ulang_BB";
   }
   if(main)taksir=false;
   return main ? standardHeader(h) : (sub==="BB" ? "Taksir_Ulang_BB" : "");
 });

 // Bila baris kedua ternyata BUKAN sub-header, jangan membuangnya.
 // Deteksi ini berdasarkan apakah baris kedua memiliki label kolom yang dikenali.
 const knownHeaderValues=new Set([
   "NO KONTRAK","AREA","CABANG","OUTLET","CUSTOMER NM","CUSTOMER NAME",
   "PRODUCT","JENIS BARANG","KARATASE","BK","BB","TGL KREDIT","TGL CUT OFF",
   "BJDPL HARI","UP","UP (UANG PINJAMAN)","SEWA MODAL","KEWAJIBAN","RUBRIK",
   "KODE OUTLET","KODE_OUTLET","OUTLET CODE","DENDA SEWA MODAL",
   "DENDA SEWA MODAL (KCA FLEKSI)","DENDA KETERLAMBATAN","NPBL"
 ]);
 const secondLooksLikeSubheader=second.some(v=>knownHeaderValues.has(headerKey(v)) || headerKey(v)==="KARATASE" || headerKey(v)==="BB");
 const dataStart=secondLooksLikeSubheader ? 2 : 1;

 const rawData=[];
 for(let i=dataStart;i<raw.length;i++){
   const row=raw[i]||[];

   // PENTING: keputusan apakah baris disimpan dibuat SEBELUM fill-down.
   // Jadi baris yang seluruh kolom Excel-nya kosong benar-benar dibuang.
   // Jika minimal satu kolom berisi nilai, baris dianggap detail barang.
   if(!rowHasAnyValue(row))continue;

   const o={};
   headers.forEach((h,j)=>{
     if(h)o[h]=row[j];
   });
   rawData.push(o);
 }

 const out=[];
 let last={};
 const contractFields=[
   "No_Kontrak","Kode_Outlet","Area","Cabang","Outlet","Customer_NM","Product",
   "Tgl_Kredit","Tgl_Cut_Off","BJDPL_Hari","UP","Sewa_Modal",
   "Denda_Sewa_Modal","Denda_Keterlambatan","Kewajiban","Rubrik"
 ];

 for(const r0 of rawData){
   const r={...r0};
   const hasContract=!empty(r.No_Kontrak);

   // Fill-down hanya untuk baris yang memang memiliki minimal satu nilai.
   // Ini menjaga informasi kontrak tetap menempel pada detail barang,
   // tetapi tidak pernah menghidupkan kembali baris kosong.
   if(hasContract){
     for(const f of contractFields){
       if(empty(r[f])&&!empty(last[f]))r[f]=last[f];
     }
     last={...r};
   }else{
     for(const f of contractFields){
       if(empty(r[f])&&!empty(last[f]))r[f]=last[f];
     }
   }

   // Setelah fill-down, semua baris yang lolos tetap dianggap data
   // selama sumber aslinya memiliki setidaknya satu kolom terisi.
   r.No_Kontrak=empty(r.No_Kontrak)?"":String(r.No_Kontrak).trim().replace(/^'+/,"");
   r.Area=empty(r.Area)?MASTER_AREA:String(r.Area).trim();
   r.Kode_Outlet=empty(r.Kode_Outlet)?"":String(r.Kode_Outlet).trim();

   const codeMaster=masterForContractNo(r.No_Kontrak);
   const codeMm=!empty(r.Kode_Outlet)
     ? MASTER.find(m=>String(m.Kode_Outlet)===String(r.Kode_Outlet))
     : codeMaster;

   if(codeMm){
     r.Kode_Outlet=String(codeMm.Kode_Outlet);
     r.Outlet=codeMm.Outlet;
     r.Cabang=codeMm.Cabang;
     r.Area=codeMm.Area||MASTER_AREA;
   }else if(!empty(r.Outlet)){
     const mm=MASTER.find(m=>m.Outlet===r.Outlet);
     if(mm){
       r.Kode_Outlet=mm.Kode_Outlet;
       r.Cabang=mm.Cabang;
       r.Area=mm.Area||MASTER_AREA;
     }
   }

   r.Outlet=empty(r.Outlet)?"":String(r.Outlet).trim();
   r.Cabang=empty(r.Cabang)?branchForOutlet(r.Outlet):String(r.Cabang).trim();
   r.Customer_NM=empty(r.Customer_NM)?"":String(r.Customer_NM).trim();
   r.Product=empty(r.Product)?"":String(r.Product).trim();
   r.Jenis_Barang=empty(r.Jenis_Barang)?"":String(r.Jenis_Barang).trim();
   r.Karatase=empty(r.Karatase)?"":num(r.Karatase);
   r.BK=empty(r.BK)?"":num(r.BK);
   r.BB=empty(r.BB)?"":num(r.BB);
   r.Tgl_Kredit=safeDate(r.Tgl_Kredit);
   r.Tgl_Cut_Off=safeDate(r.Tgl_Cut_Off);
   r.BJDPL_Hari=bjdpl(r.Tgl_Cut_Off);
   r.UP=num(r.UP);
   r.Sewa_Modal=num(r.Sewa_Modal);
   r.Denda_Sewa_Modal=num(r.Denda_Sewa_Modal);
   r.Denda_Keterlambatan=num(r.Denda_Keterlambatan);
   r.Kewajiban=r.UP+r.Sewa_Modal+r.Denda_Sewa_Modal+r.Denda_Keterlambatan;
   r.Rubrik=empty(r.Rubrik)?"KT":String(r.Rubrik);
   r.Taksir_Ulang_Karatase=empty(r.Taksir_Ulang_Karatase)?r.Karatase:r.Taksir_Ulang_Karatase;
   r.Taksir_Ulang_BB=empty(r.Taksir_Ulang_BB)?"":r.Taksir_Ulang_BB;
   r.Berlian=num(r.Berlian);
   r.Estimasi_Harga_Jual=estGold(r.Taksir_Ulang_Karatase,r.Taksir_Ulang_BB)+r.Berlian;
   out.push(r);
 }
 return out;
}
async function readExcel(file){
 const buf=await file.arrayBuffer();
 const wb=XLSX.read(buf,{type:"array",cellDates:true});
 const allRows=[];
 const usedSheets=[];
 const skippedSheets=[];

 // Membaca SEMUA sheet Excel yang memiliki kolom "No Kontrak".
 // Mendukung file seperti:
 // - header berada di baris pertama
 // - ada sub-header di baris kedua (contoh: TAKSIR ULANG -> Karatase/BB)
 // - sheet kosong / sheet lain yang bukan data kontrak
 for(const sheetName of wb.SheetNames){
   const sheet=wb.Sheets[sheetName];
   if(!sheet) continue;

   const raw=XLSX.utils.sheet_to_json(sheet,{header:1,defval:"",raw:false});
   if(!raw.length || raw.every(row=>row.every(cell=>empty(cell)))){
     skippedSheets.push(`${sheetName} (kosong)`);
     continue;
   }

   // Cari baris header yang benar, tidak harus selalu baris pertama.
   const headerIndex=raw.slice(0,15).findIndex(row=>
     row.some(cell=>String(cell??"").trim().toUpperCase()==="NO KONTRAK")
   );

   if(headerIndex<0){
     skippedSheets.push(`${sheetName} (tidak ada kolom No Kontrak)`);
     continue;
   }

   // Buang baris sebelum header agar normalizeRows dapat bekerja normal.
   const sheetRows=raw.slice(headerIndex);
   const normalized=normalizeRows(sheetRows);

   if(normalized.length){
     normalized.forEach(r=>r._Sheet_Name=sheetName);
     allRows.push(...normalized);
     usedSheets.push(`${sheetName} (${normalized.length.toLocaleString("id-ID")} baris)`);
   }else{
     skippedSheets.push(`${sheetName} (tidak ada data)`);
   }
 }

 if(!usedSheets.length){
   throw new Error("Tidak ditemukan data kontrak. Pastikan Excel memiliki kolom 'No Kontrak'.");
 }

 state.importedSheets=usedSheets;
 state.skippedSheets=skippedSheets;
 return allRows;
}
const requiredFields=["No_Kontrak","Customer_NM","Product","Jenis_Barang","Karatase","BK","BB","Taksir_Ulang_Karatase","Taksir_Ulang_BB","Tgl_Kredit","Tgl_Cut_Off","UP","Sewa_Modal","Rubrik"];
const rowComplete=r=>requiredFields.every(f=>!empty(r[f]));
function normalizeContractKey(v){
  let s=String(v??"").trim();
  if(!s) return "";
  s=s.replace(/\s+/g,"");
  if(/^\d+\.0+$/.test(s)) s=s.replace(/\.0+$/,"");
  return s;
}
function contractLevelFields(){
 return ["No_Kontrak","Area","Cabang","Outlet","Customer_NM","Product","Tgl_Kredit","Tgl_Cut_Off","BJDPL_Hari","UP","Sewa_Modal","Denda_Sewa_Modal","Denda_Keterlambatan","Kewajiban","Rubrik","Selisih_Harga_VS_UP","Harga_Minimal_Lelang","Harga_Limit_Lelang","Diskon_Tidak_Diskon","Minimal_Penjualan_Lelang","Diskon_Lelang_Rp","Diskon_Lelang_Persen","Bea_Lelang_Pembeli","Bea_Lelang_Penjual","HMLS","Minimal_Kewajiban_Pembeli_Lelang"];
}
function mergeImportedRows(rows){
 const groups=new Map(), noKey=[];
 rows.forEach((row)=>{
   const r={...row};
   const key=normalizeContractKey(r.No_Kontrak);
   if(!key){ noKey.push(r); return; }

   // Urutan import adalah prioritas sumber:
   // file pertama menjadi "anchor" jumlah baris/kontrak.
   // File berikutnya hanya melengkapi field yang kosong untuk No Kontrak yang sama.
   if(!groups.has(key)) groups.set(key,{first:{...r},all:[]});
   groups.get(key).all.push(r);
 });

 const merged=[];
 groups.forEach((bucket,key)=>{
   const best={...bucket.first};

   // Enrichment hanya mengisi field kosong. Data yang sudah ada
   // dari file pertama tidak ditimpa oleh file berikutnya.
   for(const candidate of bucket.all.slice(1)){
     Object.keys(candidate).forEach(field=>{
       if(empty(best[field]) && !empty(candidate[field])) best[field]=candidate[field];
     });
   }

   best.No_Kontrak=key;
   merged.push(best);
 });

 // Baris tanpa nomor kontrak tetap dipertahankan sebagai baris terpisah.
 return [...merged,...noKey];
}

function displayRows(rows){
 const seen=new Set();
 return rows.map((r,idx)=>{
   const key=String(r.No_Kontrak||"");
   const repeat=key && seen.has(key);
   if(key) seen.add(key);
   return {r,repeat,idx};
 });
}
function tableHeader(c){const m={No_Kontrak:"No Kontrak",Customer_NM:"Customer NM",Jenis_Barang:"Jenis Barang",Tgl_Kredit:"Tgl Kredit",Tgl_Cut_Off:"Tgl Cut Off",BJDPL_Hari:"BJDPL Hari",Sewa_Modal:"Sewa Modal",Denda_Sewa_Modal:"Denda Sewa Modal",Denda_Keterlambatan:"Denda Keterlambatan",Bea_Lelang_Pembeli:"Bea Lelang Pembeli",Bea_Lelang_Penjual:"Bea Lelang Penjual",HMLS:"HMLS",Taksir_Ulang_Karatase:"Taksir Ulang Karatase",Taksir_Ulang_BB:"Taksir Ulang BB",Berlian:"Nilai Berlian (Rp)",NPBL:"NPBL",Selisih_Harga_VS_UP: r.Selisih_Harga_VS_UP ?? "",Selisih_Harga_VS_UP:"Selisih NPBL vs UP",Harga_Minimal_Lelang:"Harga Minimal Lelang",Harga_Limit_Lelang:"Harga Limit Lelang",Diskon_Tidak_Diskon:"Diskon / Tidak Diskon",Minimal_Penjualan_Lelang:"Minimal Penjualan Lelang",Diskon_Lelang_Rp:"Diskon Lelang (Rp)",Diskon_Lelang_Persen:"Diskon Lelang (%)",Minimal_Kewajiban_Pembeli_Lelang:"Minimal Kewajiban Pembeli Lelang"};return m[c]||c.replaceAll("_"," ");}
function tableHeader(c){const m={No_Kontrak:"No Kontrak",Customer_NM:"Customer NM",Jenis_Barang:"Jenis Barang",Tgl_Kredit:"Tgl Kredit",Tgl_Cut_Off:"Tgl Cut Off",BJDPL_Hari:"BJDPL Hari",Sewa_Modal:"Sewa Modal",Denda_Sewa_Modal:"Denda Sewa Modal",Denda_Keterlambatan:"Denda Keterlambatan",Bea_Lelang_Pembeli:"Bea Lelang Pembeli",Bea_Lelang_Penjual:"Bea Lelang Penjual",HMLS:"HMLS",Taksir_Ulang_Karatase:"Taksir Ulang Karatase",Taksir_Ulang_BB:"Taksir Ulang BB",Berlian:"Nilai Berlian (Rp)",NPBL:"NPBL",Selisih_Harga_VS_UP:"Selisih NPBL vs UP",Harga_Minimal_Lelang:"Harga Minimal Lelang",Harga_Limit_Lelang:"Harga Limit Lelang",Diskon_Tidak_Diskon:"Diskon / Tidak Diskon",Minimal_Penjualan_Lelang:"Minimal Penjualan Lelang",Diskon_Lelang_Rp:"Diskon Lelang (Rp)",Diskon_Lelang_Persen:"Diskon Lelang (%)",Minimal_Kewajiban_Pembeli_Lelang:"Minimal Kewajiban Pembeli Lelang"};return m[c]||c.replaceAll("_"," ");}
function displayCell(r,c,repeat){
 const contractFields=["No_Kontrak","Area","Cabang","Outlet","Customer_NM","Product","Tgl_Kredit","Tgl_Cut_Off","BJDPL_Hari","Rubrik","UP","Sewa_Modal","Denda_Sewa_Modal","Denda_Keterlambatan","Kewajiban","Bea_Lelang_Pembeli","Bea_Lelang_Penjual","HMLS","Selisih_Harga_VS_UP","Harga_Minimal_Lelang","Harga_Limit_Lelang","Diskon_Tidak_Diskon","Minimal_Penjualan_Lelang","Diskon_Lelang_Rp","Diskon_Lelang_Persen","Minimal_Kewajiban_Pembeli_Lelang"];
 if(repeat && contractFields.includes(c)) return "";
 if(c==="Diskon_Lelang_Persen") return empty(r[c])?"":(num(r[c])*100).toLocaleString("id-ID",{minimumFractionDigits:2,maximumFractionDigits:2})+"%";
 if(["UP","Sewa_Modal","Denda_Sewa_Modal","Denda_Keterlambatan","Kewajiban","Bea_Lelang_Pembeli","Bea_Lelang_Penjual","HMLS","Berlian","NPBL","Selisih_Harga_VS_UP","Harga_Minimal_Lelang","Harga_Limit_Lelang","Minimal_Penjualan_Lelang","Diskon_Lelang_Rp","Minimal_Kewajiban_Pembeli_Lelang"].includes(c)) return rupiah(r[c]);
 return esc(r[c]??"");
}
function contractSelisihNpblUp(rows){
  const totals = new Map();

  // One contract can contain multiple item rows.
  // NPBL is item-level -> sum every NPBL in that contract.
  // UP is contract-level -> take it only once.
  rows.forEach(r => {
    const key = String(r.No_Kontrak || "").trim();
    if (!totals.has(key)) {
      totals.set(key, {
        up: num(r.UP),
        npbl: 0
      });
    }
    totals.get(key).npbl += num(r.NPBL);
  });

  const seen = new Set();

  return rows.map(r => {
    const key = String(r.No_Kontrak || "").trim();

    // ONLY the first row of a contract gets the contract-level difference.
    if (seen.has(key)) {
      return {
        ...r,
        Selisih_Harga_VS_UP: ""
      };
    }

    seen.add(key);
    const t = totals.get(key) || { up: 0, npbl: 0 };

    return {
      ...r,
      Selisih_Harga_VS_UP: t.npbl - t.up
    };
  });
}

function rawImportedRows(){
 return state.importBatches.flatMap(b=>Array.isArray(b.rows)?b.rows:[]);
}
function rowMatchesScope(r, filters){
 const f=filters||{};
 const branch=String(f.Cabang||"");
 const outlet=String(f.Outlet||"");
 if(branch && branch!=="Semua Cabang" && String(r.Cabang||"")!==branch) return false;
 if(outlet && outlet!=="Semua Outlet" && String(r.Outlet||"")!==outlet) return false;
 return true;
}
function activeImportRows(){
 return state.data.filter(r=>rowMatchesScope(r,state.importFilters));
}
function activeRawImportRows(){
 return rawImportedRows().filter(r=>rowMatchesScope(r,state.importFilters));
}
function importFilterRows(){
 const f=state.previewFilters||{};
 const qNo=String(f.No_Kontrak||"").trim().toLowerCase();
 const qCustomer=String(f.Customer_NM||"").trim().toLowerCase();
 return state.data.filter(r=>{
   if(!rowMatchesScope(r,f)) return false;
   if(qNo && !normalizeContractKey(r.No_Kontrak).toLowerCase().includes(qNo.replace(/\s+/g,""))) return false;
   if(qCustomer && !String(r.Customer_NM||"").toLowerCase().includes(qCustomer)) return false;
   return true;
 });
}
function fillFilterSelect(el, values, allLabel, selected){
 if(!el)return;
 const opts=[allLabel,...values];
 el.innerHTML=opts.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");
 el.value=opts.includes(selected)?selected:allLabel;
}
function populateImportFilters(){
 const branchEl=$("import-filter-branch"), outletEl=$("import-filter-outlet"), pBranch=$("preview-filter-branch"), pOutlet=$("preview-filter-outlet");
 const branches=[...new Set(state.data.map(r=>String(r.Cabang||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
 const currentBranch=state.importFilters.Cabang||"Semua Cabang";
 fillFilterSelect(branchEl,branches,"Semua Cabang",currentBranch);
 state.importFilters.Cabang=branchEl?.value||"Semua Cabang";
 const importOutlets=[...new Set(state.data.filter(r=>state.importFilters.Cabang==="Semua Cabang"||String(r.Cabang||"")===state.importFilters.Cabang).map(r=>String(r.Outlet||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
 fillFilterSelect(outletEl,importOutlets,"Semua Outlet",state.importFilters.Outlet||"Semua Outlet");
 state.importFilters.Outlet=outletEl?.value||"Semua Outlet";

 const previewBranch=state.previewFilters.Cabang||"Semua Cabang";
 if(pBranch){ fillFilterSelect(pBranch,branches,"Semua Cabang",previewBranch); state.previewFilters.Cabang=pBranch.value||"Semua Cabang"; }
 const previewOutlets=[...new Set(state.data.filter(r=>state.previewFilters.Cabang==="Semua Cabang"||String(r.Cabang||"")===state.previewFilters.Cabang).map(r=>String(r.Outlet||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
 if(pOutlet){ fillFilterSelect(pOutlet,previewOutlets,"Semua Outlet",state.previewFilters.Outlet||"Semua Outlet"); state.previewFilters.Outlet=pOutlet.value||"Semua Outlet"; }
}

function contractRowFromApi(r){
 return {
   No_Kontrak:r.no_kontrak||"",
   Area:r.area_name||"",
   Kode_Outlet:r.outlet_code||"",
   Cabang:r.branch_name||"",
   Outlet:r.outlet_name||"",
   Customer_NM:r.customer_name||"",
   Product:r.product||"",
   Jenis_Barang:r.jenis_barang||"",
   Karatase:r.karatase,
   BK:r.bk,
   BB:r.bb,
   Tgl_Kredit:r.tgl_kredit||"",
   Tgl_Cut_Off:r.tgl_cut_off||"",
   BJDPL_Hari:r.bjdpl_hari||0,
   Rubrik:r.rubrik||"",
   UP:num(r.up),
   Sewa_Modal:num(r.sewa_modal),
   Denda_Sewa_Modal:num(r.denda_sewa_modal),
   Denda_Keterlambatan:num(r.denda_keterlambatan),
   Kewajiban:num(r.kewajiban),
   Taksir_Ulang_Karatase:r.taksir_ulang_karatase,
   Taksir_Ulang_BB:r.taksir_ulang_bb,
   Berlian:num(r.berlian),
   NPBL:num(r.item_npbl),
   _NPBL_Total:num(r.total_npbl),
   Harga_Minimal_Lelang:num(r.harga_minimal_lelang),
   Harga_Limit_Lelang:num(r.harga_limit_lelang),
   Diskon_Tidak_Diskon:r.status_diskon||"",
   Minimal_Penjualan_Lelang:num(r.minimal_penjualan_lelang),
   Diskon_Lelang_Rp:num(r.diskon_lelang_rp),
   Diskon_Lelang_Persen:num(r.diskon_lelang_persen),
   Bea_Lelang_Pembeli:num(r.bea_lelang_pembeli),
   Bea_Lelang_Penjual:num(r.bea_lelang_penjual),
   HMLS:num(r.hmls),
   Minimal_Kewajiban_Pembeli_Lelang:num(r.minimal_kewajiban_pembeli_lelang)
 };
}

async function loadRemoteData(){
 try{
   const d=await apiFetch("contracts/list.php?limit=3000");
   const raw=Array.isArray(d.data?.rows)?d.data.rows:[];
   // Keep ALL item rows returned by the database.
   // Contract KPIs/counts deduplicate by No Kontrak separately.
   state.data=raw.map(contractRowFromApi);
   rebuildContractCalculations();
   try{
     const b=await apiFetch("import/batches.php");
     state.importBatches=(Array.isArray(b.data)?b.data:[]).map(x=>({
       id:x.import_batch_id,name:x.original_filename,count:Number(x.total_rows||0),
       createdAt:x.started_at,server:true,status:x.import_status
     }));
   }catch(e){ state.importBatches=[]; }
   try{
     const h=await apiFetch(`hdle/get.php?area_id=${encodeURIComponent(AUTH_USER?.area_id||"")}`);
     const hs=Array.isArray(h.data)?h.data:[];
     if(hs.length){
       const latest=hs[0];
       state.hdle=num(latest.hdle_value);
       state.hdleDate=latest.hdle_date||state.hdleDate;
       if($("hdle-global"))$("hdle-global").value=state.hdle;
       if($("hdle-date"))$("hdle-date").value=state.hdleDate;
     }
   }catch(e){}
   populateContractSuggestions();
   renderAll();
 }catch(e){
   console.error("Gagal memuat data database:",e);
   toast("Data database belum dapat dimuat: "+e.message,"bad");
 }
}

async function saveContractToDatabase(c){
 const payload={
   no:c.no,Customer_NM:c.Customer_NM,Product:c.Product,
   Cabang:c.Cabang,Outlet:c.Outlet,
   Tgl_Kredit:c.Tgl_Kredit,Tgl_Cut_Off:c.Tgl_Cut_Off,BJDPL_Hari:c.BJDPL_Hari,
   UP:c.UP,Sewa_Modal:c.Sewa_Modal,Denda_Sewa_Modal:c.Denda_Sewa_Modal,
   Denda_Keterlambatan:c.Denda_Keterlambatan,Kewajiban:c.Kewajiban,Rubrik:c.Rubrik,
   items:c.items,auction:c.auction,status:"AKTIF"
 };
 const d=await apiFetch("contracts/save.php",{method:"POST",body:JSON.stringify(payload)});
 return d;
}

function renderImportBatches(){
 const box=$("import-batches-list"); if(!box)return;
 if(!state.importBatches.length){box.innerHTML='<tr><td colspan="4" class="empty-batches">Belum ada file Excel yang diimport.</td></tr>';return;}
 const admin=isAdmin();
 box.innerHTML=state.importBatches.map(b=>`<tr><td><strong>${esc(b.name||"")}</strong></td><td>${Number(b.count||0).toLocaleString("id-ID")}</td><td>${esc(new Date(b.createdAt||Date.now()).toLocaleString("id-ID"))}</td><td>${admin?`<button class="batch-delete-btn" type="button" data-batch-id="${esc(b.id)}" title="Hapus file ini">×</button>`:`<span class="readonly-action">—</span>`}</td></tr>`).join("");
 box.querySelectorAll(".batch-delete-btn").forEach(btn=>btn.onclick=()=>deleteImportBatch(btn.dataset.batchId));
}
async function deleteImportBatch(id){
 if(!isAdmin()){toast("Hanya ADMIN yang dapat menghapus file import.","bad");return;}
 const batch=state.importBatches.find(b=>String(b.id)===String(id)); if(!batch)return;
 if(!confirm(`Hapus file ${batch.name}?\n\nData kontrak yang sumber terakhirnya file ini juga akan dikeluarkan dari database.`))return;
 try{
   await apiFetch("import/delete.php",{method:"POST",body:JSON.stringify({import_batch_id:Number(id)})});
   await loadRemoteData();
   state.previewFilters={No_Kontrak:"",Cabang:"",Outlet:"",Customer_NM:""};
   populateImportFilters(); renderPreview();
   toast(`File ${batch.name} berhasil dihapus dari database.`);
 }catch(e){toast("Gagal menghapus import: "+e.message,"bad");}
}
async function clearImportedData(){
 if(!isAdmin()){toast("Hanya ADMIN yang dapat menghapus data import.","bad");return;}
 try{
   const d=await apiFetch("import/batches.php");
   const batches=Array.isArray(d.data)?d.data:[];
   for(const b of batches){
     await apiFetch("import/delete.php",{method:"POST",body:JSON.stringify({import_batch_id:Number(b.import_batch_id)})});
   }
   state.data=[];state.importBatches=[];state.currentContractNo="";
   state.previewFilters={No_Kontrak:"",Cabang:"",Outlet:"",Customer_NM:""};
   state.importFilters={Cabang:"",Outlet:""};
   await loadRemoteData();
   const input=$("excel-file");if(input)input.value="";
   $("file-name").textContent="Belum ada file";
   toast("Seluruh data import berhasil dihapus dari database");
 }catch(e){toast("Gagal menghapus data import: "+e.message,"bad");}
}
function getContractKpiCounts(rows){
 const groups=new Map();
 rows.forEach(r=>{
   const key=normalizeContractKey(r.No_Kontrak);
   if(!key)return;
   if(!groups.has(key))groups.set(key,[]);
   groups.get(key).push(r);
 });
 let complete=0;
 groups.forEach(group=>{
   // Build one logical contract from every row belonging to that contract.
   // A contract is complete only when the combined contract has every required field.
   const merged={};
   group.forEach(r=>{
     Object.keys(r||{}).forEach(field=>{
       if(empty(merged[field]) && !empty(r[field])) merged[field]=r[field];
     });
   });
   if(requiredFields.every(f=>!empty(merged[f]))) complete++;
 });
 return {
   total:groups.size,
   complete,
   incomplete:Math.max(0,groups.size-complete)
 };
}

function renderPreview(){
 populateImportFilters();
 const importSource=activeImportRows();
 const source=importFilterRows();
 const shown=displayRows(contractSelisihNpblUp(source));
 const cols=["No_Kontrak","Area","Cabang","Outlet","Customer_NM","Product","Jenis_Barang","Karatase","BK","BB","Tgl_Kredit","Tgl_Cut_Off","BJDPL_Hari","Rubrik","UP","Sewa_Modal","Denda_Sewa_Modal","Denda_Keterlambatan","Kewajiban","Bea_Lelang_Pembeli","Bea_Lelang_Penjual","HMLS","Taksir_Ulang_Karatase","Taksir_Ulang_BB","Berlian","NPBL","Selisih_Harga_VS_UP","Harga_Minimal_Lelang","Harga_Limit_Lelang","Diskon_Tidak_Diskon","Minimal_Penjualan_Lelang","Diskon_Lelang_Rp","Diskon_Lelang_Persen","Minimal_Kewajiban_Pembeli_Lelang"];
 $("preview-table").innerHTML="<thead><tr>"+cols.map(c=>`<th>${esc(tableHeader(c))}</th>`).join("")+"<th>Status</th></tr></thead><tbody>"+shown.slice(0,1500).map(({r,repeat})=>`<tr class="${rowComplete(r)?"row-complete":"row-incomplete"}">`+cols.map(c=>`<td>${displayCell(r,c,repeat)}</td>`).join("")+`<td><span class="status-chip ${rowComplete(r)?"status-ok":"status-bad"}">${rowComplete(r)?"Lengkap":"Ada Kosong"}</span></td></tr>`).join("")+"</tbody>";
 const bindPreview=()=>{$("preview-searchbar")?.querySelectorAll("[data-preview-filter]").forEach(el=>{const key=el.dataset.previewFilter;el.value=state.previewFilters[key]||el.value||"";el.onchange=()=>{state.previewFilters[key]=el.value;if(key==="Cabang")state.previewFilters.Outlet="Semua Outlet";saveState();renderPreview();};el.oninput=()=>{state.previewFilters[key]=el.value;saveState();renderPreview();};});};
 bindPreview();
 const mergedSource=activeImportRows();
 const contractKpis=getContractKpiCounts(mergedSource);
 $("import-row-count").textContent=mergedSource.length.toLocaleString("id-ID");
 $("import-contract-count").textContent=contractKpis.total.toLocaleString("id-ID");
 $("import-complete-contract-count").textContent=contractKpis.complete.toLocaleString("id-ID");
 $("import-incomplete-contract-count").textContent=contractKpis.incomplete.toLocaleString("id-ID");
 const missing={};requiredFields.forEach(f=>missing[f]=mergedSource.filter(r=>empty(r[f])).length);
 $("missing-summary").innerHTML=requiredFields.map(f=>`<div class="missing-pill">${esc(f.replaceAll("_"," "))}: <b>${missing[f].toLocaleString("id-ID")}</b> kosong</div>`).join("");
 renderImportBatches();
}

function setBranchOptions(id,selected="",all=false){const e=$(id),vals=all?["Semua Cabang",...MASTER_BRANCHES]:MASTER_BRANCHES;e.innerHTML=vals.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");if(vals.includes(selected))e.value=selected}
function setOutletOptions(id,branch="",selected="",all=false){const e=$(id);let vals=outletsForBranch(branch);if(all)vals=["Semua Outlet",...vals];e.innerHTML=vals.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");if(vals.includes(selected))e.value=selected}
function contractGroups(){const m=new Map();state.data.forEach(r=>{if(!r.No_Kontrak)return;if(!m.has(r.No_Kontrak))m.set(r.No_Kontrak,[]);m.get(r.No_Kontrak).push(r)});return m}
function populateContractSuggestions(){$("contract-suggestions").innerHTML=[...contractGroups().keys()].sort().map(n=>`<option value="${esc(n)}"></option>`).join("")}
function blankRows(n){return Array.from({length:n},()=>({Jenis_Barang:"",Karatase:"",BK:"",BB:"",Taksir_Ulang_Karatase:"",Taksir_Ulang_BB:"",Berlian:0}))}
function findContractGroup(q){
 const s=String(q||"").trim().toLowerCase();
 if(!s) return null;
 const groups=contractGroups();
 return groups.get(String(q).trim()) ? [String(q).trim(),groups.get(String(q).trim())] :
   [...groups.entries()].find(([n])=>n.toLowerCase()===s) ||
   [...groups.entries()].find(([n])=>n.toLowerCase().includes(s)) || null;
}
function autoPopulateByContractNo(q){
 const match=findContractGroup(q);
 if(match){
   const first=match[1][0];
   $("contract-branch").value=first.Cabang||"";
   setOutletOptions("contract-outlet",first.Cabang,first.Outlet);
   $("contract-outlet").value=first.Outlet||"";
   $("contract-search-result").textContent=`Kontrak ${first.No_Kontrak} • ${first.Cabang||"-"} • ${first.Outlet||"-"}`;
   return match;
 }
 return null;
}
function fillInputForm(rows){
 if(!rows.length)return;
 const first=rows[0];
 state.currentContractNo=String(first.No_Kontrak);
 $("contract-no").value=first.No_Kontrak;
 $("contract-area").value=MASTER_AREA;
 setBranchOptions("contract-branch",first.Cabang);
 setOutletOptions("contract-outlet",first.Cabang,first.Outlet);
 $("contract-customer").value=first.Customer_NM||"";
 $("contract-product").value=first.Product||"";
 $("tgl-kredit").value=safeDate(first.Tgl_Kredit);
 $("tgl-cutoff").value=safeDate(first.Tgl_Cut_Off);
 $("input-up").value=num(first.UP);
 $("input-sm").value=num(first.Sewa_Modal);
 $("input-denda-sm").value=num(first.Denda_Sewa_Modal);
 $("input-denda-keterlambatan").value=num(first.Denda_Keterlambatan);
 ["input-up","input-sm","input-denda-sm","input-denda-keterlambatan"].forEach(id=>formatCurrencyInput($(id)));
 $("rubrik").value=first.Rubrik||"KT";
 $("item-count").value=Math.max(1,rows.length);
 renderItemForms(rows);
 renderTaksirForms(rows.map(r=>({Jenis_Barang:r.Jenis_Barang,Karatase:r.Taksir_Ulang_Karatase,BB:r.Taksir_Ulang_BB,Berlian:num(r.Berlian)})));
 $("contract-search-result").textContent=`Kontrak ditemukan: ${first.No_Kontrak} • ${first.Cabang||"-"} • ${first.Outlet||"-"} • ${first.Customer_NM||"-"}`;
 toast("Kontrak ditemukan");
}
function renderItemForms(rows){
 const n=Math.max(1,Number($("item-count").value)||1),arr=rows&&rows.length?rows.slice(0,n):blankRows(n);while(arr.length<n)arr.push(blankRows(1)[0]);
 $("item-forms").innerHTML=arr.map((r,i)=>`<div class="item-card"><div class="item-card-grid"><div><label>Nama Barang</label><input class="item-name" value="${esc(r.Jenis_Barang||"")}" placeholder="Nama/deskripsi barang"></div><div><label>Karatase</label><select class="item-karat">${KARAT_OPTIONS.map(k=>`<option value="${k}" ${String(karat(r.Karatase))===String(k)?"selected":""}>${k}K</option>`).join("")}</select></div><div><label>BK</label><input class="item-bk" type="number" step="0.01" value="${empty(r.BK)?"":num(r.BK)}"></div><div><label>BB</label><input class="item-bb" type="number" step="0.01" value="${empty(r.BB)?"":num(r.BB)}"></div></div></div>`).join("");
 document.querySelectorAll("#item-forms input,#item-forms select").forEach(el=>el.addEventListener("input",()=>{syncTaksirFromItems();updateInputCalculations()}));syncTaksirFromItems()
}
function getItemsFromForm(){return [...document.querySelectorAll(".item-card")].map(card=>({Jenis_Barang:card.querySelector(".item-name").value.trim(),Karatase:num(card.querySelector(".item-karat").value),BK:num(card.querySelector(".item-bk").value),BB:num(card.querySelector(".item-bb").value)}))}
function syncTaksirFromItems(){
 const items=getItemsFromForm();
 const old=[...document.querySelectorAll(".taksir-card")].map(card=>({
   karat:card.querySelector(".taksir-karat")?.value,
   bb:card.querySelector(".taksir-bb")?.value,
   diamond:card.querySelector(".diamond-value")?.value
 }));
 renderTaksirForms(items.map((r,i)=>({
   Jenis_Barang:r.Jenis_Barang,
   Karatase:old[i]?.karat||"",
   BB:old[i]?.bb??"",
   Berlian:old[i]?.diamond??""
 })));
}
function renderTaksirForms(rows){
 $("taksir-forms").innerHTML=rows.map(r=>`<div class="taksir-card"><div class="taksir-grid"><div><label>Nama Barang</label><div class="read-only-box">${esc(r.Jenis_Barang||"-")}</div></div><div><label>Karatase</label><select class="taksir-karat">${KARAT_OPTIONS.map(k=>`<option value="${k}" ${String(karat(r.Karatase))===String(k)?"selected":""}>${k}K</option>`).join("")}</select></div><div><label>BB</label><input class="taksir-bb" type="number" min="0" step="0.01" value="${empty(r.BB)?"":num(r.BB)}"></div><div><label>Nilai Berlian (Rp)</label><input class="diamond-value currency-input" inputmode="numeric" value="${num(r.Berlian)}"></div><div><label>NPBL</label><div class="read-only-box item-npbl">Rp 0</div></div></div></div>`).join("");
 document.querySelectorAll("#taksir-forms .taksir-karat,#taksir-forms .taksir-bb,#taksir-forms .diamond-value").forEach(el=>el.addEventListener("input",updateInputCalculations));
 document.querySelectorAll("#taksir-forms .diamond-value").forEach(el=>el.addEventListener("blur",()=>formatCurrencyInput(el)));
 updateInputCalculations();
}
function calcAuction(items, up, sm, dendaSM, dendaKeterlambatan){
 const npbl=items.reduce((sum,it)=>sum+Math.round((karat(it.Taksir_Ulang_Karatase)/24)*num(it.Taksir_Ulang_BB)*state.hdle)+num(it.Berlian),0);
 const hml=(101/99)*(up+sm+dendaSM+dendaKeterlambatan);
 const hargaLimit=Math.max(npbl,hml);
 const diskon=npbl<hml;
 const minimalPenjualan=hargaLimit;
 const beaPembeli=npbl/102;
 const beaPenjual=npbl/102;
 const hmls=up+sm+dendaSM+beaPembeli+beaPenjual;
 const diskonRp=diskon?hargaLimit-npbl:0;
 const diskonPct=diskon&&((sm+dendaSM)!==0)?((hmls-npbl)/(sm+dendaSM)):0;
 const minimalKewajiban=diskon
   ? (diskonPct<1?npbl:up*(1+0.02))
   : hargaLimit*(102.1/101);
 return {npbl,hml,hargaLimit,diskon,minimalPenjualan,diskonRp,diskonPct,beaPembeli,beaPenjual,hmls,minimalKewajiban};
}
function getTaksirItems(){
 return [...document.querySelectorAll(".taksir-card")].map(card=>({
   Jenis_Barang:card.querySelector(".read-only-box")?.textContent.trim(),
   Taksir_Ulang_Karatase:karat(card.querySelector(".taksir-karat")?.value),
   Taksir_Ulang_BB:num(card.querySelector(".taksir-bb")?.value),
   Berlian:num(card.querySelector(".diamond-value")?.value)
 }));
}
function updateInputContext(){
 const no=$("contract-no")?.value||state.currentContractNo||"-", customer=$("contract-customer")?.value||"-", outlet=$("contract-outlet")?.value||"-", branch=$("contract-branch")?.value||"-", hdle=rupiah(state.hdle);
 [["ctx-items-contract",no],["ctx-items-customer",customer],["ctx-items-outlet",outlet],["ctx-items-branch",branch],["ctx-items-hdle",hdle],["ctx-obligation-contract",no],["ctx-obligation-customer",customer],["ctx-obligation-outlet",outlet],["ctx-obligation-branch",branch],["ctx-obligation-hdle",hdle]].forEach(([id,v])=>{const e=$(id);if(e)e.textContent=v;});
}
function updateInputCalculations(){
 updateInputContext();
 const items=[...document.querySelectorAll(".taksir-card")];
 const up=num($("input-up").value);
 let totalEst=0,totalDiamond=0;
 items.forEach(card=>{
   const k=num(card.querySelector(".taksir-karat")?.value),bb=num(card.querySelector(".taksir-bb")?.value),diamond=num(card.querySelector(".diamond-value")?.value);
   const total=estGold(k,bb)+diamond; totalEst+=total; totalDiamond+=diamond;
   card.querySelector(".item-npbl").textContent=rupiah(estGold(k,bb)+diamond);
 });
 const base=getItemsFromForm(),sm=num($("input-sm").value),dsm=num($("input-denda-sm").value),dt=num($("input-denda-keterlambatan").value),diff=totalEst-up;
 $("total-bk").textContent=dec(base.reduce((s,r)=>s+r.BK,0));
 $("total-bb").textContent=dec(base.reduce((s,r)=>s+r.BB,0));
 $("bjdpl-display").textContent=bjdpl($("tgl-cutoff").value)+" Hari";
 $("kewajiban-display").textContent=rupiah(up+sm+dsm+dt);
 $("total-est").textContent=rupiah(totalEst);
 $("total-diamond").textContent=rupiah(totalDiamond);
 $("selisih-up").textContent=rupiah(diff);
 $("selisih-up").style.color=diff<0?"#c62828":"#008037";
 $("est-status").textContent=diff>0?"Lebih dari UP":diff<0?"Kurang dari UP":"Sama dengan UP";
 $("hdle-display").textContent=rupiah(state.hdle);
 $("hdle-calc-note").innerHTML=`NPBL per item = ROUND((Karatase ÷ 24) × BB × HDLE, 0) + Nilai Berlian, lalu dijumlahkan. HDLE aktif <b>${rupiah(state.hdle)}</b> per tanggal <b>${safeDate(state.hdleDate)}</b>.`;
 updateAuction();
}
function updateAuction(){
 const up=num($("input-up").value),sm=num($("input-sm").value),dsm=num($("input-denda-sm").value),dt=num($("input-denda-keterlambatan").value);
 const items=getTaksirItems(),a=calcAuction(items,up,sm,dsm,dt);
 $("flow-up").textContent=rupiah(up);$("flow-sm").textContent=rupiah(sm);$("flow-dsm").textContent=rupiah(dsm);
 $("flow-dt").textContent=rupiah(dt);$("flow-kewajiban").textContent=rupiah(up+sm+dsm+dt);
 $("hml-base").textContent=rupiah(up+sm+dsm+dt);
 $("hml-total").textContent=rupiah(a.hml);$("compare-hml").textContent=rupiah(a.hml);$("compare-npbl").textContent=rupiah(a.npbl);$("limit-total").textContent=rupiah(a.hargaLimit);
 $("limit-basis").textContent=a.npbl>=a.hml?"NPBL lebih tinggi":"Harga Minimal Lelang lebih tinggi";
 $("diskon-status").textContent=a.diskon?"DISKON":"TIDAK DISKON";$("diskon-status").className=a.diskon?"discounted":"not-discounted";$("minimal-penjualan").textContent=rupiah(a.minimalPenjualan);
 $("bea-pembeli").textContent=rupiah(a.beaPembeli);$("bea-penjual").textContent=rupiah(a.beaPenjual);$("hmls-base").textContent=rupiah(up+sm+dsm);$("hmls-total").textContent=rupiah(a.hmls);
 $("hmls-minus-npbl").textContent=`${rupiah(a.hargaLimit)} − ${rupiah(a.npbl)}`;$("diskon-rp").textContent=rupiah(a.diskonRp);$("diskon-pct").textContent=(a.diskonPct*100).toLocaleString("id-ID",{minimumFractionDigits:2,maximumFractionDigits:2})+"%";
 $("minimal-kewajiban-pembeli").textContent=rupiah(a.minimalKewajiban);
 $("minimal-kewajiban-rule").textContent=!a.diskon?"Harga Limit × 102,1/101":(a.diskonPct<1?"Diskon < 100% → Harga Limit":"Diskon ≥ 100% → UP × 102%");
 $("auction-detail").innerHTML=`<div class="formula-box"><b>Ringkas:</b> HML = 101/99 × Kewajiban • Harga Limit = MAX(HML, NPBL) • HMLS = UP + SM + Denda SM + Bea Pembeli + Bea Penjual.</div>`;
}
function collectContract(){
 const no=$("contract-no").value.trim();if(!no){toast("No kontrak wajib diisi","bad");return null}
 const items=[...document.querySelectorAll(".item-card")].map((card,i)=>{const t=document.querySelectorAll(".taksir-card")[i];return {Jenis_Barang:card.querySelector(".item-name").value.trim(),Karatase:num(card.querySelector(".item-karat").value),BK:num(card.querySelector(".item-bk").value),BB:num(card.querySelector(".item-bb").value),Taksir_Ulang_Karatase:num(t?.querySelector(".taksir-karat")?.value),Taksir_Ulang_BB:num(t?.querySelector(".taksir-bb")?.value),Berlian:num(t?.querySelector(".diamond-value")?.value)}});
 const up=num($("input-up").value),sm=num($("input-sm").value),dsm=num($("input-denda-sm").value),dt=num($("input-denda-keterlambatan").value);
 const auction=calcAuction(items,up,sm,dsm,dt);
 return {no,items,Area:MASTER_AREA,Cabang:$("contract-branch").value,Outlet:$("contract-outlet").value,Customer_NM:$("contract-customer").value.trim(),Product:$("contract-product").value.trim(),Tgl_Kredit:$("tgl-kredit").value,Tgl_Cut_Off:$("tgl-cutoff").value,BJDPL_Hari:bjdpl($("tgl-cutoff").value),UP:up,Sewa_Modal:sm,Denda_Sewa_Modal:dsm,Denda_Keterlambatan:dt,Kewajiban:up+sm+dsm+dt,Rubrik:$("rubrik").value,auction};
}
async function saveContract(){
 const c=collectContract();if(!c)return;
 const btn=$("save-contract"); if(btn)btn.disabled=true;
 try{
   await saveContractToDatabase(c);
   state.currentContractNo=c.no;
   clearInputDraft();
   await loadRemoteData();
   toast(`Kontrak ${c.no} berhasil disimpan ke database`);
 }catch(e){
   toast("Gagal menyimpan kontrak: "+e.message,"bad");
 }finally{
   if(btn)btn.disabled=false;
 }
}
async function findContract(){
 const q=$("contract-search").value;
 try{
   const d=await apiFetch(`contracts/get.php?no_kontrak=${encodeURIComponent(q)}`);
   const c=d.data?.contract,items=Array.isArray(d.data?.items)?d.data.items:[];
   if(!c)throw new Error("Kontrak tidak ditemukan.");
   const rows=items.length?items.map(i=>({
     No_Kontrak:c.no_kontrak,Area:c.area_name,Cabang:c.branch_name,Outlet:c.outlet_name,
     Customer_NM:c.customer_name,Product:c.product,Tgl_Kredit:c.tgl_kredit,Tgl_Cut_Off:c.tgl_cut_off,
     BJDPL_Hari:c.bjdpl_hari,UP:c.up,Sewa_Modal:c.sewa_modal,Denda_Sewa_Modal:c.denda_sewa_modal,
     Denda_Keterlambatan:c.denda_keterlambatan,Kewajiban:c.kewajiban,Rubrik:c.rubrik,
     Jenis_Barang:i.jenis_barang,Karatase:i.karatase,BK:i.bk,BB:i.bb,
     Taksir_Ulang_Karatase:i.taksir_ulang_karatase,Taksir_Ulang_BB:i.taksir_ulang_bb,Berlian:i.berlian,NPBL:i.npbl
   })): [{
     No_Kontrak:c.no_kontrak,Area:c.area_name,Cabang:c.branch_name,Outlet:c.outlet_name,
     Customer_NM:c.customer_name,Product:c.product,Tgl_Kredit:c.tgl_kredit,Tgl_Cut_Off:c.tgl_cut_off,
     BJDPL_Hari:c.bjdpl_hari,UP:c.up,Sewa_Modal:c.sewa_modal,Denda_Sewa_Modal:c.denda_sewa_modal,
     Denda_Keterlambatan:c.denda_keterlambatan,Kewajiban:c.kewajiban,Rubrik:c.rubrik
   }];
   $("contract-search").value=c.no_kontrak;
   fillInputForm(rows);
 }catch(e){
   toast(e.message,"bad");$("contract-search-result").textContent="Tidak ditemukan.";
 }
}
function addContract(){
 state.currentContractNo="";$("contract-no").value="";$("contract-customer").value="";$("contract-product").value="";
 setBranchOptions("contract-branch",MASTER_BRANCHES[0]);setOutletOptions("contract-outlet",MASTER_BRANCHES[0]);setBranchOptions("outlet-ranking-branch","",true);setBranchOptions("bjdpl-branch","",true);
 $("tgl-kredit").value=todayISO();$("tgl-cutoff").value=todayISO();$("input-up").value="0";$("input-sm").value="0";$("input-denda-sm").value="0";$("input-denda-keterlambatan").value="0";
 $("item-count").value=1;renderItemForms(blankRows(1));renderTaksirForms(blankRows(1));updateInputCalculations();$("contract-search-result").textContent="Mode kontrak baru aktif.";updateInputContext();toast("Form kontrak baru siap diisi")
}
function uniqueContracts(rows=state.data){const m=new Map();rows.forEach(r=>{if(r.No_Kontrak&&!m.has(r.No_Kontrak))m.set(r.No_Kontrak,r)});return [...m.values()]}
function renderContracts(){
 const branch=$("contracts-branch").value,outlet=$("contracts-outlet").value,q=$("contracts-search").value.toLowerCase();
 const rows=state.data.filter(r=>(branch==="Semua Cabang"||!branch||r.Cabang===branch)&&(outlet==="Semua Outlet"||!outlet||r.Outlet===outlet)&&Object.values(r).some(v=>String(v??"").toLowerCase().includes(q)));
 const shown=displayRows(contractSelisihNpblUp(rows));
 const cols=["No_Kontrak","Area","Cabang","Outlet","Customer_NM","Product","Jenis_Barang","Karatase","BK","BB","Tgl_Kredit","Tgl_Cut_Off","BJDPL_Hari","Rubrik","UP","Sewa_Modal","Denda_Sewa_Modal","Denda_Keterlambatan","Kewajiban","Bea_Lelang_Pembeli","Bea_Lelang_Penjual","HMLS","Taksir_Ulang_Karatase","Taksir_Ulang_BB","Berlian","NPBL","Selisih_Harga_VS_UP","Harga_Minimal_Lelang","Harga_Limit_Lelang","Diskon_Tidak_Diskon","Minimal_Penjualan_Lelang","Diskon_Lelang_Rp","Diskon_Lelang_Persen","Minimal_Kewajiban_Pembeli_Lelang"];
 $("contracts-table").innerHTML="<thead><tr>"+cols.map(c=>`<th>${esc(tableHeader(c))}</th>` ).join("")+"</tr></thead><tbody>"+shown.slice(0,3000).map(({r,repeat})=>"<tr>"+cols.map(c=>`<td>${displayCell(r,c,repeat)}</td>`).join("")+"</tr>").join("")+"</tbody>"
}
function obligationValue(r){
 const explicit=num(r?.Kewajiban);
 const derived=num(r?.UP)+num(r?.Sewa_Modal)+num(r?.Denda_Sewa_Modal)+num(r?.Denda_Keterlambatan);
 return explicit>0?explicit:derived;
}
function branchSummary(){
 const contracts=uniqueContracts();
 return MASTER_BRANCHES.map(branch=>{
   const outs=MASTER.filter(x=>x.Cabang===branch).map(x=>x.Outlet),rs=contracts.filter(r=>r.Cabang===branch);
   return {Cabang:branch,Total_Outlet:new Set(outs).size,Total_Kontrak:rs.length,Total_Kewajiban:rs.reduce((s,r)=>s+obligationValue(r),0)};
 }).sort((a,b)=>b.Total_Kewajiban-a.Total_Kewajiban).map((r,i)=>({...r,Rank:i+1}));
}
function outletSummary(branch="Semua Cabang"){
 const contracts=uniqueContracts();
 const master=branch&&branch!=="Semua Cabang"?MASTER.filter(m=>m.Cabang===branch):MASTER;
 return master.map(m=>{const rs=contracts.filter(r=>r.Outlet===m.Outlet&&(branch==="Semua Cabang"||r.Cabang===branch));return {Kode_Outlet:m.Kode_Outlet,Outlet:m.Outlet,Cabang:m.Cabang,Total_Kontrak:rs.length,Total_Kewajiban:rs.reduce((s,r)=>s+obligationValue(r),0)}}).sort((a,b)=>b.Total_Kewajiban-a.Total_Kewajiban).map((r,i)=>({...r,Rank:i+1}));
}
function bjdplSummary(branch="Semua Cabang"){
 const master=branch&&branch!=="Semua Cabang"?MASTER.filter(m=>m.Cabang===branch):MASTER;
 return master.map(m=>{const rs=state.data.filter(r=>r.Outlet===m.Outlet&&(branch==="Semua Cabang"||r.Cabang===branch)),sumBucket=test=>rs.reduce((s,r)=>s+(test(num(r.BJDPL_Hari))?obligationValue(r):0),0);return {Kode_Outlet:m.Kode_Outlet,Outlet:m.Outlet,Cabang:m.Cabang,"0 Hari":sumBucket(d=>d<=0),"1-15 Hari":sumBucket(d=>d>=1&&d<=15),"16-30 Hari":sumBucket(d=>d>=16&&d<=30),"31-60 Hari":sumBucket(d=>d>=31&&d<=60),"61-90 Hari":sumBucket(d=>d>=61&&d<=90),">90 Hari":sumBucket(d=>d>90)}});
}
function renderMonitoring(){
 const outletBranch=$("outlet-ranking-branch")?.value||"Semua Cabang", bjdplBranch=$("bjdpl-branch")?.value||"Semua Cabang";
 const bs=branchSummary(),os=outletSummary(outletBranch),bd=bjdplSummary(bjdplBranch);
 $("mon-branch-total").textContent=rupiah(bs.reduce((s,r)=>s+r.Total_Kewajiban,0));
 $("mon-branch-contracts").textContent=uniqueContracts().length.toLocaleString("id-ID");
 $("mon-branch-count").textContent=MASTER_BRANCHES.length;$("mon-branch-hdle").textContent=rupiah(state.hdle);
 const search=(id)=>String($(id)?.value||"").trim().toLowerCase();
 const bsq=search("branch-ranking-search"),osq=search("outlet-ranking-search"),bdq=search("bjdpl-search");
 const bsf=bsq?bs.filter(r=>String(r.Cabang).toLowerCase().includes(bsq)):bs;
 const osf=osq?os.filter(r=>[r.Kode_Outlet,r.Outlet,r.Cabang].some(v=>String(v??"").toLowerCase().includes(osq))):os;
 const bdf=bdq?bd.filter(r=>[r.Kode_Outlet,r.Outlet,r.Cabang].some(v=>String(v??"").toLowerCase().includes(bdq))):bd;
 const branchCols=["Rank","Cabang","Total Outlet","Total Kontrak","Total Kewajiban"];
 const outletCols=["Rank","Kode Outlet","Outlet","Cabang","Total Kontrak","Total Kewajiban"];
 const bjdplCols=["Kode Outlet","Outlet","Cabang","0 Hari","1-15 Hari","16-30 Hari","31-60 Hari","61-90 Hari",">90 Hari"];
 const map={"Total Outlet":"Total_Outlet","Total Kontrak":"Total_Kontrak","Total Kewajiban":"Total_Kewajiban","Kode Outlet":"Kode_Outlet","Outlet":"Outlet","Cabang":"Cabang","Rank":"Rank","0 Hari":"0 Hari","1-15 Hari":"1-15 Hari","16-30 Hari":"16-30 Hari","31-60 Hari":"31-60 Hari","61-90 Hari":"61-90 Hari",">90 Hari":">90 Hari"};
 const renderTable=(id,rows,cols)=>{
   const money=new Set(["Total Kewajiban","0 Hari","1-15 Hari","16-30 Hari","31-60 Hari","61-90 Hari",">90 Hari"]);
   const body=rows.map(r=>"<tr>"+cols.map(c=>{const key=map[c],v=r[key];return `<td>${money.has(c)?rupiah(v):esc(v??"")}</td>`}).join("")+"</tr>").join("");
   $(id).innerHTML=`<thead><tr>${cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${body}</tbody>`;
 };
 renderTable("branch-ranking-table",bsf,branchCols);renderTable("outlet-ranking-table",osf,outletCols);renderTable("bjdpl-table",bdf,bjdplCols);
}
function compactRupiah(v){
 const n=Math.abs(num(v)), sign=num(v)<0?"-":"";
 if(n>=1e12)return sign+(n/1e12).toLocaleString("id-ID",{maximumFractionDigits:1})+"T";
 if(n>=1e9)return sign+(n/1e9).toLocaleString("id-ID",{maximumFractionDigits:1})+"M";
 if(n>=1e6)return sign+(n/1e6).toLocaleString("id-ID",{maximumFractionDigits:1})+"JT";
 if(n>=1e3)return sign+(n/1e3).toLocaleString("id-ID",{maximumFractionDigits:1})+"RB";
 return sign+n.toLocaleString("id-ID",{maximumFractionDigits:0});
}
function dashLayout(extra={}){
 return Object.assign({
   margin:{l:58,r:58,t:12,b:42},
   height:164,
   autosize:true,
   paper_bgcolor:"transparent",
   plot_bgcolor:"transparent",
   font:{family:"Inter",size:9,color:"#44554c"},
   showlegend:false,
   hoverlabel:{font:{family:"Inter",size:10}}
 },extra);
}
function rupiahAxis(values){
 const nums=values.map(num).filter(Number.isFinite);
 if(!nums.length)return {};
 const max=Math.max(...nums);
 if(max<=0)return {tickvals:[0],ticktext:["Rp 0"]};
 const vals=Array.from({length:5},(_,i)=>max*i/4);
 return {tickmode:"array",tickvals:vals,ticktext:vals.map(v=>"Rp "+compactRupiah(v))};
}
function renderDashboard(){
 const branch=$("dashboard-branch").value,rows=state.data.filter(r=>branch==="Semua Cabang"||!branch||r.Cabang===branch),contracts=uniqueContracts(rows),totalK=rows.reduce((s,r)=>s+obligationValue(r),0);
 $("dash-kewajiban").textContent=rupiah(totalK);$("dash-kontrak").textContent=contracts.length.toLocaleString("id-ID");$("dashboard-obligation-title").textContent=branch==="Semua Cabang"?"Kewajiban per Cabang":"Kewajiban per Outlet";$("dash-nasabah").textContent=new Set(rows.map(r=>r.Customer_NM).filter(Boolean)).size.toLocaleString("id-ID");$("dash-outlet").textContent=new Set(rows.map(r=>r.Outlet).filter(Boolean)).size.toLocaleString("id-ID");
 const groupKey=branch==="Semua Cabang"||!branch?"Cabang":"Outlet",grouped=new Map();rows.forEach(r=>grouped.set(r[groupKey]||"Tanpa "+groupKey,(grouped.get(r[groupKey]||"Tanpa "+groupKey)||0)+obligationValue(r)));const totals=[...grouped.entries()].sort((a,b)=>b[1]-a[1]);
 Plotly.newPlot("dashboard-obligation-chart",[{
   type:"bar",orientation:"h",
   x:totals.map(x=>x[1]).reverse(),
   y:totals.map(x=>x[0]).reverse(),
   text:totals.map(x=>compactRupiah(x[1])).reverse(),
   textposition:"outside",cliponaxis:false,
   textfont:{size:10,color:"#1f4d37"},
   marker:{color:"#168a4a",line:{color:"#0f6d39",width:0.5}},
   hovertemplate:"<b>%{y}</b><br>Rp %{x:,.0f}<extra></extra>"
 }],dashLayout({
   margin:{l:125,r:72,t:12,b:38},
   xaxis:Object.assign({showgrid:true,gridcolor:"#edf2ef",zeroline:false,tickfont:{size:9}},rupiahAxis(totals.map(x=>x[1]))),
   yaxis:{showgrid:false,automargin:true,tickfont:{size:9}},
   bargap:.28
 }),{responsive:true,displayModeBar:false,locale:"id"});
 const cats=["0 Hari","1-15 Hari","16-30 Hari","31-60 Hari","61-90 Hari",">90 Hari"],vals=cats.map(c=>rows.reduce((s,r)=>{const d=num(r.BJDPL_Hari),ok=c==="0 Hari"?d<=0:c==="1-15 Hari"?d>=1&&d<=15:c==="16-30 Hari"?d>=16&&d<=30:c==="31-60 Hari"?d>=31&&d<=60:c==="61-90 Hari"?d>=61&&d<=90:d>90;return s+(ok?obligationValue(r):0)},0));
 Plotly.newPlot("dashboard-bjdpl-chart",[{
   type:"bar",x:cats,y:vals,
   text:vals.map(compactRupiah),textposition:"outside",cliponaxis:false,
   textfont:{size:9,color:"#315b47"},
   marker:{color:["#b7d7c5","#8fc0a7","#69a88a","#4d936f","#337e5b","#1d6847"],line:{width:0}},
   hovertemplate:"<b>%{x}</b><br>Rp %{y:,.0f}<extra></extra>"
 }],dashLayout({
   margin:{l:58,r:58,t:12,b:58},
   xaxis:{showgrid:false,tickangle:-12,tickfont:{size:9}},
   yaxis:Object.assign({showgrid:true,gridcolor:"#edf2ef",zeroline:false,tickfont:{size:9}},rupiahAxis(vals)),
   bargap:.3
 }),{responsive:true,displayModeBar:false,locale:"id"});
 const comp=[[
   "UP",rows.reduce((s,r)=>s+num(r.UP),0)],
   ["Sewa Modal",rows.reduce((s,r)=>s+num(r.Sewa_Modal),0)],
   ["Denda Sewa Modal",rows.reduce((s,r)=>s+num(r.Denda_Sewa_Modal),0)],
   ["Denda Keterlambatan",rows.reduce((s,r)=>s+num(r.Denda_Keterlambatan),0)]
 ].filter(x=>x[1]>0);
 Plotly.newPlot("dashboard-composition-chart",[{
   type:"pie",labels:comp.map(x=>x[0]),values:comp.map(x=>x[1]),hole:.68,
   textinfo:"label+percent",textposition:"outside",
   textfont:{size:10,color:"#365647"},
   marker:{colors:["#168a4a","#65a07f","#a9c8b6","#d5e3da"],line:{color:"#ffffff",width:2}},
   hovertemplate:"<b>%{label}</b><br>Rp %{value:,.0f}<extra></extra>"
 }],dashLayout({
   margin:{l:32,r:32,t:12,b:22},showlegend:false,
   annotations:[{text:"<b>Komposisi Kewajiban</b><br>",showarrow:false,font:{size:10,color:"#315b47"},x:.5,y:.5}]
 }),{responsive:true,displayModeBar:false,locale:"id"});
 const outletTotals=new Map();rows.forEach(r=>{const k=r.Outlet||"Tanpa Outlet";outletTotals.set(k,(outletTotals.get(k)||0)+obligationValue(r));});const top10=[...outletTotals.entries()].sort((a,b)=>b[1]-a[1]).slice(0,5).reverse();
 Plotly.newPlot("dashboard-top10-chart",[{
   type:"bar",orientation:"h",x:top10.map(x=>x[1]),y:top10.map(x=>x[0]),
   text:top10.map(x=>compactRupiah(x[1])),textposition:"outside",cliponaxis:false,
   textfont:{size:10,color:"#315b47"},marker:{color:"#3f765b",line:{color:"#2f6049",width:.5}},
   hovertemplate:"<b>%{y}</b><br>Rp %{x:,.0f}<extra></extra>"
 }],dashLayout({
   margin:{l:135,r:72,t:12,b:38},
   xaxis:Object.assign({showgrid:true,gridcolor:"#edf2ef",zeroline:false,tickfont:{size:9}},rupiahAxis(top10.map(x=>x[1]))),
   yaxis:{showgrid:false,automargin:true,tickfont:{size:9}},bargap:.28
 }),{responsive:true,displayModeBar:false,locale:"id"});
 // Indikator Lelang & Aging (tambahan) — dihitung per kontrak unik agar tidak dobel-hitung antar baris barang
 const diskonContracts=contracts.filter(c=>c.Diskon_Tidak_Diskon==="DISKON");
 const diskonTotal=diskonContracts.reduce((s,c)=>s+num(c.Diskon_Lelang_Rp),0);
 const bjdplAvg=contracts.length?Math.round(contracts.reduce((s,c)=>s+num(c.BJDPL_Hari),0)/contracts.length):0;
 const bjdplRiskCount=contracts.filter(c=>num(c.BJDPL_Hari)>90).length;
 if($("dash-diskon-count")){
   $("dash-diskon-count").textContent=diskonContracts.length.toLocaleString("id-ID");
   $("dash-diskon-total").textContent=rupiah(diskonTotal);
   $("dash-bjdpl-avg").textContent=bjdplAvg.toLocaleString("id-ID")+" Hari";
   $("dash-bjdpl-risk").textContent=bjdplRiskCount.toLocaleString("id-ID");
 }
 if($("dashboard-diskon-status-chart")){
   const statusCounts=[["DISKON",diskonContracts.length,"#FFCC00"],["TIDAK DISKON",contracts.length-diskonContracts.length,"#008037"]].filter(x=>x[1]>0);
   Plotly.newPlot("dashboard-diskon-status-chart",[{type:"pie",labels:statusCounts.map(x=>x[0]),values:statusCounts.map(x=>x[1]),hole:.68,textinfo:"label+percent",textposition:"outside",textfont:{size:10,color:"#365647"},marker:{colors:statusCounts.map(x=>x[2]),line:{color:"#ffffff",width:2}},hovertemplate:"<b>%{label}</b><br>%{value} kontrak<extra></extra>"}],dashLayout({margin:{l:34,r:34,t:12,b:22},showlegend:false,annotations:[{text:"<b>Status Lelang</b><br></span>",showarrow:false,font:{size:10,color:"#315b47"},x:.5,y:.5}]}),{responsive:true,displayModeBar:false,locale:"id"});
 }
 if($("dashboard-top10-nasabah-chart")){
   const nasabahTotals=new Map();contracts.forEach(c=>{const k=c.Customer_NM||"Tanpa Nama";nasabahTotals.set(k,(nasabahTotals.get(k)||0)+obligationValue(c));});
   const top10Nasabah=[...nasabahTotals.entries()].sort((a,b)=>b[1]-a[1]).slice(0,5).reverse();
   Plotly.newPlot("dashboard-top10-nasabah-chart",[{type:"bar",orientation:"h",x:top10Nasabah.map(x=>x[1]),y:top10Nasabah.map(x=>x[0]),text:top10Nasabah.map(x=>compactRupiah(x[1])),textposition:"outside",cliponaxis:false,textfont:{size:10,color:"#315b47"},marker:{color:"#008037",line:{color:"#006b2e",width:.5}},hovertemplate:"<b>%{y}</b><br>Rp %{x:,.0f}<extra></extra>"}],dashLayout({margin:{l:135,r:72,t:12,b:38},xaxis:Object.assign({showgrid:true,gridcolor:"#edf2ef",zeroline:false,tickfont:{size:9}},rupiahAxis(top10Nasabah.map(x=>x[1]))),yaxis:{showgrid:false,automargin:true,tickfont:{size:9}},bargap:.28}),{responsive:true,displayModeBar:false,locale:"id"});
 }
}
function exportRows(){const branch=$("export-branch").value,outlet=$("export-outlet").value;return state.data.filter(r=>(branch==="Semua Cabang"||!branch||r.Cabang===branch)&&(outlet==="Semua Outlet"||!outlet||r.Outlet===outlet))}
function auctionForRow(r){
 if(r.NPBL!==undefined && r.Harga_Minimal_Lelang!==undefined){
   return {npbl:num(r._NPBL_Total ?? r.NPBL),hml:num(r.Harga_Minimal_Lelang),hargaLimit:num(r.Harga_Limit_Lelang),diskon:String(r.Diskon_Tidak_Diskon)==="DISKON",minimalPenjualan:num(r.Minimal_Penjualan_Lelang),diskonRp:num(r.Diskon_Lelang_Rp),diskonPct:num(r.Diskon_Lelang_Persen),beaPembeli:num(r.Bea_Lelang_Pembeli),beaPenjual:num(r.Bea_Lelang_Penjual),hmls:num(r.HMLS),minimalKewajiban:num(r.Minimal_Kewajiban_Pembeli_Lelang)};
 }
 return calcAuction([{Taksir_Ulang_Karatase:num(r.Taksir_Ulang_Karatase),Taksir_Ulang_BB:num(r.Taksir_Ulang_BB),Berlian:num(r.Berlian)}],num(r.UP),num(r.Sewa_Modal),num(r.Denda_Sewa_Modal),num(r.Denda_Keterlambatan));
}
function exportObject(r,repeat=false){
 const a=auctionForRow(r);
 const out={"No Kontrak":r.No_Kontrak,"Area":r.Area,"Cabang":r.Cabang,"Outlet":r.Outlet,"Customer NM":r.Customer_NM,"Product":r.Product,"Jenis Barang":r.Jenis_Barang,"Karatase":r.Karatase,"BK":r.BK,"BB":r.BB,"Tgl Kredit":r.Tgl_Kredit,"Tgl Cut Off":r.Tgl_Cut_Off,"BJDPL Hari":r.BJDPL_Hari,"Rubrik":r.Rubrik,"UP":r.UP,"Sewa Modal":r.Sewa_Modal,"Denda Sewa Modal":r.Denda_Sewa_Modal,"Denda Keterlambatan":r.Denda_Keterlambatan,"Kewajiban":r.Kewajiban,"Bea Lelang Pembeli":a.beaPembeli,"Bea Lelang Penjual":a.beaPenjual,"HMLS":a.hmls,"Taksir Ulang Karatase":r.Taksir_Ulang_Karatase,"Taksir Ulang BB":r.Taksir_Ulang_BB,"Berlian":r.Berlian,"NPBL":r.NPBL,"Selisih NPBL vs UP":r.Selisih_Harga_VS_UP,"Harga Minimal Lelang":a.hml,"Harga Limit Lelang":a.hargaLimit,"Diskon/Tidak Diskon":a.diskon?"DISKON":"TIDAK DISKON","Minimal Penjualan Lelang":a.minimalPenjualan,"Diskon Lelang (Rp)":a.diskonRp,"Diskon Lelang (%)":(a.diskonPct===""||a.diskonPct==null?"":num(a.diskonPct)),"Minimal Kewajiban Pembeli Lelang":a.minimalKewajiban};
 if(repeat) contractLevelFields().forEach(c=>{const map={"No_Kontrak":"No Kontrak","Area":"Area","Cabang":"Cabang","Outlet":"Outlet","Customer_NM":"Customer NM","Product":"Product","Tgl_Kredit":"Tgl Kredit","Tgl_Cut_Off":"Tgl Cut Off","BJDPL_Hari":"BJDPL Hari","UP":"UP","Sewa_Modal":"Sewa Modal","Denda_Sewa_Modal":"Denda Sewa Modal","Denda_Keterlambatan":"Denda Keterlambatan","Kewajiban":"Kewajiban","Rubrik":"Rubrik","NPBL":"NPBL","Harga_Minimal_Lelang":"Harga Minimal Lelang","Harga_Limit_Lelang":"Harga Limit Lelang","Diskon_Tidak_Diskon":"Diskon/Tidak Diskon","Minimal_Penjualan_Lelang":"Minimal Penjualan Lelang","Diskon_Lelang_Rp":"Diskon Lelang (Rp)","Diskon_Lelang_Persen":"Diskon Lelang (%)","Bea_Lelang_Pembeli":"Bea Lelang Pembeli","Bea_Lelang_Penjual":"Bea Lelang Penjual","HMLS":"HMLS","Selisih_Harga_VS_UP":"Selisih NPBL vs UP","Minimal_Kewajiban_Pembeli_Lelang":"Minimal Kewajiban Pembeli Lelang"};if(map[c] in out)out[map[c]]="";});
 return out;
}
function renderExport(){
 const q=($("export-search").value||"").toLowerCase(),raw=contractSelisihNpblUp(exportRows()),out=displayRows(raw).map(x=>exportObject(x.r,x.repeat)).filter(r=>Object.values(r).some(v=>String(v??"").toLowerCase().includes(q))),cols=["No Kontrak","Area","Cabang","Outlet","Customer NM","Product","Jenis Barang","Karatase","BK","BB","Tgl Kredit","Tgl Cut Off","BJDPL Hari","Rubrik","UP","Sewa Modal","Denda Sewa Modal","Denda Keterlambatan","Kewajiban","Bea Lelang Pembeli","Bea Lelang Penjual","HMLS","Taksir Ulang Karatase","Taksir Ulang BB","Berlian","NPBL","Selisih NPBL vs UP","Harga Minimal Lelang","Harga Limit Lelang","Diskon/Tidak Diskon","Minimal Penjualan Lelang","Diskon Lelang (Rp)","Diskon Lelang (%)","Minimal Kewajiban Pembeli Lelang"];
 $("export-table").innerHTML="<thead><tr>"+cols.map(c=>`<th>${esc(c)}</th>`).join("")+"</tr></thead><tbody>"+out.slice(0,2000).map(r=>"<tr>"+cols.map(c=>`<td>${c==="Diskon Lelang (%)"?(r[c]===""?"":(num(r[c])*100).toLocaleString("id-ID",{minimumFractionDigits:2,maximumFractionDigits:2})+"%"):["UP","Sewa Modal","Denda Sewa Modal","Denda Keterlambatan","Kewajiban","Berlian","NPBL","Selisih NPBL vs UP","Harga Minimal Lelang","Harga Limit Lelang","Minimal Penjualan Lelang","Diskon Lelang (Rp)","Bea Lelang Pembeli","Bea Lelang Penjual","HMLS","Minimal Kewajiban Pembeli Lelang","Selisih NPBL vs UP"].includes(c)?rupiah(r[c]):esc(r[c])}</td>`).join("")+"</tr>").join("")+"</tbody>";
 $("export-hdle").textContent=rupiah(state.hdle);$("export-hdle-date").textContent=state.hdleDate;$("export-hdle-value").textContent=rupiah(state.hdle)
}
function downloadExcel(){
 const rows=displayRows(contractSelisihNpblUp(exportRows())).map(x=>{const o=exportObject(x.r,x.repeat);if(o["Diskon Lelang (%)"]!==""&&o["Diskon Lelang (%)"]!=null)o["Diskon Lelang (%)"]=num(o["Diskon Lelang (%)"])>1?num(o["Diskon Lelang (%)"])/100:num(o["Diskon Lelang (%)"]);return o;});
 const ws=XLSX.utils.json_to_sheet(rows);
 const infoStart=(Object.keys(rows[0]||{}).length||1)+3;
 XLSX.utils.sheet_add_aoa(ws,[
  ["DASAR PERHITUNGAN","Harga Minimum Lelang"],
  ["HDLE Per Tanggal",state.hdleDate],
  ["Nilai HDLE",state.hdle],
  ["NPBL","SUM [ROUND((Karatase ÷ 24) × BB × HDLE, 0) + Nilai Berlian] per barang"],
  ["Harga Minimal Lelang","(101/99) × (UP + SM + Denda Sewa Modal + Denda Keterlambatan)"],
  ["Harga Limit Lelang","MAX(NPBL, Harga Minimal Lelang)"],
  ["Diskon/Tidak Diskon",'Jika NPBL < HML = DISKON; selain itu TIDAK DISKON'],
  ["Bea Lelang Pembeli","NPBL ÷ 102"],
  ["Bea Lelang Penjual","NPBL ÷ 102"],
  ["HMLS","UP + SM + Denda Sewa Modal + Bea Lelang Pembeli + Bea Lelang Penjual"],
  ["Diskon Lelang (Rp)","Jika DISKON = Harga Limit Lelang - NPBL"],
  ["Diskon Lelang (%)","Jika DISKON = MIN((Harga Limit Lelang − NPBL) / (SM + Denda Sewa Modal), 100%)"],
  ["Minimal Kewajiban Pembeli Lelang","Mengikuti formula Excel Hitung Limit Lelang.xlsx"]
 ],{origin:{r:0,c:infoStart-1}});
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,"Data Gadai");
 styleExcelExport(wb,"Data Gadai");XLSX.writeFile(wb,`Monitoring_Gadai_${todayISO().replaceAll("-","")}.xlsx`);toast("Excel berhasil diekspor")
}
function fitInfoText(){
 document.querySelectorAll(".kpi-card strong,.summary-box strong,.value-display strong,.final-result>strong").forEach(el=>{
   el.style.fontSize="";
   let size=parseFloat(getComputedStyle(el).fontSize);
   while(el.scrollWidth>el.clientWidth && size>10){size-=.5;el.style.fontSize=size+"px";}
 });
}
function renderAll(){renderPreview();renderContracts();renderMonitoring();renderDashboard();renderExport();populateContractSuggestions();observeDashboardLayout();scheduleDashboardResize();setTimeout(fitInfoText,0)}

function resizeDashboardCharts(){
  if(!window.Plotly) return;
  const charts=document.querySelectorAll("#page-dashboard .js-plotly-plot");
  charts.forEach(el=>{
    try{ Plotly.Plots.resize(el); }catch(e){}
  });
}
function scheduleDashboardResize(){
  [0,60,180,350,600].forEach(ms=>setTimeout(resizeDashboardCharts,ms));
  requestAnimationFrame(()=>requestAnimationFrame(resizeDashboardCharts));
}
function observeDashboardLayout(){
  const page=$("page-dashboard");
  if(!page || page.__dashObserver) return;
  const target=page.querySelector(".dashboard-layout-clean")||page;
  const ro=new ResizeObserver(()=>scheduleDashboardResize());
  ro.observe(target);
  page.__dashObserver=ro;
}

function goPage(page,section){
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page && (!section || b.dataset.section===section)));
  document.querySelectorAll(".nav-group-toggle").forEach(t=>{
    const group=t.dataset.group;
    const active=(group===page);
    t.classList.toggle("active",active);
  });
  document.querySelectorAll(".nav-submenu").forEach(s=>s.classList.remove("open"));
  const activeItem=section?document.querySelector('.nav-item[data-page="'+page+'"][data-section="'+section+'"]'):document.querySelector('.nav-item[data-page="'+page+'"]');
  const activeSubmenu=activeItem?activeItem.closest(".nav-submenu"):document.querySelector('.nav-submenu[data-submenu="'+page+'"]');
  if(activeSubmenu && activeSubmenu.querySelector('.nav-item')) activeSubmenu.classList.add("open");

  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+page));
  // Each submenu is a real view: show only the selected section, never scroll the page to it.
  // Store the active input subview on the page itself as a defensive guard so
  // the search + HDLE Global panels can never leak into the other subviews.
  if(page==="input") {
    const inputPage=$("page-input");
    if(inputPage) inputPage.dataset.inputSection=section||"input-search";
  } else {
    const inputPage=$("page-input");
    if(inputPage) delete inputPage.dataset.inputSection;
  }
  if(section){
    const pageEl=$("page-"+page);
    if(pageEl){
      pageEl.querySelectorAll(":scope > .page-section, :scope > .monitor-pane").forEach(el=>el.classList.remove("active"));

      // Input & Update Kontrak has three independent subviews:
      // 1) Cari & Tambahkan Kontrak = search + HDLE + Informasi Kontrak + Kredit & Kewajiban
      // 2) Input Barang & Taksir Ulang = only the item/taksir view
      // 3) Minimal Kewajiban Pembeli Lelang = only the obligation calculation view
      // Do not let the search/HDLE panels leak into the other two subviews.
      if(page==="input" && section==="input-search"){
        ["input-search","input-contract-info","input-credit-obligation"].forEach(id=>$(id)?.classList.add("active"));
      } else {
        const target=$(section);
        if(target) target.classList.add("active");
      }
    }
  } else if(page==="monitoring"){
    document.querySelectorAll("#page-monitoring > .monitor-pane").forEach((el,i)=>el.classList.toggle("active",i===0));
  }
  try{localStorage.setItem("mg_last_page",JSON.stringify({page,section:section||""}))}catch(e){}
  const titles={import:"Import & Cek Data",input:"Input & Update Kontrak",contracts:"Data Kontrak",monitoring:"Monitoring",dashboard:"Dashboard KPI",export:"Ekspor Data"};
  $("page-title").textContent=titles[page]||page;
  if(page==="input")updateInputCalculations();
  if(page==="monitoring")renderMonitoring();
  if(page==="dashboard"){renderDashboard();observeDashboardLayout();scheduleDashboardResize();}
  if(page==="export")renderExport();
  setTimeout(fitInfoText,0);
}
function setupNavGroups(){
  document.querySelectorAll(".nav-group-toggle").forEach(btn=>{
    btn.onclick=()=>{
      const page=btn.dataset.page;
      const submenu=btn.nextElementSibling;
      const hasItems=!!submenu.querySelector('.nav-item');
      if(page && !hasItems){goPage(page);return;}
      const first=submenu.querySelector('.nav-item');
      const isCurrent=btn.classList.contains('active');
      const willOpen=!submenu.classList.contains("open");
      document.querySelectorAll(".nav-submenu").forEach(s=>s.classList.remove("open"));
      document.querySelectorAll(".nav-group-toggle").forEach(b=>b.classList.remove("active"));
      if(willOpen){
        submenu.classList.add("open");btn.classList.add("active");
        if(!isCurrent && first) goPage(first.dataset.page,first.dataset.section);
      }
    };
  });
}
const API_BASE = "api"; let AUTH_USER = null; function isAdmin(){ return String(AUTH_USER?.role ?? "").trim().toUpperCase() === "ADMIN"; } async function apiFetch(path, options={}) { const res=await fetch(`${API_BASE}/${path}`,{credentials:"include",...options,headers:{"Content-Type":"application/json",...(options.headers||{})}}); const data=await res.json().catch(()=>({success:false,message:"Respons server tidak valid."})); if(!res.ok||data.success===false) throw new Error(data.message||"Request gagal."); return data;} function applyUser(u){AUTH_USER=u; const n=u.full_name||u.username||"User"; $("top-user-name").textContent=n; $("side-user-name").textContent=n; $("side-user-role").textContent=`${u.role||"USER"} • ${u.area_name||"Area Senen"}`; $("side-user-avatar").textContent=n.split(/s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase();} function showLogin(){$("splash-screen").classList.add("hidden");$("app-page").classList.add("hidden");$("login-screen").classList.remove("hidden");} function renderImportAccess(){
 const admin=isAdmin();
 const controls=$("admin-import-controls"), input=$("excel-file"), label=document.querySelector('label[for="excel-file"]'), clear=$("clear-import-data");
 if(controls){ controls.classList.toggle("hidden-by-role",!admin); controls.setAttribute("aria-hidden",admin?"false":"true"); }
 if(input){ input.type=admin?"file":"hidden"; input.disabled=!admin; input.multiple=true; input.tabIndex=admin?0:-1; input.setAttribute("aria-disabled",admin?"false":"true"); if(!admin) input.value=""; }
 if(label){ label.classList.toggle("hidden-by-role",!admin); label.textContent="Import Data"; label.setAttribute("aria-hidden",admin?"false":"true"); }
 if(clear){ clear.disabled=!admin; clear.classList.toggle("hidden-by-role",!admin); }
 renderImportBatches();
}
async function showApp(){
 $("login-screen").classList.add("hidden");$("splash-screen").classList.add("hidden");$("app-page").classList.remove("hidden");
 applyUser(AUTH_USER);
 renderImportAccess();
 document.querySelectorAll(".admin-only").forEach(el=>{const admin=isAdmin();el.classList.toggle("hidden-by-role",!admin);el.setAttribute("aria-hidden",admin?"false":"true");});
 document.querySelectorAll(".user-only").forEach(el=>el.classList.toggle("hidden-by-role",String(AUTH_USER?.role||"").trim().toUpperCase()==="ADMIN"));
 await loadRemoteData();
}
function setupAuth(){ const form=$("login-form"),pass=$("login-password"),toggle=$("toggle-login-password"),err=$("login-error"),submit=$("login-submit"); toggle.onclick=()=>{pass.type=pass.type==="password"?"text":"password"}; form.onsubmit=async e=>{e.preventDefault();err.textContent="";submit.disabled=true;try{const d=await apiFetch("auth/login.php",{method:"POST",body:JSON.stringify({username:$("login-username").value.trim(),password:pass.value})});AUTH_USER=d.data;await showApp()}catch(x){err.textContent=x.message;pass.value=""}finally{submit.disabled=false}}; $("logout-btn").onclick=async()=>{try{await apiFetch("auth/logout.php",{method:"POST",body:"{}"})}catch(e){}AUTH_USER=null;showLogin()}; } async function bootAuth(){try{const d=await apiFetch("auth/me.php");AUTH_USER=d.data;await showApp()}catch(e){showLogin()}}
function formatCurrencyInput(el){if(!el)return;const n=num(el.value);el.value=n?new Intl.NumberFormat("id-ID",{maximumFractionDigits:0}).format(n):"0";}
function bindCurrencyInputs(){document.querySelectorAll(".currency-input").forEach(el=>{el.addEventListener("blur",()=>{formatCurrencyInput(el);updateInputCalculations()});});}
function setupEvents(){
 document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>goPage(b.dataset.page,b.dataset.section));
 setupNavGroups();
 $("sidebar-toggle").onclick=()=>{$("app-page").classList.toggle("sidebar-collapsed");$("sidebar-toggle").textContent=$("app-page").classList.contains("sidebar-collapsed")?"›":"‹";setTimeout(()=>window.dispatchEvent(new Event("resize")),220)};
 $("excel-file").addEventListener("change",async e=>{
  const files=[...(e.target.files||[])]; if(!files.length)return;
  if(!isAdmin()){e.target.value="";toast("Akses import ditolak. Hanya ADMIN yang dapat mengimport file.","bad");return;}
  try{
   for(const file of files){
     const rows=await readExcel(file);
     if(!rows.length) throw new Error(`${file.name}: tidak ada data kontrak.`);
     const d=await apiFetch("import/save.php",{method:"POST",body:JSON.stringify({filename:file.name,rows})});
     const result=d.data||{};
     if(Number(result.error_count||0)>0) throw new Error(`${file.name}: ${result.error_count} baris gagal divalidasi.`);
     $("file-name").textContent=`${file.name} • ${rows.length.toLocaleString("id-ID")} baris`;
     toast(`${file.name} berhasil masuk database • ${Number(result.total_contracts||0).toLocaleString("id-ID")} kontrak`);
   }
   clearInputDraft();
   state.importFilters={Cabang:"Semua Cabang",Outlet:"Semua Outlet"};
   state.previewFilters={No_Kontrak:"",Cabang:"Semua Cabang",Outlet:"Semua Outlet",Customer_NM:""};
   await loadRemoteData();
   renderImportAccess();
  }catch(err){console.error(err);toast("Gagal import ke database: "+err.message,"bad");}
  e.target.value="";
 });
$("clear-import-data")?.addEventListener("click",()=>{
 if(!isAdmin()){toast("Hanya ADMIN yang dapat menghapus data import.","bad");return;}
 if(!state.data.length){toast("Tidak ada data import untuk dihapus.");return;}
 if(confirm("Hapus seluruh data import yang tersimpan di browser ini?")) clearImportedData();
});
$("import-filter-branch")?.addEventListener("change",e=>{state.importFilters.Cabang=e.target.value||"Semua Cabang";state.importFilters.Outlet="Semua Outlet";populateImportFilters();saveState();renderPreview();});
$("import-filter-outlet")?.addEventListener("change",e=>{state.importFilters.Outlet=e.target.value||"Semua Outlet";saveState();renderPreview();});
$("reset-import-filters")?.addEventListener("click",()=>{state.importFilters={Cabang:"Semua Cabang",Outlet:"Semua Outlet"};populateImportFilters();saveState();renderPreview();});

$("contracts-search").addEventListener("input",renderContracts);
 $("contracts-branch").addEventListener("change",()=>{setOutletOptions("contracts-outlet",$("contracts-branch").value,"",true);renderContracts()});$("contracts-outlet").addEventListener("change",renderContracts);
 $("hdle-global").addEventListener("input",e=>{state.hdle=num(e.target.value);saveState();updateInputCalculations();renderAll()});
 $("hdle-global").addEventListener("change",async e=>{try{await apiFetch("hdle/save.php",{method:"POST",body:JSON.stringify({area_id:AUTH_USER?.area_id,hdle_date:$("hdle-date").value,hdle_value:num(e.target.value),source:"MANUAL"})});toast("HDLE tersimpan ke database");}catch(x){toast("Gagal menyimpan HDLE: "+x.message,"bad");}});
 $("hdle-date").addEventListener("change",async e=>{state.hdleDate=e.target.value;saveState();updateInputCalculations();renderExport();try{await apiFetch("hdle/save.php",{method:"POST",body:JSON.stringify({area_id:AUTH_USER?.area_id,hdle_date:e.target.value,hdle_value:state.hdle,source:"MANUAL"})});toast("Tanggal HDLE tersimpan ke database");}catch(x){toast("Gagal menyimpan HDLE: "+x.message,"bad");}});
 $("find-contract").onclick=findContract;$("add-contract").onclick=addContract;
 $("contract-search").addEventListener("input",e=>{const m=findContractGroup(e.target.value);if(m&&String(m[0]).toLowerCase()===e.target.value.trim().toLowerCase())fillInputForm(m[1]);else autoPopulateByContractNo(e.target.value)});
 $("contract-no").addEventListener("input",e=>{const m=autoPopulateByContractCode(e.target.value);if(!m){const found=findContractGroup(e.target.value);if(found){const first=found[1][0];$("contract-area").value=first.Area||MASTER_AREA;setBranchOptions("contract-branch",first.Cabang);setOutletOptions("contract-outlet",first.Cabang,first.Outlet);$("contract-outlet").value=first.Outlet||"";$("contract-search-result").textContent=`Kontrak ${first.No_Kontrak} • ${first.Cabang||"-"} • ${first.Outlet||"-"}`;}}});$("save-contract").onclick=saveContract;$("contract-branch").addEventListener("change",()=>setOutletOptions("contract-outlet",$("contract-branch").value));
 $("apply-item-count").onclick=()=>renderItemForms(getItemsFromForm());
 ["tgl-cutoff","input-up","input-sm","input-denda-sm","input-denda-keterlambatan"].forEach(id=>$(id).addEventListener("input",updateInputCalculations));bindCurrencyInputs();
 // Simpan draft form secara otomatis. Jadi nilai taksir ulang tetap ada
 // walaupun halaman direfresh sebelum tombol "Simpan Kontrak" ditekan.
 const draftIds=["contract-no","contract-area","contract-branch","contract-outlet","contract-customer","contract-product","tgl-kredit","tgl-cutoff","input-up","input-sm","input-denda-sm","input-denda-keterlambatan","rubrik","item-count"];
 draftIds.forEach(id=>{const el=$(id);if(el){el.addEventListener("input",saveInputDraft);el.addEventListener("change",saveInputDraft)}});
 $("taksir-forms").addEventListener("input",saveInputDraft);
 $("taksir-forms").addEventListener("change",saveInputDraft);
 $("item-forms").addEventListener("input",saveInputDraft);
 $("item-forms").addEventListener("change",saveInputDraft);

["branch-ranking-search","outlet-ranking-search","bjdpl-search"].forEach(id=>$(id)?.addEventListener("input",renderMonitoring));
["outlet-ranking-branch","bjdpl-branch"].forEach(id=>$(id)?.addEventListener("change",renderMonitoring));
 $("dashboard-branch").addEventListener("change",()=>{renderDashboard();setTimeout(fitInfoText,0);scheduleDashboardResize();});
 $("export-branch").addEventListener("change",()=>{setOutletOptions("export-outlet",$("export-branch").value,"",true);renderExport()});$("export-outlet").addEventListener("change",renderExport);$("export-search").addEventListener("input",renderExport);$("export-excel").onclick=downloadExcel;

}
window.addEventListener("resize",()=>{setTimeout(fitInfoText,0);scheduleDashboardResize();});
function init(){
 const BOOT_KEY="mg_v7_initialized";
 const firstBoot=!localStorage.getItem(BOOT_KEY);
 if(firstBoot){
   try{indexedDB.deleteDatabase("monitoring_pegadaian_db");localStorage.removeItem("mg_input_draft");localStorage.removeItem("mg_last_page");localStorage.removeItem("mg_hdle");localStorage.removeItem("mg_hdle_date");}catch(e){}
   localStorage.setItem(BOOT_KEY,"1");
 }
 setBranchOptions("contract-branch",MASTER_BRANCHES[0]);setOutletOptions("contract-outlet",MASTER_BRANCHES[0]);setBranchOptions("outlet-ranking-branch","",true);setBranchOptions("bjdpl-branch","",true);setBranchOptions("contracts-branch","",true);setOutletOptions("contracts-outlet","", "",true);setBranchOptions("dashboard-branch","",true);setBranchOptions("export-branch","",true);setOutletOptions("export-outlet","", "",true);
 $("tgl-kredit").value=todayISO();$("tgl-cutoff").value=todayISO();$("input-denda-sm").value="0";$("input-denda-keterlambatan").value="0";$("hdle-global").value=state.hdle;$("hdle-date").value=state.hdleDate;renderItemForms(blankRows(1));renderTaksirForms(blankRows(1));setupEvents();setupAuth();updateInputCalculations();bootAuth();if(!firstBoot){restoreInputDraft();restoreData();setTimeout(()=>{try{const last=JSON.parse(localStorage.getItem("mg_last_page")||"null");if(last&&last.page){const safeInputSections=["input-search","input-contract-info","input-credit-obligation","input-items","input-obligation"];const safeSection=last.page==="input" && !safeInputSections.includes(last.section)?"input-search":last.section;goPage(last.page,safeSection)}}catch(e){}},2500)}
}
document.addEventListener("DOMContentLoaded",init);

// Auto-fit angka pada kotak ringkasan (.kpi-card / .summary-box) supaya
// selalu muat dalam satu baris tanpa turun ke baris berikutnya —
// font-size mengecil otomatis sesuai lebar kotak & panjang angka.
(function(){
  const MAX_SIZE=24,MIN_SIZE=10;
  function fitOne(el){
    if(!el || !el.isConnected) return;
    el.style.fontSize=MAX_SIZE+"px";
    let size=MAX_SIZE;
    while(el.scrollWidth>el.clientWidth+1 && size>MIN_SIZE){
      size--;
      el.style.fontSize=size+"px";
    }
  }
  function fitAll(){
    document.querySelectorAll(".kpi-card strong, .summary-box strong").forEach(fitOne);
  }
  document.addEventListener("DOMContentLoaded",fitAll);
  window.addEventListener("load",fitAll);
  window.addEventListener("resize",()=>{clearTimeout(window.__fitResizeT);window.__fitResizeT=setTimeout(fitAll,100)});
  // Pantau perubahan teks (mis. setelah render dashboard/monitoring) lalu sesuaikan ulang.
  const mo=new MutationObserver(muts=>{
    const touched=new Set();
    muts.forEach(m=>{
      let node=m.target.nodeType===3?m.target.parentElement:m.target;
      const strong=node&&node.closest?node.closest(".kpi-card strong, .summary-box strong"):null;
      if(strong) touched.add(strong);
    });
    if(touched.size){clearTimeout(window.__fitMoT);window.__fitMoT=setTimeout(()=>touched.forEach(fitOne),0)}
  });
  document.addEventListener("DOMContentLoaded",()=>{
    mo.observe(document.body,{characterData:true,childList:true,subtree:true});
    fitAll();
  });
})();
