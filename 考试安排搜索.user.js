// ==UserScript==
// @name         考试安排过滤
// @version      1.1
// @description  “今天才更深切地感到考试的无聊。一些放屁胡诌的讲义硬要我们记！”
// @author       if
// @include      *http://zhjw.cic.tsinghua.edu.cn/jxmh.do?m=bks_ksSearch*
// @include      *https://webvpn.tsinghua.edu.cn/*m=bks_ksSearch*
// ==/UserScript==

//v1.1 现在通过web vpn登录的也可以用了

var btn = document.createElement("button");
btn.innerHTML = "filter by course_name";

var textarea = document.createElement("textarea");
var td = document.querySelector("td");
document.getElementsByTagName('span')[0].append(textarea);
document.getElementsByTagName('span')[0].append(btn);

var allCourses = document.getElementsByClassName("biaodan_table");
var tbody = allCourses[0].getElementsByTagName("tbody");
var courses = tbody[0].getElementsByTagName("tr");

btn.onclick = function(){
    var keyword = textarea.value;
    for(var i = 1; i < courses.length; i = i + 1)
    {
        var name = courses[i].getElementsByTagName("td")[3].innerHTML;
        if(name.search(keyword) == -1)
        {
            console.log(i);
            tbody[0].removeChild(courses[i]);
            i = i - 1;
        }
    }
}