var tpj=jQuery;							
					var revapi8;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_8_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_8_1");
						}else{
							revapi8 = tpj("#rev_slider_8_1").show().revolution({
								sliderType:"standard",
								jsFileLocation:"revolution/js/",
								sliderLayout:"auto",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
									keyboardNavigation:"on",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									onHoverStop:"off",
									touch:{
										touchenabled:"on",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
									,
									arrows: {
										style:"gyges",
										enable:true,
										hide_onmobile:false,
										hide_onleave:false,
										tmp:'',
										left: {
											h_align:"right",
											v_align:"bottom",
											h_offset:40,
											v_offset:0
										},
										right: {
											h_align:"right",
											v_align:"bottom",
											h_offset:0,
											v_offset:0
										}
									}
									,
									tabs: {
										style:"ares",
										enable:true,
										width:350,
										height:80,
										min_width:350,
										wrapper_padding:0,
										wrapper_color:"#f5f5f5",
										wrapper_opacity:"1",
										tmp:'<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{param2}}</span></div><div class="tp-tab-image"></div>',
										visibleAmount: 10,
										hide_onmobile: true,
										hide_under:776,
										hide_onleave:false,
										hide_delay:200,
										direction:"vertical",
										span:true,
										position:"outer-left",
										space:0,
										h_align:"left",
										v_align:"top",
										h_offset:0,
										v_offset:0
									}
								},
								gridwidth:800,
								gridheight:640,
								lazyType:"single",
								shadow:0,
								spinner:"spinner1",
								stopLoop:"on",
								stopAfterLoops:0,
								stopAtSlide:1,
								shuffle:"off",
								autoHeight:"off",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
						}
					});	/*ready*/