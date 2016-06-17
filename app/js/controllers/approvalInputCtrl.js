four51.app.controller('ApprovalInputCtrl', ['$scope', '$rootScope', '$location', 'Order',
	function ($scope, $rootScope, $location, Order) {

		$scope.approveOrder = function() {

			$scope.loadingIndicator = true;
			$scope.order.ApprovalComment = $scope.ApprovalComment;

			Order.approve($scope.order,
				function(data) {
					$scope.order = data;
					$scope.loadingIndicator = false;
					$rootScope.$broadcast('event:approvalComplete', 'approve');
				},
				function(ex) {
					$scope.loadingIndicator = false;
					$scope.error = ex.Detail;
				}
			);
		};

		$scope.declineOrder = function() {

			$scope.loadingIndicator = true;
			$scope.order.ApprovalComment = $scope.ApprovalComment;

			Order.decline($scope.order,
				function(data) {
					$scope.order = data;
					$scope.loadingIndicator = false;
					$rootScope.$broadcast('event:approvalComplete', 'decline');
				},
				function(ex) {
					$scope.loadingIndicator = false;
					$scope.error = "An error occurred while processing.";
				}
			);
		};

		$scope.editOrder = function(order) {
			$scope.order = order;
			if ($scope.order) {
				$location.path('cart/' + $scope.order.ID);
			}
		};

		$scope.commentToggle = false;
		$scope.toggleComments = function(){
			$scope.commentToggle = !$scope.commentToggle;
		};

		$scope.$on('event:changeStep', function(){
			$scope.commentToggle = false;
		});
	}]);