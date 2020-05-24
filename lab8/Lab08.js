
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
   var image=document.getElementsByClassName('wrap')[0];
   var left=document.getElementsByClassName('arrow arrow_left')[0];
   var right=document.getElementsByClassName('arrow arrow_right')[0];
   var distance=0;
   var number=0;
   var Number=document.getElementsByClassName('buttons')[0].children;
   var Numbertotal=document.getElementsByClassName('buttons')[0];
/*********************************************end*************************************/


/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
    right.onclick=function() {
          image.setAttribute('style', minus());
          Number[number].setAttribute('class','');
        if (number===4){
            number=-1;
        }
          number++;
          Number[number].setAttribute('class','on');
          clearInterval(interval);
    }
    function minus() {
         if (distance===-2400){
             distance=0;
         }
         else {
             distance=distance-600;}
         var text1='left:'+distance+'px';
         return text1;
    }
    left.onclick=function () {
           image.setAttribute('style', add());
        Number[number].setAttribute('class','');
        if (number===0){
            number=5;
        }
        number--;
        Number[number].setAttribute('class','on');
        clearInterval(interval);
    }
    function add() {
         if (distance===0){
             distance=-2400;
         }
         else {
             distance=distance+600;}
         var text1='left:'+distance+'px';
         return text1;
    }

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
function play() {
    interval = setInterval(function () {
        image.setAttribute('style', minus());
        Number[number].setAttribute('class', '');
        if (number === 4) {
            number = -1;
        }
        number++;
        Number[number].setAttribute('class', 'on');
    }, 2000)
}
   play();
   image.onmouseenter=function () {
       clearInterval(interval);
   }
   image.onmouseleave=function () {
       play();
   }
   left.onmouseenter=function () {
        clearInterval(interval);
   }
   left.onmouseleave=function () {
        play();
   }
   right.onmouseenter=function () {
       clearInterval(interval);
   }

   right.onmouseleave=function () {
       play();
   }
/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
    function click(i) {
        var a = -600 * i;
        var space = 'left:' + a + 'px';
        distance = a;
        image.setAttribute('style', space);
        Number[number].setAttribute('class', '');
        number = i;
        Number[number].setAttribute('class', 'on')
        clearInterval(interval);
    }
        Number[0].onclick = function () {
            click(0);
        };
        Number[1].onclick = function () {
            click(1);
        };
        Number[2].onclick = function () {
            click(2);
        };
        Number[3].onclick = function () {
            click(3);
        };
        Number[4].onclick = function () {
            click(4);
        };



/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
    $(function(){
        /* 给表格里面每一个td添加一个dblclick事件 */
        $("td").click(function(){
            /* 1.先拿到这个td原来的值，然后将这个td变成一个input:text,并且原来的值不动 */
            var tdVal = $(this).text();
            var Input = $("<input type='text' value='"+tdVal+"'/>");
            $(this).html(Input);
            Input.focus();
            /* 2.失去焦点，这个td变为原来的text，value为修改过后的value */
            Input.blur(function(){
                Input.parent().html(Input.val());
            });
        });
    });
/*********************************************end*************************************/