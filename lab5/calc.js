function cost_calc(event) {
    event.preventDefault();
    let res = document.getElementById("result");
    let g_cost = document.getElementsByName("cost");
    let g_amount = document.getElementsByName("goods");
    let m = g_cost[0].value.match(/^\d+$/);

    if (m !== null) {
        g_cost = parseInt(g_cost[0].value, 10);
        let cost;
        //g_amount=parseInt( g_amount[0].value, 10);
        if (g_amount[0].value === "g_1") {
            cost = 30;
        }
        if (g_amount[0].value === "g_2") {
            cost = 50;
        }
        if (g_amount[0].value === "g_3") {
            cost = 189;
        }
        if (g_amount[0].value === "g_4") {
            cost = 95;
        }
        if (g_amount[0].value === "g_5") {
            cost = 60;
        }

        res.innerHTML = g_cost * cost;
    } else {
        res.innerHTML = "Данные введены некорректно";
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    //console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button_1");
    b.addEventListener("click", cost_calc);
});