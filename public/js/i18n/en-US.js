(function(){window.i18n={};var MessageFormat={locale:{}};MessageFormat.locale.en = function ( n ) {
  if ( n === 1 ) {
    return "one";
  }
  return "other";
};
;window.i18n['example']={};;window.i18n['example']['showingProducts']=function(d){
var r = "";
r += "Showing ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "Product";
return r;
},
"other" : function(d){
var r = "";
r += "Products";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".";
return r;
};window.i18n['example']['viewResults']=function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"zero" : function(d){
var r = "";
r += "No more results";
return r;
},
"one" : function(d){
var r = "";
r += "1 more result";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " more results";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
return r;
};window.i18n['example']['questionMark']=function(d){
var r = "";
r += "?";
return r;
};window.i18n['example']['hideMessages']=function(d){
var r = "";
r += "Hide ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "this message";
return r;
},
"other" : function(d){
var r = "";
r += "these messages";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".";
return r;
};window.i18n['example']['charactersRemaining']=function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "1 character";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " characters";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " remaining.";
return r;
};window.i18n['example']['cartProducts']=function(d){
var r = "";
r += "You have ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "<strong>1</strong> product";
return r;
},
"other" : function(d){
var r = "";
r += "<strong>" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + "</strong> products";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " in your cart.";
return r;
};window.i18n['example']['reviewLimit']=function(d){
var r = "";
r += "You are only allowed to post ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM_REVIEWS";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "1 product review";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " product reviews";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " every ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM_LIMIT_DURATION";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "1 day";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " days";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".";
return r;
};window.i18n['example']['wishlistProducts']=function(d){
var r = "";
r += "Your wishlist contains ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM_PRODUCTS";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "1 product";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " products in ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "NUM_CATEGORIES";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"one" : function(d){
var r = "";
r += "1 category";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " categories";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["en"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".";
return r;
};window.i18n['example']['otherCarts']=function(d){
var r = "";
r += "You ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM";
var k_1=d[lastkey_1];
var off_0 = 1;
var pf_0 = { 
"zero" : function(d){
var r = "";
r += "have added this to your cart";
return r;
},
"one" : function(d){
var r = "";
r += "and one other person have added this to their cart";
return r;
},
"other" : function(d){
var r = "";
r += "and " + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " others have added this to their carts";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".";
return r;
};window.i18n['example']['aeroPress6']=function(d){
var r = "";
r += "Mix the water and coffee with the stirrer for about ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "NUM";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "1 second";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " seconds";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".";
return r;
}})();