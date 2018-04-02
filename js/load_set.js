/*window.addEventListener("load", function () {
    "use strict";
    document.getElementById("main_body").removeChild(loadpage);
});
var condition = false;

if (condition = true){*/

document.getElementById("endincet_a").addEventListener("mousedown", mouseDown);
document.getElementById("endincet_a").addEventListener("mouseup", mouseUp);
document.getElementById("endincet_a").addEventListener("touchstart", touchStart);
document.getElementById("endincet_a").addEventListener("touchend", touchEnd);

function mouseDown() {
    "use strict";
    document.getElementById("endincet").style.display = "none";
    document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/skull.png)";
}

function touchStart() {
    "use strict";
    document.getElementById("endincet").style.display = "none";
    document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/skull.png)";
}

function mouseUp() {
    "use strict";
    if (document.getElementById("cap_1").style.display === "block") {
        document.getElementById("endincet").style.display = "block";
        document.getElementById("start").style.opacity = "0";
        document.getElementById("start").style.display = "none";
        document.getElementById("intro").style.display = "none";
        document.getElementById("loadpage").style.display = "none";
        document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/face.png)";
    }
    
    if (document.getElementById("intro").className === "intro_on") {
        document.getElementById("endincet").style.display = "block";
        document.getElementById("start").style.opacity = "0";
        document.getElementById("start").style.display = "none";
        document.getElementById("loadpage").style.display = "none";
        document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/face.png)";
    }
    
    if (document.getElementById("intro").className === "intro") {
        document.getElementById("endincet").style.display = "block";
        document.getElementById("start").style.opacity = "0";
        document.getElementById("loadpage").style.display = "block";
        document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/face.png)";
        function progress() {
            var prg = document.getElementById('load_water');
            var progress = 0;
            var id = setInterval(frame, 100);

            function frame() {
                if (progress === 1000) {
                    clearInterval(id);
                    document.getElementById("loadpage").style.display = "none";
                } else if (progress === 200) {
                    document.getElementById("dp_s").style.display = "block";
                    document.getElementById("start").style.display = "none";  
                    document.getElementById("intro").className = "intro_on";
                    progress += 10;
                } else if (progress === 450) {
                    document.getElementById("dp_s_2").style.display = "block";
                    document.getElementById("start").style.display = "none";
                    progress += 10;
                } else if (progress === 650) {
                    document.getElementById("dp_s_3").style.display = "block";
                    document.getElementById("start").style.display = "none";
                    progress += 10;
                } else {
                    progress += 10;
                    prg.style.width = progress + 'px';
                }
            }
        }
        progress();
    }
    /*
    document.addEventListener("load", function () {
    "use strict";
    document.getElementById("loadpage").removeChild(loadpage);
    })*/
}


function touchEnd() {
   "use strict";
    if (document.getElementById("cap_1").style.display === "block") {
        document.getElementById("endincet").style.display = "block";
        document.getElementById("start").style.opacity = "0";
        document.getElementById("start").style.display = "none";
        document.getElementById("intro").style.display = "none";
        document.getElementById("loadpage").style.display = "none";
        document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/face.png)";
    }
    
    if (document.getElementById("intro").style.display === "block") {
        document.getElementById("endincet").style.display = "block";
        document.getElementById("start").style.opacity = "0";
        document.getElementById("start").style.display = "none";
        document.getElementById("loadpage").style.display = "none";
        document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/face.png)";
    }
    
    if (document.getElementById("intro").className === "intro") {
        document.getElementById("endincet").style.display = "block";
        document.getElementById("start").style.opacity = "0";
        document.getElementById("intro").style.display = "block";
        document.getElementById("loadpage").style.display = "block";
        document.getElementById("rp_face_s").style.backgroundImage = "url(media/IMG/start/face.png)";
        function progress() {
            var prg = document.getElementById('load_water');
            var progress = 0;
            var id = setInterval(frame, 100);

            function frame() {
                if (progress === 1000) {
                    clearInterval(id);
                    document.getElementById("loadpage").style.display = "none";
                } else if (progress === 200) {
                    document.getElementById("dp_s").style.display = "block";
                    document.getElementById("start").style.display = "none";
                    document.getElementById("intro").className = "intro_run";
                    progress += 10;
                } else if (progress === 450) {
                    document.getElementById("dp_s_2").style.display = "block";
                    document.getElementById("start").style.display = "none";
                    progress += 10;
                } else if (progress === 650) {
                    document.getElementById("dp_s_3").style.display = "block";
                    document.getElementById("start").style.display = "none";
                    progress += 10;
                } else {
                    progress += 10;
                    prg.style.width = progress + 'px';
                }
            }
        }
        progress();
    }
    /*
    document.addEventListener("load", function () {
    "use strict";
    document.getElementById("loadpage").removeChild(loadpage);
    })*/
}


document.getElementById("go").onclick = function () {
    "use strict";
    if (document.getElementById("go").className === "go") {
        document.getElementById("loadpage").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("intro").style.display = "none";
        document.getElementById("props").style.display = "none";
        document.getElementById("props_c1").style.display = "block";
        document.getElementById("cap_1").style.display = "block";
    }
};

document.getElementById("op_bar_i").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_i_m").className === "op_bar_i_m") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("op_bar_i_m").className = "op_bar_i_m_up";
        document.getElementById("op_bar_g_m").className = "op_bar_g_m";
        document.getElementById("op_bar_o_m").className = "op_bar_o_m";
        document.getElementById("op_bar_d_m").className = "op_bar_d_m";
        document.getElementById("op_bar_c_m").className = "op_bar_c_m";
        document.getElementById("op_bar_i").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "block";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_d").style.display = "block";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("s_confi").style.display = "none";
        document.getElementById("timo_s").style.display = "none";
        document.getElementById("timo_s_2").style.display = "none";
    }
};
document.getElementById("op_bar_ig").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_ig").style.display === "block") {
        document.getElementById("op_bar_i_m").className = "op_bar_i_m";
        document.getElementById("op_bar_i").style.display = "block";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_d").style.display = "block";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("timo_s").style.display = "block";
        document.getElementById("timo_s_2").style.display = "block";
        document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
    }
};
document.getElementById("op_bar_g").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_g_m").className === "op_bar_g_m") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("op_bar_g_m").className = "op_bar_g_m_up";
        document.getElementById("op_bar_i_m").className = "op_bar_i_m";
        document.getElementById("op_bar_o_m").className = "op_bar_o_m";
        document.getElementById("op_bar_d_m").className = "op_bar_d_m";
        document.getElementById("op_bar_c_m").className = "op_bar_c_m";
        document.getElementById("op_bar_gg").style.display = "block";
        document.getElementById("op_bar_g").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_i").style.display = "block";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_d").style.display = "block";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("s_confi").style.display = "none";
        document.getElementById("timo_s").style.display = "none";
        document.getElementById("timo_s_2").style.display = "none";
    }
};
document.getElementById("op_bar_gg").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_gg").style.display === "block") {
        document.getElementById("op_bar_g_m").className = "op_bar_g_m";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("timo_s").style.display = "block";
        document.getElementById("timo_s_2").style.display = "block";document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
    }
};
document.getElementById("op_bar_o").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_o_m").className === "op_bar_o_m") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("op_bar_o_m").className = "op_bar_o_m_up";
        document.getElementById("op_bar_i_m").className = "op_bar_i_m";
        document.getElementById("op_bar_g_m").className = "op_bar_g_m";
        document.getElementById("op_bar_d_m").className = "op_bar_d_m";
        document.getElementById("op_bar_c_m").className = "op_bar_c_m";
        document.getElementById("op_bar_og").style.display = "block";
        document.getElementById("op_bar_gg").style.display = "block";
        document.getElementById("op_bar_g").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_o").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_i").style.display = "block";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("op_bar_d").style.display = "block";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("s_confi").style.display = "none";
        document.getElementById("timo_s").style.display = "none";
        document.getElementById("timo_s_2").style.display = "none";
    }
};
document.getElementById("op_bar_og").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_og").style.display === "block") {
        document.getElementById("op_bar_o_m").className = "op_bar_o_m";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("timo_s").style.display = "block";
        document.getElementById("timo_s_2").style.display = "block";document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
    }
};
document.getElementById("op_bar_c").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_c_m").className === "op_bar_c_m") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("op_bar_c_m").className = "op_bar_c_m_up";
        document.getElementById("op_bar_g_m").className = "op_bar_g_m";
        document.getElementById("op_bar_o_m").className = "op_bar_o_m";
        document.getElementById("op_bar_d_m").className = "op_bar_d_m";
        document.getElementById("op_bar_i_m").className = "op_bar_i_m";
        document.getElementById("op_bar_cg").style.display = "block";
        document.getElementById("op_bar_c").style.display = "none";
        document.getElementById("op_bar_g").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_i").style.display = "block";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_d").style.display = "block";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("s_confi").style.display = "none";
        document.getElementById("timo_s").style.display = "none";
        document.getElementById("timo_s_2").style.display = "none";
        document.getElementById("s_confi").style.display = "block";
    }
};

document.getElementById("op_bar_cg").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_cg").style.display === "block") {
        document.getElementById("op_bar_c_m").className = "op_bar_c_m";
        document.getElementById("s_confi").style.display = "none";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("timo_s").style.display = "block";
        document.getElementById("timo_s_2").style.display = "block";document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
        
    }
};
document.getElementById("op_bar_d").onclick = function () {
    "use strict";
    if (document.getElementById("op_bar_d_m").className === "op_bar_d_m") {
        document.getElementById("exit_icon_ops").className = "exit_icon_ops";
        document.getElementById("op_bar_d_m").className = "op_bar_d_m_up";
        document.getElementById("op_bar_i_m").className = "op_bar_i_m";
        document.getElementById("op_bar_o_m").className = "op_bar_o_m";
        document.getElementById("op_bar_g_m").className = "op_bar_g_m";
        document.getElementById("op_bar_c_m").className = "op_bar_c_m";
        document.getElementById("op_bar_dg").style.display = "block";
        document.getElementById("op_bar_d").style.display = "none";
        document.getElementById("op_bar_g").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_i").style.display = "block";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("timo_s").style.display = "none";
        document.getElementById("timo_s_2").style.display = "none";
    }
    document.getElementById("op_bar_dg").onclick = function () {
        if (document.getElementById("op_bar_dg").style.display === "block") {
            document.getElementById("op_bar_d_m").className = "op_bar_d_m";
            document.getElementById("op_bar_d").style.display = "block";
            document.getElementById("op_bar_og").style.display = "none";
            document.getElementById("op_bar_gg").style.display = "none";
            document.getElementById("op_bar_ig").style.display = "none";
            document.getElementById("op_bar_dg").style.display = "none";
            document.getElementById("op_bar_cg").style.display = "none";
            document.getElementById("ob_d_atoms").style.display = "none";
            document.getElementById("ob_d_back").style.display = "none";
            document.getElementById("ob_d_avelles").style.display = "none";
            document.getElementById("ob_d_idiomes").style.display = "none";
            document.getElementById("ob_d_nutri").style.display = "none";
            document.getElementById("timo_s").style.display = "block";
            document.getElementById("timo_s_2").style.display = "block";
            document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
        }
    };
};

/*document.getElementById("ob_d_back").onclick = function () {
    "use strict";
    {
    document.getElementById("ob_d_atoms").style.display = "none";
    document.getElementById("ob_d_back").style.display = "none";
    document.getElementById("ob_d_avelles").style.display = "none";
    document.getElementById("ob_d_idiomes").style.display = "none";
    document.getElementById("ob_d_nutri").style.display = "none";
        }
};*/

document.getElementById("ob_d_atoms_click").onclick = function () {
    "use strict";
    if (document.getElementById("ob_d_atoms_click").className === "ob_d_atoms_click") {
        document.getElementById("ob_d_atoms").style.display = "block";
        document.getElementById("ob_d_back").style.display = "block";
        document.getElementById("ob_d_avelles").style.display = "none";
        document.getElementById("ob_d_idiomes").style.display = "none";
        document.getElementById("ob_d_nutri").style.display = "none";
    }
};

document.getElementById("ob_d_atoms").onclick = function () {
    "use strict";
    if (document.getElementById("ob_d_atoms").className === "ob_d_atoms") {
        document.getElementById("ob_d_atoms").style.display = "none";
        document.getElementById("ob_d_back").style.display = "none";
    }
};

document.getElementById("ob_d_avelles_click").onclick = function () {
    "use strict";
    if (document.getElementById("ob_d_avelles_click").className === "ob_d_avelles_click") {
        document.getElementById("ob_d_avelles").style.display = "block";
        document.getElementById("ob_d_back").style.display = "block";
        document.getElementById("ob_d_atoms").style.display = "none";
        document.getElementById("ob_d_idiomes").style.display = "none";
        document.getElementById("ob_d_nutri").style.display = "none";
    }
};

document.getElementById("ob_d_nutri_click").onclick = function () {
    "use strict";
    if (document.getElementById("ob_d_nutri_click").className === "ob_d_nutri_click") {
        document.getElementById("ob_d_nutri").style.display = "block";
        document.getElementById("ob_d_back").style.display = "block";
        document.getElementById("ob_d_atoms").style.display = "none";
        document.getElementById("ob_d_avelles").style.display = "none";
        document.getElementById("ob_d_idiomes").style.display = "none";
    }
};

document.getElementById("ob_d_idiomes_click").onclick = function () {
    "use strict";
    if (document.getElementById("ob_d_avelles_click").className === "ob_d_avelles_click") {
        document.getElementById("ob_d_idiomes").style.display = "block";
        document.getElementById("ob_d_back").style.display = "block";
        document.getElementById("ob_d_atoms").style.display = "none";
        document.getElementById("ob_d_nutri").style.display = "none";
        document.getElementById("ob_d_avelles").style.display = "none";
    }
};

document.getElementById("cdb").onclick = function () {
    "use strict";
    if (document.getElementById("cdb").className === "cdb_on"){
        document.getElementById("cdb").className = "cdb_off";
        document.getElementById("cdbg").className = "cdb_off";
    } else if (document.getElementById("cdb").className === "cdb_off"){
        document.getElementById("cdb").className = "cdb_on";
        document.getElementById("cdbg").className = "cdb_on";
    }
};

document.getElementById("cdbg").onclick = function () {
    "use strict";
    if (document.getElementById("cdbg").className === "cdb_on"){
        document.getElementById("cdbg").className = "cdb_off";
        document.getElementById("cdb").className = "cdb_off";
    } else if (document.getElementById("cdbg").className === "cdb_off"){
        document.getElementById("cdbg").className = "cdb_on";
        document.getElementById("cdb").className = "cdb_on";
    }
};


document.getElementById("exit_icon_ops").onclick = function () {
    "use strict";
    if (document.getElementById("exit_icon_ops").className === "exit_icon_ops"){
        document.getElementById("exit_icon_ops").className = "exit_icon_ops_d";
        document.getElementById("op_bar_i_m").className = "op_bar_i_m";
        document.getElementById("op_bar_i").style.display = "block";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_d").style.display = "block";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("op_bar_g_m").className = "op_bar_g_m";
        document.getElementById("op_bar_g").style.display = "block";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_o_m").className = "op_bar_o_m";
        document.getElementById("op_bar_o").style.display = "block";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_c_m").className = "op_bar_c_m";
        document.getElementById("s_confi").style.display = "none";
        document.getElementById("op_bar_c").style.display = "block";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("op_bar_d_m").className = "op_bar_d_m";
        document.getElementById("op_bar_d").style.display = "block";
        document.getElementById("op_bar_og").style.display = "none";
        document.getElementById("op_bar_gg").style.display = "none";
        document.getElementById("op_bar_ig").style.display = "none";
        document.getElementById("op_bar_dg").style.display = "none";
        document.getElementById("op_bar_cg").style.display = "none";
        document.getElementById("ob_d_atoms").style.display = "none";
        document.getElementById("ob_d_back").style.display = "none";
        document.getElementById("ob_d_avelles").style.display = "none";
        document.getElementById("ob_d_idiomes").style.display = "none";
        document.getElementById("ob_d_nutri").style.display = "none";
        document.getElementById("timo_s").style.display = "block";
        document.getElementById("timo_s_2").style.display = "block";
        document.getElementById("game_compass").className = "game_compass";
        document.getElementById("op_bar_g_s").className = "op_bar_g_s";
        document.getElementById("game_opinio").className = "game_opinio";
        document.getElementById("op_bar_o_s").className = "op_bar_o_s_phone";
        document.getElementById("inf_button").className = "inf_button";
        document.getElementById("op_bar_i_s").className = "op_bar_i_s";
        document.getElementById("confi_button").className = "confi_button";
        document.getElementById("op_bar_c_s").className = "op_bar_c_s";
        document.getElementById("down_button").className = "down_button";
        document.getElementById("op_bar_d_s").className = "op_bar_d_s";
        document.getElementById("game_ancla").className = "game_ancla";
        document.getElementById("op_bar_a_s").className = "op_bar_a_s";
        }
};

//CONFI INFO//
$("#confi_n").keyup(function(){
    $("#confi_gn").val(this.value);
});

$("#confi_gn").keyup(function(){
    $("#confi_n").val(this.value);
});

$("#confi_pc").keyup(function(){
    $("#confi_gpc").val(this.value);
});$("#confi_gpc").keyup(function(){
    $("#confi_pc").val(this.value);
});

$("#confi_sc").keyup(function(){
    $("#confi_gsc").val(this.value);
});$("#confi_gsc").keyup(function(){
    $("#confi_sc").val(this.value);
});

$("#confi_alies").keyup(function(){
    $("#confi_galies").val(this.value);
});$("#confi_galies").keyup(function(){
    $("#confi_alies").val(this.value);
});

$("#confi_mail").keyup(function(){
    $("#confi_gmail").val(this.value);
});$("#confi_gmail").keyup(function(){
    $("#confi_mail").val(this.value);
});

$("#confi_ce").keyup(function(){
    $("#confi_gce").val(this.value);
});$("#confi_gce").keyup(function(){
    $("#confi_ce").val(this.value);
});

$("#confi_c").keyup(function(){
    $("#confi_gc").val(this.value);
});$("#confi_gc").keyup(function(){
    $("#confi_c").val(this.value);
});

$("#confi_g").keyup(function(){
    $("#confi_gg").val(this.value);
});$("#confi_gg").keyup(function(){
    $("#confi_g").val(this.value);
});

$("#confi_ns").keyup(function(){
    $("#confi_gns").val(this.value);
});$("#confi_gns").keyup(function(){
    $("#confi_ns").val(this.value);
});
$("#confi_contra").keyup(function(){
    $("#confi_gcontra").val(this.value);
});$("#confi_gcontra").keyup(function(){
    $("#confi_contra").val(this.value);
});
$("#confi_ov").keyup(function(){
    $("#confi_gov").val(this.value);
});$("#confi_gov").keyup(function(){
    $("#confi_ov").val(this.value);
});
$("#confi_op").keyup(function(){
    $("#confi_gop").val(this.value);
});$("#confi_gop").keyup(function(){
    $("#confi_op").val(this.value);
});



function clearText(){
    if (document.getElementById("confi_n").value.maxlength === 0){
       document.getElementById("confi_n").value = "Eumo";
    }
};