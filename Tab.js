       function Tab(obj){
		   	
		   	       this.tab=obj.tab
		           this.box=obj.box
		   	       this.tab.eq(0).addClass("hover")
		   	       this.auto=obj.auto||false
		   	       this.time=obj.time||1000
		    		      
		   		}      
		   
		   Tab.prototype.run=function(index){
		   	       
		   	       var that=this
		         this.tab.each(function(index){
		           	
			           $(this).click(function(){
			            
		           	     that.box.eq(index).show(500)
    		                               .siblings()
    		                               .hide(500)
		   			
		   			     that.tab.eq(index)
    		                     .addClass("hover")
    	                         .siblings()
    	                         .removeClass("hover")
		           	   
		           })
		           	
		           	
		        })
		   		
		   	
		   		
				if(this.auto){
				   var j=0
					setInterval(function(){
						
						    j++
						if(j>that.tab.length){
						   	
						   	j=0
						   	
						   }
					
						  that.box.eq(j).show(500)
    		                            .siblings()
    		                            .hide(500)
		   		        
		   			     that.tab.eq(j)
    		                     .addClass("hover")
    	                         .siblings()
    	                         .removeClass("hover")
						
						
					},that.time)
					
					
				}
			
		   }

