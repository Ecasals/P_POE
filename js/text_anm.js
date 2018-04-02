document.getElementById("text_cub_1").onclick = function () {
    "use strict";
    if (document.getElementById("text_cub_1").className === "text_1_anm") {
        document.getElementById("text_cub_1").className = "text_1_anm_end";
        document.getElementById("RP_start").className = "RP_anm_end";
        document.getElementById("background").className = "off_back";
        document.getElementById("text_joe_2").className = "text_joe_2_end";
        document.getElementById("main_theme_e1").play();
    }
};
document.getElementById("text_joe_2").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_2").className === "text_joe_2_end") {
        document.getElementById("text_joe_2").className = "text_joe_2_up";
        document.getElementById("JOE_start").className = "joe_set_3";
        document.getElementById("RP_start").className = "RP_set_3";
        document.getElementById("text_rp_3").className = "text_rp_3_mid";
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
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_4.png)";
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_4.png)";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_e3.png)";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_5.png)";
        document.getElementById("RP_start").className = "RP_set_e3_5";
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_5.png)";
        document.getElementById("JOE_start").className = "joe_set_e3_5";
        document.getElementById("chair").className = "chair_e3";
        document.getElementById("back_img_1").className = "back_img_1";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_6.png)";
        document.getElementById("RP_start").className = "RP_set_e3_6";
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_6.png)";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_7.png)";
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_7.png)";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_8.png)";
        document.getElementById("RP_start").className = "RP_set_e3_8";
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_8.png)";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_e5.png)";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_9.png)";
        document.getElementById("RP_start").className = "RP_set_e5_9";
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_9.png)";
        document.getElementById("back_img_1").className = "back_img_1";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_10.png)";
        document.getElementById("RP_start").className = "RP_set_e5_11";
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_10.png)";
        document.getElementById("JOE_start").className = "joe_set_e3_5";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_11.png)";
        document.getElementById("RP_start").className = "RP_set_e5_11";
        document.getElementById("JOE_start").style.backgroundImage = "url(media/IMG/charecter/joe_set_11.png)";
        document.getElementById("JOE_start").className = "joe_set_e3_6";
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
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_e7.png)";
        document.getElementById("RP_start").className = "RP_set_e7";
        document.getElementById("back_img_1").className = "back_img_2_end";
        $(document).ready(function () {
            $("#text_rp_10").remove();
        });
    }
};

var myVar = setInterval(myTimer, 4000);

function myTimer() {
    "use strict";
    if (document.getElementById("text_joe_9").className === "text_joe_9_end") {
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_e7_pirate.png)";
        document.getElementById("RP_start").className = "RP_set_e7_pirate";
    }
}
document.getElementById("RP_start").onclick = function () {
    "use strict";
    if (document.getElementById("RP_start").className === "RP_set_e7_pirate") {
        document.getElementById("arthur_g").className = "arthur_anm_end";
        document.getElementById("background").className = "off_back_insta";
    }
};

document.getElementById("exit_icon").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_g").className === "arthur_anm_end") {
        document.getElementById("arthur_g").className = "arthur_anm";
        document.getElementById("text_rp_11").className = "text_rp_11_end";
        document.getElementById("text_rp_12").className = "text_rp_12_mid";
        document.getElementById("background").className = "main_back";
        document.getElementById("img_size_icon_1_ag").className = "img_size_1_s_ag";
        document.getElementById("img_size_icon_2_ag").className = "img_size_2_s_ag";
        document.getElementById("img_back_1_ag").className = "img_back_s_1_ag";
        document.getElementById("img_back_2_ag").className = "img_back_s_2_ag";
        document.getElementById("arthur_img_1").className = "arthur_img_1_s";
        document.getElementById("arthur_img_2").className = "arthur_img_2_s";
        document.getElementById("RP_start").className = "RP_set_e7_2";
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_e7_2.png)";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("back_img_1").style.backgroundPosition = "center";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/vida_pi.jpg)";
        document.getElementById("clue_1").className = "game_clue_1_y";
    }
};
document.getElementById("text_rp_12").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_12").className === "text_rp_12_mid") {
        document.getElementById("text_rp_12").className = "text_rp_12_end";
        document.getElementById("text_rp_13").className = "text_rp_13_mid";
        document.getElementById("background").className = "off_back";
        document.getElementById("back_img_1").className = "back_img_1_end";
        document.getElementById("RP_start").className = "RP_set_e7_tiger";
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_e7_tiger.png)";
        $(document).ready(function () {
            $("#text_joe_9").remove();
            $("#text_rp_11").remove();
        });
    }
};
document.getElementById("clue_1").onclick = function () {
    "use strict";
    if (document.getElementById("clue_1").className === "game_clue_1_y") {
        document.getElementById("arthur_gc").className = "arthur_anm_end";
        $(document).ready(function () {
            $("#arthur_g").remove();
        });
    }
};
document.getElementById("exit_icon_gc").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_gc").className === "arthur_anm_end") {
        document.getElementById("arthur_gc").className = "arthur_anm";
        document.getElementById("img_size_icon_1_gc").className = "img_size_1_s_ag";
        document.getElementById("img_size_icon_2_gc").className = "img_size_2_s_ag";
        document.getElementById("img_back_1_gc").className = "img_back_s_1_ag";
        document.getElementById("img_back_2_gc").className = "img_back_s_2_ag";
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
        document.getElementById("arthur_gc_img_2").className = "arthur_img_2_s";
    }
};
document.getElementById("RP_start").onclick = function () {
    "use strict";
    if (document.getElementById("RP_start").className === "RP_set_e7_tiger") {
        document.getElementById("text_rp_13").className = "text_rp_13_end";
        document.getElementById("vida_pi").className = "pi_anm_end";
        document.getElementById("img_size_icon_1_pi").style.top = "59%";
        document.getElementById("pi_img_1").style.height = "50%";
        document.getElementById("pi_img_1").style.backgroundImage = "url(media/IMG/tiger_pi.jpg)";
        $(document).ready(function () {
            $("#text_rp_12").remove();
        });
    }
};
document.getElementById("exit_icon_pi").onclick = function () {
    "use strict";
    if (document.getElementById("vida_pi").className === "pi_anm_end") {
        document.getElementById("vida_pi").className = "pi_anm";
        document.getElementById("text_rp_14").className = "text_rp_14_mid";
        document.getElementById("background").className = "main_back";
        document.getElementById("pi_img_1").style.height = "50%";
        document.getElementById("pi_img_1").style.width = "27%";
        document.getElementById("pi_img_1").style.margin = "0";
        document.getElementById("img_size_icon_1_pi").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi").className = "img_back_s_1_ag";
        document.getElementById("pi_img_1").className = "arthur_img_1_s";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("clue_2").className = "game_clue_2_y";
        document.getElementById("RP_start").className = "RP_set_e7_2";
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_e7_3.png)";
    }
};
document.getElementById("clue_2").onclick = function () {
    "use strict";
    if (document.getElementById("clue_2").className === "game_clue_2_y") {
        document.getElementById("vida_pi_c").className = "arthur_anm_end";
        document.getElementById("img_size_icon_1_pi_c").style.top = "59%";
        document.getElementById("pi_img_1_c").style.height = "50%";
        document.getElementById("pi_img_1_c").style.backgroundImage = "url(media/IMG/tiger_pi.jpg)";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
        $(document).ready(function () {
            $("#vida_pi").remove();
        });
    }
};
document.getElementById("exit_icon_pi_c").onclick = function () {
    "use strict";
    if (document.getElementById("vida_pi_c").className === "arthur_anm_end") {
        document.getElementById("vida_pi_c").className = "arthur_anm";
        document.getElementById("pi_img_1_c").style.height = "50%";
        document.getElementById("pi_img_1_c").style.width = "27%";
        document.getElementById("pi_img_1_c").style.margin = "0";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
        document.getElementById("pi_img_1_c").className = "arthur_img_1_s";
    }
};
document.getElementById("text_rp_14").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_14").className === "text_rp_14_mid") {
        document.getElementById("text_rp_14").className = "text_rp_14_end";
        document.getElementById("text_joe_10").className = "text_joe_10_mid";
        document.getElementById("background").className = "off_back";
        document.getElementById("RP_start").style.backgroundImage = "url(media/IMG/charecter/rp_set_11.png)";
        document.getElementById("RP_start").className = "RP_set_e5_11";
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
        $(document).ready(function () {
            $("#text_rp_15").remove();
        });
    }
};
document.getElementById("text_joe_12").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_12").className === "text_joe_12_mid") {
        document.getElementById("text_joe_12").className = "text_joe_12_end";
        document.getElementById("text_joe_13").className = "text_joe_13_mid";
        $(document).ready(function () {
            $("#text_joe_11").remove();
        });
    }
};