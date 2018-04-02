document.getElementById("img_size_icon_1_ag").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_img_1").className === "arthur_img_1_s") {
        document.getElementById("exit_icon").className = "exit_icon_so";
        document.getElementById("arthur_img_1").className = "arthur_img_1_up";
        document.getElementById("img_back_1_ag").className = "img_back_s_1_ag_end";
        document.getElementById("img_size_icon_1_ag").className = "img_size_1_end_ag";
    } else {
        if (document.getElementById("arthur_img_1").className === "arthur_img_1_up") {
            document.getElementById("arthur_img_1").className = "arthur_img_1_s";
            document.getElementById("exit_icon").className = "exit_icon_s";
            document.getElementById("img_back_1_ag").className = "img_back_s_1_ag";
            document.getElementById("img_size_icon_1_ag").className = "img_size_1_s_ag";
        }
    }
};
document.getElementById("img_size_icon_2_ag").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_img_2").className === "arthur_img_2_s") {
        document.getElementById("arthur_img_2").className = "arthur_img_2_up";
        document.getElementById("exit_icon").className = "exit_icon_so";
        document.getElementById("img_back_2_ag").className = "img_back_s_2_ag_end";
        document.getElementById("img_size_icon_2_ag").className = "img_size_2_end_ag";
    } else {
        if (document.getElementById("arthur_img_2").className === "arthur_img_2_up") {
            document.getElementById("arthur_img_2").className = "arthur_img_2_s";
            document.getElementById("exit_icon").className = "exit_icon_s";
            document.getElementById("img_back_2_ag").className = "img_back_s_2_ag";
            document.getElementById("img_size_icon_2_ag").className = "img_size_2_s_ag";
        }
    }
};


document.getElementById("img_size_icon_1_gc").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_gc_img_1").className === "arthur_img_1_s") {
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_up";
        document.getElementById("exit_icon_gc").className = "exit_icon_so";
        document.getElementById("img_back_1_gc").className = "img_back_s_1_ag_end";
        document.getElementById("img_size_icon_1_gc").className = "img_size_1_end_ag";
    } else {
        if (document.getElementById("arthur_gc_img_1").className === "arthur_img_1_up") {
            document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
            document.getElementById("exit_icon_gc").className = "exit_icon_s";
            document.getElementById("img_back_1_gc").className = "img_back_s_1_ag";
            document.getElementById("img_size_icon_1_gc").className = "img_size_1_s_ag";
        }
    }
};
document.getElementById("img_size_icon_2_gc").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_gc_img_2").className === "arthur_img_2_s") {
        document.getElementById("arthur_gc_img_2").className = "arthur_img_2_up";
        document.getElementById("exit_icon_gc").className = "exit_icon_so";
        document.getElementById("img_back_2_gc").className = "img_back_s_2_ag_end";
        document.getElementById("img_size_icon_2_gc").className = "img_size_2_end_ag";
    } else {
        if (document.getElementById("arthur_gc_img_2").className === "arthur_img_2_up") {
            document.getElementById("arthur_gc_img_2").className = "arthur_img_2_s";
            document.getElementById("exit_icon_gc").className = "exit_icon_s";
            document.getElementById("img_back_2_gc").className = "img_back_s_2_ag";
            document.getElementById("img_size_icon_2_gc").className = "img_size_2_s_ag";
        }
    }
};



document.getElementById("img_size_icon_1_pi").onclick = function () {
    "use strict";
    if (document.getElementById("pi_img_1").className === "arthur_img_1_s") {
        document.getElementById("pi_img_1").className = "arthur_img_1_up";
        document.getElementById("exit_icon_pi").className = "exit_icon_so";
        document.getElementById("img_back_1_pi").className = "img_back_s_1_ag_end";
        document.getElementById("pi_img_1").style.height = "100%";
        document.getElementById("pi_img_1").style.width = "56.5%";  document.getElementById("pi_img_1").style.margin = "0% 22%";
        document.getElementById("img_size_icon_1_pi").className = "img_size_1_end_pi";
        document.getElementById("img_size_icon_1_pi").style.top = "79%";
    } else {
        if (document.getElementById("pi_img_1").className === "arthur_img_1_up") {
            document.getElementById("pi_img_1").className = "arthur_img_1_s";
            document.getElementById("exit_icon_pi").className = "exit_icon_s";
            document.getElementById("img_back_1_pi").className = "img_back_s_1_ag";
            document.getElementById("img_size_icon_1_pi").className = "img_size_1_s_ag";
            document.getElementById("img_size_icon_1_pi").style.top = "59%";
            document.getElementById("pi_img_1").style.height = "50%";
            document.getElementById("pi_img_1").style.width = "27%";  document.getElementById("pi_img_1").style.margin = "0";
        }
    }
};

document.getElementById("img_size_icon_1_pi_c").onclick = function () {
    "use strict";
    if (document.getElementById("pi_img_1_c").className === "arthur_img_1_s") {
        document.getElementById("pi_img_1_c").className = "arthur_img_1_up";
        document.getElementById("exit_icon_pi_c").className = "exit_icon_so";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag_end";
        document.getElementById("pi_img_1_c").style.height = "100%";
        document.getElementById("pi_img_1_c").style.width = "56.5%";  document.getElementById("pi_img_1_c").style.margin = "0% 22%";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_end_pi";
        document.getElementById("img_size_icon_1_pi_c").style.top = "79%";
    } else {
        if (document.getElementById("pi_img_1_c").className === "arthur_img_1_up") {
            document.getElementById("pi_img_1_c").className = "arthur_img_1_s";
            document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
            document.getElementById("exit_icon_pi_c").className = "exit_icon_s";
            document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
            document.getElementById("img_size_icon_1_pi_c").style.top = "59%";  
            document.getElementById("pi_img_1_c").style.height = "50%";
            document.getElementById("exit_icon_pi_c").className = "exit_icon_s";
            document.getElementById("pi_img_1_c").style.width = "27%";  document.getElementById("pi_img_1_c").style.margin = "0";
        }
    }
};
