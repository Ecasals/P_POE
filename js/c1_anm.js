/*document.getElementById("c1_ship_anm").onclick = function () {
    "use strict";
    if (document.getElementById("c1_lh").className === "c1_lh") {
        document.getElementById("c1_lh").className = "c1_lh_back";
        document.getElementById("text_joe_13").className = "text_joe_13_end";
        document.getElementById("intro").style.display = "none";
        document.getElementById("cap_1").style.zIndex= "1";
    }
};*/

$(function() {
    $(document).keydown(function(e1cb) {
        switch (e1cb.which) {
            case 13: // up key
                $("#c1_c_button").trigger("click")
                break;
        }
    });
});

$(function() {
    $(document).keydown(function(e1vb) {
        switch (e1vb.which) {
            case 13: // up key
                $("#c1_v_button").trigger("click")
                break;
        }
    });
});

document.getElementById("text_joe_13").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_13").className === "text_joe_13_mid") {
        document.getElementById("text_joe_13").className = "text_joe_13_end";
    }
};

function sp_c() {
    "use strict";
    if (document.getElementById("ship_table").className === "ship_table") {
        document.getElementById("ship_table").style.display = "block";
    }
}
document.getElementById("c1_lh_click").onclick = function () {
    "use strict";
    if (document.getElementById("wind_table").className === "wind_table") {
        document.getElementById("wind_table").style.display = "block";
        document.getElementById("clue_4_shine").style.display = "block";
    }
};
document.getElementById("wind_table_ex").onclick = function () {
    "use strict";
    if (document.getElementById("wind_table").style.display === "block") {
        document.getElementById("wind_table").style.display = "none";
        document.getElementById("clue_4_shine").style.display = "none";
        document.getElementById("clue_4_on").style.display = "block";
    }
};

document.getElementById("wind_table_ex_c").onclick = function () {
    "use strict";
    if (document.getElementById("wind_table_c").style.display === "block") {
        document.getElementById("wind_table_c").style.display = "none";
    }
};

document.getElementById("clue_4_on").onclick = function () {
    "use strict";
    if (document.getElementById("clue_4_on").style.display === "block") {
        document.getElementById("wind_table_c").style.display = "block";
        document.getElementById("fbook").style.display = "none";
        document.getElementById("fbook_back").style.display = "none";
        document.getElementById("arthur_gc").className = "arthur_anm";
        document.getElementById("vida_pi_c").className = "arthur_anm";
    }
};

document.getElementById("ship_table_ex").onclick = function () {
    "use strict";
    if (document.getElementById("ship_table").style.display === "block") {
        document.getElementById("ship_table").style.display = "none";
        document.getElementById("c1_b_c_up").style.display = "block";
        document.getElementById("c1_b_c_on").style.display = "none";
        document.getElementById("c1_b_v_up").style.display = "block";
        document.getElementById("c1_b_v_on").style.display = "none";
    }
};

function st_c_cb() {
    "use strict";
    var value = document.getElementById("st_v_c").value;
    if (value == 3500) {
        document.getElementById("c1_ship").style.backgroundImage = "url(media/IMG/c1/props/ship_charge.png)";
        document.getElementById("c1_lh_house").style.backgroundImage = "url(media/IMG/c1/props/house_empty.png)";
        document.getElementById("st_v_c").style.color = "green";
        document.getElementById("c1_b_c_on").style.display = "none";
        document.getElementById("c1_b_c_up").style.display = "block";
        document.getElementById("c1_b_c_up").className = "c1_b_c_up_a";
        document.getElementById("c1_b_c_s").style.display = "none";
        document.getElementById("c1_b_v_s").style.display = "block";
        document.getElementById("c1_b_v_up").onclick = function () {
            if (document.getElementById("c1_b_v_up").className === "c1_b_v_up") {
                document.getElementById("c1_b_c_up").style.display = "block";
                document.getElementById("c1_b_v_up").style.display = "none";
                document.getElementById("c1_b_v_on").style.display = "block";
                document.getElementById("c1_b_c_on").style.display = "none";
                document.getElementById("c1_b_c_up").style.display = "block";
                document.getElementById("st_av").style.display = "block";
                document.getElementById("st_ac").style.display = "none";
                document.getElementById("c1_b_v_up").className = "c1_b_v_up_a";
            }
        };
    } else {
        document.getElementById("st_v_c").value = "";
    }
}

function st_v_vb() {
    "use strict";
    var value = document.getElementById("st_v_v").value;
    if (value == 1386) {
        document.getElementById("c1_ship").style.backgroundImage = "url(media/IMG/c1/props/ship_load.png)";
        document.getElementById("st_v_v").style.color= "green";
        document.getElementById("rope_stable").style.animationPlayState = "running";
        document.getElementById("c1_b_v_on").style.display = "none";
        document.getElementById("c1_b_v_s").style.display = "none";
        document.getElementById("c1_b_v_up").style.display = "block";
        document.getElementById("c1_dofi_petit").style.display = "block";
        document.getElementById("c1_dofi_mitg").style.display = "block";
        document.getElementById("c1_dofi_gran").style.display = "block";
        document.getElementById("ship_table_ex").onclick = function () {
            if (document.getElementById("ship_table").style.display === "block") {
                document.getElementById("c1_boat").style.animationPlayState = "running";
                document.getElementById("c1_lh").style.animationPlayState = "running";
                document.getElementById("c1_lh_house").style.animationPlayState = "running";
                document.getElementById("c1_lh_dock").style.animationPlayState = "running";
                document.getElementById("c1_ship_glow").style.display = "none";
                document.getElementById("c1_ship_click").style.display = "none";
                document.getElementById("ship_click").style.display = "none";
                document.getElementById("c1_lh_wind").style.display = "none";
                document.getElementById("ship_table").style.display = "none";
                document.getElementById("c1_water_top").style.animationName = "water_c1_m";
                document.getElementById("c1_water_top").style.animationDuration = "120s";
                document.getElementById("c1_water_higger").style.animationName = "water_c1_m";
                document.getElementById("c1_water_higger").style.animationDuration = "120s";
                document.getElementById("c1_water_mid").style.animationName = "water_c1_m";
                document.getElementById("c1_water_mid").style.animationDuration = "120s";
                document.getElementById("c1_water_down").style.animationName = "water_c1_m";
                document.getElementById("c1_water_down").style.animationDuration = "120s";
                document.getElementById("c1_seagulls").style.animationName = "seagulls_m";
                document.getElementById("c1_seagulls").style.animationDuration = "120s";
                document.getElementById("c1_seagulls_2").style.animationName = "seagulls_2_m";
                document.getElementById("c1_seagulls_2").style.animationDuration = "120s";
                document.getElementById("c1_lh_dock_s").style.backgroundImage = "url(media/IMG/c1/props/seagull_mr.png)";
                document.getElementById("c1_lh_dock_s").style.animationPlayState = "running";
        }
            if (document.getElementById("c1_ship_glow").style.display === "none") {
        function endemo() {
            var endemo = 0;
            var idemo = setInterval(frame, 100);

            function frame() {
                if (endemo === 2800) {
                    clearInterval(idemo);
                    location.reload();
                } else if (endemo === 2000) {
                    endemo += 10;
                    document.getElementById("background_demo").style.opacity = "1";
                    document.getElementById("background_demo").style.zIndex = "100";
                } else {
                    endemo += 10;
                }
            }
        }
        endemo();
    }

    };
    } else {
        document.getElementById("st_v_v").value = "";
    }
}

document.getElementById("c1_b_c_up").onclick = function () {
    "use strict";
    if (document.getElementById("c1_b_c_up").className === "c1_b_c_up") {
        document.getElementById("c1_b_c_up").style.display = "none";
        document.getElementById("c1_b_v_up").style.display = "block";
        document.getElementById("c1_b_v_on").style.display = "none";
        document.getElementById("c1_b_c_on").style.display = "block";
        document.getElementById("st_ac").style.display = "block";
        document.getElementById("st_av").style.display = "none";
    }
};



