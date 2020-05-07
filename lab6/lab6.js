/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    var count1 = function () {
        var count=0;
        return{
            add: function () {
                 count++;
            },
            get: function () {
                 return count;
            }
        }
    } ();
    var value1= function(){
        var value=1;
        return{
            add: function () {
                 value*=2;
            },
            get: function () {
                  return value;
            }
        }
    }();
    console.log(value1.get())
    var minutes=new Date().getMinutes();
    interval = setInterval(function () {
        count1.add();
        if(count1.get()>10||new Date().getMinutes()>minutes){
            clearInterval(interval);
            console.log("已到达整分！");
            test();
            return;
        }
        value1.add();
        console.log(count1.get())
    },5000)
 }

/*testTime();*/

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
     var a= /^1[3-9]\d{9}$/.test(telephone);
     var b= /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/.test(mail);
     if(a == true && b == true){
         console.log("Both telephone and mail are right!")
     }
     if(a == true && b == false){
         console.log("The telephone is right and the mail is wrong!")
     }
     if(a ==false && b == true){
         console.log("The mail is right and the telephone is wrong!")
     }
    if(a ==false && b == false){
        console.log("Both telephone and mail are wrong!")
    }
}
/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var same = /\b([a-z]+) \1\b/ig;
    arr=str.match(same);
    if(arr.length>10){
        arr.sort();
        arr.length=10;
    }
    let set=new Set(arr)
        console.log(set);
}
/*testRedundancy('Is is the iS is cost of of gasoline going up up is is iS is');*/
/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    var wantInput1=wantInput.toUpperCase();
    var actualInput1=actualInput.toUpperCase();
    var arr1 =wantInput1.split("");
    var arr2 =actualInput1.split("");
    var want = new Set(arr1);
    var actual = new Set(arr2);
    var different=new Set([...want].filter(x=>!actual.has(x)));
    console.log(different);
}
/*testKeyBoard('_This_is_a_test','hssaes');*/
/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    var str1=str.trim();
    for(var i=0;i<str1.length;i++){
        if(str1[i]==' '){
            if (str1[i+1]==' '){
                var buffer1=str1.substring(0,i);
                var buffer2=str1.substring(i+1,str1.length);
                str2=buffer1+buffer2;
            }
        }
    }
    var arr=str2.split(' ');
    arr.reverse();
    var a=arr.join(' ');
    console.log(a);
}
/*testSpecialReverse('  hello  world!  ');*/
/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            console.log([map.get(nums[i]),i]);
        }

        map.set(target - nums[i], i);
    }
}
/*twoSum([1,2,3,4],5)*/
/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    var long = 0;
    var current = 0;
    var map = new Map();
    var str1=str.split('');
    for (var i = 0; i < str1.length; i++) {
        if (!map.has(str1[i])) {
            current += 1;
            long = Math.max(current, long);
            map.set(str1[i], 0);
        } else {
            current = 0;
            map.clear();
        }
    }
    console.log(long);
}
/*lengthOfLongestSubstring('abbbbcccssseee');*/
/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
function  DevelopingCountry() {
    Country.call(this);
    this.name="developing country";
}
DevelopingCountry.prototype.sayHi=function () {
    console.log("Hi,i am a "+this.name +".")
}
//构造函数



function  PoorCountry() {
    this.name="poor country";
}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad=function () {
    console.log("I am a sad "+this.name +".")
}
//原型链


var country=new Country();
var DevelopedCountry=Object.create(country);
DevelopedCountry.name="DevelopedCountry";
DevelopedCountry.sayHappy=function () {
    console.log("I am a Happy "+this.name +".")
}
//object.creat方法


console.log("---------Problem 1---------");
    testTime();
function test() {
    console.log("---------Problem 2---------");
    console.log("输入：191121757632,'3131451545@qq.com'");
    testMail(191121757632,'3131451545@qq.com');
    console.log("---------Problem 3---------");
    console.log("输入：'Is is the iS is cost of of gasoline going up up is is '");
    testRedundancy('Is is the iS is cost of of gasoline going up up is is ');
    console.log("---------Problem 4---------");
    console.log("输入：'_This_is_a_test','hssaes'");
    testKeyBoard('_This_is_a_test','hssaes');
    console.log("---------Problem 5---------");
    console.log("输入：'  hello  world!  '");
    testSpecialReverse('  hello  world!  ');
    console.log("---------Problem 6---------");
    console.log("输入：[1,2,3,4],5");
    twoSum([1,2,3,4],5);
    console.log("---------Problem 7---------");
    console.log("输入：'abbbbcccssseee'");
    lengthOfLongestSubstring('abbbbcccssseee');
    console.log("---------Problem 8---------");
    let country1 = new DevelopingCountry();
    let country2 = new PoorCountry();
    country1.sayHi();
    country2.saySad();
    DevelopedCountry.sayHappy();
}
