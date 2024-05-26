(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
        g(t);
    new MutationObserver(t=>{
        for (const n of t)
            if (n.type === "childList")
                for (const d of n.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && g(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(t) {
        const n = {};
        return t.integrity && (n.integrity = t.integrity),
        t.referrerPolicy && (n.referrerPolicy = t.referrerPolicy),
        t.crossOrigin === "use-credentials" ? n.credentials = "include" : t.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function g(t) {
        if (t.ep)
            return;
        t.ep = !0;
        const n = s(t);
        fetch(t.href, n)
    }
}
)();
const E = document.getElementById("rock-btn")
  , w = document.getElementById("paper-btn")
  , B = document.getElementById("scissors-btn")
  , p = document.getElementById("computer-choice-emoji")
  , a = document.getElementById("player-choice-emoji")
  , o = document.getElementById("winner-announcement")
  , x = document.getElementById("scoreboard");
let i, l, u = 0, m = 0;
function c(r) {
    r === "player" ? (m += 1,
    x.textContent = `computer ${u} ${m} player`) : r === "computer" && (u += 1,
    x.textContent = `computer ${u} ${m} player`)
}
const f = ()=>{
    const r = ["rock", "paper", "scissors"]
      , e = Math.floor(Math.random() * r.length)
      , s = r[e];
    return s === "rock" ? p.innerText = "✊" : s === "paper" ? p.innerText = "✋" : s === "scissors" && (p.innerText = "✌️"),
    s
}
;
E.addEventListener("click", ()=>{
    a.innerText = "✊",
    i = "rock",
    l = f(),
    y(l, i)
}
);
w.addEventListener("click", ()=>{
    a.innerText = "✋",
    i = "paper",
    l = f(),
    y(l, i)
}
);
B.addEventListener("click", ()=>{
    a.innerHTML = "✌️",
    i = "scissors",
    l = f(),
    y(l, i)
}
);
function y(r, e) {
    r === "rock" ? e === "rock" ? o.textContent = "draw" : e === "scissors" ? (o.textContent = "computer wins",
    c("computer")) : e === "paper" && (o.textContent = "player wins",
    c("player")) : r === "paper" ? e === "paper" ? o.textContent = "draw" : e === "rock" ? (o.textContent = "computer wins",
    c("computer")) : e === "scissors" && (o.textContent = "player wins",
    c("player")) : r === "scissors" && (e === "scissors" ? o.textContent = "draw" : e === "paper" ? (o.textContent = "computer wins",
    c("computer")) : e === "rock" && (o.innerHTML = "player wins",
    c("player")))
}
