// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

sc_require('mixins/_layout_income_statement_detail');
sc_require('mixins/layout_financial_statement');
sc_require('model/ledger_account');

/**
  @class

  @extends XM.Record
*/
XM.LayoutIncomeStatementDetail = XT.Record.extend(XM._LayoutIncomeStatementDetail, XM.LayoutFinancialStatement,
  /** @scope XM.LayoutIncomeStatementDetail.prototype */ {

  // .................................................
  // CALCULATED PROPERTIES
  //

  /**
    TODO: move to XM.SubAccountType as a function 
          mixin

  XM.SubAccountType.getTypes = function() {
    if(!this._subAccountTypes) {
      var qry = SC.Query.local(XM.SubAccountType),
          store = this.get('store');

      this._subAccountTypes = store.find(qry);
    }
    return this._subAccountTypes;
  }

  */

  filteredSubAccounts: function() {
    var subAccountTypes = XM.SubAccountType.getTypes(),
        accountType = record.get('accountType'),
        ret;

    ret = function() {
      if(accountType) {
        return subAccountTypes.filterProperty('accountType', accountType);
      } else {
        return subAccountTypes;
      }
    }

    return ret;
  }.property('accountType').cacheable(),

  //..................................................
  // METHODS
  //

  //..................................................
  // OBSERVERS
  //

});
