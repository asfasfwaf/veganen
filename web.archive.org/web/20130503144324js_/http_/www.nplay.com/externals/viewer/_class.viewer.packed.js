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

var viewer=new Class({mode:'alpha',sizes:{w:1000,h:600},fxOptions:{duration:500},interval:2000,initialize:function(a,b){if(b)for(var o in b)this[o]=b[o];if(this.buttons){this.buttons.previous.addEvent('click',this.previous.bind(this,[true]));this.buttons.next.addEvent('click',this.next.bind(this,[true]))}this.__current=0;this.__previous=null;this.items=a.setStyle('display','none');this.items[this.__current].setStyle('display','block');this.disabled=false;this.attrs={left:['left',-this.sizes.w,0,'px'],top:['top',-this.sizes.h,0,'px'],right:['left',this.sizes.w,0,'px'],bottom:['top',this.sizes.h,0,'px'],alpha:['opacity',0,1,'']};this.rand=this.mode=='rand';this.sequence=typeof(this.mode)=='object'?this.mode:false;this.curseq=0;this.timer=null},walk:function(n,b){if(this.__current!==n&&!this.disabled){this.disabled=true;if(b){this.stop()}if(this.rand){this.mode=this.modes.getRandom()}else if(this.sequence){this.mode=this.sequence[this.curseq];this.curseq+=this.curseq+1<this.sequence.length?1:-this.curseq}this.__previous=this.__current;this.__current=n;var a=this.attrs[this.mode].associate(['p','f','t','u']);for(var i=0;i<this.items.length;i++){if(this.__current===i){this.items[i].setStyles($extend({'display':'block','z-index':'2'},JSON.decode('{"'+a.p+'":"'+a.f+a.u+'"}')))}else if(this.__previous===i){this.items[i].setStyles({'z-index':'1'})}else{this.items[i].setStyles({'display':'none','z-index':'0'})}}this.items[n].set('tween',$merge(this.fxOptions,{onComplete:this.onComplete.bind(this)})).tween(a.p,a.f,a.t)}},play:function(a){this.stop();if(!a){this.next()}this.timer=this.next.periodical(this.interval,this,[false])},stop:function(){$clear(this.timer)},next:function(a){this.walk(this.__current+1<this.items.length?this.__current+1:0,a)},previous:function(a){this.walk(this.__current>0?this.__current-1:this.items.length-1,a)},onComplete:function(){this.disabled=false;this.items[this.__previous].setStyle('display','none');if(this.onWalk)this.onWalk(this.__current)}});

}
/*
     FILE ARCHIVED ON 14:43:24 May 03, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:42:26 Jan 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.667
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.014
  esindex: 0.014
  cdx.remote: 28.893
  LoadShardBlock: 334.147 (3)
  PetaboxLoader3.datanode: 310.968 (4)
  PetaboxLoader3.resolve: 134.153 (2)
  load_resource: 240.535
*/