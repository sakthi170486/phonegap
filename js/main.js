var app = {
    renderHome: function() {
		$('.maincontent').html(this.welcomeTpl());
		 setTimeout(function(){ 
			// Run the effect
			var options = {direction: 'right' };
			$('.maincontent').html('');
			$( ".maincontent" ).effect( 'slide', options, 300, function(){
				$('.maincontent').html(app.homeTpl());
            });			
		 }, 3500); 
		
    },		
    initialize: function() {
		var self = this;
		this.welcomeTpl = Handlebars.compile($("#welcome-tpl").html());
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
		self.renderHome();
    }
};
app.initialize();