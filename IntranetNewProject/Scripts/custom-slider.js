

        jQuery(document).ready(function ($) {
            var options = {
                $AutoPlay: true,                
                $AutoPlaySteps: 1,                                  
                $Idle: 5000,                            
                $PauseOnHover: 1,                                   

                $ArrowKeyNavigation: true,   			            
                $SlideEasing: $JssorEasing$.$EaseOutQuint,          
                $SlideDuration: 800,                                
                $MinDragOffsetToSlide: 20,                          
                                          
                                            
                $SlideSpacing: 0, 					               
                $Cols: 1,                                  
                $ParkingPosition: 0,                                
                $UISearchMode: 1,                                   
                $PlayOrientation: 1,                                
                $DragOrientation: 1,                                

                $ArrowNavigatorOptions: {                           
                    $Class: $JssorArrowNavigator$,                  
                    $ChanceToShow: 2,                               
                    $AutoCenter: 2,                                
                    $Steps: 1,                                      
                    $Scale: false                                   
                },

                $BulletNavigatorOptions: {                                
                    $Class: $JssorBulletNavigator$,                       
                    $ChanceToShow: 2,                               
                    $AutoCenter: 1,                                 
                    $Steps: 1,                                     
                    $Rows: 1,                                      
                    $SpacingX: 12,                                   
                    $SpacingY: 4,                                   
                    $Orientation: 1,                                
                    $Scale: false                                   
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);

            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth) {
                    jssor_slider1.$ScaleWidth(parentWidth);
                }
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        });
