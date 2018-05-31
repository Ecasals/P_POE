var weaves = document.getElementById("main_theme_e1");
var joe = document.getElementById("joe_cough");
var drawer = document.getElementById("drawer_sound");
var lamp = document.getElementById("light_sound");
var conch = document.getElementById("conch_sound");
var bell = document.getElementById("bell");
var texts = document.getElementById("xat_auidio");


// TIMER //
var tiger = setInterval(tiger, 8000);
// TIMER //

document.getElementById("ba").addEventListener("mousedown", bamouseDown);
document.getElementById("ba").addEventListener("mouseup", bamouseUp);
document.getElementById("ba").addEventListener("touchstart", TouchEvent);
document.getElementById("ba").addEventListener("touchend", batouchend);

document.getElementById("bm").addEventListener("mousedown", bmmouseDown);
document.getElementById("bm").addEventListener("mouseup", bmmouseUp);
document.getElementById("bm").addEventListener("touchstart", bmtouchstart);
document.getElementById("bm").addEventListener("touchend", bmtouchend);

document.getElementById("bd").addEventListener("mousedown", bdmouseDown);
document.getElementById("bd").addEventListener("mouseup", bdmouseUp);
document.getElementById("bd").addEventListener("touchstart", bdtouchstart);
document.getElementById("bd").addEventListener("touchend", bdtouchend);

document.getElementById("bag").addEventListener("mousedown", bagmouseDown);
document.getElementById("bag").addEventListener("mouseup", bagmouseUp);
document.getElementById("bag").addEventListener("touchstart", bagTouchEvent);
document.getElementById("bag").addEventListener("touchend", bagtouchend);

document.getElementById("bmg").addEventListener("mousedown", bmgmouseDown);
document.getElementById("bmg").addEventListener("mouseup", bmgmouseUp);
document.getElementById("bmg").addEventListener("touchstart", bmgtouchstart);
document.getElementById("bmg").addEventListener("touchend", bmgtouchend);

document.getElementById("bdg").addEventListener("mousedown", bdgmouseDown);
document.getElementById("bdg").addEventListener("mouseup", bdgmouseUp);
document.getElementById("bdg").addEventListener("touchstart", bdgtouchstart);
document.getElementById("bdg").addEventListener("touchend", bdgtouchend);

function bamouseDown() {
    "use strict";
    if (document.getElementById("ba").className === "ba_on") {
        document.getElementById("ba").style.opacity = "0";
        document.getElementById("ba").className = "ba_off";
        document.getElementById("bag").className = "ba_off";
    } else if (document.getElementById("ba").className === "ba_off") {
        document.getElementById("ba").className = "ba_on";
        document.getElementById("bag").className = "ba_on";
        document.getElementById("ba").style.opacity = "0";
    }
}

function bamouseUp() {
    "use strict";
    if (document.getElementById("ba").className === "ba_off") {
        document.getElementById("ba").style.opacity = "1";
        document.getElementById("ba").className = "ba_off";
        document.getElementById("bag").className = "ba_off";
        lamp.muted = true;
        weaves.muted = true;
        drawer.muted = true;
        joe.muted = true;
        bell.muted = true;
        conch.muted = true;
        texts.muted = true;
    }
    if (document.getElementById("ba").className === "ba_on") {
        document.getElementById("ba").style.opacity = "1";
        lamp.muted = false;
        weaves.muted = false;
        drawer.muted = false;
        joe.muted = false;
        bell.muted = false;
        conch.muted = false;
        texts.muted = false;
    }
}

function TouchEvent() {
    "use strict";
    if (document.getElementById("ba").className === "ba_on") {
        document.getElementById("ba").style.opacity = "0";
        document.getElementById("ba").className = "ba_off";
        document.getElementById("bag").className = "ba_off";
    } else if (document.getElementById("ba").className === "ba_off") {
        document.getElementById("ba").className = "ba_on";
        document.getElementById("bag").className = "ba_on";
        document.getElementById("ba").style.opacity = "0";
    }
}

function batouchend() {
    "use strict";
    if (document.getElementById("ba").className === "ba_off") {
        document.getElementById("ba").style.opacity = "1";
        document.getElementById("ba").className = "ba_off";
        document.getElementById("bag").className = "ba_off";
        lamp.muted = true;
        weaves.muted = true;
        drawer.muted = true;
        joe.muted = true;
        bell.muted = true;
        conch.muted = true;
        texts.muted = true;
    }
    if (document.getElementById("ba").className === "ba_on") {
        document.getElementById("ba").style.opacity = "1";
        lamp.muted = false;
        weaves.muted = false;
        drawer.muted = false;
        joe.muted = false;
        bell.muted = false;
        conch.muted = false;
        texts.muted = false;
    }
}

function bmmouseDown() {
    "use strict";
    if (document.getElementById("bm").className === "bm_on") {
        document.getElementById("bm").style.opacity = "0";
        document.getElementById("bm").className = "bm_off";
        document.getElementById("bmg").className = "bm_off";
    } else if (document.getElementById("bm").className === "bm_off") {
        document.getElementById("bm").className = "bm_on";
        document.getElementById("bmg").className = "bm_on";
        document.getElementById("bm").style.opacity = "0";
    }
}

function bmmouseUp() {
    "use strict";
    if (document.getElementById("bm").className === "bm_off") {
        document.getElementById("bm").style.opacity = "1";
        document.getElementById("bm").className = "bm_off";
        document.getElementById("bmg").className = "bm_off";
    }
    if (document.getElementById("bm").className === "bm_on") {
        document.getElementById("bm").style.opacity = "1";
    }
}

function bmtouchstart() {
    "use strict";
    if (document.getElementById("bm").className === "bm_on") {
        document.getElementById("bm").style.opacity = "0";
        document.getElementById("bm").className = "bm_off";
        document.getElementById("bmg").className = "bm_off";
    } else if (document.getElementById("bm").className === "bm_off") {
        document.getElementById("bm").className = "bm_on";
        document.getElementById("bmg").className = "bm_on";
        document.getElementById("bm").style.opacity = "0";
    }
}

function bmtouchend() {
    "use strict";
    if (document.getElementById("bm").className === "bm_off") {
        document.getElementById("bm").style.opacity = "1";
        document.getElementById("bm").className = "bm_off";
        document.getElementById("bmg").className = "bm_off";
    }
    if (document.getElementById("bm").className === "bm_on") {
        document.getElementById("bm").style.opacity = "1";
    }
}

function bdmouseDown() {
    "use strict";
    if (document.getElementById("bd").className === "bd_on") {
        document.getElementById("bd").style.opacity = "0";
        document.getElementById("bd").className = "bd_off";
        document.getElementById("bdg").className = "bd_off";
    } else if (document.getElementById("bd").className === "bd_off") {
        document.getElementById("bd").className = "bd_on";
        document.getElementById("bdg").className = "bd_on";
        document.getElementById("bd").style.opacity = "0";
    }
}

function bdmouseUp() {
    "use strict";
    if (document.getElementById("bd").className === "bd_off") {
        document.getElementById("bd").style.opacity = "1";
        document.getElementById("bd").className = "bd_off";
        document.getElementById("bdg").className = "bd_off";
    }
    if (document.getElementById("bd").className === "bd_on") {
        document.getElementById("bd").style.opacity = "1";
    }
}

function bdtouchstart() {
    "use strict";
    if (document.getElementById("bd").className === "bd_on") {
        document.getElementById("bd").style.opacity = "0";
        document.getElementById("bd").className = "bd_off";
        document.getElementById("bdg").className = "bd_off";
    } else if (document.getElementById("bd").className === "bd_off") {
        document.getElementById("bd").className = "bd_on";
        document.getElementById("bdg").className = "bd_on";
        document.getElementById("bd").style.opacity = "0";
    }
}

function bdtouchend() {
    "use strict";
    if (document.getElementById("bd").className === "bd_off") {
        document.getElementById("bd").style.opacity = "1";
        document.getElementById("bd").className = "bd_off";
        document.getElementById("bdg").className = "bd_off";
    }
    if (document.getElementById("bd").className === "bd_on") {
        document.getElementById("bd").style.opacity = "1";
    }
}

// SOUND BUTTONS IN-GAME //

function bagmouseDown() {
    "use strict";
    if (document.getElementById("bag").className === "ba_on") {
        document.getElementById("bag").style.opacity = "0";
        document.getElementById("bag").className = "ba_off";
        document.getElementById("ba").className = "ba_off";
    } else if (document.getElementById("bag").className === "ba_off") {
        document.getElementById("bag").className = "ba_on";
        document.getElementById("ba").className = "ba_on";
        document.getElementById("bag").style.opacity = "0";
    }
}

function bagmouseUp() {
    "use strict";
    if (document.getElementById("bag").className === "ba_off") {
        document.getElementById("bag").style.opacity = "1";
        document.getElementById("bag").className = "ba_off";
        document.getElementById("ba").className = "ba_off";
        lamp.muted = true;
        weaves.muted = true;
        drawer.muted = true;
        joe.muted = true;
        bell.muted = true;
        conch.muted = true;
        texts.muted = true;
    }
    if (document.getElementById("bag").className === "ba_on") {
        document.getElementById("bag").style.opacity = "1";
        lamp.muted = false;
        weaves.muted = false;
        drawer.muted = false;
        joe.muted = false;
        bell.muted = false;
        conch.muted = false;
        texts.muted = false;
    }
}

function bagTouchEvent() {
    "use strict";
    if (document.getElementById("bag").className === "ba_on") {
        document.getElementById("bag").style.opacity = "0";
        document.getElementById("bag").className = "ba_off";
        document.getElementById("ba").className = "ba_off";
    } else if (document.getElementById("bag").className === "ba_off") {
        document.getElementById("bag").className = "ba_on";
        document.getElementById("ba").className = "ba_on";
        document.getElementById("bag").style.opacity = "0";
    }
}

function bagtouchend() {
    "use strict";
    if (document.getElementById("bag").className === "ba_off") {
        document.getElementById("bag").style.opacity = "1";
        document.getElementById("bag").className = "ba_off";
        document.getElementById("ba").className = "ba_off";
        lamp.muted = true;
        weaves.muted = true;
        drawer.muted = true;
        joe.muted = true;
        bell.muted = true;
        conch.muted = true;
    }
    if (document.getElementById("bag").className === "ba_on") {
        document.getElementById("bag").style.opacity = "1";
        lamp.muted = false;
        weaves.muted = false;
        drawer.muted = false;
        joe.muted = false;
        bell.muted = false;
        conch.muted = false;
    }
}

function bmgmouseDown() {
    "use strict";
    if (document.getElementById("bmg").className === "bm_on") {
        document.getElementById("bmg").style.opacity = "0";
        document.getElementById("bmg").className = "bm_off";
        document.getElementById("bm").className = "bm_off";
    } else if (document.getElementById("bmg").className === "bm_off") {
        document.getElementById("bmg").className = "bm_on";
        document.getElementById("bm").className = "bm_on";
        document.getElementById("bmg").style.opacity = "0";
    }
}

function bmgmouseUp() {
    "use strict";
    if (document.getElementById("bmg").className === "bm_off") {
        document.getElementById("bmg").style.opacity = "1";
        document.getElementById("bmg").className = "bm_off";
        document.getElementById("bm").className = "bm_off";
    }
    if (document.getElementById("bmg").className === "bm_on") {
        document.getElementById("bmg").style.opacity = "1";
    }
}

function bmgtouchstart() {
    "use strict";
    if (document.getElementById("bmg").className === "bm_on") {
        document.getElementById("bmg").style.opacity = "0";
        document.getElementById("bmg").className = "bm_off";
        document.getElementById("bm").className = "bm_off";
    } else if (document.getElementById("bmg").className === "bm_off") {
        document.getElementById("bmg").className = "bm_on";
        document.getElementById("bm").className = "bm_on";
        document.getElementById("bmg").style.opacity = "0";
    }
}

function bmgtouchend() {
    "use strict";
    if (document.getElementById("bmg").className === "bm_off") {
        document.getElementById("bmg").style.opacity = "1";
        document.getElementById("bmg").className = "bm_off";
        document.getElementById("bm").className = "bm_off";
    }
    if (document.getElementById("bmg").className === "bm_on") {
        document.getElementById("bmg").style.opacity = "1";
    }
}

function bdgmouseDown() {
    "use strict";
    if (document.getElementById("bdg").className === "bd_on") {
        document.getElementById("bdg").style.opacity = "0";
        document.getElementById("bdg").className = "bd_off";
        document.getElementById("bd").className = "bd_off";
    } else if (document.getElementById("bdg").className === "bd_off") {
        document.getElementById("bdg").className = "bd_on";
        document.getElementById("bd").className = "bd_on";
        document.getElementById("bdg").style.opacity = "0";
    }
}

function bdgmouseUp() {
    "use strict";
    if (document.getElementById("bdg").className === "bd_off") {
        document.getElementById("bdg").style.opacity = "1";
        document.getElementById("bdg").className = "bd_off";
        document.getElementById("bd").className = "bd_off";
    }
    if (document.getElementById("bdg").className === "bd_on") {
        document.getElementById("bdg").style.opacity = "1";
    }
}

function bdgtouchstart() {
    "use strict";
    if (document.getElementById("bdg").className === "bd_on") {
        document.getElementById("bdg").style.opacity = "0";
        document.getElementById("bdg").className = "bd_off";
        document.getElementById("bd").className = "bd_off";
    } else if (document.getElementById("bdg").className === "bd_off") {
        document.getElementById("bdg").className = "bd_on";
        document.getElementById("bd").className = "bd_on";
        document.getElementById("bdg").style.opacity = "0";
    }
}

function bdgtouchend() {
    "use strict";
    if (document.getElementById("bdg").className === "bd_off") {
        document.getElementById("bdg").style.opacity = "1";
        document.getElementById("bdg").className = "bd_off";
        document.getElementById("bd").className = "bd_off";
    }
    if (document.getElementById("bdg").className === "bd_on") {
        document.getElementById("bdg").style.opacity = "1";
    }
}

document.getElementById("text_cub_1").onclick = function () {
    "use strict";
    if (document.getElementById("text_cub_1").className === "text_1_anm") {
        document.getElementById("text_cub_1").className = "text_1_anm_end";
        document.getElementById("RP_start").className = "RP_anm_end";
        document.getElementById("background").className = "off_back";
        document.getElementById("text_joe_2").className = "text_joe_2_end";
        document.getElementById("chair").className = "chair_ipm";
        document.getElementById("background_ipm").style.display = "none";
        document.getElementById("main_theme_e1").play();
        document.getElementById("xat_auidio").play();
        document.getElementById("sc_corda").className = "sc_corda";
        document.getElementById("sc_ancla").className = "sc_ancla";
        document.getElementById("sc_aura").className = "sc_aura";
    }
};
document.getElementById("text_joe_2").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_2").className === "text_joe_2_end") {
        document.getElementById("text_joe_2").className = "text_joe_2_up";
        document.getElementById("JOE_start").className = "joe_set_3";
        document.getElementById("RP_start").className = "RP_set_3";
        document.getElementById("text_rp_3").className = "text_rp_3_mid";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_cub_1").remove();
        });
    }
};
document.getElementById("text_rp_3").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_3").className === "text_rp_3_mid") {
        document.getElementById("text_rp_3").className = "text_rp_3_end";
        document.getElementById("text_joe_4").className = "text_joe_4_mid";
        document.getElementById("JOE_start").className = "JOE_set_4";
        document.getElementById("RP_start").className = "RP_set_e3_4";
        $(document).ready(function () {
            $("#text_joe_2").remove();
        });
    }
};
document.getElementById("text_joe_4").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_4").className === "text_joe_4_mid") {
        document.getElementById("text_joe_4").className = "text_joe_4_end";
        document.getElementById("text_rp_e2").className = "text_rp_e2_up";
        document.getElementById("RP_start").className = "RP_set_e3";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/Mocha_Dapper_1680.jpg)";
        document.getElementById("back_img_1").className = "back_img_1_end";
        $(document).ready(function () {
            $("#text_rp_3").remove();
        });
    }
};
document.getElementById("text_rp_e2").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_e2").className === "text_rp_e2_up") {
        document.getElementById("text_rp_e2").className = "text_rp_e2_end";
        document.getElementById("text_joe_5").className = "text_joe_5_mid";
        document.getElementById("RP_start").className = "RP_set_e3_5";
        document.getElementById("JOE_start").className = "joe_set_e3_5";
        document.getElementById("chair").className = "chair_e3";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("joe_sound").className = "joe_sound_p2";
        $(document).ready(function () {
            $("#text_joe_4").remove();
        });
    }
};
document.getElementById("text_joe_5").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_5").className === "text_joe_5_mid") {
        document.getElementById("text_joe_5").className = "text_joe_5_end";
        document.getElementById("text_joe_6").className = "text_joe_6_mid";
        document.getElementById("RP_start").className = "RP_set_e3_6";
        document.getElementById("JOE_start").className = "joe_set_e3_6";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/Os_Filhos_de_Pindorama._Cannibalism_in_Brazil_in_1557.jpg)";
        $(document).ready(function () {
            $("#text_rp_e2").remove();
        });
    }
};
document.getElementById("text_joe_6").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_6").className === "text_joe_6_mid") {
        document.getElementById("text_joe_6").className = "text_joe_6_end";
        document.getElementById("text_joe_7").className = "text_joe_7_mid";
        document.getElementById("RP_start").className = "RP_set_e3_7";
        document.getElementById("JOE_start").className = "joe_set_e3_7";
        $(document).ready(function () {
            $("#text_joe_5").remove();
        });
    }
};
document.getElementById("text_joe_7").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_7").className === "text_joe_7_mid") {
        document.getElementById("text_joe_7").className = "text_joe_7_end";
        document.getElementById("text_rp_8").className = "text_rp_8_mid";
        document.getElementById("RP_start").className = "RP_set_e3_8";
        document.getElementById("JOE_start").className = "joe_set_e3_8";
        $(document).ready(function () {
            $("#text_joe_6").remove();
        });
    }
};
document.getElementById("text_rp_8").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_8").className === "text_rp_8_mid") {
        document.getElementById("text_rp_8").className = "text_rp_8_end";
        document.getElementById("text_rp_9").className = "text_rp_9_mid";
        document.getElementById("RP_start").className = "RP_set_e5";
        document.getElementById("back_img_1").className = "back_img_1_end";
        document.getElementById("cup").style.display = "block";
        $(document).ready(function () {
            $("#text_joe_7").remove();
        });
    }
};
document.getElementById("text_rp_9").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_9").className === "text_rp_9_mid") {
        document.getElementById("text_rp_9").className = "text_rp_9_end";
        document.getElementById("text_joe_8").className = "text_joe_8_mid";
        document.getElementById("RP_start").className = "RP_set_e5_9";
        document.getElementById("JOE_start").className = "joe_set_e3_9";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("smoke").style.display = "block";
        $(document).ready(function () {
            $("#text_rp_8").remove();
        });
    }
};
document.getElementById("text_joe_8").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_8").className === "text_joe_8_mid") {
        document.getElementById("text_joe_8").className = "text_joe_8_end";
        document.getElementById("text_rp_10").className = "text_rp_10_mid";
        document.getElementById("RP_start").className = "RP_set_e5_10";
        document.getElementById("JOE_start").className = "joe_set_e3_10";
        $(document).ready(function () {
            $("#text_rp_9").remove();
        });
    }
};
document.getElementById("text_rp_10").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_10").className === "text_rp_10_mid") {
        document.getElementById("text_rp_10").className = "text_rp_10_end";
        document.getElementById("text_joe_9").className = "text_joe_9_mid";
        document.getElementById("RP_start").className = "RP_set_e5_11";
        document.getElementById("JOE_start").className = "joe_set_e3_11";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/back_img_3.jpg)";
        $(document).ready(function () {
            $("#text_joe_8").remove();
        });
    }
};
document.getElementById("text_joe_9").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_9").className === "text_joe_9_mid") {
        document.getElementById("text_joe_9").className = "text_joe_9_end";
        document.getElementById("text_rp_11").className = "text_rp_11_mid";
        document.getElementById("RP_start").className = "RP_set_e7";
        document.getElementById("back_img_1").className = "back_img_2_end";
        $(document).ready(function () {
            $("#text_rp_10").remove();
        });
    }
};

// DICOVERY 1 //
document.getElementById("i_corb_c").onclick = function () {
    "use strict";
    if (document.getElementById("i_corb_c").style.display === "block") {
        document.getElementById("arthur_g").className = "arthur_anm_end";
        document.getElementById("background").className = "off_back_insta";
        document.getElementById("clue_2_shine").style.display = "block";
        document.getElementById("discovery_auidio").play();
    }
};
document.getElementById("text_rp_11").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_11").className === "text_rp_11_mid") {
        document.getElementById("text_rp_11").className = "text_rp_11_end";
        document.getElementById("text_rp_12").className = "text_rp_12_mid";
        document.getElementById("RP_pirate_glow").style.display = "none";
        document.getElementById("text_rp_12").style.transition = "ease 1s";
        document.getElementById("background").className = "main_back";
        document.getElementById("text_rp_12").className = "text_rp_12_mid";
        document.getElementById("RP_start").className = "RP_set_e7_2";
        document.getElementById("RP_start").style.transition = "ease 1s";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("back_img_1").style.backgroundPosition = "center";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/vida_pi.jpg)";
        document.getElementById("RP_face").className = "RP_face";
        $(document).ready(function () {
            $("#text_joe_9").remove();
        });
    }
};
document.getElementById("exit_icon").onclick = function () {
    "use strict";
    
    if (document.getElementById("exit_icon").className === "exit_icon_s") {
        document.getElementById("arthur_g").className = "arthur_anm";
        document.getElementById("back_img_1").style.backgroundPosition = "center";
        document.getElementById("clue_2").style.display = "none";
        document.getElementById("clue_2_on").style.display = "block";
        document.getElementById("clue_2_shine").style.display = "none";
        document.getElementById("i_corb_c").className = "i_corb_off";
        document.getElementById("i_corb").className = "i_corb_off";
    }
    
    if (document.getElementById("exit_icon").className === "exit_icon_so") {
        document.getElementById("exit_icon").className = "exit_icon_s";
        document.getElementById("arthur_img_1").className = "arthur_img_1_s";
        document.getElementById("img_size_icon_1_ag").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_ag").className = "img_back_s_1_ag";
        document.getElementById("arthur_img_2").className = "arthur_img_2_s";
        document.getElementById("img_size_icon_2_ag").className = "img_size_2_s_ag";
        document.getElementById("img_back_2_ag").className = "img_back_s_2_ag";
    }
};
document.getElementById("text_rp_12").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_12").className === "text_rp_12_mid") {
        document.getElementById("text_rp_12").className = "text_rp_12_end";
        document.getElementById("text_rp_13").style.transition = "ease 1s";
        document.getElementById("text_rp_13").className = "text_rp_13_mid";
        document.getElementById("background").className = "off_back";
        document.getElementById("back_img_1").className = "back_img_1_end";
        $(document).ready(function () {
            $("#text_rp_11").remove();
            
        });
    }
};


function tiger() {
    "use strict";
    if (document.getElementById("text_rp_12").className === "text_rp_12_end") {
        document.getElementById("RP_start").className = "RP_set_e7_tiger";
        document.getElementById("RP_face_2").className = "RP_face_up_2";
        document.getElementById("RP_tiger_glow").style.display = "block";
    }
}

document.getElementById("clue_2_on").onclick = function () {
    "use strict";
    if (document.getElementById("clue_2_on").className === "game_clue_2_on") {
        document.getElementById("arthur_gc").className = "arthur_anm_end";
        document.getElementById("clue_2").style.backgroundImage = "url(media/IMG/props/diamond_on.png)";
        document.getElementById("RP_tiger_glow").style.display = "none";
        document.getElementById("clue_2_shine").style.display = "none";
        document.getElementById("fbook").style.display = "none";
        document.getElementById("fbook_back").style.display = "none";
        document.getElementById("vida_pi_c").className = "arthur_anm";
        document.getElementById("wind_table_c").style.display = "none";
        $(document).ready(function () {
            $("#arthur_g").remove();
        });
    }
};
document.getElementById("exit_icon_gc").onclick = function () {
    "use strict";
    if (document.getElementById("exit_icon_gc").className === "exit_icon_s") {
        document.getElementById("arthur_gc").className = "arthur_anm";
        document.getElementById("img_size_icon_1_gc").className = "img_size_1_s_ag";
        document.getElementById("img_size_icon_2_gc").className = "img_size_2_s_ag";
        document.getElementById("img_back_1_gc").className = "img_back_s_1_ag";
        document.getElementById("img_back_2_gc").className = "img_back_s_2_ag";
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
        document.getElementById("arthur_gc_img_2").className = "arthur_img_2_s";
        document.getElementById("clue_2").style.backgroundImage = "url(media/IMG/props/diamond_on.png)";
        document.getElementById("clue_2_shine").style.display = "none";
        document.getElementById("i_corb").className = "i_corb_off";
    }
    
    if (document.getElementById("exit_icon_gc").className === "exit_icon_so") {
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
        document.getElementById("exit_icon_gc").className = "exit_icon_s";
        document.getElementById("img_back_1_gc").className = "img_back_s_1_ag";
        document.getElementById("img_size_icon_1_gc").className = "img_size_1_s_ag";
        document.getElementById("arthur_gc_img_2").className = "arthur_img_2_s";
        document.getElementById("img_back_2_gc").className = "img_back_s_2_ag";
        document.getElementById("img_size_icon_2_gc").className = "img_size_2_s_ag";
    }
};
document.getElementById("text_rp_13").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_13").className === "text_rp_13_mid") {
        document.getElementById("text_rp_13").className = "text_rp_13_end";
        document.getElementById("text_rp_13").style.transition = "ease 1s";
        document.getElementById("RP_start").className = "RP_set_e7_3";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("text_rp_14").className = "text_rp_14_mid";
        document.getElementById("text_rp_14").style.transition = "ease 1s";
        document.getElementById("background").className = "main_back";
        document.getElementById("RP_start").className = "RP_set_e7_4";
        document.getElementById("RP_tiger_glow").style.display = "none";
        document.getElementById("RP_face_2").className = "RP_face_2";
        clearInterval(tiger);
        $(document).ready(function () {
            $("#text_rp_12").remove();
            $(".RP_set_e7_tiger").remove();
        });
    }
};
// DISCOVERY 2 //
document.getElementById("RP_face_2").onclick = function () {
    "use strict";
    if (document.getElementById("RP_face_2").className === "RP_face_up_2") {
        document.getElementById("vida_pi").className = "pi_anm_end";
        document.getElementById("img_size_icon_1_pi").style.top = "59%";
        document.getElementById("pi_img_1").style.height = "50%";
        document.getElementById("pi_img_1").style.backgroundImage = "url(media/IMG/tiger_pi.jpg)";
        document.getElementById("clue_3_shine").style.display = "block";
        document.getElementById("discovery_auidio").play();
        document.getElementById("RP_face_2").style.zIndex = "-3";
        document.getElementById("RP_tiger_glow").style.display = "none";
        clearInterval(tiger);
        $(document).ready(function () {
            $("#text_rp_12").remove();
        });
    }
};
document.getElementById("exit_icon_pi").onclick = function () {
    "use strict";
    if (document.getElementById("exit_icon_pi").className === "exit_icon_s") {
        document.getElementById("vida_pi").className = "pi_anm";
        document.getElementById("text_rp_14").className = "text_rp_14_mid";
        document.getElementById("text_rp_13").style.transition = "0s";
        document.getElementById("text_rp_13").className = "text_rp_13_end";
        document.getElementById("img_back_1_pi").className = "img_back_s_1_ag";
        document.getElementById("pi_img_1").className = "arthur_img_1_s";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("background").className = "main_back";
        document.getElementById("clue_3_shine").style.display = "none";
        document.getElementById("clue_3_on").style.display = "block";
        document.getElementById("clue_3").style.display = "none";
        document.getElementById("RP_start").className = "RP_set_e7_4";
        document.getElementById("RP_face_2").className = "RP_face_2";
    }
    if (document.getElementById("exit_icon_pi").className === "exit_icon_so") {
        document.getElementById("exit_icon_pi").className = "exit_icon_s";
        document.getElementById("pi_img_1").className = "arthur_img_1_s";
        document.getElementById("exit_icon_pi").className = "exit_icon_s";
        document.getElementById("img_back_1_pi").className = "img_back_s_1_ag";
        document.getElementById("img_size_icon_1_pi").className = "img_size_1_s_ag";
        document.getElementById("img_size_icon_1_pi").style.top = "59%";
        document.getElementById("pi_img_1").style.height = "50%";
        document.getElementById("pi_img_1").style.width = "27%";
        document.getElementById("pi_img_1").style.margin = "0";
    }
};
document.getElementById("clue_3_on").onclick = function () {
    "use strict";
    if (document.getElementById("clue_3_on").className === "game_clue_3_on") {
        document.getElementById("vida_pi_c").className = "arthur_anm_end";
        document.getElementById("img_size_icon_1_pi_c").style.top = "59%";
        document.getElementById("pi_img_1_c").style.height = "50%";
        document.getElementById("pi_img_1_c").style.backgroundImage = "url(media/IMG/tiger_pi.jpg)";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
        document.getElementById("clue_3_shine").style.display = "none";
        document.getElementById("fbook").style.display = "none";
        document.getElementById("fbook_back").style.display = "none";
        document.getElementById("arthur_gc").className = "arthur_anm";
        document.getElementById("wind_table_c").style.display = "none";
        $(document).ready(function () {
            $("#vida_pi").remove();
        });
    }
};
document.getElementById("exit_icon_pi_c").onclick = function () {
    "use strict";
    if (document.getElementById("exit_icon_pi_c").className === "exit_icon_s") {
        document.getElementById("vida_pi_c").className = "arthur_anm";
        document.getElementById("pi_img_1_c").style.height = "50%";
        document.getElementById("pi_img_1_c").style.width = "27%";
        document.getElementById("pi_img_1_c").style.margin = "0";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
        document.getElementById("pi_img_1_c").className = "arthur_img_1_s";
        document.getElementById("clue_3").style.backgroundImage = "url(media/IMG/props/diamond_on.png)";
        document.getElementById("clue_3_shine").style.display = "none";
    }
    
    if (document.getElementById("exit_icon_pi_c").className === "exit_icon_so") {
        document.getElementById("exit_icon_pi_c").className = "exit_icon_s";
        document.getElementById("pi_img_1_c").className = "arthur_img_1_s";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
        document.getElementById("img_size_icon_1_pi_c").style.top = "59%";
        document.getElementById("pi_img_1_c").style.height = "50%";
        document.getElementById("pi_img_1_c").style.width = "27%";
        document.getElementById("pi_img_1_c").style.margin = "0";
    }
};
document.getElementById("text_rp_14").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_14").className === "text_rp_14_mid") {
        document.getElementById("text_rp_14").className = "text_rp_14_end";
        document.getElementById("text_joe_10").className = "text_joe_10_mid";
        document.getElementById("background").className = "off_back";
        document.getElementById("RP_start").className = "RP_set_e5_12";
        document.getElementById("JOE_start").className = "joe_set_e3_12";
        $(document).ready(function () {
            $("#text_rp_13").remove();
        });
    }
};
document.getElementById("text_joe_10").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_10").className === "text_joe_10_mid") {
        document.getElementById("text_joe_10").className = "text_joe_10_end";
        document.getElementById("text_rp_15").className = "text_rp_15_mid";
        document.getElementById("RP_start").className = "RP_set_e5_13";
        document.getElementById("JOE_start").className = "joe_set_e3_13";
        $(document).ready(function () {
            $("#text_rp_14").remove();
        });
    }
};
document.getElementById("text_rp_15").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_15").className === "text_rp_15_mid") {
        document.getElementById("text_rp_15").className = "text_rp_15_end";
        document.getElementById("text_joe_11").className = "text_joe_11_mid";
        document.getElementById("RP_start").className = "RP_set_e5_14";
        document.getElementById("JOE_start").className = "joe_set_e3_14";
        $(document).ready(function () {
            $("#text_joe_10").remove();
        });
    }
};
document.getElementById("text_joe_11").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_11").className === "text_joe_11_mid") {
        document.getElementById("text_joe_11").className = "text_joe_11_end";
        document.getElementById("text_joe_12").className = "text_joe_12_mid";
        document.getElementById("RP_start").className = "RP_set_e5_15";
        document.getElementById("JOE_start").className = "joe_set_e3_15";
        $(document).ready(function () {
            $("#text_rp_15").remove();
        });
    }
};

document.getElementById("text_joe_12").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_12").className === "text_joe_12_mid") {
        document.getElementById("text_joe_12").className = "text_joe_12_end";
        document.getElementById("scene_change").style.display = "block";
        document.getElementById("scene_change").className = "scene_change_m";
        document.getElementById("sc_corda").className = "sc_corda";
        document.getElementById("sc_ancla").className = "sc_ancla";
        document.getElementById("sc_aura").style.display = "block";
        document.getElementById("sc_clic_c1").className = "sc_clic_c1_on";
        document.getElementById("sc_clic_c1").style.transitionDelay = "5s";
        document.getElementById("sc_aura").className = "sc_aura_on";
        document.getElementById("sc_aura").style.transitionDelay = "5s";
        document.getElementById("scene_change").style.transitionDelay = "0s";
        $(document).ready(function () {
            $("#text_joe_11").remove();
        });
    }
};

document.getElementById("mi_text_glow").onclick = function () {
    "use strict";
    if (document.getElementById("mi_text_glow").className === "mi_text_glow") {
        document.getElementById("scene_change").style.display = "block";
        document.getElementById("scene_change").className = "scene_change_m";
        document.getElementById("sc_aura").className = "sc_aura_on";
        document.getElementById("sc_aura").style.transitionDelay = "5s";
        document.getElementById("sc_clic_mi").className = "sc_clic_mi_on"
        document.getElementById("sc_clic_mi").style.transitionDelay = "5s";
    }
};

// LAMP //
document.getElementById("lamp_anm").onclick = function () {
    "use strict";
    
    
    if (document.getElementById("lamp").className === "lamp_shape") {
        document.getElementById("lamp").className = "lamp_shape_off";
        document.getElementById("lamp_darck").className = "lamp_darck_on";
        document.getElementById("light_sound").play();
        lamp.volume = 0.6;
    } else {
        if (document.getElementById("lamp").className === "lamp_shape_off") {
            document.getElementById("lamp").className = "lamp_shape";
            document.getElementById("lamp_darck").className = "lamp_darck";
            document.getElementById("i_corb").className = "i_corb_off";
            document.getElementById("i_corb_c").style.display = "none";
            document.getElementById("light_sound").play();
            lamp.volume = 0.6;
        }
    }
    
    if (document.getElementById("lamp").className === "lamp_shape_off" &&   document.getElementById("window_fe").className === "window_fe") {
        document.getElementById("i_corb").className = "i_corb_on";
        document.getElementById("i_corb_c").style.display = "block";
    }
    if (document.getElementById("clue_2_on").style.display === "block") {
        document.getElementById("i_corb").className = "i_corb_off";
        document.getElementById("i_corb_c").style.display = "none";
    }
};

// GLOBO TERRAQUI//
document.getElementById("earth_anm_c").onclick = function () {
    "use strict";
    if (document.getElementById("earth_anm").className === "earth_anm") {
        document.getElementById("earth_anm").className = "earth_anm_on";
    } else {
        if (document.getElementById("earth_anm").className === "earth_anm_on") {
            document.getElementById("earth_anm").className = "earth_anm";
        }
    }
};

// DESK //
document.getElementById("desk_anm_1").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_1").className === "desk_c_1") {
        document.getElementById("desk_c_1").className = "desk_c_1_on";
        document.getElementById("drawer_sound").play();
    } else {
        if (document.getElementById("desk_c_1").className === "desk_c_1_on") {
            document.getElementById("desk_c_1").className = "desk_c_1";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_2").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_2").className === "desk_c_2") {
        document.getElementById("desk_c_2").className = "desk_c_2_on";
        document.getElementById("drawer_sound").play();
    } else {
        if (document.getElementById("desk_c_2").className === "desk_c_2_on") {
            document.getElementById("desk_c_2").className = "desk_c_2";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_3").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_3").className === "desk_c_3") {
        document.getElementById("desk_c_3").className = "desk_c_3_on";
        document.getElementById("drawer_sound").play();
    } else {
        if (document.getElementById("desk_c_3").className === "desk_c_3_on") {
            document.getElementById("desk_c_3").className = "desk_c_3";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_4").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_4").className === "desk_c_4") {
        document.getElementById("desk_c_4").className = "desk_c_4_on";
        document.getElementById("drawer_sound").play();
    } else {
        if (document.getElementById("desk_c_4").className === "desk_c_4_on") {
            document.getElementById("desk_c_4").className = "desk_c_4";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_5").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_5").className === "desk_c_5") {
        document.getElementById("desk_c_5").className = "desk_c_5_on";
        document.getElementById("drawer_sound").play();
    } else {
        if (document.getElementById("desk_c_5").className === "desk_c_5_on") {
            document.getElementById("desk_c_5").className = "desk_c_5";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_left").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_left").className === "desk_left") {
        document.getElementById("desk_c_left").className = "desk_left_on";
        document.getElementById("desk_fbook").style.display = "block";
        document.getElementById("desk_fbook_anm").style.display = "block";
        document.getElementById("drawer_sound").play();
    } else {
        if (document.getElementById("desk_c_left").className === "desk_left_on") {
            document.getElementById("desk_c_left").className = "desk_left";
            document.getElementById("desk_fbook").style.display = "none";
            document.getElementById("desk_fbook_anm").style.display = "none";
            document.getElementById("drawer_sound").play();
        }
    }
    if (document.getElementById("clue_1_on").style.display === "block") {
        document.getElementById("desk_fbook").style.display = "none";
    }
};
document.getElementById("desk_anm_right").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_right").className === "desk_right") {
        document.getElementById("desk_c_right").className = "desk_right_on";
        document.getElementById("drawer_sound").play();
    } else {
        if (document.getElementById("desk_c_right").className === "desk_right_on") {
            document.getElementById("desk_c_right").className = "desk_right";
            document.getElementById("drawer_sound").play();
        }
    }
};

document.getElementById("desk_fbook_anm").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_left").className === "desk_left_on") {
        document.getElementById("desk_fbook").style.display = "none";
        document.getElementById("fbook").style.display = "block";
        document.getElementById("fbook_back").style.display = "block";
    }
    if (document.getElementById("clue_1_on").className === "game_clue_1_on") {
        document.getElementById("desk_fbook_anm").style.display = "none";
    }
};

document.getElementById("fbook").onclick = function () {
    "use strict";
    if (document.getElementById("fbook").className === "fbook") {
        document.getElementById("fbook").className = "fbook_open";
        document.getElementById("fbook").style.display = "block";
        document.getElementById("clue_1_shine").style.display = "block";
    }
};

document.getElementById("fbook_back").onclick = function () {
    "use strict";
    if (document.getElementById("fbook_back").className === "fbook_back") {
        document.getElementById("fbook").className = "fbook_open";
        document.getElementById("fbook").style.display = "none";
        document.getElementById("fbook_back").style.display = "none";
        document.getElementById("clue_1_shine").style.display = "none";
        document.getElementById("clue_1_on").style.display = "block";
        document.getElementById("clue_1").style.display = "none";
    }
};

document.getElementById("clue_1_on").onclick = function () {
    "use strict";
    if (document.getElementById("clue_1_on").className === "game_clue_1_on") {
        document.getElementById("fbook").style.display = "block";
        document.getElementById("fbook_back").style.display = "block";
        document.getElementById("clue_1_shine").style.display = "none";
        document.getElementById("arthur_gc").className = "arthur_anm";
        document.getElementById("vida_pi_c").className = "arthur_anm";
        document.getElementById("wind_table_c").style.display = "none";
    }
};

// WINDOW ANM //
document.getElementById("window_anm").onclick = function () {
    "use strict";
    
    if (document.getElementById("window_fe").className === "window_fe") {
        document.getElementById("window_fe").className = "window_fe_close";
        document.getElementById("i_corb").className = "i_corb_off";
        document.getElementById("i_corb_c").style.display = "none";
        weaves.volume = 0.4;
    } else {
        if (document.getElementById("window_fe").className === "window_fe_close") {
            document.getElementById("window_fe").className = "window_fe";
            
            weaves.volume = 1;
        }
    }
    
    if (document.getElementById("lamp").className === "lamp_shape_off" && document.getElementById("window_fe").className === "window_fe") {
        document.getElementById("i_corb").className = "i_corb_on";
        document.getElementById("i_corb_c").style.display = "block";
    }
    
    if (document.getElementById("clue_2_on").style.display === "block") {
        document.getElementById("i_corb").className = "i_corb_off";
        document.getElementById("i_corb_c").style.display = "none";
    }
};



document.getElementById("window_anm_2").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_12").className === "text_joe_12_mid") {
        document.getElementById("text_joe_12").className = "text_joe_12_end";
        document.getElementById("text_joe_13").className = "text_joe_13_mid";
        document.getElementById("background_black").className = "main_black_back";
        document.getElementById("cap_1").className = "cap_1_up";
        weaves.volume = 0;
    }
};
// SOUNDS EXTRA //
document.getElementById("joe_sound").onclick = function () {
    "use strict";
    document.getElementById("joe_cough").play();
    joe.volume = 0.4;
};
document.getElementById("rat").onclick = function () {
    "use strict";
    document.getElementById("rat_sound").play();
};

document.getElementById("sea_shell_sound").onclick = function () {
    "use strict";
    document.getElementById("conch_sound").play();
};

document.getElementById("earth_anm").onclick = function () {
    "use strict";
    if (document.getElementById("earth_anm").className === "earth_anm") {
        document.getElementById("earth_anm").className = "earth_anm_on";
    } else {
        if (document.getElementById("earth_anm").className === "earth_anm_on") {
            document.getElementById("earth_anm").className = "earth_anm";
        }
    }
};

document.getElementById("book_bell_s").onclick = function () {
    "use strict";
    document.getElementById("bell").play();
};

document.getElementById("close_button").onclick = function () {
    "use strict";
    if (document.getElementById("close_button").className === "close_button") {
        document.getElementById("close_button").className = "close_button_off";
        document.getElementById("low_control_bar_2").style.width = "0%";
    } else {
        if (document.getElementById("close_button").className === "close_button_off") {
            document.getElementById("close_button").className = "close_button";
            document.getElementById("low_control_bar_2").style.width = "35%";
            document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
            document.getElementById("op_bar_i_s").className = "op_bar_i_s";
            document.getElementById("op_bar_c_s").className = "op_bar_c_s";
            document.getElementById("op_bar_a_s").className = "op_bar_a_s";
            document.getElementById("op_bar_d_s").className = "op_bar_d_s";
            document.getElementById("op_bar_g_s").className = "op_bar_g_s";
            document.getElementById("down_button").className = "down_button";
            document.getElementById("confi_button").className = "confi_button";
            document.getElementById("inf_button").className = "inf_button";
            document.getElementById("game_compass").className = "game_compass";
        }
    }
};

document.getElementById("game_compass").onclick = function () {
    "use strict";
    if (document.getElementById("game_compass").className === "game_compass") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("game_compass").className = "game_compass_g";
        document.getElementById("game_ancla").className = "game_ancla";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s_up";
        document.getElementById("op_bar_g_s").style.display = "block";
        document.getElementById("down_button").className = "down_button";
        document.getElementById("confi_button").className = "confi_button";
        document.getElementById("inf_button").className = "inf_button";
        document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s";
        document.getElementById("game_opinio").className = "game_opinio";
    } else {
        if (document.getElementById("game_compass").className === "game_compass_g") {
            document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
            document.getElementById("game_compass").className = "game_compass";
            document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        }
    }
};

document.getElementById("game_opinio").onclick = function () {
    "use strict";
    if (document.getElementById("game_opinio").className === "game_opinio") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("game_opinio").className = "game_opinio_g";
        document.getElementById("game_compass").className = "game_compass";
        document.getElementById("game_ancla").className = "game_ancla";
        document.getElementById("confi_button").className = "confi_button";
        document.getElementById("down_button").className = "down_button";
        document.getElementById("inf_button").className = "inf_button";
        document.getElementById("op_bar_o_s").className = "op_bar_o_phone_up";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s";
    } else {
        if (document.getElementById("game_opinio").className === "game_opinio_g") {
            document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
            document.getElementById("game_opinio").className = "game_opinio";
            document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
        }
    }
};

document.getElementById("inf_button").onclick = function () {
    "use strict";
    if (document.getElementById("inf_button").className === "inf_button") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("inf_button").className = "inf_button_g";
        document.getElementById("game_compass").className = "game_compass";
        document.getElementById("game_opinio").className = "game_opinio";
        document.getElementById("game_ancla").className = "game_ancla";
        document.getElementById("down_button").className = "down_button";
        document.getElementById("confi_button").className = "confi_button";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s_up";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s";
        document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s";
    } else {
        if (document.getElementById("inf_button").className === "inf_button_g") {
            document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
            document.getElementById("inf_button").className = "inf_button";
            document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        }
    }
};

document.getElementById("confi_button").onclick = function () {
    "use strict";
    if (document.getElementById("confi_button").className === "confi_button") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("confi_button").className = "confi_button_g";
        document.getElementById("game_compass").className = "game_compass";
        document.getElementById("game_opinio").className = "game_opinio";
        document.getElementById("game_ancla").className = "game_ancla";
        document.getElementById("inf_button").className = "inf_button";
        document.getElementById("down_button").className = "down_button";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s_up";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s";
        document.getElementById("s_confi_g").style.display = "block";
    } else {
        if (document.getElementById("confi_button").className === "confi_button_g") {
            document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
            document.getElementById("confi_button").className = "confi_button";
            document.getElementById("op_bar_c_s").className = "op_bar_c_s";
            document.getElementById("s_confi_g").style.display = "block";
        }
    }
};

document.getElementById("down_button").onclick = function () {
    "use strict";
    if (document.getElementById("down_button").className === "down_button") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("down_button").className = "down_button_g";
        document.getElementById("game_compass").className = "game_compass";
        document.getElementById("game_opinio").className = "game_opinio";
        document.getElementById("game_ancla").className = "game_ancla";
        document.getElementById("inf_button").className = "inf_button";
        document.getElementById("confi_button").className = "confi_button";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s_up";
    } else {
        if (document.getElementById("down_button").className === "down_button_g") {
            document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
            document.getElementById("down_button").className = "down_button";
            document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        }
    }
};

document.getElementById("game_ancla").onclick = function () {
    "use strict";
    if (document.getElementById("game_ancla").className === "game_ancla") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("game_ancla").className = "game_ancla_g";
        document.getElementById("game_compass").className = "game_compass";
        document.getElementById("game_opinio").className = "game_opinio";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s_up";
    } else {
        if (document.getElementById("game_ancla").className === "game_ancla_g") {
            document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
            document.getElementById("game_ancla").className = "game_ancla";
            document.getElementById("op_bar_a_s").className = "op_bar_a_s";
        }
    }
};

document.getElementById("house_button").onclick = function () {
    "use strict";
    if (document.getElementById("house_button").className === "house_button") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
        document.getElementById("start").style.display = "block";
        document.getElementById("start").style.opacity = "1";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        document.getElementById("op_bar_o_s").className = "op_bar_o_phone";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        document.getElementById("game_ancla").className = "game_ancla";
        document.getElementById("down_button").className = "down_button";
        document.getElementById("confi_button").className = "confi_button";
        document.getElementById("inf_button").className = "inf_button";
        document.getElementById("game_opinio").className = "game_opinio";
    }
};