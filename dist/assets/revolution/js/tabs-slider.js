var tpj = jQuery;
			
			var revapi204;
			tpj(document).ready(function() {
			    if (tpj("#rev_slider_204_1").revolution == undefined) {
			        revslider_showDoubleJqueryError("#rev_slider_204_1");
			    } else {
			        revapi204 = tpj("#rev_slider_204_1").show().revolution({
			            sliderType: "standard",
			            jsFileLocation:"revolution/js/",
			            sliderLayout:"auto",
			            dottedOverlay: "none",
			            delay: 9000,
			            navigation: {
			                keyboardNavigation: "off",
			                keyboard_direction: "horizontal",
			                mouseScrollNavigation: "off",
			                onHoverStop: "off",
			                touch: {
			                    touchenabled: "on",
			                    swipe_threshold: 75,
			                    swipe_min_touches: 1,
			                    swipe_direction: "horizontal",
			                    drag_block_vertical: false
			                },
			                arrows: {
			                    style: "gyges",
			                    enable: true,
			                    hide_onmobile: false,
			                    hide_onleave: true,
			                    hide_delay: 200,
			                    hide_delay_mobile: 1200,
			                    tmp: '',
			                    left: {
			                        h_align: "left",
			                        v_align: "center",
			                        h_offset: 0,
			                        v_offset: 0
			                    },
			                    right: {
			                        h_align: "right",
			                        v_align: "center",
			                        h_offset: 0,
			                        v_offset: 0
			                    }
			                },
			                thumbnails: {
			                    style: "erinyen",
			                    enable: true,
			                    width: 150,
			                    height: 100,
			                    min_width: 150,
			                    wrapper_padding: 5,
			                    wrapper_color: "transparent",
			                    wrapper_opacity: "1",
			                    tmp: '<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span><span class="tp-thumb-more"></span>',
			                    visibleAmount: 5,
			                    hide_onmobile: true,
			                    hide_under: 800,
			                    hide_onleave: false,
			                    direction: "horizontal",
			                    span: false,
			                    position: "inner",
			                    space: 0,
			                    h_align: "center",
			                    v_align: "bottom",
			                    h_offset: 0,
			                    v_offset: 20
			                }
			            },
			            viewPort: {
			                enable: true,
			                outof: "pause",
			                visible_area: "80%"
			            },
			            responsiveLevels: [1240, 1024, 778, 480],
			            visibilityLevels: [1240, 1024, 778, 480],
			            gridwidth: [1240, 1024, 778, 480],
			            gridheight: [700, 650, 600, 500],
			            lazyType: "none",
			            parallax: {
			                type: "mouse",
			                origo: "slidercenter",
			                speed: 2000,
			                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
			                type: "mouse",
			            },
			            shadow: 0,
			            spinner: "off",
			            stopLoop: "off",
			            stopAfterLoops: -1,
			            stopAtSlide: -1,
			            shuffle: "off",
			            autoHeight: "off",
			            hideThumbsOnMobile: "on",
			            hideSliderAtLimit: 0,
			            hideCaptionAtLimit: 0,
			            hideAllCaptionAtLilmit: 0,
			            debugMode: false,
			            fallbacks: {
			                simplifyAll: "off",
			                nextSlideOnWindowFocus: "off",
			                disableFocusListener: false,
			            }
			        });
			    }
			}); /*ready*/