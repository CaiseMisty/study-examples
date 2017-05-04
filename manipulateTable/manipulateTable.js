(function() {
    var doc = document,
        table = doc.getElementById('manipulate-table').getElementsByTagName('table')[0],
        thead = table.getElementsByTagName('thead')[0],
        tHeadtr = thead.getElementsByTagName('tr')[0],
        tbody = table.getElementsByTagName('tbody')[0],
    	tBodytrs = tbody.getElementsByTagName('tr'),
    	maniTableBtns = doc.querySelectorAll('#mani-table-btns button'),
    	hintBox = doc.querySelector('#hint-box');
    var colNum = tBodytrs[0].childElementCount, //列数
    	rowNum = tbody.childElementCount; //tBody的行数
    var addRow = maniTableBtns[0],
    	addCol = maniTableBtns[1],
    	delRow = maniTableBtns[2],
    	delCol = maniTableBtns[3];
    var selectedRow = -1,
    	selectedCol = -1;
    /**
     * @event 绑定选中一行事件
     */
    function addSelectRow() {
    	for (let i = 0; i < rowNum; i++) {
    		tBodytrs[i].addEventListener('click', function addOperRow(event){
	    		selectedRow = i;
	    		hintBox.innerText = '';
	    		for(let j = 0; j < rowNum; j++){
	    			if(i==j){
	    				tBodytrs[j].classList.add('active');
	    			}else{
	    				tBodytrs[j].classList.remove('active');
	    			}
	    		}
	    		event.stopPropagation();
    		}, false);
	    }
    }
	addSelectRow();
	function cancelSelectedRow() {
		if(selectedRow != -1){
			for (let j = 0; j < rowNum; j++) {
				tBodytrs[j].classList.remove('active');
			}
		selectedRow = -1;
		}
	}
	doc.addEventListener('click', cancelSelectedRow, false);
//	function addSelectCol() {
//		for (let i = 0; i < colNum; i++) {
//			tHeadtr[i].addEventListener('click', function addOperCol(){
//				selectedCol = i;
//				hintBox.innerText = '';
//				for (let j = 0; j < rowNum; j++) {
//					tBodytrs[j].children[i].classList
//				}
//			}, false);
//		}
//	}
//	addSelectCol();
	function cancelSelectCol() {
		
	}
    /**
     * @event 添加行
     */
    addRow.addEventListener('click', function(){
    	var insertHTML = '<tr>';
    	for (let i = 0; i < colNum; i++) {
    		insertHTML += '<td></td>';
    	}
    	insertHTML += '</tr>';
    	if(selectedRow == -1){
    		tBodytrs[rowNum - 1].insertAdjacentHTML('afterend', insertHTML);
    	}
    	else{
    		tBodytrs[selectedRow].insertAdjacentHTML('beforebegin', insertHTML);
    	}
    	rowNum++;
    	cancelSelectedRow();
    	addSelectRow();
    }, false);
    /**
     * @event 添加列
     */
    addCol.addEventListener('click', function(){
    	if(selectedRow == -1){
    		tHeadtr.insertAdjacentHTML('beforeend', '<th></th>');
    		for (let i = 0; i < rowNum; i++) {
    			tBodytrs[i].insertAdjacentHTML('beforeend', '<td></td>');
    		}
    		colNum++;
    	}
    }, false);
    /**
     * @event 删除行
     */
    delRow.addEventListener('click',function(){
    	if(selectedRow == -1){
    		hintBox.innerText = '请选择要删除的行';
    	}
    	else{
    		tBodytrs[selectedRow].remove();
    		rowNum--;
    		addSelectRow();
    	}
    },false);
    window.maniTable = { 
    	table: table,
    	tBodytrs: tBodytrs, 
    	maniTableBtns: maniTableBtns, 
    	hintBox: hintBox,
    	getColNum: function() {return colNum;},
    	getBodyRowNum: function() {return rowNum;}
    };
}());