var expectedDigits="19022025";var gate=document.getElementById("gate");var gift=document.getElementById("gift");var input=document.getElementById("codeInput");var enter=document.getElementById("enterBtn");var romance=document.getElementById("romance");var snow=document.getElementById("snow");var soundBtn=document.getElementById("soundBtn");var bgm=document.getElementById("bgm");
function formatDateInput(v){var d=v.replace(/[^0-9]/g,"").slice(0,8);if(d.length<=2)return d;if(d.length<=4)return d.slice(0,2)+" - "+d.slice(2);return d.slice(0,2)+" - "+d.slice(2,4)+" - "+d.slice(4)}
function mapDigitIndexToPos(str,idx){var count=0;for(var i=0;i<str.length;i++){if(/\d/.test(str[i])){count++;if(count>=idx)return i+1}}return str.length}
input.addEventListener("input",function(){var start=input.selectionStart;var before=input.value.slice(0,start).replace(/[^0-9]/g,"");var f=formatDateInput(input.value);input.value=f;var newPos=mapDigitIndexToPos(f,before.length);input.setSelectionRange(newPos,newPos)});
function showGift(){gate.classList.add("hidden");gift.classList.remove("hidden");var flakes=window.innerWidth<500?90:160;spawnSnow(flakes);soundBtn.classList.remove("hidden");setTimeout(function(){document.querySelector(".santa").classList.add("exit")},15000);setTimeout(function(){romance.classList.remove("hidden")},16000);startMusicMuted()}
function startMusicMuted(){
  // La música está lista pero no se reproduce automáticamente
}
function unmuteMusic(){
  bgm.play().then(function(){
    soundBtn.textContent="Silenciar";
    soundBtn.onclick=function(){
      bgm.pause();
      soundBtn.textContent="Activar sonido";
      soundBtn.onclick=unmuteMusic;
    };
  }).catch(function(e){
    console.log("Error al reproducir:", e);
    alert("No se pudo reproducir la música. Verifica que el archivo esté en la carpeta music/");
  });
}
function spawnSnow(n){for(var i=0;i<n;i++){var s=document.createElement("div");s.className="snowflake";s.textContent="❄";var size=12+Math.random()*18;var left=Math.random()*100;var duration=7+Math.random()*9;var delay=Math.random()*4;s.style.left=left+"%";s.style.fontSize=size+"px";s.style.animationDuration=duration+"s, "+(3+Math.random()*4)+"s";s.style.animationDelay=delay+"s,0s";snow.appendChild(s)}}
function shake(){input.style.borderColor="#d7263d";input.style.boxShadow="0 0 0 6px rgba(215,38,61,.12)";setTimeout(function(){input.style.borderColor="";input.style.boxShadow=""},600)}
enter.addEventListener("click",function(){var digits=input.value.replace(/[^0-9]/g,"");var ok=digits===expectedDigits;if(ok){showGift()}else{shake()}});
input.addEventListener("keydown",function(e){if(e.key==="Enter"){enter.click()}});
soundBtn.addEventListener("click",unmuteMusic);
