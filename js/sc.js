document.getElementById("sc_clic_c1").onclick = function () {
    "use strict";
        document.getElementById("sc_corda").className = "sc_corda_m";
        document.getElementById("sc_ancla").className = "sc_ancla_m";
        document.getElementById("sc_aura").className = "sc_aura"
        document.getElementById("sc_aura").style.transitionDelay = "0s";
        document.getElementById("scene_change").className = "scene_change";
        document.getElementById("scene_change").style.transitionDelay = "4.5s";
        document.getElementById("text_joe_13").className = "text_joe_13_mid";
        document.getElementById("intro").style.display = "none";
        document.getElementById("props").style.display = "none";
        document.getElementById("props_c1").style.display = "block";
        document.getElementById("cap_1").style.display = "block";
        document.getElementById("op_bar_a_s").style.backgroundImage = "url(media/IMG/start/ancla_pag.png)";
};

document.getElementById("sc_clic_mi").onclick = function () {
    "use strict";
        document.getElementById("sc_corda").className = "sc_corda_m";
        document.getElementById("sc_ancla").className = "sc_ancla_m";
        document.getElementById("sc_aura").className = "sc_aura";
        document.getElementById("sc_aura").style.transitionDelay = "0s";
        document.getElementById("sc_clic_mi").style.display = "none";
        document.getElementById("scene_change").className = "scene_change";
        document.getElementById("scene_change").style.transitionDelay = "4.5s";
        document.getElementById("mainintro").style.display = "none";
        document.getElementById("intro").className = "intro_on";
        document.getElementById("op_bar_a_s").style.backgroundImage = "url(media/IMG/start/ancla_pag.png)";
};