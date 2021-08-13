/*for 迴圈可設定次數版*/
/*新增鍵盤事件(KeyboardEvent)*/
var event = new KeyboardEvent('keydown', {
        key: 'g', /*就是按一個鍵*/
        ctrlKey: true
});

for (var i = 0; i < 100000; i++) {  /*100000可改成自訂的次數*/
        document.dispatchEvent(event); /*執行event鍵盤事件*/
}

/*for 無限迴圈版*/
/*新增鍵盤事件(KeyboardEvent)*/
var event = new KeyboardEvent('keydown', {
        key: 'g',   /*就是按一個鍵*/
        ctrlKey: true
});
let limit = 10; /*設定無限迴圈*/
for (var i = 0; i < limit; i++) {
        document.dispatchEvent(event);  /*執行event鍵盤事件*/
        limit++;
}

/*while 無限迴圈版*/
/*新增鍵盤事件(KeyboardEvent)*/
var event = new KeyboardEvent('keydown', {
        key: 'g',  /*就是按一個鍵*/
        ctrlKey: true
});
let times = true;  /*設定無限迴圈*/
while(times == true){
        document.dispatchEvent(event);  /*執行event鍵盤事件*/
}


/*重要註解
在執行的過程中，可能會跳出無回應的提示框，不必理會，
可以放這在睡覺時弄，邊睡覺邊為國爭光
*/

/*舉例片段*/
/*
var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
});
let limit = 10;
for (var i = 0; i < limit; i++) {
        document.dispatchEvent(event);
        limit++;
}
*/
/*這樣整段就可以用了*/