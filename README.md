# PopcatJSsupport
## 重要資訊  
在執行的過程中，可能會跳出無回應的提示框，不必理會，  
可以放這在睡覺時弄，邊睡覺邊為國爭光  

## 舉例片段
```javascript
    var event = new KeyboardEvent('keydown', {  
            key: 'g',  
            ctrlKey: true  
    });  
    let limit = 10;  
    for (var i = 0; i < limit; i++) {  
            document.dispatchEvent(event);  
            limit++;  
    }  
```
這樣整段就可以用了  
