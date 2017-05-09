
angular.module("app",["ng","ui.bootstrap","ngRoute","ngAnimate","ngSanitize"])

	.config(function($routeProvider){
		$routeProvider
			/* 路由配置 */
			.when('/farm_index',{templateUrl:"page/farm_index.html",controller:"indexCtrl"})
			.when('/all_fruit_tree',{templateUrl:"page/all_fruit_tree.html",controller:"fruit_treeCtrl"})
			.when('/all_fruit',{templateUrl:"page/all_fruit.html",controller:"fruitCtrl"})
			.when('/apple',{templateUrl:"page/apple.html",controller:"appleCtrl"})

			.when('/apple/:user',{templateUrl:"page/apple.html",controller:"appleCtrl"})


			.when('/my_fruit',{templateUrl:"page/my_fruit.html",controller:"my_fruitCtrl"})
			.when('/my_fruit_detail',{templateUrl:"page/my_fruit_detail.html",controller:"my_fruit_detailCtrl"})
			.when('/verify_harvest',{templateUrl:"page/verify_harvest.html",controller:"verify_harvestCtrl"})
			.when('/entrust',{templateUrl:"page/entrust.html",controller:"entrustCtrl"})
			.when('/shopping_cart',{templateUrl:"page/shopping_cart.html",controller:"shopping_cartCtrl"})
			.when('/my_center',{templateUrl:"page/my_center.html",controller:"my_centerCtrl"})
			.when('/my_center_set',{templateUrl:"page/my_center/my_center_set.html",controller:"my_center_setCtrl"})
			.when('/my_order',{templateUrl:"page/my_center/my_order.html",controller:"my_orderCtrl"})
			.when('/my_order_detail',{templateUrl:"page/my_center/my_order_detail.html",controller:"my_order_detailCtrl"})
			.when('/balances',{templateUrl:"page/my_center/balances.html",controller:"balancesCtrl"})
			.when('/username',{templateUrl:"page/my_center/username.html",controller:"usernameCtrl"})
			.when('/gender',{templateUrl:"page/my_center/gender.html",controller:"genderCtrl"})
			.when('/phone_num',{templateUrl:"page/my_center/phone_num.html",controller:"phone_numCtrl"})
			.when('/mail',{templateUrl:"page/my_center/mail.html",controller:"mailCtrl"})
			.when('/setPassword',{templateUrl:"page/my_center/setPassword.html",controller:"setPasswordCtrl"})
			.when('/setAddress',{templateUrl:"page/my_center/setAddress.html",controller:"setAddressCtrl"})
			.when('/addAddress',{templateUrl:"page/my_center/addAddress.html",controller:"addAddressCtrl"})
			.when('/my_coupon',{templateUrl:"page/my_center/my_coupon.html",controller:"my_couponCtrl"})
			.when('/trace',{templateUrl:"page/my_center/trace.html",controller:"traceCtrl"})
			.when('/cus_service',{templateUrl:"page/my_center/cus_service.html",controller:"cus_serviceCtrl"})
			.when('/about_us',{templateUrl:"page/my_center/about_us.html",controller:"about_usCtrl"})
			.when('/balances_deposit',{templateUrl:"page/my_center/balances_deposit.html",controller:"balances_depositCtrl"})
			.when('/farm_belt',{templateUrl:"page/farm_belt.html",controller:"farm_beltCtrl"})

			.when('/farm_belt/:user',{templateUrl:'page/farm_belt.html',controller:'farm_beltCtrl'})


			.when('/fruit_tree_list',{templateUrl:"page/fruit_tree_list.html",controller:"fruit_tree_listCtrl"})
			.when('/fruit_tree_detail',{templateUrl:"page/fruit_tree_detail.html",controller:"fruit_tree_detailCtrl"})
			.when('/record',{templateUrl:"page/record.html",controller:"recordCtrl"})
			.when('/buy_now',{templateUrl:"page/buy_now.html",controller:"buy_nowCtrl"})
			.when('/prd_detail',{templateUrl:"page/prd_detail.html",controller:"prd_detailCtrl"})
			.when('/payment',{templateUrl:"page/payment.html",controller:"paymentCtrl"})
			.when('/commodity_details',{templateUrl:"page/commodity_details.html",controller:"commodity_detailsCtrl"})
			.when('/give_away',{templateUrl:"page/give_away.html",controller:"give_awayCtrl"})
			.when('/renew',{templateUrl:"page/renew.html",controller:"renewCtrl"})
			.when('/recharge',{templateUrl:"page/my_center/recharge.html",controller:"rechargeCtrl"})
			.when('/income',{templateUrl:"page/my_center/income.html",controller:"incomeCtrl"})
			.when('/apply_for',{templateUrl:"page/my_center/apply_for.html",controller:"apply_forCtrl"})
			.when('/select_header',{templateUrl:"page/my_center/select_header.html",controller:"select_headerCtrl"})
			

			.otherwise({redirectTo:'/farm_index'})
	})
	//首页
	.controller('indexCtrl',function($scope,$http,$location){
		$http.get("data/menu.json").then(function(response){
	
			$scope.menuNames=response.data.result.menuList;
		 	$scope.farmList=response.data.result.recomTree;
		 	$scope.fruitList=response.data.result.hotFruit;
		})

		$scope.toFarm = function ($event){
			var addreUrl=$event.target.getAttribute("alt");
			$location.path('/farm_belt/'+addreUrl);
		}

		$scope.toFruit = function ($event,value){
			
			$location.path('/apple/'+value);
		}

	    $scope.title = "开心果园";
	})

	//所有果树
	.controller('fruit_treeCtrl',function($scope,$http){
		 $http.get("data/all_fruit_tree.json").then(function(response){
		 
		 	$scope.fruitItem=response.data.result.allFruitTree;
		 });

		$scope.focusIndex=0;
		$scope.isFocus=function(index){
			$scope.focusIndex=index;
			if(index==4){
				if($(".classify").css("display")=='none'){
					$(".classify").show();
				}else{
					$(".classify").hide()
				}
			}else{
				$(".classify").hide();
			}
		};
		$scope.isShow=false;
		$scope.showSearch=function(){
			$scope.isShow=!$scope.isShow;
		};


	    $scope.title = "所有果树";
	})
	
	//所有产品
	.controller('fruitCtrl',function($scope,$http){
		 $http.get("data/menu.json").then(function(response){
		 	console.log(response);
		 	// $scope.fruitItem=response.data.result.allFruitTree;
		 	$scope.fruitList=response.data.result.hotFruit;
		 })

		$scope.focusIndex=0;
		$scope.isFocus=function(index){
			$scope.focusIndex=index;
			if(index==4){
				if($(".classify").css("display")=='none'){
					$(".classify").css("display","block")
				}else{
					$(".classify").css("display","none")
				}
			}else{
				$(".classify").css("display","none");
			}
		};

		$scope.isShow=false;
		$scope.showSearch=function(){
			$scope.isShow=!$scope.isShow;
		};
	})

	//苹果
	.controller('appleCtrl',function($scope,$http,$routeParams){
		 
		//获取url中传递过来的参数，保存在模型变量中，用于页面绑定显示
		$scope.fruitRoute=$routeParams.user;

		if($scope.fruitRoute=="苹果"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="梨"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="葡萄"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="枣"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="核桃"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="樱桃"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="橘子"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="荔枝"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="石榴"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}else if($scope.fruitRoute=="哈密瓜"){
			$http.get("data/menu.json").then(function(response){
			 	$scope.fruitList=response.data.result.hotFruit;
			})
		}
	})

	//我的果园
	.controller('my_fruitCtrl',function($scope,$http){
		 $http.get("data/all_fruit_tree.json").then(function(response){
		 	console.log(response);
		 	$scope.fruitItem=response.data.result.allFruitTree;
		 })

		
	})

	//我的果园详情
	.controller('my_fruit_detailCtrl',function($scope,$http){
		 
	})

	//确认收获
	.controller('verify_harvestCtrl',function($scope,$http){
		 
	})

	//委托转卖
	.controller('entrustCtrl',function($scope,$http){
		 
	})

	//购物车
	.controller('shopping_cartCtrl',function($scope,$http){

		$http.get("data/gwc.json").then(function(response){
	 		console.log(response);
	 		$scope.prdItem=response.data.result.productList;
		})


		//总价格的计算
		$scope.allPrices=function(){
			$scope.allprice=0;
			angular.forEach($scope.prdItem,function(data,index,array){
				data.fruitPrice=data.fruitNum*data.fruitOnePrice;
				if(data.fruitBol==true){
					$scope.allprice+=parseInt(data.fruitPrice);
				}
			})
			return $scope.allprice;
		};



        // 移除一项  
        $scope.remove=function(index){  
            $scope.prdItem.splice(index,1);
            $scope.hide();  
        }; 
        $scope.show=function(){
        	$(".mask").show();
        }
        $scope.hide=function(){
        	$(".mask").hide();
        }
	})
		/* 加 */
		.directive('myAdds',function(){
			return {
				link:function($scope, element, attr){
					element.click(function(){
						var This=this;
						angular.forEach($scope.prdItem,function(data,index,array){
							if(attr.items==data.fruitItem){
								console.log(data.fruitNum);
								data.fruitNum=parseInt(data.fruitNum)+1;
								$scope.allPrices();
								$scope.$apply() //刷新视图
							}	 
						});
					});
				} 
			}
		})

		/* 减 */
		.directive('myMinus',function(){
			return {
				link:function($scope, element, attr){
					element.click(function(){
						var This=this;
						angular.forEach($scope.prdItem,function(data,index,array){
						 
							if(attr.items==data.fruitItem){
							 
								if(data.fruitNum<=1){
								 	$scope.show();  
									$scope.allPrices();
									$scope.$apply();			 
								}else{
									data.fruitNum=parseInt(data.fruitNum)-1;
								};
								 
								$scope.allPrices();
								$scope.$apply();
							}
						});
					});
				} 
			}
		})

		/* 全选或者取消全选 */
		.directive('allOrcan',function(){
			return function($scope, element, attr){
				
				element.click(function(){
					$scope.checkAll = !$scope.checkAll;
					angular.forEach($scope.prdItem,function(data){
						data.fruitBol = $scope.checkAll;

					})
					$scope.allPrices();
					$scope.$apply();

				})
			}
		})

		/* 单选 */
		.directive('oneCheck',function(){
			return function($scope, element, attr){
				element.click(function(){
					var This=this;
					angular.forEach($scope.prdItem,function(data){
						
						if(attr.items==data.fruitItem){
							$scope.isChecked=data.fruitBol=!data.fruitBol;
						}
					})
					$scope.allPrices();
					$scope.$apply();
				});
			}
		})


	//个人中心
	.controller('my_centerCtrl',function($scope){
		$scope.focusIndex=0;
		$scope.isFocus=function(index){
			$scope.focusIndex=index;
		}
	})

	//个人中心设置
	.controller('my_center_setCtrl',function($scope){
		
	})
		

	//我的订单
	.controller('my_orderCtrl',function($scope,$http){
		$scope.focusIndex=0;
		$scope.isFocus=function(index){
			$scope.focusIndex=index;
		}

		$http.get("data/my_order.json").then(function(response){
		 	// console.log(response);
		 	$scope.orderItem=response.data.result.orderList;
		 })
	})


	//我的订单详情
	.controller('my_order_detailCtrl',function($scope,$http){
		
	})


	//我的余额
	.controller('balancesCtrl',function($scope,$http){
		
	})
		
	//提现申请
	.controller('balances_depositCtrl',function($scope,$http){
		
	})

	//某某农业区
	.controller('farm_beltCtrl',function($scope,$http,$routeParams){

		//获取url中传递过来的参数，保存在模型变量中，用于页面绑定显示
		if($routeParams.user=="Xibei"){
			$scope.farmRoute="西北农业区"
		}else if($routeParams.user=="Dongbei"){
			$scope.farmRoute="东北农业区"
		}else if($routeParams.user=="Huabei"){
			$scope.farmRoute="华北农业区"
		}else if($routeParams.user=="Huazhong"){
			$scope.farmRoute="华中农业区"
		}else if($routeParams.user=="Huadong"){
			$scope.farmRoute="华东农业区"
		}else if($routeParams.user=="Xinan"){
			$scope.farmRoute="西南农业区"
		}else if($routeParams.user=="Huanan"){
			$scope.farmRoute="华南农业区"
		}

		$scope.isShow=false;
		$scope.showSearch=function(){
			$scope.isShow=!$scope.isShow;
		};

	})
		
	//某某合作社
	.controller('fruit_tree_listCtrl',function($scope,$http){
		
	})

	//果树详情
	.controller('fruit_tree_detailCtrl',function($scope,$http){
		
	})

	//成长记录
	.controller('recordCtrl',function($scope,$http){
		
	})

	//订单确认
	.controller('buy_nowCtrl',function($scope,$http){
		
	})

	//产品详情
	.controller('prd_detailCtrl',function($scope,$http){
		
		$scope.myInterval = 5000;  //轮播时长
	    $scope.noWrapSlides = false;  //
	    var slides = $scope.slides = [
	    	{ image: 'img/images/product_13.png' },
	    	{ image: 'img/images/product_14.png' },
	    	{ image: 'img/images/product_17.png' },
	    	{ image: 'img/images/product_18.png' }
	    ];  
	    var newWidth = 600 + slides.length + 1; 

	    $scope.isShow=false;
	    $scope.showChoose=function(){
	    	$scope.isShow=!$scope.isShow;
	    }
	    $scope.hideChoose=function(){
	    	$scope.isShow=false;
	    }

	})

	//用户名
	.controller('usernameCtrl',function($scope,$http){
		
	})

	//性别
	.controller('genderCtrl',function($scope,$http){
		
	})


	//手机号
	.controller('phone_numCtrl',function($scope,$http){
		
	})


	//邮箱
	.controller('mailCtrl',function($scope,$http){
		
	})


	//修改密码
	.controller('setPasswordCtrl',function($scope,$http){
		
	})


	//收获地址
	.controller('setAddressCtrl',function($scope,$location){
		$scope.toAddr = function (){
			$location.path('/addAddress');
		}
	})


	//添加地址
	.controller('addAddressCtrl',function($scope,$http){

		$http.get("data/addr_data.json").then(function(response){

			$scope.data = response.data;

			$scope.choose1 = function(a){
				$scope.towns = response.data[a].city;
				console.log($scope.towns);

				$scope.choose2 = function(b){
					$scope.areaName = ($scope.towns)[b].area;
					console.log($scope.areaName);
				}
				
			}
			// console.log(response.data[0].city[0].area)
			// console.log(JSON.stringify(response.data[6]))

		 	/*angular.forEach(response.data,function(province,index){
		 		var proName = province.name;
		 		console.log(proName);
		 		// console.log((province.city)[0].area);
		 		angular.forEach(province.city,function(town,index){
		 			console.log(town.name);
		 			angular.forEach(town.area,function(area,index){
		 				console.log(area);
		 			})
		 		})
		 	})*/
		})


	})


	//我的优惠劵
	.controller('my_couponCtrl',function($scope,$http){
		$scope.focusIndex=0;
		$scope.isFocus=function(index){
			$scope.focusIndex=index;
		}
	})


	//追踪
	.controller('traceCtrl',function($scope,$http){
		
	})


	//客服
	.controller('cus_serviceCtrl',function($scope,$http){
		
	})


	//关于
	.controller('about_usCtrl',function($scope,$http){
		
	})

	//支付成功
	.controller('paymentCtrl',function($scope,$http){
		
	})

	//商品详情
	.controller('commodity_detailsCtrl',function($scope,$http){
		
	})

	//转赠
	.controller('give_awayCtrl',function($scope,$http){
		
	})


	//续费
	.controller('renewCtrl',function($scope,$http){
		
	})

	//充值
	.controller('rechargeCtrl',function($scope){
		
	})


	//收入明细
	.controller('incomeCtrl',function($scope){
		
	})


	//申请记录
	.controller('apply_forCtrl',function($scope){
		
	})


	//更换头像
	.controller('select_headerCtrl',function($scope){
		
	})
		
	.controller('parentCtrl', function ($scope, $location) {
	    $scope.jump = function (url) {
	        $location.path(url);
	    }
	})