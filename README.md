#### VerizonApprover2016 / 18.15.0 CT / 1.5.0 SPA Release (0316)
###### Created: 4/26/16
###### Last Updated: 6/17/16

======== 

##### Developers

Four51: Jen R.

======== 

##### Github URL 
* //github.com/Four51Repositories/VerizonApprover2016

======== 

##### Notes
* The order date will be the date approved, not the date created

========

### Images
`css/images/custom/` 
* css/images/custom/background.jpg
* css/images/logo.png

========

### Fonts
`css/fonts` 
* NHaasGroteskDSPro-55Rg.otf
* NHaasGroteskDSPro-75Bd.otf
* NHaasGroteskTXPro-55Rg.otf
* NHaasGroteskTXPro-75Bd.otf

======== 

### OrderCloud Custom Solutions


###### Back To Top
`lib/oc/backToTop.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Back To Top
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Back%20To%20Top`

========

###### Hamburger Navigation
`lib/oc/hamburgerNavigation.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Hamburger Navigation Subcategories
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Hamburger%20Navigation%20Subcategories`

========

###### Fixed Footer
`lib/oc/fixedFooter.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Fixed Footer
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Fixed%20Footer`

========

###### Security Modal
`lib/oc/securityModal.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Security Modal
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Security%20Modal`

========

###### Terms Modal
`lib/oc/termsModal.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Terms Modal
`https://github.com/Four51Repositories/CustomSolutions/tree/dev/Terms%20Modal`

========

##### Custom Views

`partials/controls/dashboard.html`
* carried over from Verizon app / nav lives here 


`js/controllers/approvals/orderApprovalLineItemViewCtrl.js` [ not in use / archive only ] 

`js/controllers/approvals/orderApprovalSearchCtrl.js` 
* add scope.changeStep for after an order is approved to return to the list / line 90

`js/controllers/approvals/orderApprovalViewCtrl.js` [ not in use / archive only ] 

`partials/Approvals/approvalListView.html` 
* lists orders to be approved

`partials/Approvals/approvalOrderLineItemView.html`


`partials/Approvals/approvalOrderView.html` 
* order view when order is selected

`partials/Approvals/approvalView.html` 
* wrapper for approval list and approval order views

========

##### Modified
###### js
`js/app.js`
* Custom Solutions module injection / lines 5-6

`js/routing.js` 
* changing the default routing to orders - block other view [ only login, admin, orders ]  / lines 50-56

`js/controllers/approvalInputCtrl.js` 
* inject $location for editOrder / lines 1-2
* add $scope.editOrder / lines 40-45

`js/controllers/cartCtrl.js` 
* comment out continue shopping / lines 25-32
* change default path from catalog to orders / line 43

`js/controllers/checkOutViewCtrl.js` 
* change default path from catalog to orders / lines 13, 33, 93, 117
* add broadcast for approval complete / lines 34-35
* comment out continue shopping / lines 76-81

`js/controllers/Four51Ctrl.js` 
* set viewToggle to 0 / lines 8-9

`js/controllers/loginCtrl.js` 
* change default path from catalog to orders after pw reset / line 29
* login bug fixes (specific to approver app) / lines 48-51

`js/directives/approval.js` 
* pass order in scope for edit orders / lines 4-6
* login bug fixes (specific to approver app) / lines 48-51

`js/services/orderSearchService.js` 
* COMTOOLS-243 concatenate order from user First and Last / lines 31-34


##### html
`index.html` 
* Fixed Footer / line 59
* Back To Top / line 61
* Custom Solution Modules / lines 90-94
* adding custom js files / lines 139-142
* Comment out tree for Hamburger Nav module / line 190
* Comment out orderbuttons for Fixed Footer module / 215

`partials/controls/approvalInput.html`
* reinstate edit button / lines 15-18
* pass order in editOrder / line 17

`partials/controls/cartButtons.html`
* change button width / lines 2-15

`partials/controls/checkoutButtons.html`
* change button width / lines 2-15

`partials/controls/dateRange.html`
* remove inline styles / lines 5, 21

`partials/controls/login.html`
* remove ng-show on all labels
* remove inline background image / line 2
* change btn-info to btn-default / lines 51, 62

`partials/controls/nav.html`
* include partials/controls/dashboard.html  / line 1
* custom nav / lines 3-23
* commented out default nav / lines 25-134

`partials/controls/orderShipping.html`
* add in && item.ShipAddressID / line 102

`partials/controls/orderSummary.html`
* checkout item summary / lines 12-37

`partials/checkOutView.html`
* orderbuttons (desktop) / lines 5-8
* move orderapprovals above orderdetails / line 12
* remove class navbar-fixed-bottom / line 17
* orderbuttons (mobile) / lines 60-62

