//Color Contrast PlugIn
//http://www.w3.org/TR/AERT#color-contrast
//Activate : $('#selector').checkColor();

(function( $ ){

    $.fn.checkColor = function( param ){
 
        this.find( '*' ).each(function( i, v ) {
            
            var bg = $( v ).css( 'background-color' ).replace( /[^\d,]/g, '' ).split( ',' );          
            
            var o = Math.round(
				(
					(parseInt(bg[0]) * 299) + 
					(parseInt(bg[1]) * 587) + 
					(parseInt(bg[2]) * 114)
				) /1000
			      );
            
            if( o > 125 ) {
                $( v ).css( 'color', 'black' );
            }else{
                $( v ).css( 'color', 'white' );
            }

        });
   
    };

})( jQuery );   







