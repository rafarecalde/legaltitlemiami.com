(function(){
function units(v){return v>0?Math.ceil(v/100):0}
function money(n){return n.toLocaleString('en-US',{style:'currency',currency:'USD'})}
function compute(o){
  var md=o.county==='miami-dade';
  var deedRate=md?0.60:0.70;
  var u=units(o.price);
  var deed=Math.round(u*deedRate*100)/100;
  var sur=(md&&!o.sfr)?Math.round(u*0.45*100)/100:0;
  var note=Math.round(units(o.loan)*0.35*100)/100;
  var intang=Math.round(o.loan*0.002*100)/100;
  return {deed:deed,sur:sur,note:note,intang:intang,total:Math.round((deed+sur+note+intang)*100)/100,deedRate:deedRate};
}
if(typeof module!=='undefined'){module.exports=compute;return}
var f=document.getElementById('dst');if(!f)return;
function num(id){var v=(document.getElementById(id).value||'').replace(/[^0-9.]/g,'');return parseFloat(v)||0}
function run(e){if(e)e.preventDefault();
  var county=document.getElementById('county').value;
  var sfrWrap=document.getElementById('sfr-wrap');sfrWrap.style.display=county==='miami-dade'?'':'none';
  var r=compute({county:county,price:num('price'),loan:num('loan'),sfr:document.getElementById('sfr').checked});
  document.getElementById('o-deed').textContent=money(r.deed);
  document.getElementById('o-deed-l').textContent='Deed doc stamps ('+(r.deedRate*100).toFixed(0)+'\u00a2 per $100)';
  document.getElementById('o-sur-row').style.display=county==='miami-dade'?'':'none';
  document.getElementById('o-sur').textContent=money(r.sur);
  document.getElementById('o-note').textContent=money(r.note);
  document.getElementById('o-int').textContent=money(r.intang);
  document.getElementById('o-total').textContent=money(r.total);
}
f.addEventListener('input',run);f.addEventListener('change',run);f.addEventListener('submit',run);run();
})();
