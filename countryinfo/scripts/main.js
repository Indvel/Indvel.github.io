window.onload = function() {
    if(window.innerWith <= 640) {
        var flag = document.querySelector(".div-flag");
        var coa = document.querySelector(".div-coa");
        flag.style.width = (Number(flag.style.width) / 2) + "px";
        coa.style.width = (Number(coa.style.width) / 2) + "px";
        flag.style.height = (Number(flag.style.height) / 2) + "px";
        coa.style.height = (Number(coa.style.height) / 2) + "px";
    }
}

function searchCountry() {
    var inp = document.querySelector("#inputTxt").value;
    var url = "https://restcountries.com/v3.1/name/" + inp;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(this.readyState == 4) {
            var result = JSON.parse(this.responseText);
            document.querySelector(".country-info").innerHTML = "";
            document.querySelector(".flag-img").setAttribute("src", "");
            document.querySelector(".coatOfArms").setAttribute("src", "");
            document.querySelector(".div-loading").setAttribute("display", "");
            document.querySelector(".div-flag").style.display = "none";
            document.querySelector(".div-coa").style.display = "none";
            if(result.status == "404") {
                alert("해당 국가를 찾을 수 없습니다.");
                document.querySelector(".country-info").innerHTML = "";
                document.querySelector(".flag-img").setAttribute("src", "");
                document.querySelector(".coatOfArms").setAttribute("src", "");
                document.querySelector(".div-loading").setAttribute("display", "");
                document.querySelector(".div-flag").style.display = "none";
                document.querySelector(".div-coa").style.display = "none";
            } else {
                var idx = -1;
                var list = document.querySelector('.search-list');
                var inputs = document.querySelector('.inputs');
                list.innerHTML = "";
                if(result.length > 1) {
                    for(var i = 0; i < result.length; i++) {
                        var sch = document.createElement("li");
                        sch.innerHTML = (i + 1) + ". " + '<img style="width: 25px;" src=' + result[i].flags["svg"] + '>' + result[i].translations["kor"].common + " (" + result[i].translations["kor"].official + ")";
                        sch.onclick = function(e) {
                            idx = Number(this.innerHTML.split(".")[0]) - 1;
                            list.innerHTML = "";
                            inputs.style.height = "fit-content";
                            applyResults(result, idx);
                        }
                        document.querySelector(".search-list").appendChild(sch);
                    }
                    inputs.style.height = "300px";
                } else {
                    idx = 0;
                    applyResults(result, idx);
                }
            }
        }
    }
    xhr.send();
}
function getPoliticInfo(code) {
    var url = "https://apis.data.go.kr/1262000/OverviewPoliticService/getOverviewPoliticList?serviceKey=ksIZzouOqKon6b4m2agAqXN9qrl0yMaAr7KVXaP6u6eKaVnZKwoWtlKv2in2jgaXZC75o3aDbEnskCRsSxfU%2FA%3D%3D&numOfRows=10&pageNo=1&cond[country_iso_alp2::EQ]=" + code;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(this.readyState == 4) {
            var result = JSON.parse(xhr.responseText);
            if(result.resultCode != 404 && result.currentCount != 0) {
                var child = document.createElement("li");
                child.innerHTML = "<h3><b>정치적 정보</b><h3>"
                document.querySelector(".country-info").appendChild(child);

                child = document.createElement("li");
                var nf = result.data[0]["national_form"] != null ? result.data[0]["national_form"] : "-";
                child.innerHTML = "국체 : <span>" + nf + "</span>";
                document.querySelector(".country-info").appendChild(child);

                child = document.createElement("li");
                var gf = result.data[0]["government_form"] != null ? result.data[0]["government_form"] : "-";
                child.innerHTML = "정체 : <span>" + gf + "</span>";
                document.querySelector(".country-info").appendChild(child);

                child = document.createElement("li");
                var mp = result.data[0]["main_people"] != null ? result.data[0]["main_people"].split("\n").join("<br>") : "-";
                child.innerHTML = "<span>" + mp + "</span>";
                document.querySelector(".country-info").appendChild(child);

            }
        }
    }
    xhr.send();
}

function applyResults(result, idx) {
    if(idx != -1) {
        document.querySelector(".flag-img").setAttribute("src", result[idx]["flags"].svg);
        document.querySelector(".coatOfArms").setAttribute("src", result[idx]["coatOfArms"].svg);
        document.querySelector(".div-flag").style.display = "flex";
        document.querySelector(".div-coa").style.display = "flex";

        var child = document.createElement("li");
        child.innerHTML = "<h3><b>" + result[idx]["translations"]["kor"].official + " (" + result[idx]["name"].common  + ", " + Object.values(result[idx]["name"].nativeName)[0].common + ")" + "</b></h3>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        child.innerHTML = "대륙 : <span>" + result[idx]["region"] + " (" + result[idx]["subregion"] + ")</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        child.innerHTML = "수도 : <span>" + result[idx]["capital"][0] + "</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        var compare;
        if(result[idx]["area"] > 223646) {
            compare = " (한반도의 " + (result[idx]["area"] / 223646).toFixed(1) + "배)";
        } else {
            compare = "";
        }
        child.innerHTML = "면적 : <span>" + setCommas(result[idx]["area"]) + "㎢" + compare + "</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        var langs = Object.values(result[idx]["languages"]).join(", ");
        child.innerHTML = "언어 : <span>" + langs + "</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        child.innerHTML = "인구 : <span>" + setCommas(result[idx]["population"]) + "명</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        child.innerHTML = "독립 : <span>" + (result[idx]["independent"] ? "독립 국가" : "비독립 국가") + "</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        child.innerHTML = "시간대 : <span>" + result[idx]["timezones"][0] + "</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        var currencies = Object.values(result[idx]["currencies"])[0];
        child.innerHTML = "화폐 : <span>" + currencies.name + " (" + currencies.symbol + ")</span>";
        document.querySelector(".country-info").appendChild(child);

        child = document.createElement("li");
        child.innerHTML = "위치 : <a href='" + result[idx]["maps"].googleMaps + "' target='_blank'>구글 지도로 이동</a>";
        document.querySelector(".country-info").appendChild(child);
                    
        child = document.createElement("li");
        child.innerHTML = "국가코드 : <span>" + result[idx].cca2 + " (alpha-2) | " + result[idx].cca3 + " (alpha-3) | " + result[idx].tld[0] + " (TLD)</span>";
        document.querySelector(".country-info").appendChild(child);
                
        getPoliticInfo(result[idx].cca2);
    }
}

function imageLoaded() {
    document.querySelector(".div-loading").setAttribute("display", "none");
}

function checkEnter() {
    if(window.event.keyCode == 13) {
        searchCountry();
    }
}

function setCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}