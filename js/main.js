var app = {
    renderHome: function() {
        $('body').html(this.homeTpl());
    },
	renderSignUp: function() {
        $('body').html(this.signupTpl());
    },	
	renderSignIn: function() {
        $('body').html(this.signinTpl());
    },
	renderOTP: function() {
        $('body').html(this.otpTpl());
    },
    initialize: function() {
		var self = this;
		this.detailsURL=window.location.hash;
        this.homeTpl = Handlebars.compile($("#home-tpl").html());		
        this.signupTpl = Handlebars.compile($("#signup-tpl").html());
		 this.signinTpl = Handlebars.compile($("#signin-tpl").html());		
        this.otpTpl = Handlebars.compile($("#otp-tpl").html());
		self.renderHome();
		$('.lnk').on('click',function(e){
			e.preventDefault();
			var l=$(this).attr('href');
			var n= 'self.render'+l+'()';
			eval(n);			
		});
    }
};
app.initialize();