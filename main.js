(function(){
	$(document).ready(main);

	function main()
	{
		// new resource https://github.com/almende/vis/issues/24
		
		// this is going to help with grabbing time from server
		// https://stackoverflow.com/questions/23783307/how-to-get-current-date-from-internet-via-javascript
		//var scrollScreen = document.getElementById('scrollPos');
    var refresh = 10000;
    var container = document.getElementById('timeline');
    $("html, body").animate({ scrollTop: 500 }, 1800);
  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    {id: 1, content: 'Database Management work - Alex', start: '2018-03-20'},
    
    /*
    {id: 2, content: 'item 2', start: '2018-03-14'},
    {id: 3, content: 'item 3', start: '2018-03-18'},
    {id: 4, content: 'item 4', start: '2018-03-16', end: '2018-04-19'},
    {id: 5, content: 'item 5', start: '2018-03-25'},
    {id: 6, content: 'item 6', start: '2018-03-27', type: 'point'}
    */
  ]);

  // Configuration for the Timeline
  var options = {
    height: 600 // px
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);

  var axisOrientation = document.getElementById('axis-orientation');
  axisOrientation.onchange = function () {
    timeline.setOptions({ orientation: {axis: this.value} });
  };

  var itemOrientation = document.getElementById('item-orientation');
    
    itemOrientation.onchange = function () {
      timeline.setOptions({ orientation: {item: this.value} });
    	};

})();
