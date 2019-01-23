var app = {
    renderHome: function() {
        $('.maincontent').html(this.homeTpl());
    },
	renderSignUp: function() {
        $('.maincontent').html(this.signupTpl());
    },	
	renderSignIn: function() {
        $('.maincontent').html(this.signinTpl());
    },
	renderOTP: function() {
        $('.maincontent').html(this.otpTpl());
    },
    initialize: function() {
		var self = this;
		this.detailsURL=window.location.hash;
        this.homeTpl = Handlebars.compile($("#home-tpl").html());		
        this.signupTpl = Handlebars.compile($("#signup-tpl").html());
		 this.signinTpl = Handlebars.compile($("#signin-tpl").html());		
        this.otpTpl = Handlebars.compile($("#otp-tpl").html());
		self.renderHome();
		/* $('.lnk').on('click',function(e){
			e.preventDefault();
			var l=$(this).attr('href');
			var n= 'self.render'+l+'()';
			eval(n);			
		}); */
    }
};
app.initialize();