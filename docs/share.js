const address = "https://ba.pychen.one/";

function shareToThreads() {
    const output = document.getElementById("output").innerText.trim();
    if (!output) return alert("請先產生文宣再分享！");

    const base = "https://www.threads.net/intent/post?text=";
    const signature = "\n\n 📢 下架藍白·罷免文宣產生器·一起守護民主 " + address;
    const fullText = output + signature;
    const encoded = encodeURIComponent(fullText);

    window.open(base + encoded, '_blank');
}

function shareToFacebook() {
    const url = encodeURIComponent(address);
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(fbShareUrl, '_blank', 'width=600,height=400');
}

function shareToLine() {
    const url = encodeURIComponent(address);
    const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
    window.open(lineShareUrl, '_blank', 'width=600,height=400');
}

function showDcardWarning() {
    alert("要確欸？低卡都藍白紅網軍 🥴");
}
