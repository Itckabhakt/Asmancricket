 if(confirm("Join Our Telegram Channel @finallylivestreaming")) { window.location.href = "https://t.me/FinallyliveStreaming" }
const manifestUri = "";

async function init() {
    const video = document.getElementById('video');
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();
    window.player = player;
    window.ui = ui;

player.configure({
    drm: {
        "clearKeys": {
          '000543c0dc49b43c0e816c2a404249de': '836c311dd132a49dbed1049d92800304'
        }
    }
});
player.addEventListener('error', onPlayerErrorEvent);
controls.addEventListener('error', onUIErrorEvent);
    
try { await player.load(manifestUri); console.log('The video has now been loaded!'); }
catch (error) { onPlayerError(error); }}

function onPlayerErrorEvent(errorEvent) { onPlayerError(event.detail); }
function onPlayerError(error) { console.error('Error code', error.code, 'object', error); }
function onUIErrorEvent(errorEvent) { onPlayerError(event.detail); }
function initFailed(errorEvent) { console.error('Unable to load the UI library!'); }

document.addEventListener('shaka-ui-loaded', init);
document.addEventListener('shaka-ui-load-failed', initFailed);
