// global vars
var
    // div = document.createElement('div'),
    canvasContainerDiv = document.getElementById('canvasContainerDiv'),
    canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    w,
    h;

// events
window.onresize = function(event) {
    SetMargins();
};

// initialization
function Init () {
    // document.body.appendChild(div);
    canvasContainerDiv.style.position = "fixed";
    canvas.style.zIndex = "0";
    canvas.style.position = "absolute";
    canvasContainerDiv.appendChild(canvas);

    SetMargins();
    Update();
}
Init();


// main loop
function Update() {

    ctx.fillStyle = '#00d4c8';
    ctx.fillRect(0,0,w,h);

    var timeCur = new Date().getTime();

    var maxLayers = Math.floor(h / 150) + 1;
    var waveLayer = -1;
    var offset = 0;
    var offsetInc = 30;

    while(waveLayer < maxLayers){
        var timeDivider = (8 - (5 * waveLayer / maxLayers));
        var timeMod = timeCur / timeDivider;
        var ampMod = 32 + 12 * waveLayer;
        var ampMult = 8 + waveLayer * 4;

        var grd = ctx.createLinearGradient(0,offset,0,offset + offsetInc * 2);
        grd.addColorStop(0,'#999999');//'rgba(255,255,208,0.2)');
        grd.addColorStop(0.5,'#666666');//'rgba(255,208,208,0)');
        grd.addColorStop(1,'#333333');

        ctx.beginPath();

        for(var i = 0 ; i < w; i+= 10 ){
            var timeUse = (timeMod + i) / ampMod;
            var amp = ampMult * Math.sin(timeUse);
            var height = 4 * Math.cos((timeMod) / 48);
            var yPoint = amp - height + offset;
            var xPoint = i;
            ctx.lineTo(xPoint, yPoint);
        }
        ctx.lineTo(w,h+offset);
        ctx.lineTo(0,h+offset);
        ctx.lineTo(0,offset);

        ctx.closePath();
        ctx.fillStyle = grd;
        ctx.fill();

        waveLayer++;
        offsetInc = 30 + 10 * Math.pow(waveLayer,2);
        offset += offsetInc
    }

    requestAnimationFrame(Update);
}


// functions
function SetMargins () {
    var bodyW = document.documentElement.clientWidth,
        bodyH = document.documentElement.clientHeight;

    w = canvas.width = Math.max(600,bodyW);
    h = canvas.height = bodyH/4;
    canvas.style.bottom = 0;

    canvasContainerDiv.style.left=canvasContainerDiv.style.right=canvasContainerDiv.style.top=canvasContainerDiv.style.bottom="0";
}