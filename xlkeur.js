$(document).ready(function () {
	if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    var vds = document.getElementById('pvds');
    
    if (vds) {
        vds.src = "https://kr.ncsoft.com/_resource/whatWeCreate/video/lineage.mp4";
        document.getElementById('pvd').load();
    }
	}
});

