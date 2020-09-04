var baseUrl = 'http://219.154.202.29:8010/SJFX/statistical';
// var baseUrl = 'http://192.168.1.141:8080/SJFX/statistical';
/*
* @name 积水报警
* */
function WaterAlarm() {
    let para = {
        url: 'http://192.168.10.12:8085/sh/BigScreen/getJiShuiAlarm',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    let para1 = {
        url: 'http://192.168.10.12:8085/sh/BigScreen/getMaterieLarge',
        async: true,
        type: 'get',
        dataType: 'JSON',
    }
    // let para2={
    //     url: 'http://192.168.10.12:8085/sh/BigScreen/getMaterieDetails',
    //     async: true,
    //     type: 'get',
    //     dataType: 'JSON',
    // }
    ajaxPromise(para1).then(res => {
    })
    ajaxPromise(para).then(res => {
        console.log(res)

        let para = "";
        for (let i = 0; i < res.length; i++) {
            para += '<span class="police-warp" >'
                + '<div class="police-info">'
                + '<p class="police-info-bg">'
                + '<img src="Images/cloudy.png">'
                + '<span>' + res[i].xljName + '</span>'
                + '</p>'
                + '<div class="police-bottom-rooom">'
                + '<div class="police-info-center">'
                + '<div class="police-center-left-top">'
                + '<span class="police-name">' + '报警时间' + '</span>'
                + '<p class="police-time">' + res[i].happenTime + '</p>'
                + ' </div>'
                + '<div class="police-center-right-top">'
                + ' <span class="police-name">' + '报警时间' + '</span>'
                + '<p class="police-time">' + res[i].jishuiValue + '</p>'
                + '</div>'
                + '</div>'
                + '<div class="police-info-center">'
                + ' <div class="police-center-left-top">'
                + ' <span class="police-name">' + '所属区域' + '</span>'
                + '<p class="police-time">' + res[i].town + '</p>'
                + '</div>'
                + ' <div class="police-center-right-top">'
                + ' <span class="police-name">' + '积水状态' + '</span>'
                + '<p class="police-time">' + res[i].alaName + '</p>'
                + ' </div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</span>'

        }
        document.getElementById("WaterAlarm").innerHTML = para;
        let lis = document.querySelectorAll("#WaterAlarm .police-warp")
        let modalBox = document.getElementById('modalBox');
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {
                console.log(i,)
                modalBox.style.display = "flex";
            }
        }
    })

}

/*
* @name 今日值班
* */
function OnDutyToday() {

    let para = {
        url: 'http://192.168.10.12:8085/sh/BigScreen/getZhibanInfo',
        async: true,
        type: 'get',
        dataType: 'json',

    }
    ajaxPromise(para).then(res => {
        console.log(res)

        console.log(res, '13')
        let para = ''
        for (let i = 0; i < res.length; i++) {
            para += ' <ul class="duty-headers-room">'
                + '  <li>'
                + '   <div class="duty-headers-room-left">'
                + '  <div class="duty-headers-room-left-main">'
                + '  <div class="right-top-banner">'
                + ' <img src="Images/cloudy.png">'
                + '  <span>' + res[i].zhibanStreet + '</span>'
                + '  </div>'

                + '</div>'
                + '  </div>'
                + ' <div class="duty-headers-room-main">'
                + '   <div class="duty-headers-room-main-room">'
                + '  <div class="duty-headers-room-main-room-item">'
                + ' <div class="right-top-banner">'
                + ' <img src="Images/cloudy.png">'
                + ' <span>' + res[i].zhibanDayLeader + '</span>'
                + ' </div>'
                + '</div>'
                + '<div class="duty-headers-room-main-room-item" style="margin-left: 25px">'
                + '   <div class="right-top-banner">'
                + '<img src="Images/cloudy.png">'
                + ' <span>' + res[i].zhibanNightLeader + '</span>'
                + '  </div>'
                + '</div>'

                + '  </div>'
                + '  </div>'
                + ' <div class="duty-headers-room-right">'
                + ' <div class="duty-headers-room-right-main">'
                + ' <div class="duty-headers-room-main-room-item">'
                + '<div class="right-top-banner">'
                + ' <img src="Images/cloudy.png">'
                + ' <span>' + res[i].zhibanDayStaff + '</span>'
                + ' </div>'
                + '</div>'
                + '<div class="duty-headers-room-main-room-item">'
                + ' <div class="right-top-banner">'
                + '<img src="Images/cloudy.png">'
                + ' <span>' + res[i].zhibanNightStaff + '</span>'
                + ' </div>'
                + '</div>'
                + '</div>'
                + ' </div>'
                + ' </li>'
                + ' </ul>'
        }
        document.getElementById("OnDutyToday").innerHTML = para
        let ul1 = document.getElementById("OnDutyToday");
        let ul2 = document.getElementById("OnDutyTodayCopy");
        let rollbox = document.getElementById("OnDutyToday_box");
        rolls(13, ul1, ul2, rollbox)
    }).catch(err => {
        console.log(err, "请求失败");
    })
}

/*
* @name 抢险队伍
* */
function RescueTeam() {

    let para = {
        url: 'http://192.168.10.12:8085/sh/BigScreen/getUnderRescueTeam',
        async: true,
        type: 'get',
        dataType: 'json',

    }
    ajaxPromise(para).then(res => {
        let para = "";
        res.underpassDetails.map(item => {
            if (item.tel == undefined) {
                item.tel = item.mobilePhone
            }
        })
        for (let i = 0; i < res.underpassDetails.length; i++) {
            para += '<ul class="duty-headers-title" style = "height: 38px;border-radius: 10px;margin: 5px 0px;border: 1px solid #232e39;color: white">'
                + '<li style="flex: 3">' + res.underpassDetails[i].town + '</li>'
                + '<li style="flex: 5">' + res.underpassDetails[i].teamName + '</li>'
                + '<li style="flex: 5">' + res.underpassDetails[i].teamAddress + '</li>'
                + '<li style="flex: 3">' + res.underpassDetails[i].number + '</li>'
                + '<li style="flex: 3">' + res.underpassDetails[i].leading + '</li>'
                + '<li style="flex: 3">' + res.underpassDetails[i].tel + '</li>'
                + '</ul>'
        }
        document.getElementById("FloodPrevention").innerHTML = para;
        let ul1 = document.getElementById("FloodPrevention");
        let ul2 = document.getElementById("FloodPreventionCopy");
        let rollbox = document.getElementById("review_box");
        roll(13, ul1, ul2, rollbox)
    })
}

function roll(t, ul1, ul2, rollbox) {
    ul2.innerHTML = ul1.innerHTML;
    rollbox.scrollTop = 0;
    let timer = setInterval(rollStart, t);
    rollbox.onmouseover = function () {
        clearInterval(timer);
    }
    rollbox.onmouseout = function () {
        timer = setInterval(rollStart, t);
    }
}

function rolls(t, ul1, ul2, rollbox) {
    ul2.innerHTML = ul1.innerHTML;
    rollbox.scrollTop = 0;
    let timer = setInterval(rollStarts, t);
    rollbox.onmouseover = function () {
        clearInterval(timer);
    }
    rollbox.onmouseout = function () {
        timer = setInterval(rollStarts, t);
    }
}

function rollStart() {
    let ul1 = document.getElementById("FloodPrevention");
    let rollbox = document.getElementById("review_box");
    if (rollbox.scrollTop >= ul1.scrollHeight) {
        rollbox.scrollTop = 0;
    } else {
        rollbox.scrollTop++;
    }
}

function rollStarts() {
    let ul1 = document.getElementById("OnDutyToday");
    let rollbox = document.getElementById("OnDutyToday_box");
    if (rollbox.scrollTop >= ul1.scrollHeight) {
        rollbox.scrollTop = 0;
    } else {
        rollbox.scrollTop++;
    }
}

/*
* @name:天气
* */

function ShowWeather(state) {
    let para = '';
    switch (state) {
        case 1:
            para =
                '<div class="icons sunny">'
                + '<div class="sun">'
                + ' <div class="rays">' + '</div>'
                + ' </div>'
                + ' </div>'
            break;
        case 2:
            para = '  <div class="icons rainy">'
                + '<div class="cloud">' + '</div>'
                + '<div class="rain">' + '</div>'
                + '</div>'
            break;
        case 3:
            para = '<div class="icon cloudy">'
                + '  <div class="cloud">' + '</div>'
                + ' <div class="cloud">' + '</div>'
                + ' </div>'
            break;
        case 4:
            para = '<div class="icon flurries">'
                + '  <div class="cloud">' + '</div>'
                + '  <div class="snow">'
                + ' <div class="flake">' + '</div>'
                + '<div class="flake">' + '</div>'
                + '  </div>'
                + '</div>'
            break;
        case 5:
            para = '  <div class="icon thunder-storm">'
                + '<div class="cloud">' + '</div>'
                + ' <div class="lightning">'
                + '<div class="bolt">' + '</div>'
                + '<div class="bolt">' + '</div>'
                + ' </div>'
                + '</div>'
            break;
        case 6:
            para = '<div class="icon sun-shower">'
                + '<div class="cloud">' + '</div>'
                + ' <div class="sun">'
                + '<div class="rays">' + '</div>'
                + ' </div>'
                + '<div class="rain">' + '</div>'
                + '</div>'
            break;
        default:
            break

    }
    document.getElementById("ShowWeathers").innerHTML = para

}

/*
* @name:降雨量
* */

function WaterQuantityFun() {
    let para = {
        url: 'http://61.152.122.122/JDData/JDDataForm.aspx',
        data: {
            action: 'GetGfeDatasByAnyCoordinateDL',
        },
        async: true,
        type: 'get',
        dataType: 'JSON',

    }
    ajaxPromise(para).then(res => {
        let para = ''
        for (let i = 0; i < res.length; i++) {
            para += ' <div class="precipitation-warp-item">'
                + ' <span>' + res[i].datatime.substring(0, 11) + '</span>'
                + '<span>' + res[i].datatime.substring(11, 19) + '</span>'
                + '  <a>' + '<img src="Images/cloudy.png"  />' + '</a>'
                + ' <span>' + res[i].rain + 'mm' + '</span>'
                + '</div>'
        }
        document.getElementById("WaterQuantity").innerHTML = para
        let box = document.getElementsByClassName("precipitation-box")[0];
        let con1 = document.getElementsByClassName("precipitation-warp")[0];
        let con2 = document.getElementsByClassName("con2")[0];
        con2.innerHTML = con1.innerHTML;
        let t = 20
        let timer = ''
        box.scrollLeft = 0;
        timer = setInterval(rollStartsbox, t);
        box.onmouseover = function () {
            clearInterval(timer);
        }
        box.onmouseout = function () {
            timer = setInterval(rollStartsbox, t);
        }
    }).catch(err => {
        console.log("请求失败");
    })


}

function rollStartsbox() {
    let ul1 = document.getElementsByClassName("precipitation-warp")[0];
    let rollbox = document.getElementsByClassName("precipitation-box")[0];
    if (rollbox.scrollLeft >= ul1.offsetWidth) {
        console.log(rollbox.scrollLeft,ul1.offsetWidth,'0')
        rollbox.scrollLeft = 0;
    } else {

        rollbox.scrollLeft++;
    }
}
/*
* 热点问题*/
function hotQuestion() {
    return new Promise(((resolve, reject) => {
            let para = {
                // url: 'http://219.154.202.29:8010/SJFX/statistical/getRate',
                url: baseUrl +'/getHotspotIssues',
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res.data);
            })
        }
    ))
}
/*
* @name：天气
* */

/*
* @name：请求数据
* */
function ObservationStationFun() {
    /*let para = {
        url: 'http://192.168.1.136:8080/statistical/getRate',
        async: true,
        type: 'get',
        dataType: 'JSON',

    }
    ajaxPromise(para).then(res => {
        console.log('返回数据',res.data);
        // allData = res.data;
        return res.data;
    })*/
    return new Promise(((resolve, reject) => {
            let para = {
                // url: 'http://219.154.202.29:8010/SJFX/statistical/getRate',
                url: baseUrl +'/getRate',
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res.data);
            })
        }
    ))
}
/*
* 获取八率*/
function ObservationProbability(data) {
    return new Promise(((resolve, reject) => {
            let para = {
                // url: 'http://219.154.202.29:8010/SJFX/statistical/getThreeRate?area='+data,
                url: baseUrl +'/getThreeRate?area='+data,
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res);
            })
        }
    ))
}
/*
* 责任单位、信访部门*/
function ObservationUnitProbability(data) {
    return new Promise(((resolve, reject) => {
            let para = {
                // url: 'http://219.154.202.29:8010/SJFX/statistical/getSatisfiedAndAcceptRate?area='+data,
                url: baseUrl +'/getSatisfiedAndAcceptRate?area='+data,
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res);
            })
        }
    ))
}
/*
* 前10责任单位*/
function ObservationUnit() {
    return new Promise(((resolve, reject) => {
            let para = {
                // url: 'http://219.154.202.29:8010/SJFX/statistical/getResRank',
                url: baseUrl +'/getResRank',
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res.data);
            })
        }
    ))
}
/*
* 信访量数据分析*/
function ObservationPetition() {
    return new Promise(((resolve, reject) => {
            let para = {
                url: baseUrl +'/getProportion',
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res);
            })
        }
    ))
}
/*
* 前10街道*/
function ObservationtopTen() {
    return new Promise(((resolve, reject) => {
            let para = {
                url: baseUrl +'/getRegionalRank?startTime=2019-01-01&endTime=2019-12-31',
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res);
            })
        }
    ))
}
/*
* 市直单位*/
function CityUnit() {
    return new Promise(((resolve, reject) => {
            let para = {
                // url: 'http://219.154.202.29:8010/SJFX/statistical/getRegionalRank?startTime=2019-01-01&endTime=2019-12-31',
                url: baseUrl +'/getMunicipalUnit',
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res.data);
            })
        }
    ))
}
/*
* 热点问题*/
function getPosition(){
    return new Promise(((resolve, reject) => {
            let para = {
                url: baseUrl +'/getHotspotIssues',
                async: true,
                type: 'get',
                dataType: 'JSON',

            }
            ajaxPromise(para).then(res => {
                resolve(res);
            })
        }
    ))
}
function rollStartsboxs() {
    let ul1 = document.getElementsByClassName("Observation-warp")[0];
    let rollbox = document.getElementsByClassName("Observation-box")[0];
    let ul3 = document.getElementsByClassName("Observation-warp3")[0];
    let rollbox3 = document.getElementsByClassName("Observation-box3")[0];
    if (rollbox.scrollLeft >= ul1.offsetWidth) {
        rollbox.scrollLeft = 0;
    } else {
        rollbox.scrollLeft++;
    }

    if (rollbox3.scrollLeft >= ul3.offsetWidth) {
        rollbox3.scrollLeft = 0;
    } else {
        rollbox3.scrollLeft++;
    }
}
