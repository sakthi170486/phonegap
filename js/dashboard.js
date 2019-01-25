var app = {
	renderHome: function() {
		var dashboardTpl = Handlebars.compile($("#dashboard-tpl").html());
		$('.getcontent').html(dashboardTpl);
    },	
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	// deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener("backbutton", function(e){			
			if(window.localStorage.getItem('firstpage') == 1){
				e.preventDefault();
				navigator.app.exitApp();
			} else {
				navigator.app.backHistory()
			} 
		}, false);
    },
	
    initialize: function() {
		var self = this;
		//this.bindEvents();
		self.renderHome();		
    }
};
app.initialize();