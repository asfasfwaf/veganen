var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


/* $Id: core.js 9572 2011-12-27 23:41:06Z john $ */



(function() { // START NAMESPACE
var $ = 'id' in document ? document.id : window.$;



en4.user = {

  viewer : {
    type : false,
    id : false
  },

  attachEmailTaken : function(element, callback)
  {
    var bind = this;
    element.addEvent('blur', function(){
      bind.checkEmailTaken(element.value, callback);
    });

    /*
    var lastElementValue = element.value;
    (function(){
      if( element.value != lastElementValue )
      {

        lastElementValue = element.value;
      }
    }).periodical(500, this);
    */
  },

  attachUsernameTaken : function(element, callback)
  {
    var bind = this;
    element.addEvent('blur', function(){
      bind.checkUsernameTaken(element.value, callback);
    });
    
    /*
    var lastElementValue = element.value;
    (function(){
      if( element.value != lastElementValue )
      {
        bind.checkUsernameTaken(element.value, callback);
        lastElementValue = element.value;
      }
    }).periodical(500, this);
    */
  },

  checkEmailTaken : function(email, callback)
  {
    en4.core.request.send(new Request.JSON({
      url : en4.core.baseUrl + 'user/signup/taken',
      data : {
        format : 'json',
        email : email
      },
      onSuccess : function(responseObject)
      {
        if( $type(responseObject.taken) ){
          callback(responseObject.taken);
        }
      }
    }));
    
    return this;
  },

  checkUsernameTaken : function(username)
  {
    en4.core.request.send(new Request.JSON({
      url : en4.core.baseUrl + 'user/signup/taken',
      data : {
        format : 'json',
        username : username
      },
      onSuccess : function(responseObject)
      {
        if( $type(responseObject.taken) ){
          callback(responseObject.taken);
        }
      }
    }));

    return this;
  },

  clearStatus : function() {
    var request = new Request.JSON({
      url : en4.core.baseUrl + 'user/edit/clear-status',
      method : 'post',
      data : {
        format : 'json'
      }
    });
    request.send();
    if( $('user_profile_status_container') ) {
      $('user_profile_status_container').empty();
    }
    return request;
  }
  
};

en4.user.friends = {

  refreshLists : function(){
    
  },
  
  addToList : function(list_id, user_id){
    var request = new Request.JSON({
      url : en4.core.baseUrl + 'user/friends/list-add',
      data : {
        format : 'json',
        friend_id : user_id,
        list_id : list_id
      }
    });
    request.send();
    return request;

    /*
    $('profile_friends_lists_menu_' + user_id).style.display = 'none';

    var bind = this;
    en4.core.request.send(new Request.JSON({
      url : en4.core.baseUrl + 'user/friends/list-add',
      data : {
        format : 'json',
        friend_id : user_id,
        list_id : list_id
      }
    }), {
      'element' : $('user_friend_' + user_id)
    });

    return this;
    */
  },

  removeFromList : function(list_id, user_id){
    var request = new Request.JSON({
      url : en4.core.baseUrl + 'user/friends/list-remove',
      data : {
        format : 'json',
        friend_id : user_id,
        list_id : list_id
      }
    });
    request.send();
    return request;
    /*
    var bind = this;
    en4.core.request.send(new Request.JSON({
      url : en4.core.baseUrl + 'user/friends/list-remove',
      data : {
        format : 'json',
        friend_id : user_id,
        list_id : list_id
      }
    }), {
      'element' : $('user_friend_' + user_id)
    });

    return this;
    */
  },

  createList : function(title, user_id){
    var request = new Request.JSON({
      url : en4.core.baseUrl + 'user/friends/list-create',
      data : {
        format : 'json',
        friend_id : user_id,
        title : title
      }
    });
    request.send();
    return request;

    /*
    $('profile_friends_lists_menu_' + user_id).style.display = 'none';
    var bind = this;
    en4.core.request.send(new Request.JSON({
      url : en4.core.baseUrl + 'user/friends/list-create',
      data : {
        format : 'json',
        friend_id : user_id,
        list_title : title
      }
    }), {
      'element' : $('user_friend_' + user_id)
    });

    return this;
    */
  },

  deleteList : function(list_id){

    var bind = this;
    en4.core.request.send(new Request.JSON({
      url : en4.core.baseUrl + 'user/friends/list-delete',
      data : {
        format : 'json',
        user_id : en4.user.viewer.id,
        list_id : list_id
      }
    }));

    return this;
  },


  showMenu : function(user_id){
    $('profile_friends_lists_menu_' + user_id).style.visibility = 'visible';
    $('friends_lists_menu_input_' + user_id).focus();
    $('friends_lists_menu_input_' + user_id).select();
  },

  hideMenu : function(user_id){
    $('profile_friends_lists_menu_' + user_id).style.visibility = 'hidden';
  },

  clearAddList : function(user_id){
    $('friends_lists_menu_input_' + user_id).value = "";
  }

};



})(); // END NAMESPACE


}
/*
     FILE ARCHIVED ON 18:13:54 May 02, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:42:21 Jan 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.634
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 15.017
  LoadShardBlock: 138.042 (3)
  PetaboxLoader3.datanode: 109.2 (4)
  PetaboxLoader3.resolve: 140.213 (2)
  load_resource: 125.43
*/